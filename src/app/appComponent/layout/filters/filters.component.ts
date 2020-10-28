import { Component, OnInit } from '@angular/core';
interface FilterOne {
  name: string;
  author: string;
}
interface FilterTwo {
  name: string;
  author: string;
}
interface FilterThree {
  name: string;
  author: string;
}
interface FilterFour {
  name: string;
  author: string;
}



@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  FilterOne: FilterOne[];
  selectedFilterOne: string;
  FilterTwo: FilterTwo[];
  selectedFilterTwo: string;
  FilterThree: FilterThree[];
  selectedFilterThree: string;
  FilterFour: FilterFour[];
  selectedFilterFour: string;
  en: any;
  value: Date;
  dates: Date[];
  rangeDates: Date[];
  es: any;
  invalidDates: Array<Date>;
  toggle:boolean = true;

  change(){
    this.toggle = !this.toggle;
  }
  constructor() {
    this.FilterOne = [
       {name: 'Date Range', author: 'Author1'},
      //  ^:^ THIS IS PNLY A PLACE HOLDER DONOT USE AS AN OPTION !!
       {name: 'Date1', author: 'Author2'},
       {name: 'Date2', author: 'Author3'},
       {name: 'Date3', author: 'Author4'},
       {name: 'Date4', author: 'Author5'}
   ];
   this.FilterTwo = [
    {name: 'All Studies/Medical Exams', author: 'Author1'},
    // ^:^ THIS IS PNLY A PLACE HOLDER DONOT USE AS AN OPTION !!
    {name: 'Study1', author: 'Author2'},
    {name: 'Study2', author: 'Author3'},
    {name: 'Study3', author: 'Author4'},
    {name: 'Study4', author: 'Author5'}
];
this.FilterThree = [
  {name: 'All healthcare providers', author: 'Author1'},
  // ^:^ THIS IS PNLY A PLACE HOLDER DONOT USE AS AN OPTION !!
  {name: 'provider1', author: 'Author2'},
  {name: 'provider2', author: 'Author3'},
  {name: 'provider3', author: 'Author4'},
  {name: 'provider4', author: 'Author5'}
];
this.FilterFour = [
  {name: 'English', author: 'Author1'},
  {name: 'Spanish', author: 'Author2'},
];
    }
  ngOnInit() {
      this.es = {
          firstDayOfWeek: 1,
          dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
          dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
          dayNamesMin: [ "D","L","M","X","J","V","S" ],
          monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
          monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
          today: 'Hoy',
          clear: 'Borrar'
      }

      let today = new Date();
      let invalidDate = new Date();
      invalidDate.setDate(today.getDate() - 1);
      this.invalidDates = [today,invalidDate];
  }
}

