import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      { path: '', component: Dashboard },
      { path: 'dashboard', component: Dashboard },
    ],
  },
];
