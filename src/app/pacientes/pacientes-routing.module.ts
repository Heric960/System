import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './pacientes/pacientes.component';// Certifique-se de que o caminho para o componente está correto

const routes: Routes = [
  { path: '', component: PacientesComponent } // Define o componente para a rota vazia ('')
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Define o roteamento como um módulo filho
  exports: [RouterModule] // Exporta o módulo de rotas
})
export class PacientesRoutingModule { }
