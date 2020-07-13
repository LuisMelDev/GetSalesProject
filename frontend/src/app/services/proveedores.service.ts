import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

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

  getAll(limit, page): any{
    return this._http.get(this.url+`proveedores?limit=${limit}&page=${page}`, {headers:this.headers})
  }

  search(parametro, valorParametro){
    return this._http.get(this.url+`proveedores/search?${parametro}=${valorParametro}`, {headers:this.headers})

    // las busquedas pueden ser de Amperaje, grupo,marca, nombre
  }

  getById(id){
    return this._http.get(this.url+`proveedores/${id}`, {headers:this.headers})
  }

  create(model){
    return this._http.post(this.url+`proveedores`,model,{headers:this.headers} )
  }
  
  update(model,id){
    return this._http.patch(this.url+`proveedores/${id}`, model,{headers:this.headers})
  }

  getCompras(id){
    return this._http.get(this.url+`proveedores/${id}/compras`, {headers:this.headers})
  }

  // router.get("", AuthMiddleWare, ProveedorController.getAll);
  //   router.get("/search", AuthMiddleWare, ProveedorController.search);
  //   router.get("/:id", AuthMiddleWare, ProveedorController.get);
  //   router.get("/:id/compras", AuthMiddleWare, ProveedorController.getCompras);
  //   router.post("", AuthMiddleWare, ProveedorController.create);
  //   router.patch("/:id", AuthMiddleWare, ProveedorController.update);
  //   router.delete("/:id", AuthMiddleWare, ProveedorController.delete);
}
