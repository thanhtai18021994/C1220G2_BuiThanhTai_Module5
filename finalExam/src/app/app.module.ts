import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { DanhSachNhaDatComponent } from './nha-dat/danh-sach-nha-dat/danh-sach-nha-dat.component';
import { TaoMoiNhaDatComponent } from './nha-dat/tao-moi-nha-dat/tao-moi-nha-dat.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ViewComponent} from './nha-dat/view/view.component';


const routes: Routes=[
  {
    path:"",
    component:DanhSachNhaDatComponent
  },
  {
    path:"dangtin",
    component:TaoMoiNhaDatComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DanhSachNhaDatComponent,
    TaoMoiNhaDatComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
