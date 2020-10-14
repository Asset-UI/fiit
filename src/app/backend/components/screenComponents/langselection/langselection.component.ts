import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface FilterFour {
  name: string;
  author: string;
}
@Component({
  selector: 'app-langselection',
  templateUrl: './langselection.component.html',
  styleUrls: ['./langselection.component.css']
})
export class LangselectionComponent implements OnInit {

  FilterFour: FilterFour[];
  selectedFilterFour: string;
  
  constructor(private router: Router) {
    this.FilterFour = [
      {name: 'English', author: 'Author1'},
      {name: 'Italian', author: 'Author2'},
    ];
  }
  ngOnInit(): void {
  }
}
