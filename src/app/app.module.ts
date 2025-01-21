import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // To make HTTP requests
import { FormsModule } from '@angular/forms'; // For template-driven forms
import { AppComponent } from './app.component'; // Main component
import { VoitureService } from './voiture.service';
import { PageVenteComponent } from './page-vente/page-vente.component';

@NgModule({
  declarations: [
    AppComponent,
    PageVenteComponent,
     // Declare the component here
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule, // To use HttpClient for API communication
    FormsModule, // Include if forms are used
    
  ],
  providers: [VoitureService],
  bootstrap: [AppComponent], // Main component to bootstrap
})
export class AppModule {}
