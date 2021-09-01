import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from 'src/app/clases/usuario/usuario';
import { AuthService } from 'src/app/servicios/auth.service';
 

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  clave:string;
  nombre:string;
  email:string;
 
  constructor(
    private router:Router
    ,private authSrv:AuthService 
    ) {  
    this.clave='';
    this.nombre='';
    this.email='';
  }

  ngOnInit(): void {
  }

  async onRegistro(){
   try {
     const user= await this.authSrv.registerUser(this.email, this.clave);
    
     if(user){ 
      alert(user.email);

      this.router.navigate(['/home']);
    } 

    } catch (error) {
      console.log(error);
    }
  
  }

}
