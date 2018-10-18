import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleNoticiaPage } from './single-noticia';

import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
    declarations: [
      SingleNoticiaPage,
    ],
    imports: [
      IonicPageModule.forChild(SingleNoticiaPage),
    ],
    entryComponents: [
      SingleNoticiaPage
    ],
    providers:[
      SocialSharing
    ]
  })
  export class SingleNoticiaPageModule {}