import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SocialSharing } from '@ionic-native/social-sharing';


@IonicPage()
@Component({
  selector: 'page-popular-detail',
  templateUrl: 'popular-detail.html',
})
export class PopularDetailPage {
  movie:any=[];
  // search: string= '';
  items : string[];
  callMovie:any[];
  titleText : any;
  playing: boolean;

  
  constructor(public navCtrl: NavController, public navParams: NavParams,private tts: TextToSpeech,public http: HttpClient,private socialSharing: SocialSharing) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopularDetailPage');
   this.movie = this.navParams.data;
   console.log(this.movie );
  }
 
 
  wacth(movieKey){
    this.navCtrl.push("WacthMoviePage",movieKey);
  }

 
  speak(talk : string){
    this.tts.speak({
      text : talk,
      rate : 0
    });
  }

  notspeak(){
    this.tts.speak('');
    this.playing = false;
  }

  face(){
    let caption = this.movie.overview;
    let image = this.movie.poster_path;
    let email = "love.parina@hotmail.com";
    this.socialSharing.shareViaFacebook(caption,image,email);
  }

  sms(){
    let title = this.movie.title;
    let overview = this.movie.overview;
    let number = "0986866014"; 
    this.socialSharing.shareViaSMS('title'+title+':'+overview,number);
  }

  email(){
    let title = this.movie.title;
    let overview = this.movie.overview;
    let email = "604234045@parichat.skru.ac.th"
    this.socialSharing.shareViaEmail(title,overview,[email]);
  }



}
