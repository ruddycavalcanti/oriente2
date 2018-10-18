import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryMusicasPage } from './category-musicas';
import { MusicasServices } from '../../providers/musicas-services';

@NgModule({
    declarations: [
      CategoryMusicasPage,
    ],
    imports: [
      IonicPageModule.forChild(CategoryMusicasPage),
    ],
    entryComponents: [
      CategoryMusicasPage
    ], providers:[
      MusicasServices
    ]
  })
  export class CategoryMusicasPageModule {}