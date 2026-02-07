import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemandeListeRvModel, SpecialiteModel, StatutDemandeModel } from '../../models/demande.model';


@Component({
  selector: 'app-list-demande',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-demande.component.html',
  styleUrls: ['./list-demande.component.css']
})
export class ListDemandeComponent {
  demandes:DemandeListeRvModel[]=[
    {id:1, dateDemande:'2024-06-01', heure:'10:00', statut:StatutDemandeModel.EnAttente,specialite:SpecialiteModel.Cardiologie},
    {id:2, dateDemande:'2024-06-02', heure:'14:00', statut:StatutDemandeModel.Acceptee,specialite:SpecialiteModel.Dermatologie},
    {id:3, dateDemande:'2024-06-03', heure:'09:00', statut:StatutDemandeModel.Refusee,specialite:SpecialiteModel.Neurologie},
  ];
}
