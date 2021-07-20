import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from '../customer/list-customer/list-customer.component';
import {ListHomeComponent} from './list-home/list-home.component';


const routes: Routes = [
  {
    path:'',
    component:ListHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
