import { TestBed } from '@angular/core/testing';

import { VamanService } from './vaman.service';

describe('VamanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VamanService = TestBed.get(VamanService);
    expect(service).toBeTruthy();
  });
});
