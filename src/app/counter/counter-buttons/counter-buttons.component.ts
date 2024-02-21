import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCounterActions from '../state/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.css'
})
export class CounterButtonsComponent implements OnInit{

  constructor(private store: Store<{counter: { counter: number }}>) {}

  ngOnInit(): void {

  }

  onIncrement() {
    this.store.dispatch(fromCounterActions.increment());
  }

  onDecrement() {
    this.store.dispatch(fromCounterActions.decrement());
  }

  onReset() {
    this.store.dispatch(fromCounterActions.reset());
  }

}
