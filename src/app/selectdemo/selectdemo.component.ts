import { Component, Signal } from '@angular/core';
import { createComponentStore } from '@mini-rx/signal-store';

@Component({
  selector: 'app-selectdemo',
  imports: [],
  templateUrl: './selectdemo.component.html',
  styleUrl: './selectdemo.component.scss'
})
export class SelectdemoComponent {
  private cs = createComponentStore({counter: 2});
  doubleCounter: Signal<number> = this.cs.select(state => state.counter * 2)
}
