/*export enum StatutDemandeModel {
    EnAttente = 'En Attente',
    Acceptee = 'Acceptée',
    Refusee = 'Refusée'
}
/*export enum SpecialiteModel {
    Cardiologie = 'Cardiologie',
    Dermatologie = 'Dermatologie',
    Neurologie = 'Neurologie',
    Pediatrie = 'Pédiatrie',
    Psychiatrie = 'Psychiatrie',
}*/
type SpecialiteModel = 'Cardiologie' | 'Dermatologie' | 'Neurologie' | 'Pédiatrie' | 'Psychiatrie'|'';
type StatutDemandeModel = 'En Attente' | 'Acceptée' | 'Refusée';



export interface DemandeListeRvModel{
    id: number;
    dateDemande: String;
    statut: StatutDemandeModel;
    heure: string;
    specialite: SpecialiteModel;
}
export interface DemandeRvFilterModel{
    specialite?: SpecialiteModel|'';
    statut?: StatutDemandeModel;
    page?: number;
    size?: number;
}
export interface DemandeListResponse{
    data: DemandeListeRvModel[];
    totalPages: number;
    currentPage: number;
    totalItems: number;
    pages: number[];
    size: number;
}