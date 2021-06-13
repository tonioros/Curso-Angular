import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit {

  constructor() { }

  saludos: string = "HOLA ESTO SALUDA A ";
  numeroSaludos: number = 23;

  ngOnInit(): void {
  }

}
