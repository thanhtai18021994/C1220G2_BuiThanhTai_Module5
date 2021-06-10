import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.crete()
  }
  crete(){
    this.productForm=this.formBuilder.group({
      name:[''],
      price:[''],
      status:['']
    })
    console.log(this.productForm.valueChanges.subscribe(data=>{
      console.log(data);
    }));
  }
  onSubmit(){
    console.log(this.productForm.value);
  }
}
