import { Component } from '@angular/core';
import { Carro } from '../carro';
import { CarroService } from '../shared/carro.service';
import { RouterModule } from '@angular/router';
import { UncarroComponent } from '../uncarro/uncarro.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carros',
  imports: [RouterModule,UncarroComponent,CommonModule],
  templateUrl: './carros.component.html',
  styleUrl: './carros.component.css'
})
export class CarrosComponent {

  misCarros:Carro[]=[];

  mensajeRecibido:string='';

  constructor(public miservicio:CarroService){
    console.log("carro servicio");
  }
  ngOnInit():void{
    console.log("ngoninit carros");
    this.misCarros=this.miservicio.getCarros();
    console.log(this.misCarros);

  }

  recibirMensaje(mensaje: string) {
    console.log("Mensaje recibido del hijo:", mensaje); // ← imprime 'hola'
    this.mensajeRecibido=mensaje;
  }
  
}
