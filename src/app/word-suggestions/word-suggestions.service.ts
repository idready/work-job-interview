import { Injectable } from '@angular/core';
import { IamTheTestInterface, WordCandidate } from './iam-test.interface';

@Injectable({
  providedIn: 'root',
})
export class WordSuggestionsService implements IamTheTestInterface {

  private getDifferenceScore(word1: string, word2: string): number {
    if (word1.length !== word2.length) return Number.MAX_SAFE_INTEGER; // Bring it down if lengths differ
    let diff = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) diff++;
    }
    return diff;
  }

  public GetSuggestions(term: string, terms: string[], numberOfSuggestions: number): WordCandidate[] {
    term = term.toLowerCase();

    const candidates: WordCandidate[] = [];

    for (const t of terms) {
      const lower = t.toLowerCase();

      if (lower.includes(term)) {
        candidates.push({ diff: 0, lenDiff: Math.abs(term.length - lower.length), value: lower });
      } else if (lower.length === term.length) {
        const diff = this.getDifferenceScore(term, lower);
        candidates.push({ diff, lenDiff: Math.abs(term.length - lower.length), value: lower });
      }
    }

    // Sorting
    candidates.sort((a, b) => {
      if (a.diff !== b.diff) return a.diff - b.diff;
      if (a.lenDiff !== b.lenDiff) return a.lenDiff - b.lenDiff;
      return a.value.localeCompare(b.value);
    });

    return candidates.slice(0, numberOfSuggestions);
  }
}
