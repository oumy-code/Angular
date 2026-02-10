import { Routes } from '@angular/router';
import { isConnectGuard } from './core/guards/is-connect.guard';

export const routes: Routes = [
  { 
    path: 'private', 
    canActivate: [isConnectGuard],
    canActivateChild: [isConnectGuard],
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