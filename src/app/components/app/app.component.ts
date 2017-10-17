import { Component } from '@angular/core';

import { WebService } from '../../services/web/web.service';

@Component({
  selector: 'ss-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private webService: WebService) {}

}