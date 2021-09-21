import { Component, OnInit } from '@angular/core';
import { ServService } from 'src/app/servicios/serv/serv.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor(public ServService: ServService) {
    this.ServService = ServService;

  }
  ngOnInit(): void {
  }

}
