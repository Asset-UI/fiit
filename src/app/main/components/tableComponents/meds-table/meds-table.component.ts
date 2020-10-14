import { Component, OnInit } from '@angular/core';
import { Product } from 'src/assets/product';
import { ProductService } from 'src/assets/productservice';

@Component({
  selector: 'app-meds-table',
  templateUrl: './meds-table.component.html',
  styleUrls: ['./meds-table.component.css']
})
export class MedsTableComponent implements OnInit {
  products: Product[];
  dialogVisible: boolean;
  scrollableCols: any[];
  frozenValue: any[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.productService.getProductsSmall().then(data => this.products = data);

      this.scrollableCols = [
          { field: 'Medication_Name', header: 'Medication Name' },
          { field: 'Prescription_date', header: 'Prescription date' },
          { field: 'Start_Date', header: 'Start Date' },
          { field: 'Dosage', header: 'Dosage' },
          { field: 'Dosage_Unit', header: 'Dosage Unit' },
          { field: 'Frequency', header: 'Frequency' },
          { field: 'Stop_Date', header: 'Stop Date' }
      ];
      this.products = [
          { id: '1'},
          { id: '2'},
          { id: '3'},
          { id: '4'},  
          { id: '5'},
          { id: '6'},
          { id: '7'}
      ];
  }
}
