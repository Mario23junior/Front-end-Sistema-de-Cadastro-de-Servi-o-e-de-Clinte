import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicePrestadoFormComponent } from './service-prestado-form/service-prestado-form.component';
import { ServicePrestadoListaComponent } from './service-prestado-lista/service-prestado-lista.component';
import { LayoutComponent } from '../layout/layout.component';
 
const routes: Routes = [
  {path: 'servicos-prestados', component: LayoutComponent, children:[
    {path: 'form', component: ServicePrestadoFormComponent},
    {path: 'lista', component: ServicePrestadoListaComponent},
    {path: '', redirectTo : '/servicos-prestados/lista', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ServicoPrestadoRoutingModule { }
