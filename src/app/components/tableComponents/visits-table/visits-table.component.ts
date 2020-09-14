import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../assets/product';
import { ProductService } from '../../../../assets/productservice';
@Component({
  selector: 'app-visits-table',
  templateUrl: './visits-table.component.html',
  styleUrls: ['./visits-table.component.css']
})
export class VisitsTableComponent implements OnInit {
  products: Product[];
  dialogVisible: boolean;
  scrollableCols: any[];
  frozenValue: any[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductsSmall().then(data => this.products = data);

    this.scrollableCols = [
      { field: 'Chief complaint/Visit reason', header: 'Chief complaint/Visit reason' },
      { field: 'Visit Date', header: 'Visit Date' },
      { field: 'Provider Name', header: 'Provider Name' },
      { field: 'Admitting diagnosis', header: 'Admitting diagnosis' },

    ];
    this.products = [
      { id: '1' },
      { id: '2' },
      { id: '3' },
      { id: '4' },
    ];
  }

}
