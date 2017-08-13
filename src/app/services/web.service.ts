import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

@Injectable()
export class WebService {

  constructor(private http: Http) { }

  getWebpage(url) {
    return this.http.get(url);
    //.map(res => res.json());
  }

  getTweets() {
    return this.getWebpage('/api/posts');
  }

}