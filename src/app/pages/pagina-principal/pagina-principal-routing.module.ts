import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { FormulaReactivoComponent } from './formula-reactivo/formula-reactivo.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:'',component: PrincipalComponent},
  {path:'formulario-reactivo',component: FormulaReactivoComponent},
  {path: 'xd', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaPrincipalRoutingModule { }
