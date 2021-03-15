import { TestBed } from '@angular/core/testing';

import { StickyserviceService } from './stickyservice.service';

describe('StickyserviceService', () => {
  let service: StickyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StickyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
