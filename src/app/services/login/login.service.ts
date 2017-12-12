import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(user): Observable<any> {
    return this.http.post('/api/login', user);
  }

  signUp(user): Observable<any> {
    // return this.http.post('/api/test', user);
    return this.http.post('/api/signup', user);
  }

}
