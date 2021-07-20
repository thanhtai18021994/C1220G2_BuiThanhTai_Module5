import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Customer} from '../../model/customer.interface';
import {TypeCustomer} from '../../model/typeCutomer.interface';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  formCustomer:FormGroup;
  typeCustomers: TypeCustomer[];
  customer:Customer;
  id: number;
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private activatedRoute:ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);
    });
  }

  ngOnInit(): void {
    this.listTypeCustomer();
  }

  getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
      this.formCustomer = new FormGroup({
        code: new FormControl(customer.name),
        name: new FormControl(customer.name),
        typeOfCustomer: new FormControl(customer.typeOfCustomer),
        birthday: new FormControl(customer.birthday),
        email: new FormControl(customer.email),
        phone: new FormControl(customer.phone),
        idCard: new FormControl(customer.idCard),
        address: new FormControl(customer.address),
        gender: new FormControl(customer.gender),
      });
    });
  }

  onUpdate(){
    let customer: Customer=this.formCustomer.value;
    this.customerService.update(customer,this.id).subscribe(()=>{
      this.router.navigateByUrl("/customer");
    })
  }

  listTypeCustomer(){
    this.customerService.findAllTypeOfCustomer().subscribe(typeCustomers=>{
      this.typeCustomers = typeCustomers;
    })
  }

  returnHomeCustomer(){
    this.router.navigateByUrl("/customer");
  }
}
