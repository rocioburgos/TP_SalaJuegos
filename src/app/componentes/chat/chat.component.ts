import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  remitente:string='Natalia';
  fecha:string='12 Sept';
  hora:string='11:11 AM';
  mensaje:string='Test, which is a new approach to have all solutions astrology under one roof';
  constructor() { }

  ngOnInit(): void {
  }

}
