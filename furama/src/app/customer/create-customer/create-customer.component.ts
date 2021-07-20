import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TypeCustomer} from '../../model/typeCutomer.interface';
import {CustomerService} from '../service/customer.service';
import {Customer} from '../../model/customer.interface';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  typeCustomers: TypeCustomer[];
  formCustomer: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.listTypeCustomer();
    this.create();
  }

  create(){
    this.formCustomer=this.formBuilder.group({
      code:[''],
      name:[''],
      typeOfCustomer:[''],
      birthday:[''],
      phone:[''],
      idCard:[''],
      email:[''],
      address:[''],
      gender:['']
    })
  }

  listTypeCustomer(){
    this.customerService.findAllTypeOfCustomer().subscribe(typeCustomers=>{
      this.typeCustomers = typeCustomers;
    })
  }

  onSubmit(){
    let customer:Customer=this.formCustomer.value;
    console.log(customer);
    this.customerService.save(customer).subscribe(()=>{
      this.formCustomer.reset();
    })
  }
}
