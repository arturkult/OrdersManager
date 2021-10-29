import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrderService, Order } from '../services/order.service';
import { ViewOrderPage } from '../view-message/view-message.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: OrderService,
    private modalController: ModalController) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getOrders(): Order[] {
    return this.data.getOrders();
  }

  async openCreateModal() {
    const modal = await this.modalController.create({
      component: ViewOrderPage
    });
    await modal.present();
  }
}
