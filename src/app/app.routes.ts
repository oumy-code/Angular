import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { RvComponent } from './features/rv/rv.component';
import { FormDemandeComponent } from './features/demande-rv/form-demande/form-demande.component';
import { ListDemandeComponent } from './features/demande-rv/list-demande/list-demande.component';

export const routes: Routes = [
  // redirection par défaut vers dashboard
  { path: '', redirectTo: 'dash', pathMatch: 'full' },

  { path: 'dash', component: DashboardComponent },
  { path: 'form-demande', component: FormDemandeComponent },
  { path: 'list-demande', component: ListDemandeComponent },
  { path: 'mes-rv', component: RvComponent },

  // optionnel : route “catch-all” si l’utilisateur met une URL inconnue
  { path: '**', redirectTo: 'dash' }
];
