import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideForms } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Fournit le module HttpClient
    provideForms()       // Fournit le module FormsModule
  ]
}).catch(err => console.error(err));
