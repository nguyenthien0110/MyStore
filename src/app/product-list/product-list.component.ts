import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  @Output() addToCartEvent = new EventEmitter<any>();
  selectedQuantity: number = 1;

  constructor(
    private productService: ProductService,
    private router: Router,
    private cartService: CartService,
    private _snackBar: MatSnackBar
  ) {
    this.products = productService.getAllProducts();
  }
  ngOnInit(): void {}

  navigateToProductDetail(productId: number): void {
    this.router.navigate(['/product', productId]);
  }

  addToCart(product: Product, selectedQuantity: number): void {
    this.cartService.addToCart(product, selectedQuantity);
    this._snackBar.open('Added data successfully', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }
}
