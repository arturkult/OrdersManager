import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewOrderPage } from './view-message.page';

import { IonicModule } from '@ionic/angular';

import { ViewMessagePageRoutingModule } from './view-message-routing.module';
import { CallLog } from '@ionic-native/call-log/ngx';
import { Contacts } from '@ionic-native/contacts';
import { PickFromCallLogsComponent } from '../pick-from-call-logs/pick-from-call-logs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMessagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ViewOrderPage, PickFromCallLogsComponent],
  providers: [CallLog, Contacts]
})
export class ViewMessagePageModule {}
