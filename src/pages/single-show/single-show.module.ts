import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleShowPage } from './single-show';


@NgModule({
    declarations: [
      SingleShowPage,
    ],
    imports: [
      IonicPageModule.forChild(SingleShowPage),
    ],
    entryComponents: [
      SingleShowPage
    ]
  })
  export class SingleShowPageModule {}