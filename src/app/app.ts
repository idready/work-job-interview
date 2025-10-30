import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordSuggestions } from './word-suggestions/word-suggestions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WordSuggestions],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('work-code-interview');
}
