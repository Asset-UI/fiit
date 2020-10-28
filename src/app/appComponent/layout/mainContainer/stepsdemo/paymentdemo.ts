import {Component,OnInit} from '@angular/core';
import { TicketService } from 'src/assets/ticketservice';
import { Router } from '@angular/router';


@Component({
    templateUrl: './paymentdemo.html'
})
export class PaymentDemo implements OnInit {

    paymentInformation: any;

    constructor(public ticketService: TicketService, private router: Router) { }

    ngOnInit() { 
        this.paymentInformation = this.ticketService.ticketInformation.paymentInformation;
    }

    nextPage() {
        this.ticketService.ticketInformation.paymentInformation = this.paymentInformation;
        this.router.navigate(['steps/confirmation']);
    }

    prevPage() {
        this.router.navigate(['steps/seat']);
    }
}