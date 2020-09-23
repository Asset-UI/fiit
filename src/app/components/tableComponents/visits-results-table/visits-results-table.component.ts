import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../assets/product';
import { ProductService } from '../../../../assets/productservice';

@Component({
  selector: 'app-visits-results-table',
  templateUrl: './visits-results-table.component.html',
  styleUrls: ['./visits-results-table.component.css']
})
export class VisitsResultsTableComponent implements OnInit {
  products: Product[];
  dialogVisible: boolean;
  scrollableCols: any[];
  frozenValue: any[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductsSmall().then(data => this.products = data);

    this.scrollableCols = [
      { field: 'Type', header: 'Type' },
      { field: 'Date', header: 'Date' },
      { field: 'Description', header: 'Description' },
      { fiedl: 'Download', header: 'Download' }
    ];
    this.products = [
      { id: '1' },
      { id: '2' },
      { id: '3' },
    ];
  }

}
