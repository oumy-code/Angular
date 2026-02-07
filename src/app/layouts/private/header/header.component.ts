import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-private',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // État du dropdown
  isDropdownOpen = signal(false);

  // Toggle du dropdown
  toggleDropdown(): void {
    this.isDropdownOpen.set(!this.isDropdownOpen());
  }

  // Fonction de déconnexion (simulée)
  logout(event: Event): void {
    event.stopPropagation();
    console.log('Déconnexion...');
    this.isDropdownOpen.set(false);
    alert('Vous avez été déconnecté !');
  }
}