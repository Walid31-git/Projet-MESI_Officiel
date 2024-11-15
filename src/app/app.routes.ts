import { Routes } from '@angular/router';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { LoginComponent } from './login/login.component';  

export const routes: Routes = [
    { path: '', component: PageAcceuilComponent },
    { path: 'login', component: LoginComponent}
];


