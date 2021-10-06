import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { UsuarioLogueadoGuard } from 'src/app/guard/usuario-logueado.guard';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { HomeJuegosComponent } from './homeJuegos/home-juegos.component'; 
import { MayormenorComponent } from './mayormenor/mayormenor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';  
import { MainComponent } from './simon/main/main.component';
 

const routes: Routes = [ 
  {
    path: '',
    component: HomeJuegosComponent  
    ,children:
      [
        {
          path: 'ahorcado',
          component: AhorcadoComponent 
          , canActivate:[UsuarioLogueadoGuard]
        }  , 
        {
          path:'preguntados',
          component:PreguntadosComponent
          , canActivate:[UsuarioLogueadoGuard]
          
        },
        {
          path:'mayormenor',
          component:MayormenorComponent
          , canActivate:[UsuarioLogueadoGuard]
        }
        ,
        {
          path:'simon',
          component:MainComponent
          , canActivate:[UsuarioLogueadoGuard]
        }
      ] 
  },
  {path:'homejuegos', component: HomeJuegosComponent , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
