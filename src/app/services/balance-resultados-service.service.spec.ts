import { TestBed } from '@angular/core/testing';

import { BalanceResultadosServiceService } from './balance-resultados-service.service';

describe('BalanceResultadosServiceService', () => {
  let service: BalanceResultadosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalanceResultadosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
