export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public imageUrl: string,
    public description: string
  ) {}
}
