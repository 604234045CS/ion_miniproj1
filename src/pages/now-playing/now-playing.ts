import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-now-playing',
  templateUrl: 'now-playing.html',
})
export class NowPlayingPage {
  movieArray =[];
  provider : any;

  public Url = 'https://api.themoviedb.org/3/';
  public api = 'api_key=1a9aaaaecc790d8eb38b0862b7dd8563&language=en-US';
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.NowData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NowPlayingPage');
  }
 
  NowData(){
    let url =' https://api.themoviedb.org/3/movie/now_playing?api_key=1a9aaaaecc790d8eb38b0862b7dd8563&language=en-US';
    this.http.get(url).subscribe(
      (data: any) => {
        console.log(data);
        this.movieArray = data.results;
      } , (error) => {
        console.log(error);
      }
    );
    
  
  }
  Detail(item){
    this.navCtrl.push("PopularDetailPage",item);
  }

  loadLetest(){
    this.provider.PopularData().subscribe(movies => {
      this.movieArray = movies['results'];
      console.log(movies);
    });
  }
  onSearch(ev :any){
    let val = ev.target.value;
    if(val !== 0){
      this.searchMovie(val).subscribe(movies => {
        this.movieArray = movies['results'];
        
      });
    }else {
        this.loadLetest()
    }
    }

    searchMovie(query){
      const url = this.Url + 'search/movie?query=' + query +'&' + this.api;
      return this.http.get(url);
    }


}
