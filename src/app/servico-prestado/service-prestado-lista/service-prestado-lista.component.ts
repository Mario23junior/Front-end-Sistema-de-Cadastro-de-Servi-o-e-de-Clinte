import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-prestado-lista',
  templateUrl: './service-prestado-lista.component.html',
  styleUrls: ['./service-prestado-lista.component.css']
})
export class ServicePrestadoListaComponent implements OnInit {

  nome: String;
  mes: number;
  meses:number[];


  constructor() { 
    this.meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12]
  }

  ngOnInit(): void {
  }
  
  consultar() {
    console.log(this.nome, this.mes)
  }
}
