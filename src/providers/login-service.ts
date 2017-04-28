import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

    constructor(public http: Http) { }
    login(username: string, password: string): Observable<{ success: boolean, user: any }> {
    
    const body = { usuario: username, contraseña: password };
    return this.http.post("https://test-cristian-usuarios.herokuapp.com/users/singin", body).map((response) => {
      return response.json();
    }).catch((err) => {
      return Observable.throw(err);
    });
  }
    
}