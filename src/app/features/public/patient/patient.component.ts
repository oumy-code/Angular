import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserLoginRequest } from 'src/app/core/models/user.model';
import { SecurityService } from 'src/app/core/services/security.service';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, JsonPipe],
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  userLogin: UserLoginRequest = {
    email: '',
    password: ''
  };

  loginError: boolean = false; // pour afficher message erreur

  constructor(
    private securityService: SecurityService,
    private router: Router
  ) {}

  onLogin(form: NgForm) {

    // Empêche l'envoi si formulaire invalide
    if (form.invalid) {
      return;
    }

    // 🔹 Utilisation de l'observable avec subscribe
    this.securityService.login(this.userLogin).subscribe({
      next: loginResult => {
        if (loginResult) {
          this.loginError = false; // reset erreur
          console.log('Login successful:', loginResult);
          this.router.navigate(['/private']); // redirection
        } else {
          console.log('Login failed: Invalid email or password');
          this.loginError = true; // active message erreur
        }
      },
      error: err => {
        console.error('Erreur login:', err);
        this.loginError = true;
      }
    });

    console.log('Login attempted with:', this.userLogin);
  }
}
