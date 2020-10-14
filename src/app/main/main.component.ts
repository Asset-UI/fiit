import { Component } from '@angular/core';

@Component({
  selector: 'Main-root',
  templateUrl: './Main.component.html',
  styleUrls: ['./Main.component.css']
})

export class MainComponent {
  public shouldShow:boolean = true;
  title = 'fiit';
}
