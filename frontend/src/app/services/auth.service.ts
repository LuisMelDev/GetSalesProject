import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url:string


  constructor(
    private _http : HttpClient
  ) {
    this.url =environment.API_URL
   }

  login(model: any):any{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

   return this._http.post(this.url+'auth/signin',model,{headers}).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem("token", user.token);
          localStorage.setItem("user", JSON.stringify(user.user));
        }
      })
    )
  }

  isLoggedIn() {
    const token = localStorage.getItem("token");
    let user = localStorage.getItem("user");

    return token !== null
  }

  logout() {
    let token = this.getToken();
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);
    
    return this._http.post(this.url+'auth/signout',{hela:'hola'},{headers}).pipe(
      map((response:any)=>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      })
    );
  }

  getIdentity(): any{
    let user = JSON.parse(localStorage.getItem("user"));
    return user 
  }
  getToken(): any{
    let token = localStorage.getItem("token");
    return token 
  }

}
