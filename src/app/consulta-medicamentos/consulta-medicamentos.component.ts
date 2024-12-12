import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-consulta-medicamentos',
  standalone: true,
  imports:[NgFor],
  templateUrl: './consulta-medicamentos.component.html',
  styleUrls: ['./consulta-medicamentos.component.css']
})
export class ConsultaMedicamentosComponent implements OnInit {
  medicamentos: any[] = [];

  ngOnInit() {
    const savedMedicamentos = localStorage.getItem('medicamentos');
    this.medicamentos = savedMedicamentos ? JSON.parse(savedMedicamentos) : [];
  }
}
