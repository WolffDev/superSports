import { ContactComponent } from './contact.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'product/:id', component: ProductDetailComponent },
	{ path: 'contact', component: ContactComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);