import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SopirRoutingModule } from './sopir-routing.module';
import { SopirListComponent } from './sopir-list/sopir-list.component';
import { SopirCreateComponent } from './sopir-create/sopir-create.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SopirRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SopirListComponent, SopirCreateComponent]
})
export class SopirModule { }
