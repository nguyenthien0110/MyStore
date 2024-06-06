import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [];
  selectedQuantities: { [productId: number]: number } = {};

  constructor(
    private productService: ProductService,
    private router: Router,
    private cartService: CartService,
    private _snackBar: MatSnackBar
) {
    this.products = productService.getAllProducts();
    this.products.forEach((product) => {
        if (!this.selectedQuantities.hasOwnProperty(product.id)) {
            this.selectedQuantities[product.id] = 1;
        }
    });
}

  navigateToProductDetail(productId: number): void {
    this.router.navigate(['/product', productId]);
  }

  addToCart(product: Product): void {
    const selectedQuantity = this.selectedQuantities[product.id];
    this.cartService.addToCart(product, selectedQuantity);
    this._snackBar.open('Added data successfully', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }

  updateSelectedQuantity(product: Product, quantity: number): void {
    this.selectedQuantities[product.id] = quantity;
  }
}
