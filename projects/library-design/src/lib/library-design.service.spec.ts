import { TestBed } from '@angular/core/testing';

import { LibraryDesignService } from './library-design.service';

describe('LibraryDesignService', () => {
  let service: LibraryDesignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryDesignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
