import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Guia7Page } from './guia7.page';

const routes: Routes = [
  {
    path: '',
    component: Guia7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Guia7PageRoutingModule {}
