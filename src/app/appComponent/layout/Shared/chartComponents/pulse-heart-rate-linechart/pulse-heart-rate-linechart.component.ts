import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api'; 
@Component({
  selector: 'app-pulse-heart-rate-linechart',
  templateUrl: './pulse-heart-rate-linechart.component.html',
  styleUrls: ['./pulse-heart-rate-linechart.component.css'],
  providers: [MessageService] 
})
export class PulseHeartRateLinechartComponent {

  pulse_rate_data: any;    
  options: any;

  constructor(private messageService: MessageService) {
      this.pulse_rate_data = {
          labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
          datasets: [
              {
                  label: 'First Dataset',
                  data: [40, 40, 150, 50, 150, 40],
                  yAxisID: 'right-y-axis',
                  fill: false,
                    labels: {display: false},
                  backgroundColor: '#FF313185',
                  borderColor: '#fff',
                  borderStyle: 'dotted'
              }              
          ]
      }   
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
                fontColor: '#ffffffd4'
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
                fontColor: '#ffffffd4'
              },
              gridLines: {
                  display: false
              }
          }]
        }   
    };
  }
  selectData(event) {
      this.messageService.add({severity: 'info', summary: 'Data Selected', 'detail': this.pulse_rate_data.datasets[event.element._datasetIndex].data[event.element._index]});
  }
}