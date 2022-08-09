import { Component, Input, OnInit } from '@angular/core';
import { Showroom } from '../model/showroom';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  url : string = "";

  @Input()
  cozinha!: Showroom;
  
  constructor() { }

  ngOnInit(): void {
  }

}
