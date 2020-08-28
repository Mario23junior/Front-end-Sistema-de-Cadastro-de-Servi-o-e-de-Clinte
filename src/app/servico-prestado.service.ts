import { Injectable } from '@angular/core';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment'
import { ServicoPrestadoBusca } from './servico-prestado/service-prestado-lista/servicoPrestadoBusca';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {
 
  apiURL:string = environment.apiURLBase + "/api/servicos-prestados"

  constructor(private http:HttpClient) { }

  salvar(ServicoPrestado: ServicoPrestado): Observable<ServicoPrestado> {
      return this.http.post<ServicoPrestado>(this.apiURL, ServicoPrestado);
  }

  buscar(nome: string, mes: number) : Observable<ServicoPrestadoBusca[]> {    
    const httpParams = new HttpParams()
    .set("nome", nome)
    .set("mes", mes ? mes.toString() : '');

     const url = this.apiURL + "?" + httpParams.toString();
      return this.http.get<any>(url);
  }

 }


