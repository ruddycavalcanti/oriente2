import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMusicToPlaylist } from './add-music-to-playlist';

import { PlaylistsServices } from '../../providers/playlists-services';

@NgModule({
    declarations: [
      AddMusicToPlaylist,
    ],
    imports: [
      IonicPageModule.forChild(AddMusicToPlaylist),
    ],
    entryComponents: [
      AddMusicToPlaylist
    ],
    providers:[
      PlaylistsServices
    ]
  })
  export class AddMusicToPlaylistModule {}