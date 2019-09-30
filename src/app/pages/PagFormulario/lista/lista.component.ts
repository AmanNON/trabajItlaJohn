import { Component, OnInit, Input } from '@angular/core';
import {Persona} from './../../structure/persona-model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() datos: Array<string> = [];
  
  public isEmpty: boolean =  false;

  constructor() {

    // this.datos.push({
    //   nombre:'juan',
    //   apellido:'perez',
    //   direccion:'santiago'
    // })
    
    // this.datos.push({
    //   nombre:'juan',
    //   apellido:'perez',
    //   direccion:'santiago'
    // })
    
    // this.datos.push({
    //   nombre:'juan',
    //   apellido:'perez',
    //   direccion:'santiago'
    // })

    

  }

  ngOnInit() {
    
  }

}

