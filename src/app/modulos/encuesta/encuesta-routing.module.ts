import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { UsuarioLogueadoGuard } from 'src/app/guard/usuario-logueado.guard';    
import { EncuestaComponent } from './encuesta/encuesta.component';

 

const routes: Routes = [ 
  {
    path: '',
    component: EncuestaComponent ,
    canActivate: [UsuarioLogueadoGuard] 
     
  },
  {path:'formEncuesta', component: EncuestaComponent , pathMatch:'full'}
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncuestaRoutingModule { }
