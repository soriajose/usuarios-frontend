import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCreatePageRoutingModule } from './update-create-routing.module';

import { UpdateCreatePage } from './update-create.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateCreatePageRoutingModule
  ],
  declarations: [UpdateCreatePage]
})
export class UpdateCreatePageModule {}
