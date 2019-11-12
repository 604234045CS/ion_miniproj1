import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopularDetailPage } from './popular-detail';

@NgModule({
  declarations: [
    PopularDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PopularDetailPage),
  ],
})
export class PopularDetailPageModule {}
