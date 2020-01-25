import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBComponent } from './check-b.component';

describe('CheckBComponent', () => {
  let component: CheckBComponent;
  let fixture: ComponentFixture<CheckBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
