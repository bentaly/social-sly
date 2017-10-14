import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUser(): Observable<any> {
    return this.http.get('/api/profile');
  }

  logInWithFacebook() {
    // return this.http.get('/auth/facebook');
    return this.http.get('/api/auth/facebook');
    // return this.http.post('/api/auth/facebook', {});
  }
}
