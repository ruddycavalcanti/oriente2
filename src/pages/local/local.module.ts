import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Local } from './local';


@NgModule({
    declarations: [
      Local,
    ],
    imports: [
      IonicPageModule.forChild(Local),
    ],
    entryComponents: [
      Local
    ]
  })
  export class LocalModule {}