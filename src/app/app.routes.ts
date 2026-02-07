import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: 'private', 
    loadComponent: () => import('./features/private/private.component').then(m => m.PrivateComponent),
    loadChildren: () => import('./features/private/private.routes').then(m => m.PRIVATE_ROUTES) 
  },
  { 
    path: 'public', 
    loadComponent: () => import('./features/public/public.component').then(m => m.PublicComponent),
    loadChildren: () => import('./features/public/public.routes').then(m => m.PUBLIC_ROUTES) 
  },
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  { path: '**', redirectTo: 'public' }
];