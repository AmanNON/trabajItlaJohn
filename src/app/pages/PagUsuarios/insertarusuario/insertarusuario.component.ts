import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { AuthService } from '../../../layouts/auth.service';
import { Router } from '@angular/router';
import {UsuarioActivo} from './../../Almacen'
import {Usuarios} from '../../structure/persona-model'

@Component({
  selector: 'app-insertarusuario',
  templateUrl: './insertarusuario.component.html',
  styleUrls: ['./insertarusuario.component.css']
})
export class InsertarusuarioComponent implements OnInit {
public datos: Array<Usuarios>=[];
  public form: FormGroup;
  public errorMsg: string ="";
  public UsuarioActivos=UsuarioActivo;
  constructor(
    private fb: FormBuilder, 
    public authService: AuthService,
    public route: Router
    ) {
      
     // this.datos.push()
    this.form = this.fb.group({
      nombre: ['',[Validators.required]],
      apellido: ['',[Validators.required]],
      usuario: ['',[Validators.required]],
      correo: ['',[Validators.required]],
      clave: ['',[Validators.required]],
    });
   }

  ngOnInit() {
  }

  public insertar() {
  //  if (this.form.valid){
     // alert(this.form.get("nombre").value)
      this.authService.InsertarUsuario(
        this.form.get("nombre").value,
        this.form.get("apellido").value,
        this.form.get("usuario").value,
        this.form.get("correo").value,
        this.form.get("clave").value,
       
        ).subscribe((data)=>{
          
          alert("Usuario guardado "+ this.form.get("usuario").value)
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

  public  getUsuario() : AbstractControl {
    return this.form.get("usuario");
  }

  public  getCorreo() : AbstractControl {
    return this.form.get("correo");
  }

  public  getClave() : AbstractControl {
    return this.form.get("clave");
  }

}
