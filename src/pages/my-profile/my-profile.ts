import { Component } from '@angular/core';
import { NavController, ToastController, NavParams, IonicPage } from 'ionic-angular';


import { AuthProvider } from '../../providers/auth-provider';

//import { EditProfile } from '../edit-profile/edit-profile';

import {  AngularFireDatabase } from 'angularfire2/database';
//import { Storage } from '@ionic/storage';
import { PontosServices } from '../../providers/pontos-services';

//import { InAppBrowser,InAppBrowserOptions, InAppBrowserEvent } from '@ionic-native/in-app-browser';


@IonicPage({
  name: 'perfil',
  segment: 'perfil'
  }) 
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html'
})
export class MyProfile { 



  nome:any;
  email:any;
  user_image:any;
  user_tipo:any;

  pontos_atuais:any;

  constructor(public navCtrl: NavController,
    public navParams:NavParams,
     public toastCtrl:ToastController , 
     public dbFire: AngularFireDatabase,
     public authProvider:AuthProvider ,
    public pontoServices:PontosServices
 ) {

    }

     


ionViewDidLoad(){



      this.email = this.authProvider.currentUserEmail;
  

      var email2 =  this.email .replace("." , ",");

      this.dbFire.database.ref("/users/" + email2 ).once( "value").then(snapshot=> {
    
          if(snapshot.val() !=null){

            console.log(snapshot.val());

            this.user_image = snapshot.val().user_photoURL;
            if(this.user_image=="" || this.user_image == null){
              this.user_image = "assets/imgs/no_avatar.jpg";
            }
      
            this.nome =   snapshot.val().user_displayName;
            this.user_tipo = snapshot.val().user_tipo;
            
          }



        }).catch(error => {
        });

        this.getPontosAtuais();
}





getPontosAtuais(){
  this.pontoServices.getPontosAtuais(this.authProvider.currentUserId).then(snapshot=> {
    this.pontos_atuais = snapshot;
  }).catch(error => {
    this.pontos_atuais = 0;
  });
}


  irParaEditProfile(){
      this.navCtrl.push("editar-perfil");
  }

 

  

}
