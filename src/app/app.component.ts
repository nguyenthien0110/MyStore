import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartModule } from './cart/cart.module';
import { ProductListModule } from './product-list/product-list.module';
import { FormsModule } from '@angular/forms';
import { ProductDetailModule } from './product-detail/product-detail.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    CartModule,
    ProductListModule,
    FormsModule,
    ProductDetailModule,
  ],
})
export class AppComponent {
  title = 'MyStore';
  selectedProduct: number | null = null;
}
