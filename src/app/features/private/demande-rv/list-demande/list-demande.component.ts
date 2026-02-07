import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemandeListeRvModel, DemandeListResponse, DemandeRvFilterModel } from '../../models/demande.model';
import { MOCK_DEMANDES } from '../../../../mocks/demande.mock';
import { DemandeService } from '../services/demande.service';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../../environments/environment.development';


@Component({
  selector: 'app-list-demande',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './list-demande.component.html',
  styleUrls: ['./list-demande.component.css']
})
export class ListDemandeComponent implements OnInit {
  demandeResponse?:DemandeListResponse ;
  filter:DemandeRvFilterModel={
    specialite:'',
    statut:'En Attente',
    page:1,
    size:environment.Limit,
   
  };

  constructor(private demandeService: DemandeService) {
   
  }
  ngOnInit() : void {
    this.loadDemandes();
}
onFilterStatutChange() {
  this.filter.page = 1;
  this.loadDemandes();
}
private loadDemandes() {
    this.demandeResponse = this.demandeService.getDemandesRV(this.filter);
  }

onFilterSpecialiteChange() {
  this.filter.page = 1;
  this.loadDemandes();
}
goToPage(page: number) {
  if (!this.demandeResponse) return;

  if (page < 1 || page > this.demandeResponse.totalPages) {
    return;
  }

  this.filter.page = page;
  this.loadDemandes();
}

// Ajoute cette fonction dans ton list-demande.component.ts

}