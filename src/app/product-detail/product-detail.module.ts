import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [CommonModule, FormsModule],
})
export class ProductDetailModule {}
