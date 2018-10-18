import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEditVideoPage } from './add-edit-videos';

import { VideosServices} from '../../providers/videos-services';

@NgModule({
  declarations: [
    AddEditVideoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEditVideoPage),
  ],
  entryComponents: [
    AddEditVideoPage
  ],
  providers:[
    VideosServices
  ]
})
export class AddEditDestaquesModule {}
  