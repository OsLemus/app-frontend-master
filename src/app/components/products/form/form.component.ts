import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  forma: FormGroup;

 product: Product = new Product();
  titulo: String = 'Agregar Producto';
  title2: String = 'Actualizar Producto';

  constructor(private productService: ProductService,
  private router: Router,
  private activatedRoute: ActivatedRoute) {

    this.forma = new FormGroup({
      'name': new FormControl('', Validators.required),
      'price': new FormControl('', [Validators.required, Validators.pattern('[1-9]+[0-9]*')]),
      'quantity': new FormControl('', [Validators.pattern('[0-9]+')])
      });

   }

   ngOnInit() {
     this.loadProduct();
   }

   loadProduct(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.productService.getProduct(id).subscribe( (product) => this.product = product
        );
      }
    });
  }

  create(): void {
    // console.log(this.product);
    this.productService.create(this.product)
    .subscribe(product => {
        this.router.navigate(['/products']);
        swal('Nuevo producto', `${product.name} agregado exitosamnete`, 'success');
      }
    );
  }

  update(): void {
    this.productService.update(this.product)
    .subscribe(product => {
      this.router.navigate(['/products']);
      swal('Producto Actualizado', `El producto ${product.name} ha sido actualizado correctamente`, 'success');
    });
  }


}
