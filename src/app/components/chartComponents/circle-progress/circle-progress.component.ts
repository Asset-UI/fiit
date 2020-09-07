import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.css']
})
export class CircleProgressComponent implements OnInit {
  toggle:boolean = true;

  change(){
    this.toggle = !this.toggle;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
