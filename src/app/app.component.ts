import { Component } from '@angular/core';
import { CadastroMedicamentosComponent } from './cadastro-medicamentos/cadastro-medicamentos.component';
import { ConsultaMedicamentosComponent } from './consulta-medicamentos/consulta-medicamentos.component';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CadastroUsuariosComponent } from "./cadastro-usuarios/cadastro-usuarios.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CadastroMedicamentosComponent, ConsultaMedicamentosComponent, NgIf, RouterOutlet, NgFor, CadastroUsuariosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  view: string = 'cadastro';
}
