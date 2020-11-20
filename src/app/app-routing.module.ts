import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from './components/form.component'
import {ConfirmationComponent} from './components/confirmation.component'
const routes: Routes = [
  {path: 'form', component: FormComponent},
  {path: 'confirmation', component: ConfirmationComponent},
  {path: '', redirectTo:'/form', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
