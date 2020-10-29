import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StepsModule } from 'primeng/steps';
// import { MainModule } from './main/main.module';
// import { BackendModule } from '../app/backend/backend.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LinechartComponent } from './appComponent/layout/Shared/chartComponents/linechart/linechart.component';
import { MenuComponent } from './appComponent/layout/menu/menu.component';
import { CardComponent } from './appComponent/layout//card/card.component';
import { BarchartComponent } from './appComponent/layout/Shared/chartComponents/barchart/barchart.component';
import { VitalsComponent } from './appComponent/layout/mainContainer/vitals/vitals.component';
import { FiltersComponent } from './appComponent/layout/filters/filters.component';
import { BloodPressureLinechartComponent } from './appComponent/layout/Shared/chartComponents/blood-pressure-linechart/blood-pressure-linechart.component';
import { TemperatureLinechartComponent } from './appComponent/layout/Shared/chartComponents/temperature-linechart/temperature-linechart.component';
import { PulseHeartRateLinechartComponent } from './appComponent/layout/Shared/chartComponents/pulse-heart-rate-linechart/pulse-heart-rate-linechart.component';
import { BodyMassLinechartComponent } from './appComponent/layout/Shared/chartComponents/body-mass-linechart/body-mass-linechart.component';
import { MedsComponent } from './appComponent/layout/mainContainer/meds/meds.component';
// import { MedsTableComponent } from './appComponent/layout/Shared/tablecomponents/meds-table/meds-table.component';
import { AllergiesComponent } from './appComponent/layout/mainContainer/allergies/allergies.component';
// import { AllergiesTableComponent } from './appComponent/layout/Shared/tableComponents/allergies-table/allergies-table.component';
import { CircleProgressComponent } from './appComponent/layout/Shared/chartComponents/circle-progress/circle-progress.component';
import { HeightBarchartComponent } from './appComponent/layout/Shared/chartComponents/height-barchart/height-barchart.component';
import { ImmunizationComponent } from './appComponent/layout/mainContainer/immunization/immunization.component';
// import { ImmuneTableComponent } from './appComponent/layout/Shared/tableComponents/immune-table/immune-table.component';
import { ConditionsComponent } from './appComponent/layout/mainContainer/conditions/conditions.component';
// import { ConditionsTableComponent } from './appComponent/layout/Shared/tableComponents/conditions-table/conditions-table.component';
import { VisitsComponent } from './appComponent/layout/mainContainer/visits/visits.component';
// import { VisitsTableComponent } from './appComponent/layout/Shared/tableComponents/visits-table/visits-table.component';
import { VisitDetailsComponent } from './appComponent/layout/mainContainer/visits/visit-details/visit-details.component';
import { NotesTableComponent } from './appComponent/layout/Shared/tableComponents/notes-table/notes-table.component';
import { MedicalResultsComponent } from './appComponent/layout/mainContainer/medical-results/medical-results.component';
import { NotesComponent } from './appComponent/layout/mainContainer/notes/notes.component';
// import { CardiologyTableComponent } from './appComponent/layout/Shared/tableComponents/cardiology-table/cardiology-table.component';
import { ReportsOrdersComponent } from './appComponent/layout/mainContainer/visits/reports-orders/reports-orders.component';
// import { VisitsResultsTableComponent } from './appComponent/layout/Shared/tableComponents/visits-results-table/visits-results-table.component';
import { CustomerService } from '../assets/customerservice';
import { TicketService } from '../assets/ticketservice';
import { ProductService } from '../assets/productservice';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
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
import { BackEndTableComponent } from './appComponent/layout/Shared/tableComponents/back-end-table/back-end-table.component';
import { SidebarModule } from 'primeng/sidebar';
import { ViewinfoComponent } from './appComponent/layout/Shared/tableComponents/back-end-table/viewinfo/viewinfo.component';
import { HomeComponent } from './appComponent/layout/mainContainer/home/home.component';
import { ProvidersComponent } from './appComponent/layout/mainContainer/providers/providers.component';
import { ReportsComponent } from './appComponent/layout/mainContainer/reports/reports.component';
import { LoginComponent } from './appComponent/layout/login/login.component';

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
    MedsComponent,
    // MedsTableComponent,
    AllergiesComponent,
    // AllergiesTableComponent,
    CircleProgressComponent,
    HeightBarchartComponent,
    ImmunizationComponent,
    // ImmuneTableComponent,
    ConditionsComponent,
    // ConditionsTableComponent,
    VisitsComponent,
    // VisitsTableComponent,
    VisitDetailsComponent,
    NotesTableComponent,
    MedicalResultsComponent,
    NotesComponent,
    // CardiologyTableComponent,
    ReportsOrdersComponent,
    // VisitsResultsTableComponent,
    MenuComponent,
    BackEndTableComponent,
    ViewinfoComponent,
    HomeComponent,
    ProvidersComponent,
    ReportsComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StepsModule,
    // MainModule,
    // BackendModule
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

  providers: [ProductService, CustomerService, TicketService],
  
  bootstrap: [AppComponent]
})
export class AppModule {

}