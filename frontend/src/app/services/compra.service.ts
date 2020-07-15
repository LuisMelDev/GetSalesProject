import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AuthService } from "./auth.service";
@Injectable({
    providedIn: 'root'
  })
export class CompraService {

    private url:string;
    private headers: HttpHeaders;
    private token: string;

    constructor(
        private _http:HttpClient,
        private _authService:AuthService
    ){
        this.url = environment.API_URL+'compras';
    this.token = this._authService.getToken()
    this.headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token)
    }


    getAll(limit, page) {
        return this._http.get(this.url + `?limit=${limit}&page=${page}`, {
          headers: this.headers,
        });
      }
    
      search(parametro, valorParametro) {
        return this._http.get(
          this.url + `/search?${parametro}=${valorParametro}`,
          { headers: this.headers }
        );
    
        // las busquedas pueden ser de Amperaje, grupo,marca, nombre
      }
    
      getById(id) {
        return this._http.get(this.url + `/${id}`, {
          headers: this.headers,
        });
      }
    
      create(model) {
        return this._http.post(this.url , model, {
          headers: this.headers,
        });
      }

      delete(id){
        return this._http.delete(this.url + `/${id}`, {
            headers: this.headers,
          });
      }

    // router.get("", AuthMiddleWare, CompraController.getAll);
    // router.get("/search", AuthMiddleWare, CompraController.search);
    // router.get("/:id", AuthMiddleWare, CompraController.get);
    // router.get("/:id/proveedor", AuthMiddleWare, CompraController.getProveedor);
    // router.post("", AuthMiddleWare, CompraController.create);
    // router.patch("/:id", AuthMiddleWare, CompraController.update);
    // router.delete("/:id", AuthMiddleWare, CompraController.delete);
    
}