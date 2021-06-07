import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrameComponent } from './frame/frame.component';
import { ListCustomerComponent } from './frame/customer/list-customer/list-customer.component';
import { ListHomeComponent } from './frame/home/list-home/list-home.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    ListCustomerComponent,
    ListHomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }