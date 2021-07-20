import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/customer.interface';
import {CustomerService} from '../../customer/service/customer.service';
import {Employee} from '../../model/employee.interface';
import {EmployeeService} from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.employeeService.findAll().subscribe(employees=>{
      this.employees=employees;
    })
  }

  delete(id: number){
    this.employeeService.delete(id).subscribe(()=>{
      this.getAll();
    })
  }

}
