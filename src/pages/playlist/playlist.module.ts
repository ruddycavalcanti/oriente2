import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Playlist } from './playlist';

@NgModule({
    declarations: [
      Playlist,
    ],
    imports: [
      IonicPageModule.forChild(Playlist),
    ],
    entryComponents: [
      Playlist
    ]
  })
  export class PlaylistModule {}