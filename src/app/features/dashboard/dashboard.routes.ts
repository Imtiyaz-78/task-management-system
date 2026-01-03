import { Routes } from '@angular/router';
import { HomePage } from '../pages/home-page/home-page';
import { Dashboard } from './dashboard/dashboard';
import { SingleSelect } from '../../shared/ui elemets/single-select/single-select';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      { path: '', component: Dashboard }, // default
      { path: 'tasks', component: SingleSelect },
      // future
      // { path: 'team', component: Team },
      // { path: 'reports', component: Reports },
      // { path: 'settings', component: Settings },
    ],
  },
];
