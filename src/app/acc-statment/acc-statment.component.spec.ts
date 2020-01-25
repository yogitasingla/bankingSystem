import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccStatmentComponent } from './acc-statment.component';

describe('AccStatmentComponent', () => {
  let component: AccStatmentComponent;
  let fixture: ComponentFixture<AccStatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccStatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccStatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
