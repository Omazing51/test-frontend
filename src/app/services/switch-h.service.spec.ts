import { TestBed } from '@angular/core/testing';

import { SwitchHService } from './switch-h.service';

describe('SwitchHService', () => {
  let service: SwitchHService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchHService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
