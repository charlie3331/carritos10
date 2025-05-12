import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

interface Carro {
  marca: string;
  modelo: string;
  precio: number;
}

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
  imports: [CommonModule,HijoComponent]
})
export class PadreComponent {
  carros: Carro[] = [
    { marca: 'Toyota', modelo: 'Corolla', precio: 20000 },
    { marca: 'Honda', modelo: 'Civic', precio: 22000 },
    { marca: 'Ford', modelo: 'Focus', precio: 18000 }
  ];

  carroSeleccionado: Carro | undefined;
  monto: number | undefined;

  seleccionarCarro(carro: Carro) {
    this.carroSeleccionado = carro;
  }

  recibirMonto(monto: number) {
    this.monto = monto;  // Al recibir el monto del hijo, lo asignamos
  }
}
