import { TestBed } from '@angular/core/testing';

import { DiarioServiceService } from './diario-service.service';

describe('DiarioServiceService', () => {
  let service: DiarioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiarioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
