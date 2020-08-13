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

    //editando dados do banco
      atualizar( cliente: Cliente ) : Observable<any> {
        return this.http.put<Cliente>(`http://localhost:8080/api/clientes/${cliente.id}`, cliente);
    }  

    //Listando todos clientes do banco de dados 
    getClientes() : Observable<Cliente[]> {
       return this.http.get<Cliente[]>("http://localhost:8080/api/clientes")
    }

    // editando clientes
    getClienteById(id: number) : Observable<Cliente> {
       return this.http.get<any>(`http://localhost:8080/api/clientes/${id}`)
    }

    //deletando dados no banco de dados 
    deletar( cliente: Cliente ) : Observable<any> {
      return this.http.delete<any>(`http://localhost:8080/api/clientes/${cliente.id}`);
  }  
 
  
}
