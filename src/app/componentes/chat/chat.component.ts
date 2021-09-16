import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/clases/mensaje/mensaje';
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
  mensaje:string='Test, which is a new approach to have all solutions astrology under one roof';
  mensajeEnviar:string='';
  constructor() { }

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
  }
}
