import { TestBed } from '@angular/core/testing';

import { RickAndyMortyService } from './rick-andy-morty.service';

describe('RickAndyMortyService', () => {
  let service: RickAndyMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickAndyMortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
