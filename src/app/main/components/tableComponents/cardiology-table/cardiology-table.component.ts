import { Component, OnInit } from '@angular/core';
import { Product } from 'src/assets/product';
import { ProductService } from 'src/assets/productservice';

@Component({
  selector: 'app-cardiology-table',
  templateUrl: './cardiology-table.component.html',
  styleUrls: ['./cardiology-table.component.css']
})
export class CardiologyTableComponent implements OnInit {
  products: Product[];
  dialogVisible: boolean;
  scrollableCols: any[];
  frozenValue: any[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsSmall().then(data => this.products = data);

    this.scrollableCols = [
        { field: 'Type', header: 'Type' },
        { field: 'Date', header: 'Date' },
        { field: 'Discription', header: 'Discription' },
        { field: 'Download', header: 'Download' }
      ];
    this.products = [
        { id: '1'},
        { id: '2'},
        { id: '3'},
        { id: '4'}
      ];
  }
}