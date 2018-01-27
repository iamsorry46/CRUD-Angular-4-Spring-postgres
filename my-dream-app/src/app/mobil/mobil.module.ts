import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobilRoutingModule } from './mobil-routing.module';
import { MobilListComponent } from './mobil-list/mobil-list.component';
import { MobilCreateComponent } from './mobil-create/mobil-create.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MobilRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MobilListComponent, MobilCreateComponent]
})
export class MobilModule { }
