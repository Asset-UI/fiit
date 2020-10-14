import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BackendRoutingModule } from './backend-routing.module';
import { BackendComponent } from '../../app/backend/backend.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductService } from '../../assets/productservice';
import { BackEndTableComponent } from './components/tableComponents/back-end-table/back-end-table.component';
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
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'primeng/tooltip';
import { InputSwitchModule } from 'primeng/inputswitch';
import { HomeComponent } from './components/screenComponents/home/home.component';
import { ProvidersComponent } from './components/screenComponents/providers/providers.component';
import { ReportsComponent } from './components/screenComponents/reports/reports.component';
import { LangselectionComponent } from './components/screenComponents/langselection/langselection.component';
import { ViewinfoComponent } from './components/tableComponents/back-end-table/viewinfo/viewinfo.component';

@NgModule({

  declarations: [
    BackendComponent,
    MenuComponent,
    BackEndTableComponent,
    HomeComponent,
    ProvidersComponent,
    ReportsComponent,
    LangselectionComponent,
    ViewinfoComponent
    ],

  imports: [
    CommonModule,
    BackendRoutingModule,
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
    CalendarModule,
    TableModule,
    HttpClientModule,
    TooltipModule
  ],
  providers: [ProductService, CustomerService, TicketService]
})
// export class LangselectionComponent{}
export class BackendModule { }
