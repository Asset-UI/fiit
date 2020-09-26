import { VisitDetailsComponent } from './components/screenComponents/visits/visit-details/visit-details.component';
import { VisitsComponent } from './components/screenComponents/visits/visits.component';
import { ConditionsComponent } from './components/screenComponents/conditions/conditions.component';
import { ImmunizationComponent } from './components/screenComponents/immunization/immunization.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VitalsComponent } from './components/screencomponents/vitals/vitals.component';
import { AllergiesComponent } from './components/screencomponents/allergies/allergies.component';
import { MedsComponent } from './components/screencomponents/meds/meds.component';
import { NotesComponent } from './components/screencomponents/notes/notes.component';
import { MedicalResultsComponent } from './components/screencomponents/medical-results/medical-results.component';


const routes: Routes = [
  { path: 'vitals', component: VitalsComponent, pathMatch: 'full' },
  { path: 'allergies', component: AllergiesComponent },
  { path: 'meds', component: MedsComponent },
  { path: 'immunization', component: ImmunizationComponent },
  { path: 'conditions', component: ConditionsComponent },
  { path: 'medical-results', component: MedicalResultsComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'visits', component: VisitsComponent },
  { path: 'visit-details', component: VisitDetailsComponent },
  { path: '**', redirectTo: 'vitals' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
