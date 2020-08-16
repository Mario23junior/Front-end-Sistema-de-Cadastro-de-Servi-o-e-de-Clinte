import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ServicoPrestadoRoutingModule } from './servico-prestado-routing.module';
import { ServicePrestadoFormComponent } from './service-prestado-form/service-prestado-form.component';
import { ServicePrestadoListaComponent } from './service-prestado-lista/service-prestado-lista.component';
 
@NgModule({
  declarations: [
    ServicePrestadoFormComponent,
    ServicePrestadoListaComponent
  ],

  imports: [
    CommonModule,
    ServicoPrestadoRoutingModule,
    FormsModule,
    RouterModule
  ], exports: [
      ServicePrestadoFormComponent,
      ServicePrestadoListaComponent
  ]
})
export class ServicoPrestadoModule { }
