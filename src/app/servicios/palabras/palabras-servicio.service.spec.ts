import { TestBed } from '@angular/core/testing';

import { PalabrasServicioService } from './palabras-servicio.service';

describe('PalabrasServicioService', () => {
  let service: PalabrasServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalabrasServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
