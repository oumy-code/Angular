export enum StatutDemandeModel {
    EnAttente = 'En Attente',
    Acceptee = 'Acceptée',
    Refusee = 'Refusée'
}
export enum SpecialiteModel {
    Cardiologie = 'Cardiologie',
    Dermatologie = 'Dermatologie',
    Neurologie = 'Neurologie',
    Pediatrie = 'Pédiatrie',
    Psychiatrie = 'Psychiatrie',
}



export interface DemandeListeRvModel{
    id: number;
    dateDemande: String;
    statut: StatutDemandeModel;
    heure: string;
    specialite: SpecialiteModel;
}