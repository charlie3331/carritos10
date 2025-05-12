import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Necesario para ngModel

interface Carro {
  marca: string;
  modelo: string;
  precio: number;
}

@Component({
  selector: 'app-hijo',
  standalone: true,
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
  imports: [CommonModule, FormsModule]  // Importa FormsModule aquí
})
export class HijoComponent {
  @Input() carroSeleccionado: Carro | undefined;
  @Output() financiamientoCalculado = new EventEmitter<number>();

  meses: number = 6;

  calcularFinanciamiento() {
    if (this.carroSeleccionado) {
      // Convertir meses a número
      const mesesNum = Number(this.meses);  // Esto asegurará que sea un número
  
      let porcentajeExtra = 0;
      console.log('Meses seleccionados:', mesesNum);  // Verifica que se haya convertido correctamente
  
      // Verificar el número de meses y asignar el porcentaje extra
      if (mesesNum === 6) porcentajeExtra = 1.2;
      else if (mesesNum === 12) porcentajeExtra = 1.4;
      else if (mesesNum === 24) porcentajeExtra = 2;
  
      console.log('Porcentaje extra:', porcentajeExtra);
  
      const precioBase = this.carroSeleccionado.precio;
      console.log('Precio base:', precioBase);
      const montoCalculado = precioBase * porcentajeExtra;
      console.log('Monto calculado:', montoCalculado);
  
      // Emitir el monto calculado al componente padre
      this.financiamientoCalculado.emit(montoCalculado);
    } else {
      console.warn('No se ha seleccionado un carro');
    }
  }
  
}
