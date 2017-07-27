/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValueService } from './value.service';

describe('ValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValueService]
    });
  });

  it('should ...', inject([ValueService], (service: ValueService) => {
    expect(service).toBeTruthy();
  }));
});
