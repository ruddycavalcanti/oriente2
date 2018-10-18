
import { Injectable } from '@angular/core';

//import { Firebase } from '@ionic-native/firebase';

import { Platform } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';


import { AuthProvider } from '../providers/auth-provider';

@Injectable()
export class FcmProvider {

  constructor(
  //  public firebaseNative:Firebase,
    public afs:AngularFirestore, 
  private platform:Platform,
public authProvider:AuthProvider) {

    
  }


  async getToken(){

    let token;

    /* if (this.platform.is('android')) {
      token = await this.firebaseNative.getToken();
    }

    if (this.platform.is('ios')) {
      token = await this.firebaseNative.getToken();
      await this.firebaseNative.grantPermission();
    } */
   

    return this.saveTokenToFirestore(token);


  }

  private saveTokenToFirestore(token){
    if(!token) return;
    const devicesRef = this.afs.collection('devices');

    const userId = this.authProvider.currentUserId;
    const userEmail = this.authProvider.currentUserEmail;

    const docData = {
      token,
      userId:  userId, //firebase auth UID
      userEmail: userEmail
    }
    return devicesRef.doc(token).set(docData);
  }

  listenToNotifications(){
   // return this.firebaseNative.onNotificationOpen();
  }


}
