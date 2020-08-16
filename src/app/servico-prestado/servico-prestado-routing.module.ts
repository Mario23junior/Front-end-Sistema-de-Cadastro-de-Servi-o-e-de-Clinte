import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicePrestadoFormComponent } from './service-prestado-form/service-prestado-form.component';
import { ServicePrestadoListaComponent } from './service-prestado-lista/service-prestado-lista.component';
 
const routes: Routes = [
  {path: 'servico-prestado-form', component: ServicePrestadoFormComponent},
  {path: 'servico-prestado-listagem', component: ServicePrestadoListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ServicoPrestadoRoutingModule { }
