import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer, Name } from 'src/assets/customer';
import { CustomerService } from 'src/assets/customerservice';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-back-end-table',
  templateUrl: './back-end-table.component.html',
  styleUrls: ['./back-end-table.component.css']
})
export class BackEndTableComponent implements OnInit {
    @ViewChild("tableOPT") lab: any;

  customers: Customer[];

    provider_names: Name[];

    statuses: any[];

    types: any[];

    loading: boolean = true;

    color:string = 'red';
    @ViewChild("popUp") ab: any;

    @ViewChild('dt') table: Table;

    constructor(private customerService: CustomerService) { }

    ngOnInit() {
        this.customerService.getCustomersSmall().then(customers => {
            this.customers = customers;
            this.loading = false;
        });
        this.provider_names = [
            {name: "Abbott Northwestern", image: 'Clinic.svg'},
            {name: "Aspirus HospitalWausau..", image: 'Hospital.svg'},
            {name: "Baptist Health Lexington", image: 'Clinic.svg'},
            {name: "Baptist Health Lexington", image: 'Hospital.svg'},
            {name: "The Johns Hopkins", image: 'Hospital.svg'}
        ];

        this.statuses = [
            {label: 'Cerner Millennium', value: 'Cerner Millennium'},
            {label: 'Epic', value: 'Epic'},
            {label: 'Touchworks', value: 'Touchworks'},
            {label: '1Up Health', value: '1Up Health'}
        ]
        this.types = [
            {label: 'Clinic', value: 'Clinic'},
            {label: 'Hospital', value: 'Hospital'}
        ]
    }

    onActivityChange(event) {
        const value = event.target.value;
        if (value && value.trim().length) {
            const activity = parseInt(value);

            if (!isNaN(activity)) {
                this.table.filter(activity, 'activity', 'gte');
            }
        }
    }

    onDateSelect(value) {
        this.table.filter(this.formatDate(value), 'contract_date', 'equals')
    }
    showManually() {
        this.lab.nativeElement.classList.add("ForceShow");
      }
      removeManually() {
        this.lab.nativeElement.classList.remove("ForceShow");
    }
    formatDate(date) {
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (month < 10) {
            month = '0' + month;
        }

        if (day < 10) {
            day = '0' + day;
        }

        return date.getFullYear() + '-' + month + '-' + day;
    }

    onRepresentativeChange(event) {
        this.table.filter(event.value, 'Name', 'in')
    }

    closePopup() {
       this.ab.nativeElement.classList.add("Hidden");
     }
    openPopup() {
       this.ab.nativeElement.classList.remove("Hidden");
    }
}