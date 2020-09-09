import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../assets/product';
import { ProductService } from '../../../../assets/productservice';

@Component({
  selector: 'app-conditions-table',
  templateUrl: './conditions-table.component.html',
  styleUrls: ['./conditions-table.component.css']
})
export class ConditionsTableComponent implements OnInit {
  products: Product[];
  dialogVisible: boolean;
  scrollableCols: any[];
  frozenValue: any[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductsSmall().then(data => this.products = data);

    this.scrollableCols = [
      { field: 'Condition', header: 'Condition' },
      { field: 'Status', header: 'Status' },
      { field: 'Description', header: 'Description' },
      { field: 'Provider Name', header: 'Provider Name' },
      { field: 'Code', header: 'Code' },
      { field: 'Type', header: 'Type  ' },

    ];
    this.products = [
      { id: '1' },
      { id: '2' },
      { id: '3' },
    ];
  }

}
