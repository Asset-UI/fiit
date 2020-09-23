import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visit-details',
  templateUrl: './visit-details.component.html',
  styleUrls: ['./visit-details.component.css']
})
export class VisitDetailsComponent implements OnInit {

  tab = 'general'

  constructor() { }

  tabVeiw(tabName) {
    this.tab = tabName
  }

  ngOnInit(): void {
  }

}
