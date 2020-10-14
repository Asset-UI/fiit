import { NgModule } from '@angular/core';
import { BackendComponent } from './backend.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/screenComponents/home/home.component';
import { ProvidersComponent } from './components/screenComponents/providers/providers.component';


@NgModule({
  imports: [RouterModule.forChild([
    {path: '' , component: BackendComponent, children:[
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {path: 'steps', loadChildren: () => import('./components/screenComponents/stepsdemo/stepsdemo.module').then(m => m.StepsDemoModule)},
      { path: 'providers', component: ProvidersComponent },
    ]}
  ])],
  exports: [RouterModule]
})
export class BackendRoutingModule { }
