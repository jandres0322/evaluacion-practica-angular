import { TestBed } from '@angular/core/testing';

import { CafeService } from './cafe.service';
import { HttpClientModule } from '@angular/common/http';

describe('CafeService', () => {
  let service: CafeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(CafeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
