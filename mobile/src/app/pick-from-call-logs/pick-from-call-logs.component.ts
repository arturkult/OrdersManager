import { Component, OnInit } from '@angular/core';
import { CallLog } from '@ionic-native/call-log/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pick-from-call-logs',
  templateUrl: './pick-from-call-logs.component.html',
  styleUrls: ['./pick-from-call-logs.component.scss'],
})
export class PickFromCallLogsComponent implements OnInit {
  callLogs: {number:number, name: string}[];

  constructor(private modalController: ModalController,
    private callLog: CallLog) { }

  async ngOnInit() {
    if(!await this.callLog.hasReadPermission()){
      await this.callLog.requestReadPermission();
    }
    this.callLogs = await this.callLog.getCallLog([]);
    this.callLogs = this.callLogs.slice(0, 30);
  }

  async close(){
    await this.modalController.dismiss();
  }

  async pick(log: {number: number, name: string}){
    await this.modalController.dismiss(log.number);
  }
}
