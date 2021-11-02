import { CallLog } from '@ionic-native/call-log/ngx';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PickFromCallLogsComponent } from './pick-from-call-logs.component';

describe('PickFromCallLogsComponent', () => {
  let component: PickFromCallLogsComponent;
  let fixture: ComponentFixture<PickFromCallLogsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PickFromCallLogsComponent ],
      imports: [IonicModule.forRoot()],
      providers: [CallLog]
    }).compileComponents();

    fixture = TestBed.createComponent(PickFromCallLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
