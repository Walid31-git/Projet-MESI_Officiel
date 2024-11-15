

import { Routes } from '@angular/router';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { PageVenteComponent } from './page-vente/page-vente.component';
import { PageContactComponent } from './page-contact/page-contact.component';

import path from 'path';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: PageAcceuilComponent },
    { path: 'Login', component: LoginComponent},
    { path: 'achat', component: PageAcceuilComponent },
    { path: 'vente', component: PageVenteComponent },
    { path: 'contact', component: PageContactComponent }
];


