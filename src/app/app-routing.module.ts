
import { VisitDetailsComponent } from './appComponent/layout/mainContainer/visits/visit-details/visit-details.component';
import { VisitsComponent } from './appComponent/layout/mainContainer/visits/visits.component';
import { ConditionsComponent } from './appComponent/layout/mainContainer/conditions/conditions.component';
import { ImmunizationComponent } from './appComponent/layout/mainContainer/immunization/immunization.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './appComponent/layout/login/login.component';
import { VitalsComponent } from './appComponent/layout/mainContainer/vitals/vitals.component';
import { AllergiesComponent } from './appComponent/layout/mainContainer/allergies/allergies.component';
import { MedsComponent } from './appComponent/layout/mainContainer/meds/meds.component';
import { NotesComponent } from './appComponent/layout/mainContainer/notes/notes.component';
import { HomeComponent } from './appComponent/layout/mainContainer/home/home.component';
import { ProvidersComponent } from './appComponent/layout/mainContainer/providers/providers.component';
import { ReportsComponent } from './appComponent/layout/mainContainer/reports/reports.component';
import { MedicalResultsComponent } from './appComponent/layout/mainContainer/medical-results/medical-results.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'vitals', component: VitalsComponent, pathMatch: 'full' },
  { path: 'allergies', component: AllergiesComponent },
  { path: 'meds', component: MedsComponent },
  { path: 'immunization', component: ImmunizationComponent },
  { path: 'conditions', component: ConditionsComponent },
  { path: 'medical-results', component: MedicalResultsComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'visits', component: VisitsComponent },
  { path: 'visit-details', component: VisitDetailsComponent },
  { path: 'home', component: HomeComponent },
  {path: 'steps', loadChildren: () => import('./appComponent/layout/mainContainer/stepsdemo/stepsdemo.module').then(m => m.StepsDemoModule)},
  { path: 'providers', component: ProvidersComponent },
  { path: 'reports', component: ReportsComponent },
  { path: '**', redirectTo: 'vitals' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }