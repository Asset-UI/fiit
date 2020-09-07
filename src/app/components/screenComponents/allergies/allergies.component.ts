import { Component, OnInit } from '@angular/core';
import { VitalsComponent } from '../vitals/vitals.component';
import { BloodPressureLinechartComponent } from '../../chartComponents/blood-pressure-linechart/blood-pressure-linechart.component';

@Component({
  selector: 'app-allergies',
  templateUrl: './allergies.component.html',
  styleUrls: ['./allergies.component.css']
})
export class AllergiesComponent implements OnInit {

  constructor() {
    BloodPressureLinechartComponent.options = {
      reverse : true,
      legend: {
          lineWidth: 100,
          fontColor: '#fff',
          textDirection: 'rtl',
          scaleShowGridLines : false,
          borderDash : [5],
          rtl : true,
          reverse : true,
          DrawOnChartArea: false,
          display: false,
          tooltips: {
            rtl: true 
          } 
      },
      labels: {
        fontColor: 'rgb(255, 99, 132)'
      },
      scales: {
          xAxes: [{
            display: true,
            Color: '#fff',
            rtl : true,
            fontColor: '#fff',
            textDirection: 'rtl',
            ticks: {
              fontColor: '#064862'
            },
            gridLines: {
              display: false
          }
        }],
        yAxes: [{
          id: 'left-y-axis',
          type: 'linear',
          position: 'left',
          display: false
      }, {
          id: 'right-y-axis',
          type: 'linear',
          position: 'right',
            stacked: true,
            display: true,
            rtl : true,
            reverse : true,
            fontColor: '#fff',
            textDirection: 'rtl',
            ticks: {
              fontColor: '#064862'
            },
            gridLines: {
                display: false
            }
        }]
      }   
  };
   }

  ngOnInit(): void {
  }

}
