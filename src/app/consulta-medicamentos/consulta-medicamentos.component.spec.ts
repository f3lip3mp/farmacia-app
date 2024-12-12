import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaMedicamentosComponent } from './consulta-medicamentos.component';

describe('ConsultaMedicamentosComponent', () => {
  let component: ConsultaMedicamentosComponent;
  let fixture: ComponentFixture<ConsultaMedicamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaMedicamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
