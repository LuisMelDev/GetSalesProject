import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private url:string;
  private headers: HttpHeaders;
  private token: string;

  constructor(
    private _http:HttpClient,
    private _authService: AuthService
  ) { 
    this.url = environment.API_URL+'roles';
    this.token = this._authService.getToken()
    this.headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token)
  }

  getAll(limit = 1000, page=1){
    return this._http.get(this.url+`?limit=${limit}&page=${page}`, {headers:this.headers})
  }

  search(parametro, valorParametro){
    return this._http.get(this.url+`/search?${parametro}=${valorParametro}`, {headers:this.headers})

  }

  getById(id){
    return this._http.get(this.url+`/${id}`, {headers:this.headers})
  }

  create(model){
    return this._http.post(this.url,model,{headers:this.headers} )
  }
  
  update(model,id){
    return this._http.patch(this.url+`/${id}`, model,{headers:this.headers})
  }
  getUsuarios(id){
    return this._http.get(this.url+`/${id}/usuarios`, {headers:this.headers})
  }

//   router.get("", AuthMiddleWare, RolController.getAll);
//     router.get("/search", AuthMiddleWare, RolController.search);
//     router.get("/:id", AuthMiddleWare, RolController.get);
//     router.get("/:id/usuarios", AuthMiddleWare, RolController.getUsuarios);
//     router.post("", AuthMiddleWare, RolController.create);
//     router.patch("/:id", AuthMiddleWare, RolController.update);
//     router.delete("/:id", AuthMiddleWare, RolController.delete);
}
