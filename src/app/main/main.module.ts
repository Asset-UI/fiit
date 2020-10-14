import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from '../../app/main/main.component';
import { LinechartComponent } from './components/chartComponents/linechart/linechart.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardComponent } from './components/card/card.component';
import { BarchartComponent } from './components/chartComponents/barchart/barchart.component';
import { VitalsComponent } from './components/screencomponents/vitals/vitals.component';
import { FiltersComponent } from './components/filters/filters.component';
import { BloodPressureLinechartComponent } from './components/chartComponents/blood-pressure-linechart/blood-pressure-linechart.component';
import { TemperatureLinechartComponent } from './components/chartComponents/temperature-linechart/temperature-linechart.component';
import { PulseHeartRateLinechartComponent } from './components/chartComponents/pulse-heart-rate-linechart/pulse-heart-rate-linechart.component';
import { BodyMassLinechartComponent } from './components/chartComponents/body-mass-linechart/body-mass-linechart.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MedsComponent } from './components/screencomponents/meds/meds.component';
import { MedsTableComponent } from './components/tablecomponents/meds-table/meds-table.component';
import { ProductService } from '../../assets/productservice';
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
import { NotesTableComponent } from './components/tableComponents/notes-table/notes-table.component';
import { MedicalResultsComponent } from './components/screencomponents/medical-results/medical-results.component';
import { NotesComponent } from './components/screencomponents/notes/notes.component';
import { CardiologyTableComponent } from './components/tableComponents/cardiology-table/cardiology-table.component';
import { ReportsOrdersComponent } from './components/screenComponents/visits/reports-orders/reports-orders.component';
import { VisitsResultsTableComponent } from './components/tableComponents/visits-results-table/visits-results-table.component';
import { CustomerService } from '../../assets/customerservice';
import { TicketService } from '../../assets/ticketservice';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'primeng/tooltip';
import { InputSwitchModule } from 'primeng/inputswitch'

@NgModule({

  declarations: [
    MainComponent,
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
    NotesTableComponent,
    MedicalResultsComponent,
    NotesComponent,
    CardiologyTableComponent,
    ReportsOrdersComponent,
    VisitsResultsTableComponent,
    // StepsComponent
  ],

  imports: [
    CommonModule,
    MainRoutingModule,
    DropdownModule,
    FormsModule,
    ChartModule,
    ToastModule,
    SidebarModule,
    ButtonModule,
    TabViewModule,
    MenuModule,
    CardModule,
    MenubarModule,
    InputSwitchModule,
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

  providers: [ProductService, CustomerService, TicketService]
})
export class MainModule { }
