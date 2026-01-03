import { Routes } from '@angular/router';
import { HomePage } from '../pages/home-page/home-page';
// import { Dashboard } from './dashboard/dashboard';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      { path: '', component: HomePage },
      { path: 'dashboard', component: HomePage },
    ],
  },
];
