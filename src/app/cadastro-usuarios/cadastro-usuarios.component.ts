import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuarios',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.css']
})
export class CadastroUsuariosComponent {
  onSubmit(userForm: any) {
    const usuario = userForm.value; 
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]'); 
    usuarios.push(usuario); 
    localStorage.setItem('usuarios', JSON.stringify(usuarios)); 
    alert('Usuário cadastrado com sucesso!');
    userForm.reset(); //Reseta o formulário
  }
}
