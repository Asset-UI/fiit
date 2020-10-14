import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StepsModule } from 'primeng/steps';
import { MainModule } from '../app/main/main.module';
import { BackendModule } from '../app/backend/backend.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({

  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StepsModule,
    MainModule,
    BackendModule
  ],

  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule {

}