import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Historial } from 'app/pages/arrayCalculadora/ArrayCalculadora';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  @Input()
  public isDanger: boolean;

  @Input()
  public isWarning: boolean;
  @Input()
  public isSuccess: boolean;
  @Input()
  public titulo: string = "";
  public number1: number; number2: number; result: number;

  RecibirInputs(n1: number) {
    this.number1 = n1
    //alert(this.number1)
  }
  RecibirInputs2(n2: number) {
    this.number2 = n2
    //alert(this.number2)
  }

  RecibirInputs3(res: number) {
    this.result = res
    //alert(this.result)
  }

  RemoverElemento(i: number) {

    if (i !== -1) {
      Historial.splice(i, 1);
    }
  }

  @Input() num1: number ;
  @Input() num2: number ;
  @Input() resultado: number ; 
  @Output()
  public notificando: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  public notificando2: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  
  calcular(operacion: string){
    if (this.num1 && this.num2){
    if (operacion =="+"){
      this.resultado=this.num1+ this.num2
    }
    else if(operacion =="-"){this.resultado=this.num1- this.num2}

    else if(operacion =="*"){this.resultado=this.num1* this.num2}

    else {this.resultado=this.num1/ this.num2}

    Historial.push({
      n1: this.num1,
      n2: this.num2,
      res: this.resultado,
      op: operacion
    })
    this.Notificar("S")
    this.Notificar2("Se ha calculado")
  }else{
    this.Notificar("D")
    this.Notificar2("No se ha calculado")
  }
  }

  ngOnInit() {
  }
  Notificar(Estado: string) {
    if (Estado == "D") {
      this.isDanger = true
      this.isSuccess = false
      this.isWarning = false
    }else  if (Estado == "W") {
      this.isDanger = false
      this.isSuccess = false
      this.isWarning = true
    } else {
      this.isDanger = false
      this.isSuccess = true
      this.isWarning = false
    }
    
  }
Notificar2(T: string){
  this.titulo=T
}
}
