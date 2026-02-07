import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../layouts/private/header/header.component';

@Component({
  selector: 'app-private',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterOutlet,HeaderComponent],
  templateUrl: './private.component.html',
  styleUrl: './private.component.css'
})
export class PrivateComponent {

}