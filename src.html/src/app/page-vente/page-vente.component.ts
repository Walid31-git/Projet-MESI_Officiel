import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importation du CommonModule
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
}