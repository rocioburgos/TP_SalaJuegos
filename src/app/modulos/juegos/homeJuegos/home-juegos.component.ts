import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-juegos',
  templateUrl: './home-juegos.component.html',
  styleUrls: ['./home-juegos.component.css']
})
export class HomeJuegosComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  ahorcado(){
    this.router.navigate(['juegos/ahorcado']);
  }

  preguntados(){
    this.router.navigate(['juegos/preguntados']);
  }

  mayorMenor(){
    this.router.navigate(['juegos/mayormenor']);
  }

  simon(){
    this.router.navigate(['juegos/simon']);
  }
}
