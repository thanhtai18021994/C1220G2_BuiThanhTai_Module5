import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormGroup} from '@angular/forms';
import {ObjectService} from '../../service/object.service';
import {Router} from '@angular/router';
import {NhatDat} from '../../nodel/nhatDat.interface';

@Component({
  selector: 'app-tao-moi-nha-dat',
  templateUrl: './tao-moi-nha-dat.component.html',
  styleUrls: ['./tao-moi-nha-dat.component.css']
})
export class TaoMoiNhaDatComponent implements OnInit {
  nhaDatForm:FormGroup;
  danhSachDanhMuc:string[];
  danhSachVungMien:string[];
  danhSachHuong:string[];
  giaNhaDat:number;
  constructor(
    private formBuilder:FormBuilder,
    private objectService:ObjectService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.create()
    this.layDanhSachDanhMuc();
    this.layDanhSachVungMien();
    this.laydanhsachHuong()
    console.log(this.danhSachHuong);
  }
  create(){
    this.nhaDatForm=this.formBuilder.group({
      danhMuc:[""],
      banDangTin:[""],
      vungMien:[""],
      banLa:[""],
      tinhTrang:[""],
      diaChi:[""],
      dienTich:[""],
      huong:[""],
      tuaDe:[""],
      noiDung:[""],
      gia:[""]
    })
  }

  layDanhSachDanhMuc(){
    this.objectService.danhSachDanhMuc().subscribe(danhSachDanhMuc=>{
      this.danhSachDanhMuc=danhSachDanhMuc;
    })
  }
  layDanhSachVungMien(){
    this.objectService.danhSachVungMien().subscribe(danhSachVungMien=>{
      this.danhSachVungMien=danhSachVungMien;
    })
  }
  laydanhsachHuong(){
    this.objectService.danhSachHuong().subscribe(danhSachHuong=>{
      this.danhSachHuong=danhSachHuong;
    })
  }
  onSubmit(){
    let nhaDat:NhatDat=this.nhaDatForm.value;
    this.objectService.dangTin(nhaDat).subscribe(()=>{
      this.router.navigateByUrl("")
    })
  }

}
