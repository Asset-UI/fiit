import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsDemo } from './stepsdemo';
import { StepsDemoRoutingModule } from './stepsdemo-routing.module';
import { StepsModule } from 'primeng/steps';
import { TabViewModule } from 'primeng/tabview';
import { IntegrationData } from './IntegrationData';
import { ConfirmationDemo } from './confirmationdemo';
import { GeneralInformation } from './generalInformation';
import { PaymentDemo } from './paymentdemo';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { TicketService } from 'src/assets/ticketservice';
import {CalendarModule} from 'primeng/calendar';


@NgModule({
	imports: [
		CommonModule,
		StepsDemoRoutingModule,
        StepsModule,
		TabViewModule,
		ButtonModule,
		CardModule,
		InputTextModule,
		DropdownModule,
		InputMaskModule,
		CheckboxModule,
		ToastModule,
		FormsModule,
		CalendarModule
	],
	declarations: [
		StepsDemo,
		IntegrationData,
		ConfirmationDemo,
		GeneralInformation,
		PaymentDemo
	],
	providers: [
		TicketService
	]
})
export class StepsDemoModule {}