import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  private url: string = "/api/backend/public/login/authenticate";

  private urlInsertarcli: string = "/api/backend/public/clientes/insertar"
  private urlEliminarcli: string = "/api/backend/public/clientes/eliminar"
  private urlInsertaruser: string = "/api/backend/public/usuarios/insertar"
  private urlEliminaruser: string = "/api/backend/public/usuarios/eliminar"
  private urlTraeruser: string = "/api/backend/public/usuarios/traerusuarios"
  private urlInsertarclilog: string = "/api/backend/public/clientes/insertarlog"

  constructor(private http: HttpClient, private route: Router) {

    
   }

  // public getSessionToken(usuario: string, clave: string):Observable<any> {
  //   //return this.http.post(this.url, {user: {usuario:usuario,clave:clave}})
  //   return this.http.get("/api/backend/public/index.php?/welcome/get_users")
  //   .pipe(map((data:any[]) => data.find(item=> item["clave"] === clave && item["usuario"]===usuario)))
  // }

  public getSessionToken(usuario: string, clave: string):Observable<any> {
      //return this.http.post(this.url, {user: {usuario:usuario,clave:clave}})
    //return this.http.get(`http://localhost/backend/public/index.php?/welcome/get_users?clave=${clave}&usuario=${usuario}`)
      let params: FormData = new FormData()

      params.append("usuario", usuario);
      params.append("password", clave);
      
      return this.http.post(this.url,params)
  }  

  public InsertarCliente(nombre: string, apellido: string,cedula: string, direccion: string,estadocivil: string):Observable<any> {
    //return this.http.post(this.url, {user: {usuario:usuario,clave:clave}})
  //return this.http.get(`http://localhost/backend/public/index.php?/welcome/get_users?clave=${clave}&usuario=${usuario}`)
    let params: FormData = new FormData()

    params.append("nombre", nombre);
    params.append("apellido", apellido);
    params.append("cedula", cedula);
    params.append("direccion", direccion);
    params.append("estadocivil", estadocivil);
    return this.http.post(this.urlInsertarcli,params)
}  




public InsertarUsuario(nombre: string, apellido: string,usuario: string, correo: string,clave: string):Observable<any> {
  //return this.http.post(this.url, {user: {usuario:usuario,clave:clave}})
//return this.http.get(`http://localhost/backend/public/index.php?/welcome/get_users?clave=${clave}&usuario=${usuario}`)
  let params: FormData = new FormData()

  params.append("nombre", nombre);
  params.append("apellido", apellido);
  params.append("usuario", usuario);
  params.append("correo", correo);
  params.append("clave", clave);
  return this.http.post(this.urlInsertaruser,params)
} 








  public setTokenInStore(token: string) {
    localStorage.setItem("token",token)
  }

  public getTokenInStore() {
    return localStorage.getItem("token")

    // token esta en base64 para decode usar atob
    // para convertir a objecto JSON.parse
  }

  public logout() {
    localStorage.removeItem("token")
    this.route.navigate(["/auth"])
  }
  isLogin(){
    if (localStorage.getItem("token")){
      return true;
    }
    return false;
  }
}
