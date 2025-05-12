import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-formulario1',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  template: `
    <div class="form-container">
  <h2>Formulario de Cita de Agencia de Carros</h2>

  <!-- Campo de nombre -->
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" [(ngModel)]="nombre" name="nombre" required />

  <!-- Campo de teléfono -->
  <label for="telefono">Teléfono:</label>
  <input type="text" id="telefono" [(ngModel)]="telefono" name="telefono" maxlength="10" required />

  <!-- Lista desplegable (opciones escritas a mano) -->
  <label for="modelo">Modelo de Auto:</label>
  <select id="modelo" [(ngModel)]="modelo" name="modelo" required>
    <option value="" disabled selected>Seleccione un modelo</option>
    <option value="Modelo A">Modelo A</option>
    <option value="Modelo B">Modelo B</option>
    <option value="Modelo C">Modelo C</option>
    <option value="Modelo D">Modelo D</option>
  </select>

  <!-- Checkbox -->
  <label>¿Desea recibir promoción?</label>
  <input type="checkbox" [(ngModel)]="promocion" name="promocion" />

  <!-- Radio buttons -->
  <label>Tipo de cita:</label>
  <input type="radio" [(ngModel)]="tipoCita" name="tipoCita" value="testDrive" required /> Test Drive
  <input type="radio" [(ngModel)]="tipoCita" name="tipoCita" value="cotizacion" required /> Cotización

  <!-- Campo de fecha -->
  <label for="fecha">Fecha de cita:</label>
  <input 
    type="date" 
    id="fecha" 
    [(ngModel)]="fecha" 
    name="fecha" 
    required 
    [min]="minDate" 
  />

  <!-- Botón de enviar -->
  <button (click)="enviarFormulario()">Enviar Cita</button>
</div>

<!-- Resumen de los datos ingresados -->
<div class="form-summary">
  <h3>Resumen de Cita</h3>
  <p><strong>Nombre:</strong> {{ nombre }}</p>
  <p><strong>Teléfono:</strong> {{ telefono }}</p>
  <p><strong>Modelo de Auto:</strong> {{ modelo }}</p>
  <p><strong>Promoción:</strong> {{ promocion ? 'Sí' : 'No' }}</p>
  <p><strong>Tipo de Cita:</strong> {{ tipoCita === 'testDrive' ? 'Test Drive' : 'Cotización' }}</p>
  <p><strong>Fecha de Cita:</strong> {{ fecha }}</p>
</div>

  `,
  styles: []
})

export class Formulario1Component {
  // Propiedades del formulario
  nombre: string = '';
  telefono: string = '';
  modelo: string = '';
  promocion: boolean = false;
  tipoCita: string = '';
  fecha: string = '';

  constructor(private router: Router) {}

  // Fecha mínima
  minDate: string = new Date().toISOString().split("T")[0];

  // El índice de la cita a editar
  citaIndex: number | null = null;

  ngOnInit() {
    const citaParaEditar = localStorage.getItem('citaParaEditar');
    if (citaParaEditar) {
      const cita = JSON.parse(citaParaEditar);
      this.nombre = cita.nombre;
      this.telefono = cita.telefono;
      this.modelo = cita.modelo;
      this.promocion = cita.promocion;
      this.tipoCita = cita.tipoCita;
      this.fecha = cita.fecha;
      // Obtener el índice de la cita
      this.citaIndex = parseInt(localStorage.getItem('citaParaEditarIndex')!, 10);
      localStorage.removeItem('citaParaEditar'); // Limpiar después de cargar
    }
  }

  formValido() {
    return this.nombre.trim() !== '' &&
           this.telefono.trim() !== '' &&
           /^\d{1,10}$/.test(this.telefono) &&
           this.modelo !== '' &&
           this.tipoCita !== '' &&
           this.fecha !== '';
  }

  enviarFormulario() {
    // Validación de campos del formulario
    if (this.nombre.trim() === '') {
      alert('El nombre no puede estar vacío.');
      return;
    }
  
    if (!/^\d+$/.test(this.telefono)) {
      alert('El teléfono debe contener solo números.');
      return;
    }
  
    if (!/^\d{10}$/.test(this.telefono)) {
      alert('El teléfono debe contener exactamente 10 dígitos numéricos.');
      return;
    }
  
    if (this.fecha < this.minDate) {
      alert('No se puede seleccionar una fecha pasada.');
      return;
    }
  
    if (!this.formValido()) {
      alert('Por favor, complete todos los campos del formulario.');
      return;
    }
  
    // Crear el objeto con los nuevos valores
    const nuevaCita = {
      nombre: this.nombre,
      telefono: this.telefono,
      modelo: this.modelo,
      promocion: this.promocion,
      tipoCita: this.tipoCita,
      fecha: this.fecha
    };
  
    // Obtener las citas de localStorage
    let citasRegistradas = JSON.parse(localStorage.getItem('citasRegistradas') || '[]');
  
    if (this.citaIndex !== null) {
      // Caso de edición: Reemplazar la cita existente en el índice
      citasRegistradas[this.citaIndex] = nuevaCita;
      localStorage.setItem('citasRegistradas', JSON.stringify(citasRegistradas));
      alert('Cita actualizada correctamente.');
    } else {
      // Caso de adición de nueva cita
      citasRegistradas.push(nuevaCita);
      localStorage.setItem('citasRegistradas', JSON.stringify(citasRegistradas));
      alert('Cita agregada correctamente.');
    }
  
    // Redirigir a la página de citas
    this.router.navigate(['/cita1']);
  }
  
}
