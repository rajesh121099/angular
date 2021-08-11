import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  products: Product[]=[
    new Product(1, 'product 1', 'this is product 1 values',100),
    new Product(2, 'product 2', 'this is product 2 values',150),
    new Product(3, 'product 3', 'this is product 3 values',200),
    new Product(4, 'product 4', 'this is product 4 values',250),
    new Product(5, 'product 5', 'this is product 5 values',300),
    new Product(6, 'product 6', 'this is product 6 values',500),
    new Product(7, 'product 7', 'this is product 7 values',900),
  ]

  constructor() { }

  getproducts(): Product[]{
    
  //TO DO:POPULATE PRODUCTS FROM AN API and return aa observable
    return this.products
  }
}


