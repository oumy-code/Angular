import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { MOCK_DEMANDES } from '../../../../mocks/demande.mock';
import { DemandeListeRvModel, DemandeListResponse, DemandeRvFilterModel } from '../../models/demande.model';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor() { }
  
  public getDemandesRV(filter: DemandeRvFilterModel): Observable<DemandeListResponse> {
    let demandes = [...MOCK_DEMANDES];
    
    // Filtrage par statut
    if (filter.statut) {
      demandes = demandes.filter(d => d.statut === filter.statut);
    }
    
    // Filtrage par spécialité
    if (filter.specialite) {
      demandes = demandes.filter(d => d.specialite === filter.specialite);
    }
    
    // Pagination
    const page = filter.page || 1;
    const size = filter.size || environment.Limit || 5;
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    const totalPages = Math.ceil(demandes.length / size);
    
    // Génération des numéros de pages
    const pages: number[] = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    
    const demandesByPage = demandes.slice(startIndex, endIndex);
    
    const response: DemandeListResponse = {
      data: demandesByPage,
      totalPages: totalPages,
      currentPage: page,
      totalItems: demandes.length,
      pages: pages,
      size: size
    };
    
    // Retourne un Observable avec un léger délai pour simuler un appel API
    return of(response).pipe(delay(300));
  }
}