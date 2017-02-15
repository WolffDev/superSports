import { CarouselModule } from 'ng2-bootstrap/carousel';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header.component';
import { TopSliderComponent } from './top-slider/top-slider.component';
import { HomeComponent } from './home.component';
import { FooterComponent } from './shared/footer.component';
import { NewsLetterComponent } from './shared/news-letter.component';
import { CategoriesComponent } from './categories/categories.component';
import { PopProdComponent } from './pop-prod/pop-prod.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopSliderComponent,
    HomeComponent,
    FooterComponent,
    FooterComponent,
    NewsLetterComponent,
    CategoriesComponent,
    PopProdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
