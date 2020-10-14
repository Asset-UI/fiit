import {Component,OnInit} from '@angular/core';
import { TicketService } from 'src/assets/ticketservice';
import { CustomerService } from 'src/assets/customerservice';
import { Router } from '@angular/router';


@Component({
    templateUrl: './generalInformation.html'
})
export class GeneralInformation implements OnInit {

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

    date1: Date;

    date2: Date;

    date3: Date;

    date4: Date;

    date5: Date;

    date6: Date;

    date7: Date;

    date8: Date;

    date9: Date;

    date10: Date;

    date11: Date;

    date12: Date;

    date13: Date;

    date14: Date;
    
    dates: Date[];

    minDate: Date;

    maxDate: Date;

    es: any;

    invalidDates: Array<Date>

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
        this.es = {
            firstDayOfWeek: 1,
            dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
            dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
            dayNamesMin: [ "D","L","M","X","J","V","S" ],
            monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
            monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
            today: 'Hoy',
            clear: 'Borrar'
        }

        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month -1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);

        let invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);
        this.invalidDates = [today,invalidDate];

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

    nextPage() {
        // if (this.generalInformation.providername && this.generalInformation.lastname && this.generalInformation.age) {
            this.ticketService.ticketInformation.generalInformation = this.generalInformation;
            this.router.navigate(['/backend/steps/integration']);

            // return;
        // }

        this.submitted = true;
    }
}