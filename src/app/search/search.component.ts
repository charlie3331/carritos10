import { Component } from '@angular/core';
import { UncarroComponent } from '../uncarro/uncarro.component';
import { Carro } from '../carro';
import { ActivatedRoute } from '@angular/router';
import { CarroService } from '../shared/carro.service';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-search',
  imports: [UncarroComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

   nombreh:string="";
   indice:number=0;

   micarro:Carro={
    marca: "",
    modelo: "",
    anio: "",
    color: "",
    img: "",
    bio: "",
    precio: ""
   };

   constructor(private carroService:CarroService, private activatedRoute:ActivatedRoute){

     this.activatedRoute.params.subscribe(params=>{

        this.nombreh=params['nombreh'];
        this.indice=this.carroService.searchUnCarro(this.nombreh);
        console.log(this.indice);

        if(this.indice != -1){
          this.micarro=this.carroService.getUnCarro(this.indice);
        }1
     });
   }
}
