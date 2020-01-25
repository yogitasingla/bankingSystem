import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDComponent } from './account-d.component';

describe('AccountDComponent', () => {
  let component: AccountDComponent;
  let fixture: ComponentFixture<AccountDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
