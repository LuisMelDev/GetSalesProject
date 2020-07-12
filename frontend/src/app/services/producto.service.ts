import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private url: string;
  private headers: HttpHeaders;
  private token: string;

  constructor(private _http: HttpClient, private _authService: AuthService) {
    this.url = environment.API_URL+'productos';
    this.token = this._authService.getToken();
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.token);
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
    return this._http.post(this.url, model, {
      headers: this.headers,
    });
  }

  update(model, id) {
    return this._http.patch(this.url + `/${id}`, model, {
      headers: this.headers,
    });
  }

  // router.get("", AuthMiddleWare, ProductoController.getAll);
  // router.get("/search", AuthMiddleWare, ProductoController.search);
  // router.get("/:id", AuthMiddleWare, ProductoController.get);
  // router.post("", AuthMiddleWare, ProductoController.create);
  // router.patch("/:id", AuthMiddleWare, ProductoController.update);
  // router.delete("/:id", AuthMiddleWare, ProductoController.delete);
}
