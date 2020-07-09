import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private url: string = environment.API_URL;
  private token: string;
  private headers: HttpHeaders;

  constructor(
    private _authService : AuthService,
    private _http : HttpClient
  ) { 
    this.token = this._authService.getToken()
    this.headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token)
  }

  getAll(limit, page): any{
    return this._http.get(this.url+`clientes?limit=${limit}&page=${page}`, {headers:this.headers})
  }

  search(parametro, valorParametro){
    return this._http.get(this.url+`clientes/search?${parametro}=${valorParametro}`, {headers:this.headers})
  }

  getById(id){
    return this._http.get(this.url+`clientes/${id}`, {headers:this.headers})
  }
  getFacturas(id){
    return this._http.get(this.url+`clientes/${id}/facturas`, {headers:this.headers})
  }

  create(model){
    return this._http.post(this.url+`clientes`,model,{headers:this.headers} )
  }
  
  update(model,id){
    return this._http.patch(this.url+`clientes/${id}`, model,{headers:this.headers})
  }
  
}
