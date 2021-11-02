import { Component, OnInit, Input, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Order } from '../services/order.service';
import { OrderDetailsPage } from '../order-details/order-details.page';
import { EventEmitter } from 'stream';

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

  async call(){
    window.open('tel:' + this.order.phone);
  }
}
