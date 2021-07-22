import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { GenericModule } from '../generic/generic.module';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    GenericModule
  ],

  exports: [ProductListComponent]
})
export class ProductListModule { }
