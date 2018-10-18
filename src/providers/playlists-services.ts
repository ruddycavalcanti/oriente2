
 
import { PlaylistModel} from '../models/playlist';
 
 import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';

import {  AngularFireDatabase } from 'angularfire2/database';





@Injectable()
export class PlaylistsServices {

 

  constructor(
   private dbFire:AngularFireDatabase){

   }

    listar(author_email){
     
       //return this.dbFire.list('playlists').valueChanges();
 
       this.dbFire.database.ref('/playlists').orderByChild("author_email").equalTo(author_email);
       
    }




    savePost(
      post_uid,
      post_nome,
      author_email
     
    ){
       
      return this.dbFire.database.ref("playlists/"  + post_uid)
      .update(  new PlaylistModel(
        post_uid,
         post_nome,
         author_email
         ));
      
  
  
    }
  




  removePost( post_uid){

    return this.dbFire.list("/playlists/" +  post_uid).remove();
    
    
  }


  uploadPhotoStorage(post_image , post_uid){


    let storageRef = firebase.storage().ref();

    const imageRef = storageRef.child('images/playlists/'+post_uid+'.jpg');

    return  imageRef.putString(post_image, firebase.storage.StringFormat.DATA_URL);

  }

  removePhotoStorage(post_uid){
    let storageRef = firebase.storage().ref();

    return storageRef.child('images/playlists/'+post_uid+'.jpg').delete();


  }
  
  updatePhotoDb(post_image , post_uid){

   return  this.dbFire.database.ref("playlists/"+  post_uid).update({ 
      post_image: post_image
     });

  }





}