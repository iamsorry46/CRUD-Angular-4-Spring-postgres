import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SopirListComponent } from './sopir-list/sopir-list.component';
import { SopirCreateComponent } from './sopir-create/sopir-create.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
    {path: 'sopir', component: SopirListComponent},
    {path: 'sopir/create', component: SopirCreateComponent},
    {path: 'sopir/edit/:id', component: SopirCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SopirRoutingModule { }
