import { TestBed } from '@angular/core/testing';

import { BankingServiceService } from './banking-service.service';

describe('BankingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BankingServiceService = TestBed.get(BankingServiceService);
    expect(service).toBeTruthy();
  });
});
