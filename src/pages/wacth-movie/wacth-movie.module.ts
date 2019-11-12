import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WacthMoviePage } from './wacth-movie';

@NgModule({
  declarations: [
    WacthMoviePage,
  ],
  imports: [
    IonicPageModule.forChild(WacthMoviePage),
  ],
})
export class WacthMoviePageModule {}
