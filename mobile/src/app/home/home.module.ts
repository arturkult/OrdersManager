import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { OrderComponentModule } from '../order/order.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderComponentModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
