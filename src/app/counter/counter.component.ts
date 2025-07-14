import { Component, inject } from '@angular/core';
import { CounterStore } from './counter.store';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  standalone: true,
})
export class CounterComponent {
  // Inject the store directly into the component
  readonly store = inject(CounterStore);
}
