import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayormenor',
  templateUrl: './mayormenor.component.html',
  styleUrls: ['./mayormenor.component.css']
})
export class MayormenorComponent implements OnInit {

  cartaPrincipal_src :string ='./../../../../assets/juegos/mayorMenor/cartas/4.jpg';
  cartaSecundaria_src:string='./../../../../assets/juegos/mayorMenor/cartas/3.jpg';
  operadorSeleccionado:number=3;
 
  timeLeft:number=100;
  cuenta:number= 0;
  vidas:number=2;

  constructor() { }

  ngOnInit(): void {
  }
 
}
