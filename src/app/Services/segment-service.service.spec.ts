import { TestBed } from '@angular/core/testing';

import { SegmentServiceService } from './segment-service.service';

describe('SegmentServiceService', () => {
  let service: SegmentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SegmentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
