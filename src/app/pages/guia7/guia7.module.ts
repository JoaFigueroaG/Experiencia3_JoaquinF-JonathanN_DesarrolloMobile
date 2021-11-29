import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Guia7PageRoutingModule } from './guia7-routing.module';

import { Guia7Page } from './guia7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Guia7PageRoutingModule
  ],
  declarations: [Guia7Page]
})
export class Guia7PageModule {}
