import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';
import { environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  
  apiURL:string = environment.apiURLBase + '/api/clientes';
  
  constructor( private http: HttpClient) {}
    //salvando dados no banco de dados 
    salvar( cliente: Cliente ) : Observable<Cliente> {
      const tokenString = localStorage.getItem("access_token")
      const token = JSON.parse(tokenString)
      const headers = {
        'Authorization' : 'Bearer' + token.access_token
      }
        return this.http.post<Cliente>( `${this.apiURL}`, cliente, {headers})
    }  

    //editando dados do banco
      atualizar( cliente: Cliente ) : Observable<any> {
        return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente);
    }  

    //Listando todos clientes do banco de dados 
    getClientes() : Observable<Cliente[]> {
      const tokenString = localStorage.getItem("access_token")
      const token = JSON.parse(tokenString)
      const headers = {
        'Authorization' : 'Bearer' + token.access_token
      } 
       return this.http.get<Cliente[]>(this.apiURL, {headers});
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
