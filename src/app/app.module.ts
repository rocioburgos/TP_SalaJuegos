import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { QuiensoyComponent } from './componentes/quiensoy/quiensoy.component';
import { RegistroComponent } from './componentes/registro/registro.component';


import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import {firebase} from '../environments/firebase';
import { AuthService } from './servicios/Auth/auth.service';
import { JugadoresService } from './servicios/jugadores/jugadores.service';
import { ErrorComponent } from './componentes/error/error.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { AhorcadoComponent } from './componentes/juegos/ahorcado/ahorcado.component';
import { HttpClientModule } from '@angular/common/http';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { MayormenorComponent } from './componentes/juegos/mayormenor/mayormenor.component';
 



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuiensoyComponent,
    RegistroComponent,
    ErrorComponent,
    NavbarComponent,
    ChatComponent,
    AhorcadoComponent,
    JuegosComponent,
    MayormenorComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,
    AngularFirestoreModule ,
    HttpClientModule
 
  ],
  providers: [AuthService
    , JugadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
