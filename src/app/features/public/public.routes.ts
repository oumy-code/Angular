import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';

export const PUBLIC_ROUTES: Routes = [
  { path: '', component: PatientComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-patient', component: PatientComponent },
];