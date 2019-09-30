import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraRoutingModule } from './calculadora-routing.module';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora.component';

@NgModule({
  declarations: [CalculadoraComponent, ],
  imports: [
    CommonModule,
    CalculadoraRoutingModule,
    FormsModule
  ]
})
export class CalculadoraModule { }
