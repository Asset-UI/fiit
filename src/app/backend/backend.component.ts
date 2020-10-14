import { Component } from '@angular/core';

@Component({
  selector: 'Backend-root',
  templateUrl: './Backend.component.html',
  styleUrls: ['./Backend.component.css']
})

export class BackendComponent {
  public shouldShow:boolean = true;
  title = 'fiit';
}
