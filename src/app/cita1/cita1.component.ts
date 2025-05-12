import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cita1',
  templateUrl: './cita1.component.html',
  styleUrls: ['./cita1.component.css'],
  imports: [CommonModule]
})
export class Cita1Component {
  citas: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const datos = localStorage.getItem('citasRegistradas');
    if (datos) {
      this.citas = JSON.parse(datos);
      console.log('Citas cargadas desde localStorage:', this.citas); // Esto imprimirá las citas en la consola
    } else {
      console.log('No hay citas en localStorage.');
    }
  }

  borrarCita(index: number) {
    this.citas.splice(index, 1);
    localStorage.setItem('citasRegistradas', JSON.stringify(this.citas));
  }

  editarCita(index: number) {
    const cita = this.citas[index];
    localStorage.setItem('citaParaEditar', JSON.stringify(cita));
    localStorage.setItem('citaParaEditarIndex', index.toString());
    this.router.navigate(['/formulario1']);
  }
}
