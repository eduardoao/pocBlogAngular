import { TestBed } from '@angular/core/testing';

import { DataFakeService } from './datafake.service';

describe('DataService', () => {
  let service: DataFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
