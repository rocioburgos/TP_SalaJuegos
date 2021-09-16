
import { Usuario } from "../usuario/usuario";

export class Mensaje {

    remitente:string;//email y nombre de quien mando el mensaje
    destinatario:string;//email y nombre de a quien se manda el mensaje
    mensaje:string;
    diaHora:string; 

    constructor(remitente:string, destinatario:string, mensaje: string, diaHora:string){
        this.remitente= remitente;
        this.destinatario= destinatario;
        this.mensaje= mensaje;
        this.diaHora= diaHora;
    }
}
