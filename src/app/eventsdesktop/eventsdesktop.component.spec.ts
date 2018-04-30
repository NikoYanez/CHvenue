import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsdesktopComponent } from './eventsdesktop.component';

describe('EventsdesktopComponent', () => {
  let component: EventsdesktopComponent;
  let fixture: ComponentFixture<EventsdesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsdesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsdesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
