import { HttpClient,HttpHeaders } from "@angular/common/http";
export class BaseService {
    constructor(
        private url:string,
        private headers:HttpHeaders,
        private _http:HttpClient
    ){
        this.url = url;
        this.headers = headers;
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
        return this._http.post(this.url +, model, {
          headers: this.headers,
        });
      }
    
      update(model, id) {
        return this._http.patch(this.url + `/${id}`, model, {
          headers: this.headers,
        });
      }
}