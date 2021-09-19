import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { JuegosComponent } from './juegos.component';  
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayormenorComponent } from './mayormenor/mayormenor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { SimonComponent } from './simon/simon.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    JuegosComponent,
    AhorcadoComponent,
    MayormenorComponent,
    PreguntadosComponent,
    SimonComponent 
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    FormsModule
  ]
})
export class JuegosModule { }
