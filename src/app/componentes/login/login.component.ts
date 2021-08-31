import { Component, OnInit } from '@angular/core';
 import { Usuario } from './../../clases/usuario/usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 // usuario:Usuario;
  clave:string;
  email:string;


  constructor() { 
    
    this.email= '';
    this.clave='';
  }

  ngOnInit(): void {
  }

}
