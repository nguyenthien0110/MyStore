import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = [
    {
      id: 1,
      name: 'iPhone 11 64GB',
      price: 337.53,
      imageUrl:
        'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-600x600.jpg',
      description: 'iPhone 11 64GB description',
    },
    {
      id: 2,
      name: 'iPhone 12 128GB',
      price: 455.41,
      imageUrl:
        'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-trang-13-600x600.jpg',
      description: 'iPhone 12 128GB description',
    },
    {
      id: 3,
      name: 'iPhone 13 128GB',
      price: 537.92,
      imageUrl:
        'https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-xanh-la-thumb-new-600x600.jpg',
      description: 'iPhone 13 128GB description',
    },
    {
      id: 4,
      name: 'iPhone 14 Pro Max 128GB',
      price: 1044.8,
      imageUrl:
        'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg',
      description: 'iPhone 14 Pro Max 128GB description',
    },
    {
      id: 5,
      name: 'iPhone 15 Plus 512GB',
      price: 1256.98,
      imageUrl:
        'https://cdn.tgdd.vn/Products/Images/42/303825/iphone-15-plus-hong-512gb-thumb-600x600.jpg',
      description: 'iPhone 15 Plus 512GB description',
    },
    {
      id: 6,
      name: 'iPhone 15 Pro Max 256GB',
      price: 1162.68,
      imageUrl:
        'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg',
      description: 'iPhone 15 Pro Max 256GB description',
    },
  ];

  constructor() {}
  addToCartEvent = new EventEmitter<any>();

  getAllProducts(): any[] {
    return this.products;
  }

  getProductById(id: number): any {
    return this.products.find((product) => product.id === id);
  }
}
