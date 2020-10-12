import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TicketService {

    ticketInformation = {
        generalInformation: {
            providername: '',
            registrationtype: null,
            providertype: null,
            contractstartdate: null,
            description: null
        },
        IntegrationData: {
            Integrationtype: null,
            upId: '',
            url: '',
            appName: '',
            appPass: ''
        },
        paymentInformation: {
            cardholderName:'',
            cardholderNumber:'',
            date:'',
            cvv:'',
            remember:false
        }
    };

    private paymentComplete = new Subject<any>();
    
    paymentComplete$ = this.paymentComplete.asObservable();

    getTicketInformation() {
        return this.ticketInformation;
    }

    setTicketInformation(ticketInformation) {
        this.ticketInformation = ticketInformation;
    }

    complete() {
        this.paymentComplete.next(this.ticketInformation.generalInformation);
    }
}