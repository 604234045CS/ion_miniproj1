import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-upcoming',
  templateUrl: 'upcoming.html',
})
export class UpcomingPage {
  movieArray = [];
  provider : any;
  public Url = 'https://api.themoviedb.org/3/';
  public api = 'api_key=1a9aaaaecc790d8eb38b0862b7dd8563&language=en-US';
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.UpcomingData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingPage');
  }
  UpcomingData(){
    let url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=1a9aaaaecc790d8eb38b0862b7dd8563&language=en-US';
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
