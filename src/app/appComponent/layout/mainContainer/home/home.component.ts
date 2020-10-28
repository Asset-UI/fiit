import { Component, OnInit } from '@angular/core';
interface FilterFour {
  name: string;
  author: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
FilterFour: FilterFour[];
    selectedFilterFour: string;
  constructor() {
    this.FilterFour = [
        {name: 'English', author: 'Author1'},
        {name: 'Italian', author: 'Author2'},
        ]; }

  ngOnInit(): void {
  }

}
