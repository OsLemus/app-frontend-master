import { Injectable } from '@angular/core';
import { PRODUCTS } from './products.json';
import { Product } from './product';
import { ProductDetails } from './productDetails';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductService {
  // url: any;
   private url: any = 'http://localhost:8081/store/products';
   private url2: any = 'http://localhost:8081/store/products_details';
   private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

   ProductDetails: any; // Delete

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  // Charts
  /* getNames() {
    return this.http.get<Product[]>(this.url + '/names');
  }
  getPrices() {
    return this.http.get<Product[]>(this.url + '/prices');
  } */

  getYears(id) { // Chart
    return this.http.get<Product[]>(this.url + '/year/' + id);
  }

  getyearPrices(id) { // Chart
    return this.http.get<Product[]>(this.url + '/yearPrices/' + id);
  }
  // Charts

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product, {headers: this.httpHeaders});
  }

  getProduct(id): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${product.id}`, product, {headers: this.httpHeaders});
  }

  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.url}/${id}`, {headers: this.httpHeaders});
  }


  // Product Details

  getProductsDetails(): Observable<ProductDetails[]> {
    return this.http.get<ProductDetails[]>(this.url2);
  }

  createYear(productDetails: ProductDetails): Observable<ProductDetails> {
    return this.http.post<ProductDetails>(this.url2, productDetails, {headers: this.httpHeaders});
  }

  // Product Details

}
