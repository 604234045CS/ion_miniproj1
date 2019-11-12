import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SMS } from '@ionic-native/sms/ngx';

/**
 * Generated class for the PhoneBookDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book-detail',
  templateUrl: 'phone-book-detail.html',
})
export default class PhoneBookDetailPage {

  contact = {name:'' , telephone: '' ,imageUrl: ''};

  constructor(public navCtrl: NavController, public navP: NavParams, private mysms: SMS) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookDetailPage');
    this.contact = this.navP.data;
    console.log(this.contact);
  }
  SMS(){
    this.mysms.send(this.contact.telephone, "Hello world");
    
  }
  Call(){
    
    window.open('tel:'+this.contact.telephone);
  
  }

}
