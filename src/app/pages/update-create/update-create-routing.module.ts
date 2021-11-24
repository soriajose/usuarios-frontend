import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateCreatePage } from './update-create.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateCreatePageRoutingModule {}
