import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  public arrayNames: any;
  public arrayPrices: any;

/* Grafica */
public lineChartData: Array<any> = [
   // {data: [10, 40, 40, 40, 40, 40, 75], label: 'Precio por año'}
   {data: this.arrayPrices, label: 'Precio'}
];

// public lineChartLabels: Array<any> = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
public lineChartLabels: Array<any>;

public lineChartOptions: any = {
  responsive: true
};
public lineChartColors: Array<any> = [
  {
    backgroundColor: 'rgba(10, 37, 80, 0.2)',
    borderColor: 'rgb(31, 47, 77)',
    pointBackgroundColor: 'rgb(18, 99, 230)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }
];

public lineChartLegend = true;
public lineChartType = 'line';

/* Grafica */

   constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {

      this.activatedRoute.params.subscribe(params => {
        const id = params['id'];

      this.productService.getYears(id).subscribe(
        products => {
        this.arrayNames = products;
        // this.barChartLabels = this.arrayNames;
        this.lineChartLabels = this.arrayNames;
        console.log(this.arrayNames);
      }
      );

      this.productService.getyearPrices(id).subscribe(
        products => {
          this.arrayPrices = products;
          // this.barChartData = this.arrayPrices;
          // console.log(this.arrayPrice1);
          this.lineChartData = [
            {data: this.arrayPrices, label: 'Precio x año'}
         ];
         console.log(this.arrayPrices);
        }
      );


    });
    }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}

