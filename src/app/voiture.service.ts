import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voiture } from './voiture';

@Injectable({providedIn: 'root'})
export class VoitureService {
  private apiUrl = 'http://localhost:9002/voiture'; // Replace with your backend URL if different

  constructor(private http: HttpClient) {}

  public getAllVoitures(): Observable<Voiture[]> {
    return this.http.get<Voiture[]>(`${this.apiUrl}/all`);
  }
  public addVoiture(voitureInfo: Voiture): Observable<Voiture> {
    return this.http.post<Voiture>(`${this.apiUrl}/add`, voitureInfo);
  }

  public UpdateVoiture(voitureInfo: Voiture): Observable<Voiture> {
    return this.http.put<Voiture>(`${this.apiUrl}/update`, voitureInfo);
  }
  public DeleteVoiture(voitureId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${voitureId}`);
  }
}
@Injectable({ providedIn: 'root' })
export class VenteService {
  private apiUrl = 'http://localhost:9001/voiture/add'; // Remplacez par votre URL d'API backend

  constructor(private http: HttpClient) {}

  ajouterVoiture(voitureData: any): Observable<any> {
    return this.http.post(this.apiUrl, voitureData);
  }
}


