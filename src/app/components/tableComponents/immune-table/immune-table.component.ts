import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../assets/product';
import { ProductService } from '../../../../assets/productservice';

@Component({
  selector: 'app-immune-table',
  templateUrl: './immune-table.component.html',
  styleUrls: ['./immune-table.component.css']
})
export class ImmuneTableComponent implements OnInit {
  products: Product[];
  dialogVisible: boolean;
  scrollableCols: any[];
  frozenValue: any[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductsSmall().then(data => this.products = data);

    this.scrollableCols = [
      { field: 'Immunization_Name', header: 'Immunization Name' },
      { field: 'Date', header: 'Immunization date' },
      { field: 'Dose', header: 'Dose' },

    ];
    this.products = [
      { id: '1' },
      { id: '2' },
      { id: '3' },
    ];
  }

}
