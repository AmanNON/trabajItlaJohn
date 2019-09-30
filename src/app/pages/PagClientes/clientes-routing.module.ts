import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertarclienteComponent } from './insertarcliente/insertarcliente.component';

const routes: Routes = [{path: '', component: InsertarclienteComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
