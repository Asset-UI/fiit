import { Component, OnInit } from '@angular/core';

interface FilterFour {
  name: string;
  author: string;
}

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})

export class ReportsComponent implements OnInit {
  statuses: any[];
  types: any[];
  FilterFour: FilterFour[];
  selectedFilterFour: string;
  
  constructor() {
    this.FilterFour = [
      {name: 'English', author: 'Author1'},
      {name: 'Italian', author: 'Author2'},
    ];
   }
  ngOnInit(): void {}
}
