import { PostJsonPage } from './../post-json/post-json';
import { ArrayJsonPage } from './../array-json/array-json';
import { SimpleJsonPage } from './../simple-json/simple-json';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-json-menu',
  templateUrl: 'json-menu.html',
})
export class JsonMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JsonMenuPage');
  }
  SimpleJson(){
    this.navCtrl.push("SimpleJsonPage");
  }
  ArrayJson(){
    this.navCtrl.push("ArrayJsonPage");
  }
  PostJson(){
    this.navCtrl.push("PostJsonPage");
  }
}
