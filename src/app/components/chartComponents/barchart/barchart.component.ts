import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  data: any;
  options: any;


  constructor() { 
     this.data = {
            labels: ['2010', '2011', '2012', '2013','2016', '2015'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    yAxisID: 'right-y-axis',
                    barPercentage: '0.1'
                }
            ]
        };
        this.options = {
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
