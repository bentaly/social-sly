import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ss-gmail-detail-view',
  templateUrl: './gmail-detail-view.component.html',
  styleUrls: ['./gmail-detail-view.component.scss']
})
export class GmailDetailViewComponent implements OnInit {

  @Input() item;
  @Output() showListEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
