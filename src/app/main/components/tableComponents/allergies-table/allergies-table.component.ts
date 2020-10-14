import { Component, OnInit } from '@angular/core';
import { Product } from 'src/assets/product';
import { ProductService } from 'src/assets/productservice';

@Component({
  selector: 'app-allergies-table',
  templateUrl: './allergies-table.component.html',
  styleUrls: ['./allergies-table.component.css']
})
export class AllergiesTableComponent implements OnInit {
  products: Product[];
  dialogVisible: boolean;
  scrollableCols: any[];
  frozenValue: any[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.productService.getProductsSmall().then(data => this.products = data);

      this.scrollableCols = [
          { field: 'Allergy Name', header: 'Allergy Name' },
          { field: 'Allergen info', header: 'Allergen info' },
          { field: 'Dosage Unit', header: 'Dosage Unit' },
      ];
      this.products = [
          { id: '1'},
          { id: '2'},
          { id: '3'},
          { id: '4'}
      ];
  }
}