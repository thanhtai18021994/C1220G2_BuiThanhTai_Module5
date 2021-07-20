import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {ListCustomerComponent} from './list-customer/list-customer.component';


const routes: Routes = [
  {
    path:"customer/create",
    component:CreateCustomerComponent
  },
  {
    path:"customer",
    component:ListCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class CustomerRoutingModule { }
