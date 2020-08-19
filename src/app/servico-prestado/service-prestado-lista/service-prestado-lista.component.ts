import { Component, OnInit } from '@angular/core';
import {ServicoPrestadoBusca} from './servicoPrestadoBusca';
import {ServicoPrestadoService}  from '../../servico-prestado.service'


@Component({
  selector: 'app-service-prestado-lista',
  templateUrl: './service-prestado-lista.component.html',
  styleUrls: ['./service-prestado-lista.component.css']
})
export class ServicePrestadoListaComponent implements OnInit {

  nome: string;
  mes: number;
  meses: number[];
  lista: ServicoPrestadoBusca[];

  constructor( 
  private service: ServicoPrestadoService
  ) { 
    this.meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12]
  }

  ngOnInit(): void {
  }
  
  consultar() {
     this.service
     .buscar(this.nome, this.mes)
     .subscribe(response => this.lista = response);
   }
}
