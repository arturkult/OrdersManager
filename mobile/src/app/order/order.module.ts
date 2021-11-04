import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrderComponent } from './order.component';
import { CallLog } from '@ionic-native/call-log/ngx';
import { Contacts } from '@ionic-native/contacts';
import { OrderDetailsPage } from '../order-details/order-details.page';
import { PickFromCallLogsComponent } from '../pick-from-call-logs/pick-from-call-logs.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule, ReactiveFormsModule],
  declarations: [OrderComponent, OrderDetailsPage, PickFromCallLogsComponent],
  exports: [OrderComponent, OrderDetailsPage],
  providers: [CallLog, Contacts]
})
export class OrderComponentModule {}
