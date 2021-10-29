import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewMessagePageRoutingModule } from './view-message-routing.module';

import { ViewOrderPage } from './view-message.page';

describe('ViewMessagePage', () => {
  let component: ViewOrderPage;
  let fixture: ComponentFixture<ViewOrderPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrderPage ],
      imports: [IonicModule.forRoot(), ViewMessagePageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
