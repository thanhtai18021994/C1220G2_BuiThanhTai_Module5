import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NhatDat} from '../nodel/nhatDat.interface';

const URL=environment.urlApi;
@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  constructor(private http:HttpClient) { }
  danhSachNhaDat():Observable<NhatDat[]>{
    return this.http.get<NhatDat[]>(URL+"/nhaDat")
  }
  danhSachDanhMuc():Observable<string[]>{
    return this.http.get<string[]>(URL+"/danhMuc")
  }
  danhSachVungMien():Observable<string[]>{
    return this.http.get<string[]>(URL+"/vungMien")
  }
  danhSachHuong():Observable<string[]>{
    return this.http.get<string[]>(URL+"/huong")
  }

  dangTin(nhaDat:NhatDat):Observable<void>{
    return this.http.post<void>((URL+"/nhaDat"),nhaDat)
  }
  timkiemGiaNhaDat(gia:number):Observable<NhatDat[]>{
    return this.http.get<NhatDat[]>(URL+"/nhaDat?gia="+gia)
  }
  timkiemDientich(dientich:number):Observable<NhatDat[]>{
    return this.http.get<NhatDat[]>(URL+"/nhaDat?dienTich="+dientich)
  }
  timkiemHuong(huong:string):Observable<NhatDat[]>{
    return this.http.get<NhatDat[]>(URL+"/nhaDat?huong="+huong)
  }
  timkiemTatCaTruong(dienTich:number,gia:number,huong:string):Observable<NhatDat[]>{
    let value="";

    if(dienTich){
      value+=(`dienTich=${dienTich}`);
    }

    if(gia){
      value+=(`gia=${gia}`);
    }

    if(huong){
      value+=(`huong=${huong}`);
    }

    return this.http.get<NhatDat[]>(URL+"/nhaDat?"+value)
  }
}
