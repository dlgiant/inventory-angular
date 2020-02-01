import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IProduct {
  id: number;
  name: string;
  active: boolean;
  expirationDate: string;
  description: string;
  type: string;
  features?: string[];
}

function generateId() {
  return Math.floor(Math.random() * 100000);
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: IProduct[] = [{
    id: generateId(),
    name: 'Samsung Galaxy S9',
    active: false,
    description: 'New',
    expirationDate: '11/17/2020',
    type: 'mobile'
  }, {
    id: generateId(),
    name: 'AAAAA',
    active: true,
    description: 'Like New',
    expirationDate: '11/20/2020',
    type: 'computer'
  }, {
    id: generateId(),
    name: 'BBBBBBBB',
    active: false,
    description: 'Used',
    expirationDate: '11/20/2020',
    type: 'tablet'
  }, {
    id: generateId(),
    name: 'CCCCCCCC',
    active: false,
    description: 'Like New',
    expirationDate: '11/17/2020',
    type: 'mobile'
  }, {
    id: generateId(),
    name: 'DDDD',
    active: true,
    description: 'Used',
    expirationDate: '11/17/2020',
    type: 'tablet'
  }, {
    id: generateId(),
    name: 'EEEEEEE',
    active: false,
    description: 'Like New',
    expirationDate: '11/20/2020',
    type: 'mobile'
  }, {
    id: generateId(),
    name: 'FFFFFFFFF',
    active: false,
    description: 'New',
    expirationDate: '11/20/2020',
    type: 'computer'
  }, {
    id: generateId(),
    name: 'GGGGG',
    active: true,
    description: 'Used',
    expirationDate: '11/17/2020',
    type: 'mobile'
  }, {
    id: generateId(),
    name: 'HHHHHH',
    active: false,
    description: 'Like New',
    expirationDate: '11/20/2020',
    type: 'tablet'
  }, {
    id: generateId(),
    name: 'IIIIIIII',
    active: true,
    description: 'Used',
    expirationDate: '11/20/2020',
    type: 'mobile'
  }, {
    id: generateId(),
    name: 'JKJJJJJJJJ',
    active: false,
    description: 'New',
    expirationDate: '11/20/2020',
    type: 'tablet'
  }, {
    id: generateId(),
    name: 'KKKKKKKK',
    active: false,
    description: 'Like New',
    expirationDate: '11/17/2020',
    type: 'computer'
  }, {
    id: generateId(),
    name: 'LLLLLLLLL',
    active: true,
    description: 'Used',
    expirationDate: '11/20/2020',
    type: 'computer'
  }, {
    id: generateId(),
    name: 'MMMMMMMM',
    active: false,
    description: 'Like New',
    expirationDate: '11/17/2020',
    type: 'tablet'
  }];

  products$ = new BehaviorSubject<IProduct[]>(this.products);

  removeProduct(product: IProduct) {
    const index = this.products.indexOf(product);
    this.products = [
      ...this.products.slice(0, index),
      ...this.products.slice(index + 1),
    ];
    this.products$.next(this.products);
  }
  addProduct(product) {
    this.products = [
      {
        id: generateId(),
        ...product
      },
      ...this.products,
    ];
    this.products$.next(this.products);
  }

  editProduct(id, product) {
    const index = this.products.findIndex(p => p.id === id);
    this.products = [
      ...this.products.slice(0, index),
      {
        id,
        ...product,
      },
      ...this.products.slice(index + 1),
    ];
    this.products$.next(this.products);
  }
}


