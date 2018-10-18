import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyProfile } from './my-profile';
import { PontosServices } from '../../providers/pontos-services';


@NgModule({
    declarations: [
      MyProfile,
    ],
    imports: [
      IonicPageModule.forChild(MyProfile),
    ],
    entryComponents: [
      MyProfile
    ],
    providers:[
      PontosServices
    ]
  })
  export class MyProfileModule {}