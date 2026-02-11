import { DemandeListeRvModel } from "../features/private/models/demande.model";

export const MOCK_DEMANDES :DemandeListeRvModel[] = [
    {
        id: 1,
        dateDemande: '2024-06-01',
        heure: '10:00',
        statut: "En Attente",
        specialite: "Cardiologie" 
    },
    {
        id: 2,
        dateDemande: '2024-06-02',
        heure: '14:00',
        statut: "Acceptée",
        specialite: "Dermatologie"
    },
    {
        id: 3,  
        dateDemande: '2024-06-03',
        heure: '09:00',
        statut: "Refusée",
        specialite: "Neurologie"
    },
     {
        id: 4,
        dateDemande: '2024-06-01',
        heure: '16:00',
        statut: "En Attente",
        specialite: "Cardiologie" 
    },
     {
        id: 5,
        dateDemande: '2024-06-01',
        heure: '15:00',
        statut: "En Attente",
        specialite: "Cardiologie" 
    },
        {
        id: 6,
        dateDemande: '2024-06-04',
        heure: '11:00',
        statut: "Acceptée",
        specialite: "Pédiatrie"
    },
];