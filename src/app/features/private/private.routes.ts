import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RvComponent } from './rv/rv.component';
import { FormDemandeComponent } from './demande-rv/form-demande/form-demande.component';
import { ListDemandeComponent } from './demande-rv/list-demande/list-demande.component';

export const PRIVATE_ROUTES: Routes = [
  { path: '', redirectTo: 'dash', pathMatch: 'full' },
  { path: 'dash', component: DashboardComponent },
  { path: 'form-demande', component: FormDemandeComponent },
  { path: 'list-demande', component: ListDemandeComponent },
  { path: 'mes-rv', component: RvComponent },
];