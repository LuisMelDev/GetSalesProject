import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.prod";
import { Usuario } from '../models/usuario.model'


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url: string = environment.url;
  

  constructor(
    private _http:HttpClient

  ) { }


  login(user): Observable<any> {
    let usuario = JSON.stringify(user)
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url+'auth/signin',usuario, {headers});
  }

  getIdentity(){
    let identity = JSON.parse(localStorage.getItem('usuario'));

    return (identity && identity != null && identity != undefined && identity != "undefined") ? identity : null;
    }
 
  getToken(){
    let token = localStorage.getItem('token');

    return (token && token != null && token != undefined && token != "undefined") ? token : null;
  }

  logout(){
    localStorage.clear()
  }

  get(id){ 
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url+`usuarios/${id}`,{headers})
  }
  getAll(pageNum){
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url+`usuarios/?pageNum=${pageNum}`,{headers})
  }
  search(nombre){
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url+`usuarios/search?nombre=${nombre}`,{headers})
  }

  createUser(user){
    let usuario = JSON.stringify(user)
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url+'auth/signup',usuario, {headers});
  }

  updateUser(user,id){
    let usuario = JSON.stringify(user)
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.patch(this.url+`usuarios/${id}`,usuario, {headers}); 
  }


  }



  // DeleteUser(user){
  //   let usuario = JSON.stringify(user)
  //   let headers = new HttpHeaders().set('Content-Type', 'application/json');

  //   return this._http.delete(this.url+'auth/signin');
  // }
  


