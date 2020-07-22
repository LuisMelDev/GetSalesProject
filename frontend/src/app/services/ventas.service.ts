import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AuthService } from "./auth.service";
@Injectable({
    providedIn: 'root'
  })
export class VentasService {

    private url:string;
    private headers: HttpHeaders;
    private token: string;

    constructor(
        private _http:HttpClient,
        private _authService:AuthService
    ){
        this.url = environment.API_URL+'facturas';
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

      getByFecha(year,mes:any = '',dia:any = '') {
        return this._http.get(this.url + `/date?dia=${dia}&mes=${mes}&año=${year}`, {
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
  

    //   router.get("", AuthMiddleWare, FacturaController.getAll);
    //   router.get("/search", AuthMiddleWare, FacturaController.search);
    //   router.get("/:id", AuthMiddleWare, FacturaController.get);
    //   router.get("/:id/cliente", AuthMiddleWare, FacturaController.getCliente);
    //   router.post("", AuthMiddleWare, FacturaController.create);
    //   router.patch("/:id", AuthMiddleWare, FacturaController.update);
    //   router.delete("/:id", AuthMiddleWare, FacturaController.delete);
    
}