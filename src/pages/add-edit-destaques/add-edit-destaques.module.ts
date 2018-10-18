import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEditDestaquesPage } from './add-edit-destaques';
import { DestaquesServices } from '../../providers/destaques-services';

@NgModule({
    declarations: [
        AddEditDestaquesPage,
    ],
    imports: [
      IonicPageModule.forChild(AddEditDestaquesPage),
    ],
    entryComponents: [
      AddEditDestaquesPage
    ],
    providers:[
      DestaquesServices
    ]
  })
  export class AddEditDestaquesModule {}