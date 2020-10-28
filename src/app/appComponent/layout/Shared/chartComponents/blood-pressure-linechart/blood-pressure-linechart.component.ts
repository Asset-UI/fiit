import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AllergiesComponent } from '../../../mainContainer/allergies/allergies.component';

@Component({
  selector: 'app-blood-pressure-linechart',
  templateUrl: './blood-pressure-linechart.component.html',
  styleUrls: ['./blood-pressure-linechart.component.css'],
  providers: [MessageService]
})
export class BloodPressureLinechartComponent implements OnInit {
    @Input() chartModel: AllergiesComponent;
  
    ngOnInit() {
       this.methodIWantToCallToUpdateSettings();
    }
  
    methodIWantToCallToUpdateSettings(): void {
       //do your thing
    }

  blood_pressure_data: any;    
  options: any;
  static options: {
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
  constructor(private messageService: MessageService) {
      this.blood_pressure_data = {
          labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
          datasets: [
              {
                  label: 'First Dataset',
                  data: [50, 500, 300, 150, 500, 200],
                  yAxisID: 'left-y-axis',
                  fill: false,
                    labels: {display: false},
                  backgroundColor: '#FF313185',
                  borderColor: '#FF4A31',
                  borderStyle: 'dotted'
              },
              {
                label: 'Second Dataset',
                data: [150, 250, 150, 250, 150, 250],
                yAxisID: 'right-y-axis',
                fill: false,
                gridLines: false,
                  labels: false,
                backgroundColor: '#00ADFF7D',
                borderColor: '#1EB5FC',
                borderStyle: 'dotted',
                fontColor: '#fff'
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
                fontColor: '#ffffffd4',
                max: '100',
                min: 0
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
                fontColor: '#ffffffd4',
                position: 'right'
              },
              gridLines: {
                  display: false
              }
          }]
        }   
    };
  }
  selectData(event) {
      this.messageService.add({severity: 'info', summary: 'Data Selected', 'detail': this.blood_pressure_data.datasets[event.element._datasetIndex].data[event.element._index]});
  }
}