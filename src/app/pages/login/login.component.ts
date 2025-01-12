import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;

  errorMessage: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    //initialize form validation **incomplete
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  //getter for easy access to form controls, **more to note
  get f() {
    return this.loginForm.controls;
  }

  async onLoginWithGoogle() {
    await this.authService
      .loginWithGoogle()
      .then(async () => {
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        this.errorMessage = error.message;
        console.log('Error: ', this.errorMessage);
      });
  }

  //handle and validate form submission
  async onLoginWithEmail() {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password }: any = this.loginForm.value;

    await this.authService
      .loginWithEmail(email, password)
      .then(async () => {
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        this.errorMessage = error.message;
        console.log('Error: ', this.errorMessage);
      });
  }

  //navigate to signup page
  onSignup() {
    this.router.navigate(['/signup']);
  }
}
