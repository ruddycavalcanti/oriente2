import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleVideoPage } from './single-video';


@NgModule({
    declarations: [
      SingleVideoPage,
    ],
    imports: [
      IonicPageModule.forChild(SingleVideoPage),
    ],
    entryComponents: [
      SingleVideoPage
    ]
  })
  export class SingleVideoPageModule {}