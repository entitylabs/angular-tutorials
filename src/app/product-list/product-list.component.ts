import { Component, OnInit } from '@angular/core';
import { Product } from '../generic/product-card/product.model';
import { ProductListModule } from './product-list.module';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[]=[];

  constructor() { }

  ngOnInit(): void {

    let product1:Product= {name: "first product", quantity:10};
    let product2:Product= {name: "Seconc product", quantity:17};
    let product3:Product= {name: "Third product", quantity:16};
    let product4:Product= {name: "Fourth product", quantity:50};
    let product5:Product= {name: "Fifth product", quantity:40};
    
    this.products.push(product1);
    this.products.push(product2);
    this.products.push(product3);
    this.products.push(product4);
    this.products.push(product5);
  }

}
