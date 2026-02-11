import { User } from '../core/models/user.model';
import { PatientModel } from '../features/private/models/patient.model';
import { PatientComponent } from '../features/public/patient/patient.component';
export const MOCK_PATIENTS: PatientModel[] = [
   {
    id: 1,
    prenom: 'Jean',
    nom: 'Dupont',  
    dateNaissance: new Date('1980-01-01'),
    sexe: 'M',
    adresse: '123 Rue Principale, Dakar',
    telephone: '+221771234567',
    email: 'jean.dupont@email.com',
    password: 'password123',
    allergies: '',
    antecedents: ''
   },
    {
    id: 2,
    prenom: 'Marie',
    nom: 'Durand',
    dateNaissance: new Date('1990-05-15'),
    sexe: 'F',
    adresse: '456 Avenue des Fleurs, Dakar',
    telephone: '+221771234568',
    email: 'marie.durand@email.com',
    password: 'password456',
    allergies: '',
    antecedents: ''
  },
    {
    id: 3,
    prenom: 'Ali',
    nom: 'Cissé',
    dateNaissance: new Date('1975-09-30'),
    sexe: 'M',
    adresse: '789 Boulevard de la Liberté, Dakar',
    telephone: '+221771234569',
    email: 'ali.cisse@email.com',
    password: 'password789',
    allergies: '',
    antecedents: ''
  }
];