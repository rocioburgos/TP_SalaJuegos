import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/clases/mensaje/mensaje';
import { MensajeService } from 'src/app/servicios/mensaje/mensaje.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {


  remitente:string='Natalia';
  destinatario:string='Pepe';//el usuario Actual, depende de si estoy mandando o recibiendo mensajes
  fecha:string='12 Sept';
  hora:string='11:11 AM';
  //mensajes?:Mensaje;
  mensaje:string='';
  mensajeEnviar:string='';
  constructor(private msjSrv:MensajeService) { }

  ngOnInit(): void {
  }

   mostrarMensajesDeUnUsuario(){
   //mostrar los mensajes en la conversacion de 
   //un usuario especifico, mostrar en orden la conversacion
   //con los ultimos mensajes
  }


  
  mostrarRecientes(){
   //muestro los 5 recientes chats con sus ultimos mensaje
  //para cargar el area de recientes
  }


  mandarMensaje(){
     //tomar -mensajeEnviar -remitente (va a ser el detinatario) - mi usuario actual y la fecha y hora
      //y mandarla a firebase
      
      try {
        if(this.mensajeEnviar!='' && this.mensajeEnviar!= null && this.mensajeEnviar != ' '){
          let mensaje:Mensaje= new Mensaje('pepe@gmail.com','pepito@gmail.com',"Holisss",this.horario());
          this.msjSrv.nuevoMensaje(mensaje);  
        }
 
      } catch (error) {
        
      }
  }

  horario():string{
    let date: Date = new Date();
    let fecha:string= date.getDate().toString()+'-'+ date.getMonth().toString()+ '-'+date.getFullYear().toString()
     + ' '+date.getHours().toString()+':'+ date.getMinutes().toString() ;
     return fecha;
  }

}
