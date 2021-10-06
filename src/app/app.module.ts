import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {firebase} from '../environments/firebase';
import { AuthService } from './servicios/Auth/auth.service';
import { JugadoresService } from './servicios/jugadores/jugadores.service';
import { HttpClientModule } from '@angular/common/http';    
import { NavbarComponent } from './modulos/navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';   
@NgModule({
  declarations: [
    AppComponent   ,
    NavbarComponent, 
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,
    AngularFirestoreModule ,
    HttpClientModule ,  
  ],  
 exports: [BrowserAnimationsModule],
  providers: [
    AuthService
    , JugadoresService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
