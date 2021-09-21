import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { JuegosComponent } from './juegos.component';    
import { MayormenorComponent } from './mayormenor/mayormenor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component'; 
import { SimonComponent } from './simon/simon.component';
  
 

const routes: Routes = [ 
  {
    path: '',
    component: JuegosComponent  
    ,children:
      [
        {
          path: 'ahorcado',
          component: AhorcadoComponent 
        }  , 
        {
          path:'preguntados',
          component:PreguntadosComponent
          
        },
        {
          path:'mayormenor',
          component:MayormenorComponent
        }
        ,
        {
          path:'simon',
          component:SimonComponent
        }
      ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
