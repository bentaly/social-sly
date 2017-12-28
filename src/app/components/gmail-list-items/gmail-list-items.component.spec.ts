import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailListItemsComponent } from './gmail-list-items.component';

describe('GmailListItemsComponent', () => {
  let component: GmailListItemsComponent;
  let fixture: ComponentFixture<GmailListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmailListItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
