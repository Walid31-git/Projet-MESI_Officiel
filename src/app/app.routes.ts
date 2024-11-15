import { Routes } from '@angular/router';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';  

export const routes: Routes = [
    { path: '', component: PageAcceuilComponent },
    { path: 'login', component: LoginComponent}
=======
import { PageVenteComponent } from './page-vente/page-vente.component';
import { PageContactComponent } from './page-contact/page-contact.component';

import path from 'path';

export const routes: Routes = [
    { path: '', component: PageAcceuilComponent },
    { path: 'achat', component: PageAcceuilComponent },
    { path: 'vente', component: PageVenteComponent },
    { path: 'contact', component: PageContactComponent }
>>>>>>> 431a5a176c3a0dd24c913c8d02cb1583306d3bf3
];


