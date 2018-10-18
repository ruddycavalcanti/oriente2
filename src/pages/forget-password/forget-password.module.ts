import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgetPasswordPage } from './forget-password';
import { AuthProvider } from '../../providers/auth-provider';



@NgModule({
  declarations: [
    ForgetPasswordPage
  ],
  imports: [
    IonicPageModule.forChild(ForgetPasswordPage),

  ],
  entryComponents: [
    ForgetPasswordPage
  ],
  providers: [
     AuthProvider,

  ]
})
export class ForgetPasswordPageModule {}
