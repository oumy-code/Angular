import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { patientRequest } from '../../private/models/patient.model';
import { PatientService } from 'src/app/core/services/patient.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  patientForm!: FormGroup;
  successMessage: string = ''; // Message de succès

  constructor(private fb: FormBuilder, private patientService: PatientService) {}

  ngOnInit() {
    this.patientForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      sexe: ['', Validators.required],
      adresse: [''],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      allergies: [''],
      antecedents: [''],
      termes: [false, Validators.requiredTrue],
      newsletter: [false]
    }, { validators: this.passwordMatchValidator });
  }

  // Validation personnalisée pour la correspondance des mots de passe
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirm = form.get('confirmPassword')?.value;
    if (password !== confirm) {
      form.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      form.get('confirmPassword')?.setErrors(null);
    }
    return null;
  }

  onSubmit() {
    if (this.patientForm.valid) {
      const patientData: patientRequest = this.patientForm.value;

      // 🔹 Utilisation de l'observable pour créer le patient
      this.patientService.createPatient(patientData).subscribe({
        next: (patient) => {
          console.log('Patient créé avec succès:', patient);

          // Afficher message succès
          this.successMessage = 'Patient créé avec succès !';

          // Réinitialiser le formulaire
          this.patientForm.reset();

          // Remettre les checkboxes à false
          this.patientForm.get('termes')?.setValue(false);
          this.patientForm.get('newsletter')?.setValue(false);
        },
        error: (err) => {
          console.error('Erreur lors de la création du patient', err);
          this.successMessage = '';
        }
      });
    } else {
      console.log('Formulaire invalide');
      this.patientForm.markAllAsTouched();
      this.successMessage = ''; // On retire le message si formulaire invalide
    }
  }
}
