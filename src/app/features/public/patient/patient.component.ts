import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserLoginRequest } from 'src/app/core/models/user.model';
import { SecurityService } from 'src/app/core/services/security.service';

@Component({
  selector: 'app-patient',
  imports: [RouterLink,FormsModule,CommonModule,JsonPipe],
  standalone: true,
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
  userLogin:UserLoginRequest={
    email:'',
    password:''
  };
  constructor(private securityService: SecurityService,private router:Router) { }
  onLogin(){
   
    const loginResult = this.securityService.login(this.userLogin);
    console.log('Login attempted with:', this.userLogin);
    if (loginResult) {
      this.router.navigate(['/private']);
      console.log('Login successful:', loginResult);
      // Ici, tu peux ajouter la logique pour rediriger l'utilisateur ou stocker le token
    } else {

      console.log('Login failed: Invalid email or password');
      // Ici, tu peux ajouter la logique pour afficher un message d'erreur à l'utilisateur
    }
    // Ici, tu peux ajouter la logique pour appeler ton service de sécurité
  } 

}
