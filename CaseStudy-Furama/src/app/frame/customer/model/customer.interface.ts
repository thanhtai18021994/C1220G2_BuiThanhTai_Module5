import {TypeCustomer} from '../../typeCustomer/model/typeCustomer.interface';

export interface CustomerInterface{
  id?: number;
  code?: string;
  name?: string;
  typeOfCustomer?: TypeCustomer;
  birthday?: string;
  idCard?: string;
  phone?: string;
  email?: string;
  address?: string;
  gender?: string;
}
