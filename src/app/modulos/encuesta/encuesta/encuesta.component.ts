import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JugadoresService } from 'src/app/servicios/jugadores/jugadores.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  formulario:FormGroup;
  completarForm= true;
  constructor(private fb:FormBuilder, private jugadoresSrv:JugadoresService) {
    this.formulario= fb.group({ 
      nombre: ['', [Validators.required] ],
      apellido: ['', [Validators.required]], 
      edad: ['',[Validators.required, Validators.min(18), Validators.max(99)]],
      tel: ['', [Validators.required,  Validators.pattern('^[0-9]*$'),  Validators.maxLength(10), Validators.minLength(10) ]]
    });
   }

  ngOnInit(): void {
  }

  aceptar(){
    const datos = this.formulario.value; 
    this.completarForm= false;
    this.jugadoresSrv.registrarEncuesta(datos);
  }
 
 

}
