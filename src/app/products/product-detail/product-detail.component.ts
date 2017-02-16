import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Product } from '../product';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: []
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private productIndex: number;

  selectedProduct: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }


  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.productIndex = params['id'];
        this.selectedProduct = this.productService.getProduct(this.productIndex);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
