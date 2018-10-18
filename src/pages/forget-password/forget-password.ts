import { Component } from '@angular/core';
import { NavController, ToastController, IonicPage } from 'ionic-angular';

//import { LoginPage } from '../../pages/login/login';

import { HomePage } from '../../pages/home/home';

import { NgForm } from '@angular/forms';

import { AuthProvider } from '../../providers/auth-provider';

@IonicPage({
	name: 'esqueceu-senha',
  segment: 'esqueceu-senha'
  })
@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html'
})
export class ForgetPasswordPage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public authProvider:AuthProvider) {


  }



  createToast(message){
    this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'middle'
      }).present();
  }
  

  recuperarSenha(form: NgForm){
  

    let  email = form.value.email;

      
  
	  this.authProvider.recoverPass(email).then(result => {
               
       this.createToast('Um email foi enviado para você com as instruções.');

        
        this.navCtrl.setRoot("home");

      }).catch(error =>{


        this.createToast(error);
          
        })
          
  } 


  irParaLogin(){
    this.navCtrl.push("login");
  }
  
 

}
