import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EncuestaRoutingModule } from './encuesta-routing.module';



@NgModule({
  declarations: [
    EncuestaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
     EncuestaRoutingModule,
    FormsModule ,
  ]
})
export class EncuestaModule { }
