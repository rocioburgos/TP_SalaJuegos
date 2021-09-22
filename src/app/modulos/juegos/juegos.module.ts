import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module'; 
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayormenorComponent } from './mayormenor/mayormenor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component'; 
import { FormsModule } from '@angular/forms';
import { ControlComponent } from './simon/control/control.component';
import { MainComponent } from './simon/main/main.component';
import { HomeJuegosComponent } from './homeJuegos/home-juegos.component';  

@NgModule({
  declarations: [ 
    AhorcadoComponent,
    MayormenorComponent,
    PreguntadosComponent,
    ControlComponent,
    MainComponent,
    HomeJuegosComponent  
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    FormsModule  
  ]
})
export class JuegosModule { }
