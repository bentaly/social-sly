import { Component } from '@angular/core';

import { WebService } from "../../services/web.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private webService: WebService) {
    this.webService.getTweets().subscribe(
      data => console.log(data.json()),
      err => console.log(err),
      () => console.log('done this!')
    );
  }
}
