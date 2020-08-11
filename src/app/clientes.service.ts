import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient) {}
    
    //salvando dados no banco de dados 
    salvar( cliente: Cliente ) : Observable<Cliente> {
        return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente)
    }  

    // Listando clientes do banco de dados 
    //getClientes() : Observable<Cliente[]> {
    //   return null;
    //}

    getClientes() : Cliente[]{
       let cliente = new Cliente();
       cliente.id = 1;
       cliente.nome = "Fulano";
       cliente.cpf = '34343434343';
       cliente.dataCadastro = '18/04/2020';
       return[cliente]

    }
  
}
