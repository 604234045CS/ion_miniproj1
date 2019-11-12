import { SocialSharing } from '@ionic-native/social-sharing';

import { TextToSpeech } from '@ionic-native/text-to-speech';


import { MainMenuPage } from './../pages/main-menu/main-menu';
import { HttpClientModule } from '@angular/common/http';

import { JsonMenuPage } from './../pages/json-menu/json-menu';
import { BatteryStatus } from '@ionic-native/battery-status';
import { FlashlightPage } from './../pages/flashlight/flashlight';
import { Flashlight } from '@ionic-native/flashlight';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BatteryStatusPage } from './../pages/battery-status/battery-status';
import { BarcodeScannerPage } from './../pages/barcode-scanner/barcode-scanner';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { SMS } from '@ionic-native/sms/ngx';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    BarcodeScannerPage,
    BatteryStatusPage,
    FlashlightPage,
    JsonMenuPage,
    MainMenuPage,
    
    

   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    BarcodeScannerPage,
    BatteryStatusPage,
    FlashlightPage,
    JsonMenuPage,
    MainMenuPage,
    
   
   
  
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SMS,
    BarcodeScanner,
    Flashlight,
    BatteryStatus,
    YoutubeVideoPlayer,
    TextToSpeech,
    SocialSharing,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
