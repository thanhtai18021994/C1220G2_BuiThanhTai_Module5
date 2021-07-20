import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../../model/customer.interface';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {TypeCustomer} from '../../model/typeCutomer.interface';

const URL=environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[];
  constructor(private http: HttpClient) { }
  findAll(): Observable<Customer[]>{
    return this.http.get<Customer[]>(URL+'/customer');
  }

  findAllTypeOfCustomer():Observable<TypeCustomer[]>{
    return this.http.get<TypeCustomer[]>(URL+'/customerType')
  }

  findAllByName(name: string): Observable<Customer[]>{
    return this.http.get<Customer[]>(URL+'/customer'+`/${name}`)
  }

  save(customer: Customer): Observable<void>{
    return this.http.post<void>(URL+'/customer',customer)
  }

  delete(id: number): Observable<Customer>{
    return  this.http.delete<Customer>(URL+'/customer'+`/${id}`)
  }

  findById(id:number):Observable<Customer>{
    return this.http.get<Customer>(URL+`/customer/${id}`)
  }

  update(customer: Customer,id :number):Observable<void>{
    return this.http.put<void>(URL+`/customer/${id}`,customer)
  }
  search(name:string): Observable<Customer[]>{
    return this.http.get<Customer[]>(URL+"/customer?name_like="+name);
  }
}
