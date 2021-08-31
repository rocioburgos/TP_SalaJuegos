import { Injectable } from '@angular/core';
 
import 'rxjs/add/operator/switchMap';
 

import { AngularFireAuth  } from '@angular/fire/compat/auth';
@Injectable()
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
    ) {}
 

    async registerUser(email:string, clave:string){
    
           const resultado= await this.afAuth.createUserWithEmailAndPassword(email, clave);
           return resultado;
     
    }
  
  
}
