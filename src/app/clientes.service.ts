import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient) {

    }
    
    //salvando dados no banco de dados 
    salvar( cliente: Cliente ) : Observable<Cliente> {
        return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente)
    }

   getCliente() : Cliente {
     let cliente : Cliente = new Cliente(); 
     cliente.nome  = "cODE";
     cliente.cpf = "3292838";
     return cliente;
   }
   
  
}
