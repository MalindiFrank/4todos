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

  additionalUserInfo: AdditionalUserInfo | null = null;

  constructor() {}

  async loginWithGoogle() {
    try {
      const result: UserCredential = await signInWithPopup(
        this.auth,
        this.provider
      );
      //get access token
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      //additional user info
      const additionalUserInfo: AdditionalUserInfo | null =
        getAdditionalUserInfo(result);

      this.additionalUserInfo = additionalUserInfo;

      //nb- had to do something right here...
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error Code:', (error as any)?.code);
        console.error('Error Message:', (error as any)?.message);
        console.error('Error Email:', (error as any).customData?.email);

        //firebase custom data, credential, checks nje
        const firebaseError = error as any;
        const email = firebaseError.customData?.email;
        const credential =
          GoogleAuthProvider.credentialFromError(firebaseError);

        console.error('Email Error:', email);
        console.error('Credential Error:', credential);

        //other errors I don't know..
      } else {
        console.log('An unknown error occured: ', error);
      }
    }
  }

  //login with email and password
  loginWithEmail(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  //signup with email and password
  signup(email: string, password: string): Promise<any> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout(): Promise<void> {
    return signOut(this.auth);
  }

  //check user is authenticated
  checkAuthState(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      onAuthStateChanged(this.auth, (user) => {
        observer.next(user !== null); // Emit true if user is logged in, otherwise false
      });
    });
  }
}
