import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailDetailViewComponent } from './gmail-detail-view.component';

describe('GmailDetailViewComponent', () => {
  let component: GmailDetailViewComponent;
  let fixture: ComponentFixture<GmailDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmailDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
