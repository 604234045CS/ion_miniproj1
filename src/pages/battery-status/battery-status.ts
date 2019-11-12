
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BatteryStatus } from '@ionic-native/battery-status';

@IonicPage()
@Component({
  selector: 'page-battery-status',
  templateUrl: 'battery-status.html',
})
export class BatteryStatusPage {

  Batstatus : any;
  subscription : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private batteryStatus: BatteryStatus) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bat1Page');
  }
  checkBatstatus(){
    const subscription = this.batteryStatus.onChange().subscribe(status => {
      console.log(status.level, status.isPlugged);
      this.Batstatus = status.isPlugged;
   });
  }
  stCheck(){
    this.subscription.unsubscribe();
  }
  

}
