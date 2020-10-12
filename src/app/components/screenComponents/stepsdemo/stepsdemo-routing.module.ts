import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'
import { StepsDemo } from './stepsdemo';
import { IntegrationData } from './IntegrationData';
import { GeneralInformation } from './generalInformation';

@NgModule({
	imports: [
		RouterModule.forChild([
			{path:'',component: StepsDemo, children:[
				{path:'', redirectTo: 'general', pathMatch: 'full'},
				{path: 'general', component: GeneralInformation},
				{path: 'integration', component: IntegrationData},
			]}
		])
	],
	exports: [
		RouterModule
	]
})
export class StepsDemoRoutingModule {}