import { Injectable } from '@angular/core';

import { Platform} from 'ionic-angular';
import {  AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Facebook} from '@ionic-native/facebook';

import { Utils } from '../utils/utils';

import { GooglePlus } from '@ionic-native/google-plus';
import { Storage } from '@ionic/storage';


import {  Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthProvider {

  private currentUser: firebase.User;



  constructor(public afAuth: AngularFireAuth,
      public dbFire: AngularFireDatabase, 
    public platform: Platform, private fb:Facebook, public utils:Utils, 
    private googlePlus:GooglePlus,    public storage: Storage,
    public http:Http 
    ) {

    this.afAuth.authState.subscribe((user: firebase.User) =>{

       this.currentUser = user;

         
    });
  
  }

  signInWithGoogle() {
    if (this.platform.is('cordova')) {
        return this.googlePlus.login({
        //  'scopes': 'profile email',
        'webClientId': '1085462696311-2imb89i4t6bu5g14rntl5vnloo6frbl0.apps.googleusercontent.com',
        'offline': true
       }).then((res) => {
        const googleCredential = firebase.auth.GoogleAuthProvider.credential(res.idToken);
        return  firebase.auth().signInWithCredential(googleCredential);

      });

    }else{
      return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
  }


   signInWithFacebook()  {
    if (this.platform.is('cordova')) {
       return this.fb.login(['email', 'public_profile' ,  'user_birthday', 'user_location', 'user_hometown', 'user_friends' , 'user_photos',  'user_likes']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
    
        return firebase.auth().signInWithCredential(facebookCredential);
      });
    } else {
      return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }

  }



  loginWithEmail(email, senha){
    return this.afAuth.auth.signInWithEmailAndPassword(email,senha);
  }


  signInWithEmail(nome,email,senha){
      return this.afAuth.auth.createUserWithEmailAndPassword(email, senha);
  }


  updateUserDatabase(
    user_name,
    user_email,
    user_foto,
    user_uid,
    user_notification,
    user_tipo){

      /*
    let post_date = "amanha";


   let data_registro  = this.utils.getTime; //data de hoje
   let new_user = false;

   if(data_registro!=post_date){
      new_user  =  true;
   }
*/

    let email2 = user_email.replace(".", ","); 
    return this.dbFire.database.ref("users/" + email2).update(
      { 
         user_displayName :user_name,
         user_email: user_email,
         user_photoURL:user_foto ,
         user_tipo:user_tipo,
         user_uid:user_uid,
         user_notify:user_notification
      });

    

  }

  verificarInfoDatabase(email){
    let email2 = email.replace(".", ","); 
    return this.dbFire.database.ref("/users/" + email2 ).once( "value");
  }
  


  removeUser( email){
    let email2 = email.replace(".", ","); 
    return this.dbFire.list("/users/" +  email2).remove();
  }


  get authenticated(): boolean {
    return this.currentUser !== null;
  }



  get currentUserEmail(){
    return this.currentUser.email;
  }


  get currentUserId(): string {
    return this.authenticated ? this.currentUser.uid : '';
  }

  
  currentUserInfo(){

      let email2 = this.currentUser.email.replace("." , ",");

      return this.dbFire.database.ref("/users/" + email2 ).once( "value");
  }


  signOut(){
    this.storage.set('email',"");
    this.storage.set("is_admin", "");
    return this.afAuth.auth.signOut();
  }


  recoverPass(email){
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }



  getCredentials(email, currentPass){

    let credential = firebase.auth.EmailAuthProvider.credential( email, currentPass );

 
  return this.afAuth.auth.signInWithCredential(credential)

    }


  changePass(newPass){

    let user = this.afAuth.auth.currentUser;
    return user.updatePassword(newPass);
  
}



uploadPhotoStorage(user_image , user_email){

  let email2 = user_email.replace(".", ","); 

  let storageRef = firebase.storage().ref();

  const imageRef = storageRef.child('images/perfil/'+email2+'.jpg');

  return  imageRef.putString(user_image, firebase.storage.StringFormat.DATA_URL);

}


updatePhotoDb(user_image , user_email){

  let email2 = user_email.replace(".", ","); 
 return  this.dbFire.database.ref("users/"+ email2).update({ 
    user_image: user_image
   });

}

 
  /*
  removeAccount(){

    var user = firebase.auth().currentUser;
    var credential;

    user.reauthenticateWithCredential(credential);
       return user.delete();
  }
  */


getInstagramUserInfo() {
  //let client_id = 'd716ba37049b4593981d845f392dfc62';
  //let redirect_url = 'http://192.168.25.4:8104/';
  //let client_secret = 'befd89adccfb43ec94ddfddc1842279c';

 //let url = "https://api.instagram.com/oauth/access_token?client_id=" + client_id + "&client_secret="  + client_secret + "&code=" +response
 // + "&grant_type=authorization_code&redirect_uri" +redirect_url;

  //224825177.d716ba3.4aa044916c26402c9ae3ed3ff47c6dac
  let instaToken = '224825177.d716ba3.4aa044916c26402c9ae3ed3ff47c6dac';

/* return this.http.get(url).map((res) => {
     console.log(res.json());
    return res.json();
  }) */

  //https://api.instagram.com/oauth/access_token&client_id=d716ba37049b4593981d845f392dfc62&client_secret=  code=
  //GET USER PHOTOS
    return this.http.get('https://api.instagram.com/v1/users/self/media/recent?access_token='+ instaToken + '&count=50');
}  


}
