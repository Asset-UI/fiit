import {Component,OnInit} from '@angular/core';
import { TicketService } from 'src/assets/ticketservice';
import { Router } from '@angular/router';


@Component({
    templateUrl: './confirmationdemo.html'
})
export class ConfirmationDemo implements OnInit {
    
    ticketInformation: any;
    
    constructor(public ticketService: TicketService, private router: Router) { }

    ngOnInit() { 
        this.ticketInformation = this.ticketService.ticketInformation;
    }

    complete() {
        this.ticketService.complete();
    }

    prevPage() {
        this.router.navigate(['steps/payment']);
    }
}