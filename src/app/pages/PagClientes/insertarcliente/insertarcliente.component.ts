import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { AuthService } from '../../../layouts/auth.service';
import { Router } from '@angular/router';
import {UsuarioActivo} from './../../Almacen'
@Component({
  selector: 'app-insertarcliente',
  templateUrl: './insertarcliente.component.html',
  styleUrls: ['./insertarcliente.component.css']
})
export class InsertarclienteComponent implements OnInit {

  public form: FormGroup;
  public errorMsg: string ="";
  public UsuarioActivos=UsuarioActivo;
  constructor(
    private fb: FormBuilder, 
    public authService: AuthService,
    public route: Router
    ) {
    this.form = this.fb.group({
      usuario: ['',[Validators.required]],
      clave: ['',[Validators.required]],
      nombre: ['',[Validators.required]],
      apellido: ['',[Validators.required]],
      direccion: ['',[Validators.required]],
      cedula: ['',[Validators.required]],
      estadocivil: ['',[Validators.required]],
      id: ['',[Validators.required]],
    });
   }

  ngOnInit() {
  }

  public insertar() {
  //  if (this.form.valid){
     // alert(this.form.get("nombre").value)
      this.authService.InsertarCliente(
        this.form.get("nombre").value,
        this.form.get("apellido").value,
        this.form.get("cedula").value,
        this.form.get("direccion").value,
        this.form.get("estadocivil").value,
       
        ).subscribe((data)=>{
          this.form.reset()
         
            // if (data) {
            //   //this.authService.setTokenInStore(data["response"])
            //   this.errorMsg = ""
            //   this.route.navigate(["/principal"])
              

            // } else {
              
            //   this.errorMsg = "Usuario o clave invalida";
            //   alert(this.errorMsg);
            // }
        })
      
    // } else {
    //   this.form.markAllAsTouched()
    // }
  }

  
     
  

  
  
  public  getNombre() : AbstractControl {
    return this.form.get("nombre");
  }
  
  public  getApellido() : AbstractControl {
    return this.form.get("apellido");
  }

  public  getCedula() : AbstractControl {
    return this.form.get("cedula");
  }

  public  getDireccion() : AbstractControl {
    return this.form.get("direccion");
  }

  public  getEstadoCivil() : AbstractControl {
    return this.form.get("estadocivil");
  }
  public  getId() : AbstractControl {
    return this.form.get("id");
  }
}

