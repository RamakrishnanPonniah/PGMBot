import { TestBed } from '@angular/core/testing';

import { ApiinterceptorService } from './apiinterceptor.service';

describe('ApiinterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiinterceptorService = TestBed.get(ApiinterceptorService);
    expect(service).toBeTruthy();
  });
});
