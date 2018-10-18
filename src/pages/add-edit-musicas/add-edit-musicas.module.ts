import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEditMusicaPage } from './add-edit-musicas';
import { MusicasServices} from '../../providers/musicas-services';

@NgModule({
    declarations: [
      AddEditMusicaPage,
    ],
    imports: [
      IonicPageModule.forChild(AddEditMusicaPage),
    ],
    entryComponents: [
      AddEditMusicaPage
    ],
    providers:[
      MusicasServices
    ]
  })
  export class AddEditMusicaPageModule {}