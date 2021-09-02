import { Injectable } from '@angular/core';
 
import 'rxjs/add/operator/switchMap';
 

import { AngularFireAuth  } from '@angular/fire/compat/auth';
@Injectable()


export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
    ) {}
 

    public async registerUser(email:string, clave:string):Promise<any>{
    
           const resultado= await this.afAuth.createUserWithEmailAndPassword(email, clave);
           return resultado;
     
    }


    public async loginUser(email:string, clave:string):Promise<any>{
      const resultado =  this.afAuth.signInWithEmailAndPassword(email, clave);
     return  resultado;
    }

     
  
  
}
