import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-vente',
  templateUrl: './page-vente.component.html',
  styleUrls: ['./page-vente.component.css']
})
export class PageVenteComponent {
  voiture = {
    marque: '',
    modele: '',
    annee: null,
    prix: null,
    kilometrage: null
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('/submit', this.voiture).subscribe({
      next: (response) => {
        console.log('Voiture ajoutée avec succès', response);
      },
      error: (err) => {
        console.error('Erreur lors de l’ajout de la voiture', err);
      }
    });
  }
}
