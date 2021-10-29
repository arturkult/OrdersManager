import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { OrderService, Order } from '../services/order.service';
import { CallLog } from '@ionic-native/call-log/ngx';
import { Contacts } from '@ionic-native/contacts';
import { PickFromCallLogsComponent } from '../pick-from-call-logs/pick-from-call-logs.component';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewOrderPage implements OnInit {
  public order: Order;
  orderForm: FormGroup;

  constructor(
    private data: OrderService,
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private callLog: CallLog,
    private contacts: Contacts
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.order = this.data.getOrderById(parseInt(id, 10));
    this.createForm();
  }

  createForm() {
    this.orderForm = this.formBuilder.group({
      phone: this.formBuilder.control('', Validators.required),
      address: this.formBuilder.control('', Validators.required),
      description: this.formBuilder.control(''),
      amount: this.formBuilder.control('', Validators.required),
      cost: this.formBuilder.control('', Validators.required),
      type: this.formBuilder.control(null, Validators.required),
    });
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

  async close() {
    this.orderForm.reset();
    await this.modalController.dismiss();
  }

  save(){
    this.orderForm.markAllAsTouched();
  }

  async openCallLog(){
    const modal = await this.modalController.create({
      component: PickFromCallLogsComponent,

    });
    await modal.present();
    const contactNumber = <string>(await modal.onWillDismiss()).data;
    if(contactNumber){
      this.setNumber(contactNumber);
    }
  }

  async pickFromContacts() {
    const contact = await this.contacts.pickContact();
    if(contact){
      this.setNumber(contact.phoneNumbers[0].value.replace('+48','').replace(' ',''));
    }
  }

  private setNumber(number: string){
    this.orderForm.controls.phone.setValue(number);
  }
}
