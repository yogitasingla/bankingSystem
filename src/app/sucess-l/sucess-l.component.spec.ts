import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessLComponent } from './sucess-l.component';

describe('SucessLComponent', () => {
  let component: SucessLComponent;
  let fixture: ComponentFixture<SucessLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucessLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
