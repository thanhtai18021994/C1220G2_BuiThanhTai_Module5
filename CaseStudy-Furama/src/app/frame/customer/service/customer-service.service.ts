import { Injectable } from '@angular/core';
import {CustomerInterface} from '../model/customer.interface';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';

const apiUrl=`${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})

export class CustomerServiceService {
  customers: CustomerInterface[];
  constructor(private http: HttpClient) { }
  findAll(): Observable<CustomerInterface[]>{
    return this.http.get<CustomerInterface[]>(apiUrl+'/customer');
  }
  findAllTypeOfCustomer():Observable<string[]>{
    return this.http.get<string[]>(apiUrl+'/customertype')
  }
  // findById(id: number){}
  findAllByName(name: string): Observable<CustomerInterface[]>{
    return this.http.get<CustomerInterface[]>(apiUrl+'/customer'+`/${name}`)
  }

  save(customer: CustomerInterface): Observable<void>{
    return this.http.post<void>(apiUrl+'/customer',customer)
  }

  delete(id: number): Observable<CustomerInterface>{
   return  this.http.delete<CustomerInterface>(apiUrl+'/customer'+`/${id}`)
  }

}
