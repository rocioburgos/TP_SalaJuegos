import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 import { Usuario } from './../../clases/usuario/usuario';

 import { AuthService } from './../../servicios/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 // usuario:Usuario;
  clave:string;
  email:string;

  show_error:boolean=false; //
  descripcion_error:string='';
  constructor(
    private  authSrv: AuthService
    ,private router: Router

  ) { 
    
    this.email= '';
    this.clave='';
  }

  ngOnInit(): void {
  }


  async loginUser(){
 
    try {
      const user=  await this.authSrv.loginUser(this.email, this.clave);
      if(user){

       this.router.navigate(['/home']);
    } 

    } catch (error) {
      this.show_error= true;
      this.descripcion_error='La clave o email no coinciden. Vuelva a intentar.'
      console.log(error);
    }
  
  }

  autocompletar(){
    this.email='pepe@gmail.com';
    this.clave= '123456';
  }

}
