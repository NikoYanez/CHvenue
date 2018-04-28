import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChlogoComponent } from './chlogo.component';

describe('ChlogoComponent', () => {
  let component: ChlogoComponent;
  let fixture: ComponentFixture<ChlogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChlogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
