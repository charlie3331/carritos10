import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CarrosComponent } from './carros/carros.component';
import { UncarroComponent } from './uncarro/uncarro.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { Formulario1Component } from './formulario1/formulario1.component';
import { Cita1Component } from './cita1/cita1.component';
import { Formulario2Component } from './formulario2/formulario2.component';
import { Cita2Component } from './cita2/cita2.component';
import { OtrosComponent } from './otros/otros.component';
import { PadreComponent } from './padre/padre.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';

export const routes: Routes = [
    {path: 'home' , component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'carros', component: CarrosComponent},
    {path: 'login', component: LoginComponent},
    {path: 'carro/:id', component: UncarroComponent},
    {path: 'buscador/:nombreh', component: SearchComponent},
    {path: 'formulario1', component: Formulario1Component},
    {path: 'cita1', component: Cita1Component},
    {path: 'formulario2', component: Formulario2Component},
    {path: 'cita2', component: Cita2Component},
    {path:'otros', component: OtrosComponent},
    {path: 'padre', component: PadreComponent},
    {path: 'integrantes', component: IntegrantesComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
