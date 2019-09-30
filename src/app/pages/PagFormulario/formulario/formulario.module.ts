import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioComponent } from './formulario.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from '../lista/lista.component';

@NgModule({
  declarations: [FormularioComponent, ListaComponent],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    FormsModule
  ]
})
export class FormularioModule { }
