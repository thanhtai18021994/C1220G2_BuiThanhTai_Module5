import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {ListCustomerComponent} from './list-customer/list-customer.component';
import {UpdateCustomerComponent} from './update-customer/update-customer.component';


const routes: Routes = [
  {
    path:"customer/create",
    component:CreateCustomerComponent
  },
  {
    path:"customer",
    component:ListCustomerComponent
  },{
  path:"customer/update/:id",
    component:UpdateCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
