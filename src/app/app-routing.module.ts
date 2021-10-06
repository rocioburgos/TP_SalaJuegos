import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioLogueadoGuard } from './guard/usuario-logueado.guard';

const routes: Routes = [
  {
    path: 'quiensoy',
    loadChildren: () => import('./modulos/quiensoy/quiensoy.module').then(m => m.QuiensoyModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./modulos/chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./modulos/error/error.module').then(m => m.ErrorModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modulos/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'juegos',
    loadChildren: () => import('./modulos/juegos/juegos.module').then(m => m.JuegosModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modulos/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'cerrarSesion',
    loadChildren: () => import('./modulos/login/login.module').then(m => m.LoginModule),
    canActivate: [UsuarioLogueadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./modulos/registro/registro.module').then(m => m.RegistroModule)
  },
  {
    path: 'encuesta',
    loadChildren: () => import('./modulos/encuesta/encuesta.module').then(m => m.EncuestaModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
