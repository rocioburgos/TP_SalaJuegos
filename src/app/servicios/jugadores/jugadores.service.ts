import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
 
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/clases/usuario/usuario';

export interface Sesiones{
  fecha:string; 
  email_user:string; 
}

@Injectable({
  providedIn: 'root'
})

export class JugadoresService {

  
  private resultadosCollection:AngularFirestoreCollection<any>;
  resultados:Observable<any[]>;
  private jugadoresCollection:AngularFirestoreCollection<Usuario>;
    items:Observable<Usuario[]>;
  private sesionesCollection:AngularFirestoreCollection<any>;
  sesiones:Observable<any[]>;
  private encuestasCollection:AngularFirestoreCollection<any>;
  encuestas:Observable<any[]>;
  constructor(private readonly afs: AngularFirestore) { 
    this.jugadoresCollection = afs.collection<Usuario>('jugadores');
    this.items = this.jugadoresCollection.valueChanges( );

    this.sesionesCollection = afs.collection<Usuario>('sesiones');
    this.sesiones = this.sesionesCollection.valueChanges();


    this.resultadosCollection = afs.collection<any>('resultados');
    this.resultados= this.resultadosCollection.valueChanges();


    this.encuestasCollection = afs.collection<any>('encuestas');
    this.encuestas= this.encuestasCollection.valueChanges();
  }

  registrarNuevoJugador(usuario:Usuario){
    this.jugadoresCollection.add(Object.assign({},usuario));
    this.registrarNuevaSesion(usuario.email);
  }

  setItemWithId(item: any, id:string) {
    return this.jugadoresCollection.doc(id).set(Object.assign({}, item));    
  }

  TraerJugadores(): Observable<any>{
    return this.jugadoresCollection.valueChanges({idField: "doc_id"});
  }

  registrarNuevaSesion(email:string){
    let date: Date = new Date();

    let fecha:string= date.getDate().toString()+'-'+ date.getMonth().toString()+ '-'+date.getFullYear().toString()
     + ' '+date.getHours().toString()+':'+ date.getMinutes().toString() ;
   // 4-8-2021 0:14

   const ses:Sesiones = {fecha: fecha,   email_user: email   };

    this.sesionesCollection.add(Object.assign({},ses));
  }


  registrarResultados(data:any){

  return  this.resultadosCollection.add(Object.assign({},data)); 
  }


  registrarEncuesta(datoUser:any){ 
    this.encuestasCollection =  this.afs.collection('encuestas');  
    return this.encuestasCollection.add(Object.assign({},datoUser)); 
  }

  traerResultados(){  
    this.resultadosCollection =  this.afs.collection('resultados');  
    return this.resultadosCollection.valueChanges(); 
  }

}
