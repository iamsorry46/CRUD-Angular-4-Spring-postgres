import { TestBed, inject } from '@angular/core/testing';

import { SopirService } from './sopir.service';

describe('SopirService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SopirService]
    });
  });

  it('should be created', inject([SopirService], (service: SopirService) => {
    expect(service).toBeTruthy();
  }));
});
