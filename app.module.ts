import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, 
    StoreModule.forRoot({ count: counterReducer }) ,
    // Optional: Register effects at the root level
    // [EffectsModule.forRoot([])
  ],
  declarations: [ AppComponent, 
    CounterComponent
 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
