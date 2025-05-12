import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-otros',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './otros.component.html'
})
export class OtrosComponent {
  private http = inject(HttpClient);
  autos: any[] = [];
  filtroMarca: string = '';

  constructor() {
    this.http.get<any>('https://chente03333.free.beeceptor.com')
      .subscribe(data => {
        this.autos = data.autos_disponibles;
      });
  }

  get autosFiltrados() {
    const filtro = this.filtroMarca.toLowerCase().trim();
    return this.autos.filter(auto =>
      auto.marca.toLowerCase().includes(filtro)
    );
  }
}
