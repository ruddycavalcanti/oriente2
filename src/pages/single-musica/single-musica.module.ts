import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleMusicaPage } from './single-musica';


@NgModule({
    declarations: [
      SingleMusicaPage,
    ],
    imports: [
      IonicPageModule.forChild(SingleMusicaPage),
    ],
    entryComponents: [
      SingleMusicaPage
    ]
  })
  export class SingleMusicaPageModule {}