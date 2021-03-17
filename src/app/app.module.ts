import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActiveComponent } from './active/active.component';
import { InactiveComponent } from './inactive/inactive.component';
import { SimoService } from './Simo.Services';
import { CounterService } from './Counter.Services';

@NgModule({
  declarations: [
    AppComponent,
    ActiveComponent,
    InactiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SimoService,CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
