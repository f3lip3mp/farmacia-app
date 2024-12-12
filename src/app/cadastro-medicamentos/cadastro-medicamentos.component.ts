import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-medicamentos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-medicamentos.component.html',
  styleUrls: ['./cadastro-medicamentos.component.css']
})
export class CadastroMedicamentosComponent {
  onSubmit(medicamentoForm: any) {
    const medicamento = medicamentoForm.value; 
    const medicamentos = JSON.parse(localStorage.getItem('medicamentos') || '[]'); 
    medicamentos.push(medicamento); 
    localStorage.setItem('medicamentos', JSON.stringify(medicamentos));
    alert('Medicamento cadastrado com sucesso!');
    medicamentoForm.reset(); 
  }
}
