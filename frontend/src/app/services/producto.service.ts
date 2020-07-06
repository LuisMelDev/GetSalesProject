import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  public url: string = environment.url;
  constructor(private _http: HttpClient) {}

  searchWithNombre(nombre) {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('authorization', token);
    return this._http.get(this.url + `producto/search?nombre=${nombre}`, {
      headers
    });
  }
}
