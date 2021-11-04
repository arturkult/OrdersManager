import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/pl';

export enum OrderStatus {
  New,
  Delivered, 
  Deleted
}

export interface Order {
  phone: string;
  address: string;
  deliveryDate: string;
  createDate: string;
  id: number;
  description: string;
  amount: number;
  cost: number;
  type: string;
  status: OrderStatus;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [
    {
      phone: faker.phone.phoneNumber('###-###-###'),
      address: faker.address.streetAddress(),
      deliveryDate: new Date().toLocaleDateString(),
      id: 0,
      createDate: new Date().toLocaleDateString(),
      description: 'uwagi',
      amount: 5,
      cost: 450,
      type: 'klepki',
      status: OrderStatus.New
    },
    {
      phone: faker.phone.phoneNumber('###-###-###'),
      address: faker.address.streetAddress(),
      deliveryDate: new Date().toLocaleDateString(),
      id: 1,
      createDate: new Date().toLocaleDateString(),
      description: 'uwagi',
      amount: 5,
      cost: 450,
      type: 'klepki',
      status: OrderStatus.New
    },
    {
      phone: faker.phone.phoneNumber('###-###-###'),
      address: faker.address.streetAddress(),
      deliveryDate: new Date().toLocaleDateString(),
      id: 2,
      createDate: new Date().toLocaleDateString(),
      description: 'uwagi',
      amount: 5,
      cost: 450,
      type: 'klepki',
      status: OrderStatus.New
    },
    {
      phone: faker.phone.phoneNumber('###-###-###'),
      address: faker.address.streetAddress(),
      deliveryDate: new Date().toLocaleDateString(),
      id: 3,
      createDate: new Date().toLocaleDateString(),
      description: 'uwagi',
      amount: 5,
      cost: 450,
      type: 'klepki',
      status: OrderStatus.New
    },
    {
      phone: faker.phone.phoneNumber('###-###-###'),
      address: faker.address.streetAddress(),
      deliveryDate: new Date().toLocaleDateString(),
      id: 4,
      createDate: new Date().toLocaleDateString(),
      description: 'uwagi',
      amount: 5,
      cost: 450,
      type: 'klepki',
      status: OrderStatus.New
    },
    {
      phone: faker.phone.phoneNumber('###-###-###'),
      address: faker.address.streetAddress(),
      deliveryDate: new Date().toLocaleDateString(),
      id: 5,
      createDate: new Date().toLocaleDateString(),
      description: 'uwagi',
      amount: 5,
      cost: 450,
      type: 'klepki',
      status: OrderStatus.New
    },
    {
      phone: faker.phone.phoneNumber('###-###-###'),
      address: faker.address.streetAddress(),
      deliveryDate: new Date().toLocaleDateString(),
      id: 6,
      createDate: new Date().toLocaleDateString(),
      description: 'uwagi',
      amount: 5,
      cost: 450,
      type: 'klepki',
      status: OrderStatus.New
    },
    {
      phone: faker.phone.phoneNumber('###-###-###'),
      address: faker.address.streetAddress(),
      deliveryDate: new Date().toLocaleDateString(),
      id: 7,
      createDate: new Date().toLocaleDateString(),
      description: 'uwagi',
      amount: 5,
      cost: 450,
      type: 'klepki',
      status: OrderStatus.New
    }
  ];

  constructor() { }

  public getOrders(): Order[] {
    return this.orders;
  }

  public getOrderById(id: number): Order {
    return this.orders[id];
  }

  public addOrder(order: Order) {
    this.orders.push({
      ...order,
      createDate: new Date().toLocaleDateString(),
      id: this.orders.length
    });
  }

  public deliverOrder(id: number) {
    this.orders.find(order=> order.id === id).status = OrderStatus.Delivered;
  }

  public removeOrder(id: number) {
    this.orders.find(order=> order.id === id).status = OrderStatus.Deleted;

  }
}
