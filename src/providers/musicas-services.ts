import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';

import {  AngularFireDatabase } from 'angularfire2/database';



import { Musica } from '../models/musica';



@Injectable()
export class MusicasServices {

 

  constructor(
   private dbFire:AngularFireDatabase){

   }

    listar(){
     
       return this.dbFire.list('musicas').valueChanges();
    }




    savePost(
      post_uid,
      post_nome,
      musica_url,
      post_image,
      post_artista
     
    ){
  
      return this.dbFire.database.ref("musicas/"  + post_uid)
      .update(  new Musica(
        post_uid,
         post_nome,
          musica_url,
          post_image,
          post_artista
         ));
      
  
  
    }
  




  removePost( post_uid){

    return this.dbFire.list("/musicas/" +  post_uid).remove();
    
    
  }


  uploadPhotoStorage(post_image , post_uid){


    let storageRef = firebase.storage().ref();

    const imageRef = storageRef.child('images/musicas/'+post_uid+'.jpg');

    return  imageRef.putString(post_image, firebase.storage.StringFormat.DATA_URL);

  }

  removePhotoStorage(post_uid){
    let storageRef = firebase.storage().ref();

    return storageRef.child('images/musicas/'+post_uid+'.jpg').delete();


  }
  
  updatePhotoDb(post_image , post_uid){

   return  this.dbFire.database.ref("musicas/"+  post_uid).update({ 
      post_image: post_image
     });

  }





}