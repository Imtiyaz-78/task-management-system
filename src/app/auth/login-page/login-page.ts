import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LucideAngularModule, Eye, EyeOff, Loader2, CheckSquare } from 'lucide-angular';
// Import your Auth Service and Toast Service here

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, LucideAngularModule],
  templateUrl: './login-page.html',
})
export class LoginPage {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  // private authService = inject(AuthService);

  isLogin = true;
  showPassword = false;
  isLoading = false;

  readonly Eye = Eye;
  readonly EyeOff = EyeOff;
  readonly Loader2 = Loader2;
  readonly CheckSquare = CheckSquare;

  features = [
    'Role-based access control',
    'Real-time collaboration',
    'Advanced analytics & reporting',
  ];

  authForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    name: [''],
  });

  toggleMode() {
    this.isLogin = !this.isLogin;
    const nameControl = this.authForm.get('name');
    if (this.isLogin) {
      nameControl?.clearValidators();
    } else {
      nameControl?.setValidators([Validators.required]);
    }
    nameControl?.updateValueAndValidity();
  }

  async handleSubmit() {
    if (this.authForm.invalid) return;

    this.isLoading = true;
    const { email, password, name } = this.authForm.value;

    try {
      // Logic for calling your auth service
      console.log('Form Submitted', { email, password, name });
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error('Auth error', error);
    } finally {
      this.isLoading = false;
    }
  }
}
