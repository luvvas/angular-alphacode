import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'contact-form', pathMatch: 'full'},
  {path: 'contact-form', component: ContactFormComponent},
  {path: 'contact-list', component: ContactListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
