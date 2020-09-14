import { Component, OnInit } from '@angular/core';
import { BloodPressureLinechartComponent } from '../../chartComponents/blood-pressure-linechart/blood-pressure-linechart.component';

@Component({
  selector: 'app-allergies',
  templateUrl: './allergies.component.html',
  styleUrls: ['./allergies.component.css']
})
export class AllergiesComponent implements OnInit {

  constructor() {
    // BloodPressureLinechartComponent.options.scales.xAxes[0] = {}
    // function updateScales(
    //   chart:
    //   {
    //     scales: {
    //       [x: string]: any;
    //     };
    //     options: {
    //       scales: {
    //         xAxes: {
    //           id: string;
    //           ticks: {
    //             fontColor: string;
    //           };
    //           display: boolean;
    //         }[];
    //         yAxes: {
    //           display: boolean;
    //           ticks: {
    //             fontColor: string;
    //           };
    //           type: string;
    //         }[];
    //       };
    //     };
    //     update: () => void; }) {
    //   var xScale = chart.scales['x-axis-0'];
    //   var yScale = chart.scales['y-axis-0'];
    //   chart.options.scales = {
    //       xAxes: [{
    //         id: 'newId',
    //         ticks: {
    //           fontColor: '#000'
    //           },
    //         display: true
    //       }],
    //       yAxes: [{
    //         display: true,
    //         ticks: {
    //           fontColor: '#000'
    //         },
    //         type: 'logarithmic'
    //       }]
    //   };
    //   chart.update();
    //   // need to update the reference
    //   xScale = chart.scales['newId'];
    //   yScale = chart.scales['y-axis-0'];
    // }
  }
  // function updateConfigByMutating(chart : any) {
  //   this.chart = {
  //     options: {
  //       title: {
  //         text: 'new title'
  //       }
  //     },
  //     update: (chart)
  //   }
  // };
  // function updateConfigAsNewObject(chart: any) {
  //   this.chart = {
  //     scales: {
  //       xAxes: {
  //         ticks: {
  //           fontColor: '#000'
  //         }
  //        },
  //       yAxes: {
  //         ticks: {
  //           fontColor: '#000'
  //         }
  //       }
  //     },
  //     update: (chart)
  //   }
  // }
  ngOnInit(): void {
  }

}
