import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})

export class BitacoraService {
	private url : string;
	private token: string;
	private headers:HttpHeaders;
  constructor(

  	private _authService:AuthService,
  	private _http:HttpClient

  	) {

  		this.url = environment.API_URL;
  		this.token = this._authService.getToken();
  		this.headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token);
  	 }


  getAll(limit, page): any{
    return this._http.get(this.url+`bitacoras?limit=${limit}&page=${page}`, {headers:this.headers})
  }

  search(parametro, valorParametro){
    return this._http.get(this.url+`bitacoras/search?${parametro}=${valorParametro}`, {headers:this.headers})
  }

  operaciones(id){
    return this._http.get(this.url+`usuarios/${id}/operaciones`, {headers:this.headers})
  }
  
}
