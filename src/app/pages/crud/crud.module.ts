import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CRUDPageRoutingModule } from './crud-routing.module';

import { CRUDPage } from './crud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CRUDPageRoutingModule
  ],
  declarations: [CRUDPage]
})
export class CRUDPageModule {}
