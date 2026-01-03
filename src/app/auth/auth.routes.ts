import { Routes } from '@angular/router';
import { LoginPage } from './login-page/login-page';

export const authRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
];
