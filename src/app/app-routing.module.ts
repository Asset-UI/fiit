import { ImmunizationComponent } from './components/screenComponents/immunization/immunization.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VitalsComponent } from './components/screencomponents/vitals/vitals.component';
import { AllergiesComponent } from './components/screencomponents/allergies/allergies.component';
import { MedsComponent } from './components/screencomponents/meds/meds.component';

const routes: Routes = [
  { path: '', component: VitalsComponent, pathMatch: 'full' },
  { path: 'allergies', component: AllergiesComponent },
  { path: 'meds', component: MedsComponent },
  { path: 'immunization', component: ImmunizationComponent },
  { path: '**', redirectTo: '' }
  // { path: '**', redirectTo: '' }
];
// export const routes: Routes = [
//   { 
//     path: 'linechart', 
//     component: LinechartComponent
//    },
//   {
//     path: 'hello',
//     component: HelloworldComponent,
//     children: []
//   }
// ];

// export const APP_ROUTER_PROVIDERS = [
//   RouterModule.forRoot(routes)
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
