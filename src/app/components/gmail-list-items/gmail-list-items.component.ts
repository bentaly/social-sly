import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ss-gmail-list-items',
  templateUrl: './gmail-list-items.component.html',
  styleUrls: ['../gmail/gmail.component.scss', './gmail-list-items.component.scss']
})
export class GmailListItemsComponent implements OnInit {

  @Input() items: any = [];
  @Output() showDetailEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    // console.log(this.items);
  }

  showDetailedView(tweet) {
    this.showDetailEvent.emit(tweet);
  }

}
