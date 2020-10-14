import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'main', loadChildren: () => import('../app/main/main.module').then(m => m.MainModule)},
  {path: 'backend', loadChildren: () => import('../app/backend/backend.module').then(m => m.BackendModule)},
  { path: '**', redirectTo: 'main' , pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
