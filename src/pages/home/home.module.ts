import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { AuthProvider } from '../../providers/auth-provider';

import { InAppBrowser } from '@ionic-native/in-app-browser';


import { DestaquesServices } from '../../providers/destaques-services';
import { Storage, IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    IonicStorageModule.forRoot(),
  ],
  entryComponents: [
    HomePage
  ],
  providers: [
     AuthProvider,
     InAppBrowser,
     DestaquesServices
  ]
})
export class HomePageModule {}
