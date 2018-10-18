import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryVideosPage } from './category-videos';
import { VideosServices } from '../../providers/videos-services';

@NgModule({
    declarations: [
      CategoryVideosPage,
    ],
    imports: [
      IonicPageModule.forChild(CategoryVideosPage),
    ],
    entryComponents: [
      CategoryVideosPage
    ],
    providers:[
      VideosServices
    ]
  })
  export class CategoryVideosPageModule {}