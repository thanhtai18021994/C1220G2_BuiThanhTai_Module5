import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  formCustomer: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }
  create(){
    this.formCustomer=this.formBuilder.group({
      code:[''],
      name:[''],
      typeOfCustomer:[''],
      birthday:[''],
      idCard:[''],
      phone:[''],
      email:[''],
      address:[''],
      gender:['']
    })
  }

}
