import { Component, OnInit } from '@angular/core';
import {NhatDat} from '../../nodel/nhatDat.interface';
import {ObjectService} from '../../service/object.service';

@Component({
  selector: 'app-danh-sach-nha-dat',
  templateUrl: './danh-sach-nha-dat.component.html',
  styleUrls: ['./danh-sach-nha-dat.component.css']
})
export class DanhSachNhaDatComponent implements OnInit {
  danhSachNhadat: NhatDat[];
  gia:number;
  dientich:number;
  huong:string;

  constructor(
    private objectService:ObjectService
  ) { }

  ngOnInit(): void {
    this.layDanhSachNhaDat();
  }
  layDanhSachNhaDat(){
    this.objectService.danhSachNhaDat().subscribe(danhSachNhaDat=>{
      this.danhSachNhadat=danhSachNhaDat;
    })
  }

  timKiemGiaNhaDat($event: any){
    let gia=+$event.target.value
    this.objectService.timkiemGiaNhaDat(gia).subscribe(danhSachNhaDat=>{
      this.danhSachNhadat=danhSachNhaDat;
    })
  }

  timkiemDienTich(value: string){

    this.objectService.timkiemDientich(this.dientich).subscribe(danhSachNhaDat=>{
      this.danhSachNhadat=danhSachNhaDat;
    })
  }
  timkiemHuong(value:string){
    this.objectService.timkiemHuong(value).subscribe(danhSachNhaDat=>{
      this.danhSachNhadat=danhSachNhaDat;
    })
  }
  timkiemtatca(){
    this.objectService.timkiemTatCaTruong(this.dientich,this.gia,this.huong).subscribe(danhSachNhaDat=>{
      this.danhSachNhadat=danhSachNhaDat;
    })
  }
}
