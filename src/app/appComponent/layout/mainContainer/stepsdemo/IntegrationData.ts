import {Component,OnInit} from '@angular/core';
import { TicketService } from 'src/assets/ticketservice';
import { CustomerService } from 'src/assets/customerservice';
import { Router } from '@angular/router';


@Component({
    templateUrl: './IntegrationData.html'
})
export class IntegrationData implements OnInit {
    
    public items: any[];

    public append() {
         this.items.push({
             // values depend on what an item is
         });
    }
        constructor(public ticketService: TicketService, private router: Router, private customerService: CustomerService) { }
    
        statuses: any;
    
        rangeDates: Date[];
    
        types: any;
    
        generalInformation: any;
    
        submitted: boolean = false;
    
        classes: any[];
    
        vagons: any[];
    
        seats: any[];
    
        IntegrationData: any;
    
        ngOnInit() { 
            this.generalInformation = this.ticketService.getTicketInformation().generalInformation;
             this.IntegrationData = this.ticketService.ticketInformation.IntegrationData;
    
            this.classes = [
                {name: 'First Class', code: 'A', factor: 1},
                {name: 'Second Class', code: 'B', factor: 2},
                {name: 'Third Class', code: 'C', factor: 3}
            ];    
            this.types = [
                {label: 'Clinic', value: 'Clinic'},
                {label: 'Hospital', value: 'Hospital'}
            ]
            this.statuses = [
                {label: 'Cerner Millennium', value: 'Cerner Millennium'},
                {label: 'Epic', value: 'Epic'},
                {label: 'Touchworks', value: 'Touchworks'},
                {label: '1Up Health', value: '1Up Health'}
            ]
        }
    
        setVagons(event) {
            if (this.IntegrationData.class && event.value) {
                this.vagons = [];
                this.seats = [];
                for (let i = 1; i < 3 * event.value.factor; i++) {
                    this.vagons.push({wagon: i + event.value.code, type: event.value.name, factor: event.value.factor});
                }
            }
        }
        complete() {
            this.ticketService.complete();
        }
        cancel() {
            this.router.navigate(['/backend/providers']);
        }
    
        prevPage() {
            this.router.navigate(['/backend/steps/general']);
            this.submitted = true;
        }
    }