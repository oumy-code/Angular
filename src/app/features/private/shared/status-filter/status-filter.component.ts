import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StatutDemandeModel } from '../../models/demande.model';

@Component({
  selector: 'app-status-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.css']
})
export class StatusFilterComponent {
  @Input() selectedStatut: StatutDemandeModel | '' = '';
  @Output() statutChange = new EventEmitter<StatutDemandeModel | ''>();

  statuts: (StatutDemandeModel | '')[] = ['', 'En Attente', 'Acceptée', 'Refusée'];

  onChange() {
    this.statutChange.emit(this.selectedStatut);
  }
}
