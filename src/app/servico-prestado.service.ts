import { Injectable } from '@angular/core';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {
 
  apiURL:string = environment.apiUrlBase + "/api/servicos-prestados"

  constructor(private http:HttpClient) { }

  salvar(ServicoPrestado: ServicoPrestado): Observable<ServicoPrestado> {
      return this.http.post<ServicoPrestado>(this.apiURL, ServicoPrestado);
  }
}
