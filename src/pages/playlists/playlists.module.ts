import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Playlists } from './playlists';
import { PlaylistsServices } from '../../providers/playlists-services';


@NgModule({
    declarations: [
      Playlists,
    ],
    imports: [
      IonicPageModule.forChild(Playlists),
    ],
    entryComponents: [
      Playlists
    ],
    providers:[
      PlaylistsServices
    ]
  })
  export class PlaylistsModule {}