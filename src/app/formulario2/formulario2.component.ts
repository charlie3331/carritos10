import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="form-container" [formGroup]="formulario">
      <h2>Agendar Cita en Agencia de Carros</h2>

      <!-- Nombre -->
      <label>Nombre:</label>
      <input formControlName="nombre" type="text" />

      <!-- Correo -->
      <label>Correo electrónico:</label>
      <input formControlName="correo" type="email" />

      <!-- Teléfono -->
      <label>Teléfono:</label>
      <input formControlName="telefono" type="text" maxlength="10" />

      <!-- Modelo -->
      <label>Vehículo de interés:</label>
      <select formControlName="modelo">
        <option value="">Seleccione un modelo</option>
        <option value="Sedan X">Sedan X</option>
        <option value="SUV Y">SUV Y</option>
        <option value="Pickup Z">Pickup Z</option>
      </select>

      <!-- Financiamiento -->
      <label>
        <input type="checkbox" formControlName="financiamiento" />
        ¿Interesado en financiamiento?
      </label>

      <!-- Fecha -->
      <label>Fecha de la cita:</label>
      <input type="date" formControlName="fecha" [min]="minDate" />

      <!-- Botón -->
      <button (click)="enviar()">Enviar</button>
    </div>
  `,
})
export class Formulario2Component implements OnInit {
  formulario: FormGroup;
  minDate: string;

  constructor(private fb: FormBuilder) {
    this.minDate = new Date().toISOString().split('T')[0];

    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      modelo: ['', Validators.required],
      financiamiento: [false],
      fecha: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  enviar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
  
      const errores: string[] = [];
  
      const f = this.formulario.controls;
      if (f['nombre'].errors) errores.push('Nombre es obligatorio.');
      if (f['correo'].errors) {
        if (f['correo'].errors['required']) errores.push('Correo es obligatorio.');
        if (f['correo'].errors['email']) errores.push('El correo no es válido.');
      }
      if (f['telefono'].errors) {
        if (f['telefono'].errors['required']) errores.push('Teléfono es obligatorio.');
        if (f['telefono'].errors['pattern']) errores.push('Teléfono debe tener 10 dígitos.');
      }
      if (f['modelo'].errors) errores.push('Debe seleccionar un modelo.');
      if (f['fecha'].errors) errores.push('Debe seleccionar una fecha válida.');
  
      alert('Errores en el formulario:\n' + errores.join('\n'));
      return;
    }
  
    console.log('Formulario enviado:', this.formulario.value);
    alert('Cita enviada correctamente');
    this.formulario.reset();
  }
  
}
