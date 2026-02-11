import { Injectable } from '@angular/core';
import { MOCK_PATIENTS } from '@mocks';
import { patientRequest, PatientModel} from 'src/app/features/private/models/patient.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor() { }

  // Retourne un Observable qui émet le patient créé
  createPatient(patientData: patientRequest): Observable<PatientModel> {
    const newPatient: PatientModel = {
      id: Math.floor(Math.random() * 1000), 
      prenom: patientData.prenom,
      nom: patientData.nom,
      dateNaissance: patientData.dateNaissance,
      sexe: patientData.sexe,
      adresse: patientData.adresse,
      telephone: patientData.telephone,
      email: patientData.email,
      password: patientData.password,
      allergies: patientData.allergies,
      antecedents: patientData.antecedents
    };

    // Ajouter dans le tableau mock
    MOCK_PATIENTS.push(newPatient);
    console.log('Patient ajouté au mock:', newPatient);

    // Retourne le patient sous forme d'Observable
    return of(newPatient);
  }

  // Exemple pour récupérer tous les patients
  getPatients(): Observable<PatientModel[]> {
    return of(MOCK_PATIENTS);
  }
}
