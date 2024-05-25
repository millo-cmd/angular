import { TestBed } from '@angular/core/testing';

import { BalanceGeneralServiceService } from './balance-general-service.service';

describe('BalanceGeneralServiceService', () => {
  let service: BalanceGeneralServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalanceGeneralServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
