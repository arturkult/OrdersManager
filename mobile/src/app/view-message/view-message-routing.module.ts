import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewOrderPage } from './view-message.page';

const routes: Routes = [
  {
    path: '',
    component: ViewOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMessagePageRoutingModule {}
