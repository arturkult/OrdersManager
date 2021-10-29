import { Component, OnInit, Input } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';
import { ModalController } from '@ionic/angular';
import { Order } from '../services/order.service';
import { ViewOrderPage } from '../view-message/view-message.page';

@Component({
  selector: 'app-message',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  @Input() order: Order;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  async openModal(){
    var a = await this.modalController.create({
      component: ViewOrderPage
    });
    await a.present();
  }

  async call(){
    window.open('tel:' + this.order.phone);
  }
}
