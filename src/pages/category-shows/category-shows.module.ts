import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowsPage } from './category-shows';
import { ShowsServices } from '../../providers/shows-services';

@NgModule({
    declarations: [
      ShowsPage,
    ],
    imports: [
      IonicPageModule.forChild(ShowsPage),
    ],
    entryComponents: [
      ShowsPage
    ],
    providers: [
      ShowsServices
    ]
  })
  export class ShowsPageModule {}