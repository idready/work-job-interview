import { Component } from '@angular/core';
import { WordSuggestionsService } from './word-suggestions.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WordCandidate } from './iam-test.interface';

@Component({
  standalone: true,
  selector: 'word-suggestions',
  imports: [CommonModule, FormsModule],
  providers: [WordSuggestionsService],
  templateUrl: './word-suggestions.html',
  styleUrls: ['./word-suggestions.scss'],
})
export class WordSuggestions {

  constructor(private wordSuggestionsService: WordSuggestionsService) {}

  protected term: string = '';
  protected choicesInput: string = '';
  protected numberOfSuggestions: number = 5;
  protected suggestions: WordCandidate[] = [];

  protected getSuggestions(term: string, choices: string[], numberOfSuggestions: number): void {
    const candidates = this.wordSuggestionsService.GetSuggestions(term, choices, numberOfSuggestions);
    this.suggestions = candidates.map(candidate => ({
      value: candidate.value,
      diff: candidate.diff,
      lenDiff: candidate.lenDiff
    }));
  }

  public onSubmit(): void {
    const choices = this.choicesInput.split(',').map(choice => choice.trim());
    this.getSuggestions(this.term, choices, this.numberOfSuggestions);
  }

  
}
