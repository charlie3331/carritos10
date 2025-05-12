import { Component, Input,Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CarroService } from '../shared/carro.service';
import { Carro } from '../carro';


@Component({
  selector: 'app-uncarro',
  imports: [RouterModule],
  templateUrl: './uncarro.component.html',
  styleUrl: './uncarro.component.css'
})
export class UncarroComponent {

  @Input() carro!:Carro;
  @Output() mensaje = new EventEmitter<string>(); 
  constructor(public carroService:CarroService, public activatedRoute: ActivatedRoute){

    this.activatedRoute.params.subscribe(params =>{
      this.carro=carroService.getUnCarro(params['id']);
    })

  }

  enviarMensaje() {
    this.mensaje.emit("jejej");
  }
}
