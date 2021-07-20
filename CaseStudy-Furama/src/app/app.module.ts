import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrameComponent } from './frame/frame.component';
import { ListCustomerComponent } from './frame/customer/list-customer/list-customer.component';
import { ListHomeComponent } from './frame/home/list-home/list-home.component';
import { CreateCustomerComponent } from './frame/customer/create-customer/create-customer.component';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {CustomerModule} from './frame/customer/customer.module';
import {HomeModule} from './frame/home/home.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    ListCustomerComponent,
    ListHomeComponent,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    CustomerModule,
    HomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
