import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobilListComponent } from './mobil-list/mobil-list.component';
import { MobilCreateComponent } from './mobil-create/mobil-create.component'
import { AppComponent } from '../app.component';

const routes: Routes = [
    {path: 'mobil', component: MobilListComponent},
    {path: 'mobil/create', component: MobilCreateComponent},
    {path: 'mobil/edit/:id', component: MobilCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobilRoutingModule { }
