import { OrderDetailsPage } from './../order-details/order-details.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrderService, Order } from '../services/order.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private orderService: OrderService,
    private modalController: ModalController) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getOrders(): Order[] {
    return this.orderService.getOrders();
  }

  async openCreateModal() {
    const modal = await this.modalController.create({
      component: OrderDetailsPage
    });
    await modal.present();
  }
  
  async openDetailsModal(){
    const modal = await this.modalController.create({
      component: OrderDetailsPage
    });
    await modal.present();
  }

  remove = (id: number) => this.orderService.removeOrder(id);

  deliver = (id: number) => this.orderService.deliverOrder(id);
}
