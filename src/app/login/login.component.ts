import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule,CommonModule]
})
export class LoginComponent {
  usuario = '';
  clave = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  iniciarSesion() {
    const exito = this.authService.login(this.usuario, this.clave);
    if (exito) {
      this.router.navigate(['/home']);
      alert("sesion iniciada");
    } else {
      this.error = 'Usuario o clave incorrectos';
    }
  }
}
