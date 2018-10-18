import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { PontosServices } from '../../providers/pontos-services';



@NgModule({
  declarations: [
    RegisterPage
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),

  ],
  entryComponents: [
    RegisterPage
  ],
  providers: [
     PontosServices

  ]
})
export class RegisterPageModule {}
