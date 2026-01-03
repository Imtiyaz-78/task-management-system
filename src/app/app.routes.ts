import { Routes } from '@angular/router';
import { LoginPage } from './auth/login-page/login-page';
import { LandingPage } from './features/landing-page/landing-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: LandingPage,
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes),
  },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.routes').then((m) => m.dashboardRoutes),
  },

  // Fallback
  {
    path: '**',
    redirectTo: 'auth/login',
  },
];
