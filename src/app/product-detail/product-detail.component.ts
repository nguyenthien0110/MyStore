import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: any;
  selectedQuantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private _snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = +params['id'];
      this.product = this.productService.getProductById(productId);
    });
  }

  goToProductList(): void {
    this.router.navigateByUrl('/products');
  }

  addToCart(product: any, selectedQuantity: number): void {
    this.cartService.addToCart(product, selectedQuantity);
    this._snackBar.open('Added data successfully', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }
}
