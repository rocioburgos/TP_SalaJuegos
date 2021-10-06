import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { UsuarioLogueadoGuard } from 'src/app/guard/usuario-logueado.guard';    
import { EncuestaComponent } from './encuesta/encuesta.component';

const routes: Routes = [
  {path: '',  component: EncuestaComponent, canActivate:[UsuarioLogueadoGuard] }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncuestaRoutingModule { }
