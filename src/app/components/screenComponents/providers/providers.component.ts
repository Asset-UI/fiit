import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface BeFilterOne {
  name: string;
  author: string;
}
interface BeFilterTwo {
  name: string;
  author: string;
}
interface BeFilterThree {
  name: string;
  author: string;
}
@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
  BeFilterOne: BeFilterOne[];
  BeselectedFilterOne: string;
  BeFilterTwo: BeFilterTwo[];
  BeselectedFilterTwo: string;
  BeFilterThree: BeFilterTwo[];
  BeselectedFilterThree: string;
  constructor(private router: Router) { 
    this.BeFilterOne = [
       {name: 'Provider Type', author: 'Author1'},
      //  ^:^ THIS IS PNLY A PLACE HOLDER DONOT USE AS AN OPTION !!
       {name: 'Date1', author: 'Author2'},
       {name: 'Date2', author: 'Author3'},
       {name: 'Date3', author: 'Author4'},
       {name: 'Date4', author: 'Author5'}
    ];
    this.BeFilterTwo = [
    {name: 'Contract Start Date', author: 'Author1'},
    // ^:^ THIS IS PNLY A PLACE HOLDER DONOT USE AS AN OPTION !!
    {name: 'Study1', author: 'Author2'},
    {name: 'Study2', author: 'Author3'},
    {name: 'Study3', author: 'Author4'},
    {name: 'Study4', author: 'Author5'}
    ];
      this.BeFilterThree = [
        {name: 'Integration type', author: 'Author1'},
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
