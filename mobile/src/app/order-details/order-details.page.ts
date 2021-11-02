import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { OrderService, Order } from '../services/order.service';
import { Contacts } from '@ionic-native/contacts';
import { PickFromCallLogsComponent } from '../pick-from-call-logs/pick-from-call-logs.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  @Input() public order: Order;
  orderForm: FormGroup;

  private readonly assortments = [
    { id: 1, value: 'klepki bukowe' },
    { id: 2, value: 'klepki sosnowe' },
    { id: 3, value: 'brzoza' },
    { id: 4, value: 'sosna' },
    { id: 5, value: 'dąb' },
    { id: 6, value: 'buk' },
    { id: 7, value: 'jesion' },
    { id: 8, value: 'olcha' },
    { id: 9, value: 'świerk' }
  ];

  constructor(
    private data: OrderService,
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private contacts: Contacts,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.order = this.data.getOrderById(parseInt(id, 10));
    this.createForm();
    if(this.order){
      this.orderForm.patchValue(this.order);
    }
  }

  createForm() {
    this.orderForm = this.formBuilder.group({
      phone: this.formBuilder.control('', Validators.required),
      address: this.formBuilder.control('', Validators.required),
      amount: this.formBuilder.control('', Validators.required),
      cost: this.formBuilder.control('', Validators.required),
      type: this.formBuilder.control(null, Validators.required),
      description: this.formBuilder.control(''),
    });
  }

  async close() {
    this.orderForm.reset();
    await this.modalController.dismiss();
  }

  async save() {
    this.orderForm.markAllAsTouched();
    if (this.orderForm.valid) {
      this.orderService.addOrder(this.orderForm.getRawValue());
      await this.modalController.dismiss();
    }
  }

  async openCallLog() {
    const modal = await this.modalController.create({
      component: PickFromCallLogsComponent,
    });
    await modal.present();
    const contactNumber = (await modal.onWillDismiss()).data as string;
    if (contactNumber) {
      this.setNumber(contactNumber);
    }
  }

  async pickFromContacts() {
    const contact = await this.contacts.pickContact();
    if (contact) {
      this.setNumber(contact.phoneNumbers[0].value.replace('+48', '').replace(' ', ''));
    }
  }

  private setNumber(phoneNumber: string) {
    this.orderForm.controls.phone.setValue(phoneNumber);
  }
}
