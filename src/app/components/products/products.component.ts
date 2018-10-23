import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      products => this.products = products
    );
  }

  ondelete(product: Product): void {
    // console.log(id);

    //  this.productService.delete(id).subscribe(product => {
    //   this.ngOnInit();
    //  });
    // console.log(product.id);
    swal({
      title: `¿Esta seguro que desea eliminar ${product.name}?`,
      text: 'No podrá deshacer esta acción',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar!'
    }).then((result) => {
      if (result.value) {
        this.productService.delete(product.id).subscribe(
          response => {
            this.products = this.products.filter(cli => cli !== product);
            swal(
              'Producto eliminado!',
              `Se ha eliminado ${product.name}`,
              'success'
            );
          this.ngOnInit();
         });
      }
    });

}
}
