import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AgGridAngular } from 'ag-grid-angular';


@NgModule({
  declarations: [
    ContactFormComponent,
    ContactListComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    AgGridAngular
  ]
})
export class CrudModule { }
