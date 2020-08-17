import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';
import { environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient) {}
    
  apiURL:string = environment.apiUrlBase + '/api/clientes';

    //salvando dados no banco de dados 
    salvar( cliente: Cliente ) : Observable<Cliente> {
        return this.http.post<Cliente>( `${this.apiURL}`, cliente)
    }  

    //editando dados do banco
      atualizar( cliente: Cliente ) : Observable<any> {
        return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente);
    }  

    //Listando todos clientes do banco de dados 
    getClientes() : Observable<Cliente[]> {
       return this.http.get<Cliente[]>(this.apiURL)
    }

    // editando clientes
    getClienteById(id: number) : Observable<Cliente> {
       return this.http.get<any>(`${this.apiURL}/${id}`)
    }

    //deletando dados no banco de dados 
    deletar( cliente: Cliente ) : Observable<any> {
      return this.http.delete<any>(`${this.apiURL}/${cliente.id}`);
  }  
 
  
}
