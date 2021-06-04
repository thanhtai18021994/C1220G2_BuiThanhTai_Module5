import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pick-color',
  templateUrl: './pick-color.component.html',
  styleUrls: ['./pick-color.component.css']
})
export class PickColorComponent implements OnInit {
color: string='#000';
  constructor() { }

  ngOnInit(): void {
  }
  takeColor(param){
    this.color=param;
  }
}
