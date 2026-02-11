export interface PatientModel {
    id: number;
  prenom: string;
    nom: string;
    dateNaissance: Date;
    sexe: string;
    adresse: string;
    telephone: string;
    email: string;
    password: string;
    allergies: string;
    antecedents: string;
    
}
export type patientRequest= Omit<PatientModel,'id'>;