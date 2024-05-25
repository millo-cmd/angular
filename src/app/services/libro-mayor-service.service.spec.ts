import { TestBed } from '@angular/core/testing';

import { LibroMayorServiceService } from './libro-mayor-service.service';

describe('LibroMayorServiceService', () => {
  let service: LibroMayorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibroMayorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
