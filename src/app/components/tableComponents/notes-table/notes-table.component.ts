import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../assets/product';
import { ProductService } from '../../../../assets/productservice';

@Component({
  selector: 'app-notes-table',
  templateUrl: './notes-table.component.html',
  styleUrls: ['./notes-table.component.css']
})
export class NotesTableComponent implements OnInit {
  products: Product[];
  dialogVisible: boolean;
  scrollableCols: any[];
  frozenValue: any[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsSmall().then(data => this.products = data);

    this.scrollableCols = [
        { field: 'Note_Type', header: 'Note Type' },
        { field: 'Header_Subject', header: 'Header/Subject' },
        { field: 'Provider_Name', header: 'Provider Name' },
        { field: 'Note_Date', header: 'Note Date' },
        { field: 'Download', header: 'Download' }
      ];
    this.products = [
        { id: '1'},
        { id: '2'},
        { id: '3'},
        { id: '4'},  
        { id: '5'}
      ];
  }
}