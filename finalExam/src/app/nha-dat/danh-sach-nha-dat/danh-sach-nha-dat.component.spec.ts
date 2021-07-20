import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachNhaDatComponent } from './danh-sach-nha-dat.component';

describe('DanhSachNhaDatComponent', () => {
  let component: DanhSachNhaDatComponent;
  let fixture: ComponentFixture<DanhSachNhaDatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachNhaDatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachNhaDatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
