import { TestBed } from '@angular/core/testing';

import { GeneralMethodsService } from './general-methods.service';

describe('GeneralMethodsService', () => {
  let service: GeneralMethodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralMethodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
