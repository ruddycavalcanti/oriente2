import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { PontosServices } from '../../providers/pontos-services';



@NgModule({
  declarations: [
  LoginPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),

  ],
  entryComponents: [
   LoginPage,
  ],
  providers: [
     PontosServices

  ]
})
export class LoginPageModule {}
