import {Customer} from '../../model/customer.interface';
import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../service/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers: Customer[];
  config: any;
  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getAll()
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.customers.length
    };
  }

  getAll(){
    this.customerService.findAll().subscribe(customerList=>{
        this.customers=customerList;
    })
  }

  delete(id: number){
    this.customerService.delete(id).subscribe(()=>{
      this.getAll();
    })
  }

  search(value: string) {
    this.customerService.search(value).subscribe(custumers => {
      this.customers = custumers;
    })
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
}
