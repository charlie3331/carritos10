import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarios = [
    { usuario: 'admin', clave: '1234' },
    { usuario: 'carlos', clave: '5678' }
  ];

  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();

  login(usuario: string, clave: string): boolean {
    const userValido = this.usuarios.find(u => u.usuario === usuario && u.clave === clave);
    this.loggedIn.next(!!userValido);
    return !!userValido;
  }

  logout() {
    this.loggedIn.next(false);
  }
}
