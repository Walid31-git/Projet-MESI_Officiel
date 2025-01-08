import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Voiture } from '../voiture';

@Component({
  selector: 'app-page-acceuil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-acceuil.component.html',
  styleUrls: ['./page-acceuil.component.css'],
})
export class PageAcceuilComponent implements OnInit {
  voitures: Voiture[] = []; // Correction : renommer pour respecter la pluralité
  constructor(private http: HttpClient) {} // Injection correcte du HttpClient

  ngOnInit(): void {
    // Appel de la méthode pour récupérer les voitures au démarrage
    this.getVoitures();
  }

  getVoitures(): void {
    this.http.get<Voiture[]>('http://localhost:9001/voiture/all').subscribe(
      (response) => {
        console.log(response);
        this.voitures = response; // Stockage des données dans le tableau voitures
      },
      (error) => {
        console.error('Erreur lors de la récupération des données :', error);
      }
    );
  }
}
