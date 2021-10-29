import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/pl';

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
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public orders: Order[] = [
    {
      phone: faker.phone.phoneNumber('###-###-###'),
      address: faker.address.streetAddress(),
      deliveryDate: new Date().toLocaleDateString(),
      id: 0,
      createDate: new Date().toLocaleDateString(),
      description: "uwagi",
      amount: 5,
      cost: 450,
      type: 'klepki'
    },
    {
      phone: faker.phone.phoneNumber('###-###-###'),
      address: faker.address.streetAddress(),
      deliveryDate: new Date().toLocaleDateString(),
      id: 1,
      createDate: new Date().toLocaleDateString(),
      description: "uwagi",
      amount: 5,
      cost: 450,
      type: 'klepki'
    },
    {
      phone: faker.phone.phoneNumber('###-###-###'),
      address: faker.address.streetAddress(),
      deliveryDate: new Date().toLocaleDateString(),
      id: 2,
      createDate: new Date().toLocaleDateString(),
      description: "uwagi",
      amount: 5,
      cost: 450,
      type: 'klepki'
    },
    {
      phone: faker.phone.phoneNumber('###-###-###'),
      address: faker.address.streetAddress(),
      deliveryDate: new Date().toLocaleDateString(),
      id: 3,
      createDate: new Date().toLocaleDateString(),
      description: "uwagi",
      amount: 5,
      cost: 450,
      type: 'klepki'
    },
    {
      phone: faker.phone.phoneNumber('###-###-###'),
      address: faker.address.streetAddress(),
      deliveryDate: new Date().toLocaleDateString(),
      id: 4,
      createDate: new Date().toLocaleDateString(),
      description: "uwagi",
      amount: 5,
      cost: 450,
      type: 'klepki'
    },
    {
      phone: faker.phone.phoneNumber('###-###-###'),
      address: faker.address.streetAddress(),
      deliveryDate: new Date().toLocaleDateString(),
      id: 5,
      createDate: new Date().toLocaleDateString(),
      description: "uwagi",
      amount: 5,
      cost: 450,
      type: 'klepki'
    },
    {
      phone: faker.phone.phoneNumber('###-###-###'),
      address: faker.address.streetAddress(),
      deliveryDate: new Date().toLocaleDateString(),
      id: 6,
      createDate: new Date().toLocaleDateString(),
      description: "uwagi",
      amount: 5,
      cost: 450,
      type: 'klepki'
    },
    {
      phone: faker.phone.phoneNumber('###-###-###'),
      address: faker.address.streetAddress(),
      deliveryDate: new Date().toLocaleDateString(),
      id: 7,
      createDate: new Date().toLocaleDateString(),
      description: "uwagi",
      amount: 5,
      cost: 450,
      type: 'klepki'
    }
  ];

  constructor() { }

  public getOrders(): Order[] {
    return this.orders;
  }

  public getOrderById(id: number): Order {
    return this.orders[id];
  }
}
