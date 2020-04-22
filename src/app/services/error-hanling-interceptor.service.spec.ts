import { TestBed } from '@angular/core/testing';

import { ErrorHanlingInterceptorService } from './error-hanling-interceptor.service';

describe('ErrorHanlingInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorHanlingInterceptorService = TestBed.get(ErrorHanlingInterceptorService);
    expect(service).toBeTruthy();
  });
});
