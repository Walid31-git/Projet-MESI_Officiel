import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Voiture } from './voiture';
import { VoitureService } from './voiture.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { response } from 'express';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public voitures: Voiture[] = [];
  constructor(private voitureService: VoitureService){
    this.voitures =[];
  }
  ngOnInit() {
      this.getAllVoitures();
  }
  public getAllVoitures(): void {
    this.voitureService.getAllVoitures().subscribe(
      (response: Voiture[]) => {
        this.voitures = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}