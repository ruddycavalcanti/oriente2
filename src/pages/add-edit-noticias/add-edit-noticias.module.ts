import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEditNoticiaPage } from './add-edit-noticias';
import { NoticiasServices} from '../../providers/noticias-services';

@NgModule({
    declarations: [
      AddEditNoticiaPage,
    ],
    imports: [
      IonicPageModule.forChild(AddEditNoticiaPage),
    ],
    entryComponents: [
      AddEditNoticiaPage
    ],
    providers:[
      NoticiasServices
    ]
  })
  export class AddEditNoticiasModule {}