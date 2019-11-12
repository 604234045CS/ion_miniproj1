import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-main-menu',
  templateUrl: 'main-menu.html',
})
export class MainMenuPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainMenuPage');
  }
  Now(){
    this.navCtrl.push("NowPlayingPage");
  }

  Upcoming(){
    this.navCtrl.push("UpcomingPage");
  }
  Popular(){
    this.navCtrl.push("PopularPage");
  }
  TopRated(){
    this.navCtrl.push("TopRatedPage");
  }
}
