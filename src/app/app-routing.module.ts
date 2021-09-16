import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './componentes/chat/chat.component';
import { HomeComponent } from './componentes/home/home.component';
import { AhorcadoComponent } from './componentes/juegos/ahorcado/ahorcado.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { MayormenorComponent } from './componentes/juegos/mayormenor/mayormenor.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuiensoyComponent } from './componentes/quiensoy/quiensoy.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { UsuarioLogueadoGuard } from './guard/usuario-logueado.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'quiensoy', component:QuiensoyComponent},
  {path:'registro', component:RegistroComponent},//CAMBIAR AL COMPONENTE REGISTRO 
  {path:'cerrarSesion', component:LoginComponent, canActivate: [UsuarioLogueadoGuard ]},
  {path:'juegos', component:JuegosComponent},
  {path:'juegos/ahorcado', component: AhorcadoComponent, canActivate: [UsuarioLogueadoGuard ]},
  {path:'juegos/mayorMenor', component: MayormenorComponent, canActivate: [UsuarioLogueadoGuard ]},
  {path:'chat', component:ChatComponent, canActivate: [UsuarioLogueadoGuard ]},
  { path:'', component: HomeComponent},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
