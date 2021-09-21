import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { JuegosComponent } from './juegos.component';  
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayormenorComponent } from './mayormenor/mayormenor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component'; 
import { FormsModule } from '@angular/forms';
import { ControlComponent } from './simon/control/control.component';
import { MainComponent } from './simon/main/main.component';  

@NgModule({
  declarations: [
    JuegosComponent,
    AhorcadoComponent,
    MayormenorComponent,
    PreguntadosComponent,
    ControlComponent,
    MainComponent  
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    FormsModule  
  ]
})
export class JuegosModule { }
