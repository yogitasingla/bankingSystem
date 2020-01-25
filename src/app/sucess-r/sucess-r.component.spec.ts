import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessRComponent } from './sucess-r.component';

describe('SucessRComponent', () => {
  let component: SucessRComponent;
  let fixture: ComponentFixture<SucessRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucessRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
