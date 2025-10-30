import { Injectable } from '@angular/core';
import { IamTheTestInterface, WordCandidate } from './iam-test.interface';

@Injectable({
  providedIn: 'root',
})
export class WordSuggestionsService implements IamTheTestInterface {
  public GetSuggestions(term: String, choices: String[], numberOfSuggestions: number): WordCandidate[] {
    // Implementation goes here
    return [];
  }
}
