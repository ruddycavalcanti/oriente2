import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEditShowPage } from './add-edit-shows';
import { ShowsServices} from '../../providers/shows-services';

@NgModule({
    declarations: [
      AddEditShowPage,
    ],
    imports: [
      IonicPageModule.forChild(AddEditShowPage),
    ],
    entryComponents: [
      AddEditShowPage
    ],
    providers:[
      ShowsServices
    ]
  })
  export class AddEditShowsModule {}
  