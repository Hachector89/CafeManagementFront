import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },

  {
    path: 'cafe',
    loadComponent: () => import('./layouts/full/full.component').then(m => m.FullComponent),
    children: [
      { path: '', redirectTo: '/cafe/dashboard', pathMatch: 'full' },

      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
      }
    ]
  },

  { path: '**', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) }
];