import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/chart';
import { LinechartComponent } from './components/chartComponents/linechart/linechart.component';
import { ToastModule } from 'primeng/toast';
import { MenuComponent } from './components/menu/menu.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { MenuModule } from 'primeng/menu';
import { CardComponent } from './components/card/card.component';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { BarchartComponent } from './components/chartComponents/barchart/barchart.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { VitalsComponent } from './components/screencomponents/vitals/vitals.component';
import { FiltersComponent } from './components/filters/filters.component';
import { BloodPressureLinechartComponent } from './components/chartComponents/blood-pressure-linechart/blood-pressure-linechart.component';
import { TemperatureLinechartComponent } from './components/chartComponents/temperature-linechart/temperature-linechart.component';
import { PulseHeartRateLinechartComponent } from './components/chartComponents/pulse-heart-rate-linechart/pulse-heart-rate-linechart.component';
import { BodyMassLinechartComponent } from './components/chartComponents/body-mass-linechart/body-mass-linechart.component';
import { CalendarModule } from 'primeng/calendar';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MedsComponent } from './components/screencomponents/meds/meds.component';
import { MedsTableComponent } from './components/tablecomponents/meds-table/meds-table.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../assets/productservice';
import { TooltipModule } from 'primeng/tooltip';
import { AllergiesComponent } from './components/screencomponents/allergies/allergies.component';
import { AllergiesTableComponent } from './components/tableComponents/allergies-table/allergies-table.component';
import { CircleProgressComponent } from './components/chartComponents/circle-progress/circle-progress.component';
import { HeightBarchartComponent } from './components/chartComponents/height-barchart/height-barchart.component';
import { ImmunizationComponent } from './components/screenComponents/immunization/immunization.component';
import { ImmuneTableComponent } from './components/tableComponents/immune-table/immune-table.component';
import { ConditionsComponent } from './components/screenComponents/conditions/conditions.component';
import { ConditionsTableComponent } from './components/tableComponents/conditions-table/conditions-table.component';
import { VisitsComponent } from './components/screenComponents/visits/visits.component';
import { VisitsTableComponent } from './components/tableComponents/visits-table/visits-table.component';
import { VisitDetailsComponent } from './components/screenComponents/visits/visit-details/visit-details.component';
import { NotesComponent } from './components/screenComponents/notes/notes.component';
import { NotesTableComponent } from './components/tableComponents/notes-table/notes-table.component';



@NgModule({

  declarations: [
    AppComponent,
    LinechartComponent,
    MenuComponent,
    CardComponent,
    BarchartComponent,
    VitalsComponent,
    FiltersComponent,
    BloodPressureLinechartComponent,
    TemperatureLinechartComponent,
    PulseHeartRateLinechartComponent,
    BodyMassLinechartComponent,
    CalendarComponent,
    MedsComponent,
    MedsTableComponent,
    AllergiesComponent,
    AllergiesTableComponent,
    CircleProgressComponent,
    HeightBarchartComponent,
    ImmunizationComponent,
    ImmuneTableComponent,
    ConditionsComponent,
    ConditionsTableComponent,
    VisitsComponent,
    VisitsTableComponent,
    VisitDetailsComponent,
    NotesComponent,
    NotesTableComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    ChartModule,
    ToastModule,
    SidebarModule,
    ButtonModule,
    TabViewModule,
    MenuModule,
    CardModule,
    MenubarModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 60,
      space: -10,
      toFixed: 0,
      maxPercent: 100,
      outerStrokeGradient: true,
      outerStrokeWidth: 10,
      innerStrokeColor: "#e7e8ea",
      innerStrokeWidth: 10,
      showImage: true,
      showSubtitle: true,
      showTitle: true,
      animateTitle: true,
      animationDuration: 1000,
      showUnits: true,
      showBackground: true,
      clockwise: false,
      responsive: true,
      startFromZero: false
    }),
    CalendarModule,
    TableModule,
    HttpClientModule,
    TooltipModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {

}