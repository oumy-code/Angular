import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SecurityService } from 'src/app/core/services/security.service';

@Component({
  selector: 'app-header-private',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
  // État du dropdown utilisateur
  isDropdownOpen = signal(false);

  /**
   * Toggle du dropdown
   */
  toggleDropdown(event?: Event): void {
    if (event) event.stopPropagation();
    this.isDropdownOpen.set(!this.isDropdownOpen());
  }

  /**
   * Fonction de déconnexion
   */
  logout(event: Event): void {
    event.stopPropagation();
    // Ici, tu peux ajouter la logique de déconnexion réelle
    console.log('Déconnexion...');
    this.securityService.logout();
    this.router.navigate(['/public']);
    this.isDropdownOpen.set(false);
    alert('Vous avez été déconnecté !');
  }

  /**
   * Fermer le dropdown si on clique en dehors
   */
  closeDropdown(): void {
    this.isDropdownOpen.set(false);
  }

  constructor(private securityService: SecurityService,private router:Router
  ) {
    // Ferme le dropdown quand on clique n'importe où sur la page
    document.addEventListener('click', () => {
      this.closeDropdown();
    });
  }
}
