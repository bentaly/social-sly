import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  login(user): Observable<any> {
    return this.http.post('/api/login', user);
  }

  signUp(user): Observable<any> {
    // return this.http.post('/api/test', user);
    return this.http.post('/api/signup', user);
  }

}
