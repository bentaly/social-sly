import { Component, OnInit, Input } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'ss-gmail',
  templateUrl: './gmail.component.html',
  styleUrls: ['./gmail.component.scss']
})
export class GmailComponent implements OnChanges {

  @Input() items: any = [];
  public item;
  public listView: boolean = true;

  constructor() { }

  ngOnChanges() {
    console.log(this.items);
  }

  showDetail() {
    this.listView = false;
  }

  showList() {
    this.listView = true;
  }

}
