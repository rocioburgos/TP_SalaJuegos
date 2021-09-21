import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

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
