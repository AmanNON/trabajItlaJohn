import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertarusuarioComponent } from './insertarusuario/insertarusuario.component';

const routes: Routes = [{path: '', component: InsertarusuarioComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
