import { TestBed, inject } from '@angular/core/testing';

import { CvDoumentService } from './cv-doument.service';

describe('CvDoumentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CvDoumentService]
    });
  });

  it('should be created', inject([CvDoumentService], (service: CvDoumentService) => {
    expect(service).toBeTruthy();
  }));
});
