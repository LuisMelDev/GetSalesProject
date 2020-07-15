import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class PrecioDolarService {
  private url: string;

  constructor(private _http: HttpClient) {
    this.url = 'https://s3.amazonaws.com/dolartoday/data.json';
  }

  get(){
    return this._http.get(this.url).pipe(
        map((response: any) => {
          const dolarPrecio = response.USD.promedio_real;
          // console.log(dolarPrecio);
          if (dolarPrecio) {
            localStorage.setItem("precioDolar", JSON.stringify(dolarPrecio));
          }
        })
      )
  }

  precio(){
      let precio = localStorage.getItem("precioDolar")
    return (precio) ? precio: '200000';
  }

}
