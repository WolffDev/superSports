import { TabsModule } from 'ng2-bootstrap/tabs';
import { RatingModule } from 'ng2-bootstrap/rating';
import { AlertModule } from 'ng2-bootstrap/alert';
import { ProductService } from './products/product.service';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header.component';
import { TopSliderComponent } from './top-slider/top-slider.component';
import { HomeComponent } from './home.component';
import { FooterComponent } from './shared/footer.component';
import { NewsLetterComponent } from './shared/news-letter.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemComponent } from './products/product-list/product-item.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopSliderComponent,
    HomeComponent,
    FooterComponent,
    FooterComponent,
    NewsLetterComponent,
    ProductsComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CarouselModule.forRoot(),
    AlertModule.forRoot(),
    RatingModule.forRoot(),
    TabsModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
