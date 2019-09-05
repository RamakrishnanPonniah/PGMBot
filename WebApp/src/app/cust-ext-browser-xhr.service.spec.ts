import { TestBed } from '@angular/core/testing';

import { CustExtBrowserXhrService } from './cust-ext-browser-xhr.service';

describe('CustExtBrowserXhrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustExtBrowserXhrService = TestBed.get(CustExtBrowserXhrService);
    expect(service).toBeTruthy();
  });
});
