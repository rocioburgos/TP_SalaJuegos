import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { UsuarioLogueadoGuard } from 'src/app/guard/usuario-logueado.guard';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { JuegosComponent } from './juegos.component';
import { MayormenorComponent } from './mayormenor/mayormenor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { SimonComponent } from './simon/simon.component';

const routes: Routes = [
  
  { path: '', 
   component: JuegosComponent,
    children:
            [
                
              {
                path: 'juegos/ahorcado',
               // loadChildren:  './modules/battle/child/child.module#ChildModule'
               component: AhorcadoComponent,
               canActivate:[UsuarioLogueadoGuard ]
              },
              {
                path: 'juegos/mayorMenor',
               // loadChildren:  './modules/battle/child/child.module#ChildModule'
               component: MayormenorComponent,
               canActivate:[UsuarioLogueadoGuard ]
              },
              {
                path: 'juegos/preguntados',
               // loadChildren:  './modules/battle/child/child.module#ChildModule'
               component: PreguntadosComponent,
               canActivate:[UsuarioLogueadoGuard ]
              },
              {
                path: 'juegos/simon',
               // loadChildren:  './modules/battle/child/child.module#ChildModule'
               component: SimonComponent,
               canActivate:[UsuarioLogueadoGuard ]
              }
      ] }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
