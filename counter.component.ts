import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../../store/counter.reducer';
import { increment, decrement } from '../../store/counter.action';
import { Observable } from 'rxjs';
import { select } from '@ngrx/store/src/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  counterValue: Observable<number> = new Observable<number>;
  constructor(private store: Store<AppStore>) {
    this.counterValue = this.store.pipe(select('count'));
   }

  onDecrement() {
    this.store.dispatch(decrement());
  }
  onIncrement() {
    this.store.dispatch(increment());
  }
}

