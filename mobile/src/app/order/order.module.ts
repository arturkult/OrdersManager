import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrderComponent } from './order.component';
import { CallLog } from '@ionic-native/call-log/ngx';
import { Contacts } from '@ionic-native/contacts';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule, ReactiveFormsModule],
  declarations: [OrderComponent],
  exports: [OrderComponent],
  providers: [CallLog, Contacts]
})
export class OrderComponentModule {}
