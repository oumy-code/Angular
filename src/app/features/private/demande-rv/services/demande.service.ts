import { Injectable } from '@angular/core';
import { MOCK_DEMANDES } from '../../../../mocks/demande.mock';
import { DemandeListeRvModel, DemandeListResponse, DemandeRvFilterModel } from '../../models/demande.model';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor() { }
  public getDemandesRV(filter: DemandeRvFilterModel) :DemandeListResponse{
    let demandes=[...MOCK_DEMANDES];
    if(filter.statut ){
      demandes=demandes.filter(d => d.statut === filter.statut);
    }
    if(filter.specialite){
      demandes=demandes.filter(d => d.specialite === filter.specialite);
    }
    const page = filter.page || 1;
    const size = filter.size || environment.Limit||5;
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    const totalPages = Math.ceil(demandes.length / size);
    const pages:number[]=[]
    for(let i=1;i<=totalPages;i++){
      pages.push(i);
    }
    const demandesByPage = demandes.slice(startIndex, endIndex);
    
    return {
      data: demandesByPage,
      totalPages: totalPages,
      currentPage: page,
      totalItems: demandes.length,
      pages: pages,
      size: size
    };
  }
}
