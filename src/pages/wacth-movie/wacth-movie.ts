import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { DomSanitizer } from '@angular/platform-browser';




@IonicPage()
@Component({
  selector: 'page-wacth-movie',
  templateUrl: 'wacth-movie.html',
})
export class WacthMoviePage {
  idmovie : any = [];
  movieVideo : any =[];
  url= "https://api.themoviedb.org/3/movie/";
  
  callKey:any=[];
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public httpCl:HttpClient,private youtube: YoutubeVideoPlayer,public sanitizer: DomSanitizer) {
    
  }

  ionViewDidLoad() {
    this.idmovie = this.navParams.data;
    console.log(this.idmovie);
    let link = 'https://api.themoviedb.org/3/movie/' + this.idmovie + '/videos?api_key=1a9aaaaecc790d8eb38b0862b7dd8563';
    this.httpCl.get(link).subscribe((callVido:any=[])=>{
      this.callKey=callVido['results'];
      console.log('callKey');
    })
    
  }


openVideo(key:string){
  let wacht = 'https://www.youtube.com/embed/' + key + '?rel=0&showinfo=0';
  return this.sanitizer.bypassSecurityTrustResourceUrl(wacht);
}


}
