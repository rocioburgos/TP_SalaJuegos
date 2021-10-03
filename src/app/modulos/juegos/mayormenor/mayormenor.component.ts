import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayormenor',
  templateUrl: './mayormenor.component.html',
  styleUrls: ['./mayormenor.component.css']
})
export class MayormenorComponent implements OnInit {

  cartaPrincipal;
  cartaSecundaria;
 
 
  cuenta: number = 0;
  vidas: number = 3;
  mostrarFin: boolean= false;

  cartas = [{ numero: 1, pathImg: './../../../../assets/juegos/mayorMenor/cartas/1.jpg' },
  { numero: 2, pathImg: './../../../../assets/juegos/mayorMenor/cartas/2.jpg' },
  { numero: 3, pathImg: './../../../../assets/juegos/mayorMenor/cartas/3.jpg' },
  { numero: 4, pathImg: './../../../../assets/juegos/mayorMenor/cartas/4.jpg' },
  { numero: 5, pathImg: './../../../../assets/juegos/mayorMenor/cartas/5.jpg' },
  { numero: 6, pathImg: './../../../../assets/juegos/mayorMenor/cartas/6.jpg' },
  { numero: 7, pathImg: './../../../../assets/juegos/mayorMenor/cartas/7.jpg' },
  //{ numero: 8, pathImg: './../../../../assets/juegos/mayorMenor/cartas/8.jpg' },
  { numero: 9, pathImg: './../../../../assets/juegos/mayorMenor/cartas/9.jpg' },
  { numero:10, pathImg: './../../../../assets/juegos/mayorMenor/cartas/10.jpg' },
  { numero:11, pathImg: './../../../../assets/juegos/mayorMenor/cartas/11.jpg' },
  { numero:12, pathImg: './../../../../assets/juegos/mayorMenor/cartas/12.jpg' },

];


  constructor() {
    this.cartaPrincipal = this.calcularCartaRandom();
    this.cartaSecundaria = this.calcularCartaRandom();
  }

  ngOnInit(): void {
  }


  calcularCartaRandom() {
    return this.cartas[Math.floor(Math.random() * this.cartas.length)];
  }

  play(res:string){
    if(this.respuesta(res)){
      this.cuenta++;
      this.cartaPrincipal = this.calcularCartaRandom();
      this.cartaSecundaria= this.calcularCartaRandom();
    }else{
      if(this.vidas > 0){ 
      this.vidas--;
      if(this.vidas == 0){
        this.mostrarFin= true;
      }
    }
    }
  }


  respuesta(res: string):boolean{ 
    switch (res) {
      case 'mayor':
        if (this.cartaPrincipal.numero > this.cartaSecundaria.numero) {
          return true;
        } else {
          return false;
        }
        break;

      case 'igual':
        if (this.cartaPrincipal.numero == this.cartaSecundaria.numero) {
          return true;
        } else {
          return false;
        }
        break;
      case 'menor':
        if (this.cartaPrincipal.numero < this.cartaSecundaria.numero) {
          return true;
        } else {
          return false;
        }
        break;
      default:
        return false;
        break;
    }
  }
}
