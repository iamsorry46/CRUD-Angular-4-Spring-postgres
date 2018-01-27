import { TestBed, inject } from '@angular/core/testing';

import { MobilService } from './mobil.service';

describe('MobilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MobilService]
    });
  });

  it('should be created', inject([MobilService], (service: MobilService) => {
    expect(service).toBeTruthy();
  }));
});
