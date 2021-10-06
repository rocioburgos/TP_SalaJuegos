import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {

  peliculas:Array<any>=[];
  baseUrl_img= 'https://image.tmdb.org/t/p/w1280'
  imgPath=''; 
  opcion_correcta?:string;
  opciones_incorrectas: Array<number>=[]
  aciertos=0;
  vidas=3;

  respuesta_correcta:number=0;
  constructor( ) { 
   
  }

  ngOnInit(): void {
  }

  generarPregunta(){
    //elegir aleatorio del 0- 19
   let pelicula_elegida = this.peliculas[Math.floor(Math.random() * this.peliculas.length)];
    this.imgPath= this.baseUrl_img+pelicula_elegida.poster_path;
    console.log(pelicula_elegida);

    this.opciones_incorrectas[this.respuesta_correcta]= pelicula_elegida.popularity;
    this.opciones_incorrectas.push( Math.floor(Math.random() * 15454545));
    this.opciones_incorrectas.push(Math.floor(Math.random() * 15454545));
    this.opciones_incorrectas.push(Math.floor(Math.random() * 15454545));
  }

  play(res:any){
    alert(res);
  }
}
