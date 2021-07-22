import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product:Product={quantity:0, name:"First product"};
  constructor() { }

  ngOnInit(): void {
  }

}
