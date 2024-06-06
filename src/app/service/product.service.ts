import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
    this.http
      .get<any>('https://product-udaicity.onrender.com/api/product')
      .subscribe(
        (data: any) => {
          if (data && data.data) {
            data.data.forEach((item: any) => {
              this.products.push({
                id: item.id,
                name: item.name,
                price: item.price,
                imageUrl: item.imageUrl,
                description: item.description,
              });
            });
          } else {
            this._snackBar.open('Data is empty or malformed', 'Close', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'right',
            });
          }
        },
        (error) => {
          this._snackBar.open('Internal Server Error', 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
          });
        }
      );
  }

  addToCartEvent = new EventEmitter<any>();

  getAllProducts(): Product[] {
    return this.products as Product[];
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }
}
