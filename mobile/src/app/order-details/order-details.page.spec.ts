import { Contacts } from '@ionic-native/contacts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CallLog } from '@ionic-native/call-log/ngx';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { OrderDetailsPage } from './order-details.page';

describe('ViewMessagePage', () => {
  let component: OrderDetailsPage;
  let fixture: ComponentFixture<OrderDetailsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailsPage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([]), ReactiveFormsModule, FormsModule],
      providers: [CallLog, Contacts]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
