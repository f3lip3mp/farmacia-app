import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaMedicamentosComponent } from './consulta-medicamentos/consulta-medicamentos.component';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';
import { CadastroMedicamentosComponent } from './cadastro-medicamentos/cadastro-medicamentos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'consulta-medicamentos', pathMatch: 'full' },
  { path: 'consulta-medicamentos', component: ConsultaMedicamentosComponent },
  { path: 'cadastro-usuarios', component: CadastroUsuariosComponent },
  { path: 'cadastro-medicamentos', component: CadastroMedicamentosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
