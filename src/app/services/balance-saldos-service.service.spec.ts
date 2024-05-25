import { TestBed } from '@angular/core/testing';

import { BalanceSaldosServiceService } from './balance-saldos-service.service';

describe('BalanceSaldosServiceService', () => {
  let service: BalanceSaldosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalanceSaldosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
