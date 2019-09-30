import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import {UsuarioActivo} from './../../pages/Almacen';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

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
      clave: ['',[Validators.required]]
    });
   }

  ngOnInit() {
  }

  public authenticate() {
    if (this.form.valid){
      
      this.authService.getSessionToken(
        this.form.get("usuario").value,
        this.form.get("clave").value,
        ).subscribe((data)=>{
          UsuarioActivo:this.form.get("usuario").value
            if (data) {
              alert(data["response"])
              this.authService.setTokenInStore(data["response"])
              this.errorMsg = ""
              
              this.route.navigate(["/principal"])
              

            } else {
              
              this.errorMsg = "Usuario o clave invalida";
              alert(this.errorMsg);
            }
        })
    } else {
      this.form.markAllAsTouched()
    }
  }

  
  
  public  getUsuario() : AbstractControl {
    return this.form.get("usuario");
  }
  
  public getClave() : AbstractControl {
    return this.form.get("clave");
  }
}
