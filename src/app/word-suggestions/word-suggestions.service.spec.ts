import { TestBed } from '@angular/core/testing';

import { WordSuggestions } from './word-suggestions';

describe('WordSuggestions', () => {
  let service: WordSuggestions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordSuggestions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
