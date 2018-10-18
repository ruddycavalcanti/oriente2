import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';

import {  AngularFireDatabase } from 'angularfire2/database';



import { Destaque } from '../models/destaque';



@Injectable()
export class DestaquesServices {

 

  constructor(
   private dbFire:AngularFireDatabase){

   }
 
    listar(){
     
       //return this.dbFire.list('destaques').valueChanges();


       return  this.dbFire.list('/destaques/' , 
       ref => ref.orderByChild('order') 
       ).valueChanges().map((array)=>array.reverse()  )

    }



  savePost(
    action,
    actionValue,
    post_image,
    desc,
    titulo,
    post_uid,
    order:number
  ){



    return this.dbFire.database.ref("destaques/"  + post_uid)
    .update(  new Destaque(
        action,
        actionValue,
        post_image,
        desc,
        titulo,
        post_uid,
        order
       ));
    


  }




  removePost( post_uid){

    return this.dbFire.list("destaques/" +  post_uid).remove();
    
    
  }


  uploadPhotoStorage(post_image , post_uid){


    let storageRef = firebase.storage().ref();

    const imageRef = storageRef.child('images/destaques/'+post_uid+'.jpg');

    return  imageRef.putString(post_image, firebase.storage.StringFormat.DATA_URL);

  }
 
  removePhotoStorage(post_uid){
    let storageRef = firebase.storage().ref();

    return storageRef.child('images/destaques/'+post_uid+'.jpg').delete();


  }

  updatePhotoDb(post_image , post_uid){

    return  this.dbFire.database.ref("destaques/"+  post_uid).update({ 
       post_image: post_image
      });
 
   }


}