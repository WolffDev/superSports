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
        imagePath:'http://logok.org/wp-content/uploads/2015/07/Asics-logo-logotype-1024x768.png'
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
        imagePath:'http://logok.org/wp-content/uploads/2015/07/Asics-logo-logotype-1024x768.png'
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
        imagePath:'http://logok.org/wp-content/uploads/2015/07/Asics-logo-logotype-1024x768.png'
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
        imagePath:'http://logok.org/wp-content/uploads/2015/07/Asics-logo-logotype-1024x768.png'
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
        imagePath:'http://logok.org/wp-content/uploads/2015/07/Asics-logo-logotype-1024x768.png'
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
        imagePath:'http://logok.org/wp-content/uploads/2015/07/Asics-logo-logotype-1024x768.png'
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
        imagePath:'http://logok.org/wp-content/uploads/2015/07/Asics-logo-logotype-1024x768.png'
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
        imagePath:'http://logok.org/wp-content/uploads/2015/07/Asics-logo-logotype-1024x768.png'
      },
      sizeText: 'Some text about sizes and maybe a size guide',
      variations: ['EU 40 BLACK', 'EU 41 BLACK', 'EU 45 BLACK']
    }),
    
  ];

  getProducts() {
    return this.products;
  }

}
