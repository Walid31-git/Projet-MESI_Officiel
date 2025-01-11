import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importation du CommonModule
import { VenteService } from '../voiture.service'; // Importez le service
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-vente',
  standalone: true,
  imports: [CommonModule], // Ajout de CommonModule ici
  templateUrl: './page-vente.component.html',
  styleUrls: ['./page-vente.component.css']
})
export class PageVenteComponent {
  annee: number = 0;
  errorMessage: boolean = false;

  checkYear(): void {
    if (this.annee > 2025) {
      this.errorMessage = true;
    } else {
      this.errorMessage = false;
    }
  }
  voitureForm: FormGroup;

  constructor(private venteService: VenteService, private fb: FormBuilder) {
    // Initialisation du formulaire réactif
    this.voitureForm = this.fb.group({
      marque: ['', Validators.required],
      modele: ['', Validators.required],
      annee: [null, [Validators.required, Validators.min(1950), Validators.max(2025)]],
      prix: [null, Validators.required],
      couleur: ['', Validators.required],
      kilometrage: [null, Validators.required],
      carburant: ['', Validators.required],
      transmission: ['', Validators.required],
      description: [''],
      
    });
  }

  

  submitForm(): void {
    if (this.voitureForm.valid) {
      const formData = new FormData();
      Object.keys(this.voitureForm.controls).forEach((key) => {
        formData.append(key, this.voitureForm.get(key)?.value);
      });

      this.venteService.ajouterVoiture(formData).subscribe({
        next: (response) => {
          console.log('Voiture ajoutée avec succès !', response);
          alert('Voiture ajoutée avec succès !');
          this.voitureForm.reset();
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout de la voiture', error);
          alert('Erreur lors de l\'ajout de la voiture');
        },
      });
    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  }
}
