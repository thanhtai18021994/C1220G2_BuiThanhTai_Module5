import { Component, OnInit } from '@angular/core';
import {CustomerServiceService} from '../service/customer-service.service';
import {CustomerInterface} from '../model/customer.interface';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers: CustomerInterface[];
  length:number;
  constructor(private customerService: CustomerServiceService) { }

  ngOnInit(): void {
      this.customerService.findAll().subscribe(customerList=>{
      this.customers=customerList;
      this.length=this.customers.length
    })
  }

}
