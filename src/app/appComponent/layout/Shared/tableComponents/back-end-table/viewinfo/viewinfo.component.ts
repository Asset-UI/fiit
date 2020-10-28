import { Component, OnInit, ViewChild } from '@angular/core';
interface FilterTabOne {
  name: string;
  author: string;
}
interface FilterTabTwo {
  name: string;
  author: string;
}

@Component({
  selector: 'app-viewinfo',
  templateUrl: './viewinfo.component.html',
  styleUrls: ['./viewinfo.component.css']
})
export class ViewinfoComponent implements OnInit {
  activeIndex: number = 0;

  @ViewChild("myLabel") lab: any;

  FilterTabOne: FilterTabOne[];

  selectedTabFilterOne: string;
 
  FilterTabTwo: FilterTabTwo[];

  selectedTabFilterTwo: string;


  showOrHideManually() {
    this.lab.nativeElement.classList.remove("CustView");
    this.lab.nativeElement.classList.add("DefView");
  }

  constructor() {
    this.FilterTabOne = [
      {name: 'Select Laboratory Type', author: 'Author1'},
     //  ^:^ THIS IS PNLY A PLACE HOLDER DONOT USE AS AN OPTION !!
      {name: 'Date1', author: 'Author2'},
      {name: 'Date2', author: 'Author3'},
      {name: 'Date3', author: 'Author4'},
      {name: 'Date4', author: 'Author5'}
    ];
    this.FilterTabTwo = [
      {name: 'Select Specific Test', author: 'Author1'},
      // ^:^ THIS IS PNLY A PLACE HOLDER DONOT USE AS AN OPTION !!
      {name: 'Study1', author: 'Author2'},
      {name: 'Study2', author: 'Author3'},
      {name: 'Study3', author: 'Author4'},
      {name: 'Study4', author: 'Author5'}
    ];
  }


  ngOnInit(): void {
  }

}
