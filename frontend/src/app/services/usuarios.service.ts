import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url:string;
  private headers: HttpHeaders;
  private token: string;

  constructor(
    private _http:HttpClient,
    private _authService: AuthService
  ) { 
    this.url = environment.API_URL;
    this.token = this._authService.getToken()
    this.headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token)
  }

  getAll(limit, page){
    return this._http.get(this.url+`usuarios?limit=${limit}&page=${page}`, {headers:this.headers})
  }

  search(parametro, valorParametro){
    return this._http.get(this.url+`usuarios/search?${parametro}=${valorParametro}`, {headers:this.headers})

    // las busquedas pueden ser de Amperaje, grupo,marca, nombre
  }

  getById(id){
    return this._http.get(this.url+`usuarios/${id}`, {headers:this.headers})
  }

  create(model){
    return this._http.post(this.url+`usuarios`,model,{headers:this.headers} )
  }
  
  update(model,id){
    return this._http.patch(this.url+`usuarios/${id}`, model,{headers:this.headers})
  }
  getOperaciones(id){
    return this._http.get(this.url+`usuarios/${id}/operaciones`, {headers:this.headers})
  }

  // router.get("", AuthMiddleWare, UsuarioController.getAll);
  //   router.get("/search", AuthMiddleWare, UsuarioController.search);
  //   router.get("/:id", AuthMiddleWare, UsuarioController.get);
  //   router.get("/:id/operaciones", AuthMiddleWare, UsuarioController.getOperaciones);
  //   router.post("", AuthMiddleWare, UsuarioController.create);
  //   router.patch("/:id", AuthMiddleWare, UsuarioController.update);
  //   router.delete("/:id", AuthMiddleWare, UsuarioController.delete);
}
