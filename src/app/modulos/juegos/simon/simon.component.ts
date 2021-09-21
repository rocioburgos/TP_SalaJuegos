import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ServService } from 'src/app/servicios/serv/serv.service';

@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.css'],
  animations: [
    trigger('fade', [
      state('small', style({
        opacity: '0.1',
      })),
      state('large', style({
        opacity: '1',
      })),
      transition('small <=> large', animate(500))])]
})
export class SimonComponent implements OnInit {
  nivel:any;
  colorBlock: Array<Object>;
  colorSeries: Array<number> = [];
  clickMulti: boolean = true;
  constructor(public ServService: ServService) {
    this.ServService = ServService;
    this.colorBlock = ServService.colorBlock;
    this.colorSeries = ServService.colorSeries;
  }
  ngOnInit() {
   this.nivel= this.ServService.colorSeries.length;
  }
} 
