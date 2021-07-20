import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../../model/customer.interface';
import {TypeCustomer} from '../../model/typeCutomer.interface';
import {environment} from '../../../environments/environment';
import {Employee} from '../../model/employee.interface';

const URL=environment.apiUrl
@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private http: HttpClient) { }
  findAll(): Observable<Employee[]>{
    return this.http.get<Employee[]>(URL+'/employee');
  }

  findAllTypeOfCustomer():Observable<TypeCustomer[]>{
    return this.http.get<TypeCustomer[]>(URL+'/position')
  }


  save(employee: Employee): Observable<void>{
    return this.http.post<void>(URL+'/employee',employee)
  }

  delete(id: number): Observable<Customer>{
    return  this.http.delete<Customer>(URL+'/employee'+`/${id}`)
  }

  findById(id:number):Observable<Employee>{
    return this.http.get<Employee>(URL+`/employee/${id}`)
  }

  update(employee: Employee,id :number):Observable<void>{
    return this.http.put<void>(URL+`/customer/${id}`,employee)
  }
}
