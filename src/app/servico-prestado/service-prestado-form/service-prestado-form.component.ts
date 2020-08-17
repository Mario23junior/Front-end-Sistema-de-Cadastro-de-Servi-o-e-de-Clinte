import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/cliente';
import { ClientesService} from '../../clientes.service';
import { ServicoPrestado } from '../servicoPrestado';
import { ServicoPrestadoService} from '../../servico-prestado.service';

@Component({
  selector: 'app-service-prestado-form',
  templateUrl: './service-prestado-form.component.html',
  styleUrls: ['./service-prestado-form.component.css']
})
export class ServicePrestadoFormComponent implements OnInit {

 clientes: Cliente[] = [];
 servico: ServicoPrestado;

  constructor( 
     private clienteService:ClientesService,
     private service:ServicoPrestadoService
   ) {
       this.servico = new ServicoPrestado();
    }

  ngOnInit(): void {
     this.clienteService
     .getClientes()
     .subscribe(response => this.clientes = response);
  }

  onSubmit() {
     this.service
     .salvar(this.servico)
     .subscribe(response => {
        console.log(this.clienteService)
     })
  }

}
