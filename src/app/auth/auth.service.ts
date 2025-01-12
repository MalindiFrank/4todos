import { Injectable } from '@angular/core';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
  getAdditionalUserInfo,
  Auth,
  AdditionalUserInfo,
} from 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = getAuth();
  private provider: GoogleAuthProvider = new GoogleAuthProvider();

  additionalUserInfo: AdditionalUserInfo | null = null

  constructor() {}

  async loginWithGoogle() {
    try {
      // Sign in with popup
      const result: UserCredential = await signInWithPopup(this.auth, this.provider);

      // Get Google Access Token
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      // Get signed-in user info
      const user = result.user;

      // Optionally, get additional user info
      const additionalUserInfo: AdditionalUserInfo | null = getAdditionalUserInfo(result);

      this.additionalUserInfo = additionalUserInfo
      
      console.log('Access Token:', token);
      console.log('User:', user);
      console.log('UserName:', additionalUserInfo?.profile?.['given_name']);
      console.log('Additional User Info:', additionalUserInfo);

      // Do something with the user data
    } catch (error: unknown) {
      if (error instanceof Error) {
        // Handle Errors
        console.error('Error Code:', (error as any)?.code);
        console.error('Error Message:', (error as any)?.message);
        console.error('Error Email:', (error as any).customData?.email);

        // Firebase custom data and credential
        const firebaseError = error as any; // Type assertion for Firebase-specific error
        const email = firebaseError.customData?.email;
        const credential =
          GoogleAuthProvider.credentialFromError(firebaseError);

        console.error('Email Error:', email);
        console.error('Credential Error:', credential);

        // Handle specific errors if needed
      } else {
        console.log('An unknown error occured: ', error);
      }
    }
  }

  // Login with email and password
  loginWithEmail(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Signup with email and password
  signup(email: string, password: string): Promise<any> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // Sign out user
  logout(): Promise<void> {
    return signOut(this.auth);
  }

  // Check if the user is authenticated
  checkAuthState(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      onAuthStateChanged(this.auth, (user) => {
        observer.next(user !== null); // Emit true if user is logged in, otherwise false
      });
    });
  }
}
