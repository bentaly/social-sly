import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WebService {

  constructor(private http: HttpClient) { }

  getTweets(token) {
    return this.http.post('api/tweets', {token: token});
  }
}
