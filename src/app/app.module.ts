import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

// Graficos
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductService } from './components/products/product.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/products/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardProductsComponent } from './components/card-products/card-products.component';
import { IndexComponent } from './components/index/index.component';
import { ChartsComponent } from './components/products/charts/charts.component';
import { AboutComponent } from './components/about/about.component';

const ROUTES: Routes = [
{path: 'products', component: ProductsComponent},
{path: 'index', component: IndexComponent},
{path: 'about', component: AboutComponent},
{path: 'products/form', component: FormComponent},
{path: 'products/charts', component: ChartsComponent},
{path: 'products/charts/:id', component: ChartsComponent}, // Charts
{path: 'products/form/:id', component: FormComponent},
{path: '**', pathMatch: 'full', redirectTo: 'index'}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FormComponent,
    CardProductsComponent,
    IndexComponent,
    ChartsComponent,
    AboutComponent // Information
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
