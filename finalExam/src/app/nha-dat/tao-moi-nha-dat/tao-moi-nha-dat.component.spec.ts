import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoMoiNhaDatComponent } from './tao-moi-nha-dat.component';

describe('TaoMoiNhaDatComponent', () => {
  let component: TaoMoiNhaDatComponent;
  let fixture: ComponentFixture<TaoMoiNhaDatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaoMoiNhaDatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaoMoiNhaDatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
