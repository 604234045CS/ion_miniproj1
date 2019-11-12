import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  contactArray = [{name: 'Ta', telephone: '0987301459', imageUrl: 'assets/imgs/Ta.jpg'},
                  {name: 'Khem', telephone: '0979468324', imageUrl: 'assets/imgs/khem.jpg'},
                  {name: 'Sama', telephone: '0888342938', imageUrl: 'assets/imgs/sama.jpg'},
                  {name: 'Ning', telephone: '0900735950', imageUrl: 'assets/imgs/ning.jpg'},
                  {name: 'Muna', telephone: '0980168977', imageUrl: 'assets/imgs/muna.jpg'} 
                  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage", item);
  }

}
