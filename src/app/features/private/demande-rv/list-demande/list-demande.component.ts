import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DemandeListResponse, DemandeRvFilterModel, StatutDemandeModel } from '../../models/demande.model';
import { DemandeService } from '../services/demande.service';
import { StatusFilterComponent } from '../../shared/status-filter/status-filter.component';
import { PaginationComponent } from '../../shared/pagination/pagination.component';

@Component({
  selector: 'app-list-demande',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, StatusFilterComponent, PaginationComponent],
  templateUrl: './list-demande.component.html',
  styleUrls: ['./list-demande.component.css']
})
export class ListDemandeComponent implements OnInit {
  demandeResponse?: DemandeListResponse;
  isLoading: boolean = false;
  
  filter: DemandeRvFilterModel = {
    specialite: '',
    statut: 'En Attente',
    page: 1,
    size: 5
  };

  constructor(private demandeService: DemandeService) {}

  ngOnInit(): void {
    this.loadDemandes();
  }

  onFilterStatutChange(statut: StatutDemandeModel | '') {
    this.filter.statut = statut === '' ? undefined : statut;
    this.filter.page = 1;
    this.loadDemandes();
  }

  onFilterSpecialiteChange() {
    this.filter.page = 1;
    this.loadDemandes();
  }

  goToPage(page: number) {
    this.filter.page = page;
    this.loadDemandes();
  }

  private loadDemandes() {
    this.isLoading = true;
    
    this.demandeService.getDemandesRV(this.filter).subscribe({
      next: (response) => {
        this.demandeResponse = response;
        this.isLoading = false;
        
        // Debug (à retirer en production)
        console.log('✅ Demandes chargées:', response);
        console.log('📊 Total pages:', response.totalPages);
        console.log('📄 Pages:', response.pages);
      },
      error: (error) => {
        console.error('❌ Erreur lors du chargement:', error);
        this.isLoading = false;
      }
    });
  }
}