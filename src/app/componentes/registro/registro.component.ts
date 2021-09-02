import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from 'src/app/clases/usuario/usuario';
import { AuthService } from 'src/app/servicios/Auth/auth.service';
import { JugadoresService } from 'src/app/servicios/jugadores/jugadores.service';
 

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
    ,private jugadoresSrv:JugadoresService
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
 
      let uid='';
      let usuario= new Usuario( uid, this.nombre, this.email, this.clave);
      this.jugadoresSrv.registrarNuevoJugador(usuario);
      this.router.navigate(['/home']);
    } 

    } catch (error) {
      console.log(error);
    }
  
  }

}
