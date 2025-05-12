import { Injectable } from '@angular/core';
import { CARROS } from '../miscarros';
import { Carro } from '../carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  private carros:Carro[]=CARROS;

  constructor() { }

  getCarros():Carro[]{
    return this.carros;
  }

  getUnCarro(posicion:number):Carro{
    return this.carros[posicion];
  }

  searchUnCarro(nomcarro:string):number{
    let index= this.carros.findIndex(p=> p.modelo === nomcarro);
    return index;
  }
}
