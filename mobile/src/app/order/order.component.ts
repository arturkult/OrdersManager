import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  @Input() order: Order;
  @Output('remove') removeEmitter = new EventEmitter<number>();
  @Output('deliver') deliverEmitter = new EventEmitter<number>();

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  async call(){
    window.open('tel:' + this.order.phone);
  }

  remove = (id: number) => this.removeEmitter.emit(id);
  deliver = (id: number) => this.deliverEmitter.emit(id);
}
