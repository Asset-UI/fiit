import {Component,OnInit,ViewEncapsulation} from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import { TicketService } from 'src/assets/ticketservice';
import { Subscription } from 'rxjs';
interface FilterFour {
  name: string;
  author: string;
}
@Component({
    templateUrl: './stepsdemo.html',
    styleUrls: ['stepsdemo.scss'],
    providers: [MessageService]
})
export class StepsDemo implements OnInit {

    items: MenuItem[];
    
    subscription: Subscription;
    FilterFour: FilterFour[];
    selectedFilterFour: string;
    constructor(public messageService: MessageService, public ticketService: TicketService) {
    this.FilterFour = [
        {name: 'English', author: 'Author1'},
        {name: 'Italian', author: 'Author2'},
        ];
    }
    ngOnInit() {
        this.items = [{
                label: 'General Information',
                routerLink: 'general'
            },
            {
                label: 'Integration',
                routerLink: 'integration'
            }
        ];

        this.subscription = this.ticketService.paymentComplete$.subscribe((generalInformation) =>{
        this.messageService.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + generalInformation.providername + ' ' + generalInformation.lastname + ' your order completed.'});
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}