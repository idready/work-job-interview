import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSuggestions } from './word-suggestions';

describe('WordSuggestions', () => {
  let component: WordSuggestions;
  let fixture: ComponentFixture<WordSuggestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordSuggestions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordSuggestions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
