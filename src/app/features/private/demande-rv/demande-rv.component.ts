import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListDemandeComponent } from './list-demande/list-demande.component';
import { FormDemandeComponent } from './form-demande/form-demande.component';

@Component({
  selector: 'app-demande-rv',
  standalone: true,
  imports: [CommonModule, RouterModule, ListDemandeComponent, FormDemandeComponent],
  templateUrl: './demande-rv.component.html',
  styleUrl: './demande-rv.component.css'
})
export class DemandeRvComponent {

}