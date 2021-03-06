import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  private products: Product[] = [
    new Product('Gel-Fujitrabuco 5 G-TX',
    89.99,
    ['../assets/images/products/1/shoe1.jpg', '../assets/images/products/1/shoe1.jpg', '../assets/images/products/1/shoe1.jpg'],
    5,
    'Small teaser text here for the front page!',
    {
      description: 'Long description here, for the detail page!',
      brand: {
        name: 'asics',
        imagePath:'../assets/images/products/brands/asics.png'
      },
      sizeText: 'Some text about sizes and maybe a size guide',
      variations: ['EU 40 BLACK', 'EU 41 BLACK', 'EU 45 BLACK']
    }),
    new Product('Gel-Fujitrabuco 5 G-TX',
    89.99,
    ['../assets/images/products/1/shoe1.jpg', '../assets/images/products/1/shoe1.jpg', '../assets/images/products/1/shoe1.jpg'],
    5,
    'Small teaser text here for the front page!',
    {
      description: 'Long description here, for the detail page!',
      brand: {
        name: 'asics',
        imagePath:'../assets/images/products/brands/asics.png'
      },
      sizeText: 'Some text about sizes and maybe a size guide',
      variations: ['EU 40 BLACK', 'EU 41 BLACK', 'EU 45 BLACK']
    }),
    new Product('Gel-Fujitrabuco 5 G-TX',
    89.99,
    ['../assets/images/products/1/shoe1.jpg', '../assets/images/products/1/shoe1.jpg', '../assets/images/products/1/shoe1.jpg'],
    5,
    'Small teaser text here for the front page!',
    {
      description: 'Long description here, for the detail page!',
      brand: {
        name: 'asics',
        imagePath:'../assets/images/products/brands/asics.png'
      },
      sizeText: 'Some text about sizes and maybe a size guide',
      variations: ['EU 40 BLACK', 'EU 41 BLACK', 'EU 45 BLACK']
    }),
    new Product('Gel-Fujitrabuco 5 G-TX',
    89.99,
    ['../assets/images/products/1/shoe1.jpg', '../assets/images/products/1/shoe1.jpg', '../assets/images/products/1/shoe1.jpg'],
    5,
    'Small teaser text here for the front page!',
    {
      description: 'Long description here, for the detail page!',
      brand: {
        name: 'asics',
        imagePath:'../assets/images/products/brands/asics.png'
      },
      sizeText: 'Some text about sizes and maybe a size guide',
      variations: ['EU 40 BLACK', 'EU 41 BLACK', 'EU 45 BLACK']
    }),
    new Product('Gel-Fujitrabuco 5 G-TX',
    89.99,
    ['../assets/images/products/1/shoe1.jpg', '../assets/images/products/1/shoe1.jpg', '../assets/images/products/1/shoe1.jpg'],
    5,
    'Small teaser text here for the front page!',
    {
      description: 'Long description here, for the detail page!',
      brand: {
        name: 'asics',
        imagePath:'../assets/images/products/brands/asics.png'
      },
      sizeText: 'Some text about sizes and maybe a size guide',
      variations: ['EU 40 BLACK', 'EU 41 BLACK', 'EU 45 BLACK']
    }),
    new Product('Gel-Fujitrabuco 5 G-TX',
    89.99,
    ['../assets/images/products/1/shoe1.jpg', '../assets/images/products/1/shoe1.jpg', '../assets/images/products/1/shoe1.jpg'],
    5,
    'Small teaser text here for the front page!',
    {
      description: 'Long description here, for the detail page!',
      brand: {
        name: 'asics',
        imagePath:'../assets/images/products/brands/asics.png'
      },
      sizeText: 'Some text about sizes and maybe a size guide',
      variations: ['EU 40 BLACK', 'EU 41 BLACK', 'EU 45 BLACK']
    }),
    new Product('Gel-Fujitrabuco 5 G-TX',
    89.99,
    ['../assets/images/products/1/shoe1.jpg', '../assets/images/products/1/shoe1.jpg', '../assets/images/products/1/shoe1.jpg'],
    5,
    'Small teaser text here for the front page!',
    {
      description: 'Long description here, for the detail page!',
      brand: {
        name: 'asics',
        imagePath:'../assets/images/products/brands/asics.png'
      },
      sizeText: 'Some text about sizes and maybe a size guide',
      variations: ['EU 40 BLACK', 'EU 41 BLACK', 'EU 45 BLACK']
    }),
    new Product('Gel-Fujitrabuco 5 G-TX',
    89.99,
    ['../assets/images/products/1/shoe1.jpg', '../assets/images/products/1/shoe1.jpg', '../assets/images/products/1/shoe1.jpg'],
    5,
    'Small teaser text here for the front page!',
    {
      description: 'Long description here, for the detail page!',
      brand: {
        name: 'asics',
        imagePath:'../assets/images/products/brands/asics.png'
      },
      sizeText: 'Some text about sizes and maybe a size guide',
      variations: ['EU 40 BLACK', 'EU 41 BLACK', 'EU 45 BLACK']
    }),
    
  ];

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    return this.products[id];
  }

}
