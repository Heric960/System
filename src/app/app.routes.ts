import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'pacientes' }, // Redireciona para 'pacientes'
    { path: 'pacientes', loadChildren: () => import('./pacientes/pacientes.module').then(m => m.PacientesModule) } // Corrigi 'pacentes' para 'pacientes'
];
