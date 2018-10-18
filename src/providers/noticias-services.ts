import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';

import {  AngularFireDatabase } from 'angularfire2/database';

import { Utils } from '../utils/utils';


import { Noticia } from '../models/noticia';



@Injectable()
export class NoticiasServices {

 

  constructor(
   private dbFire:AngularFireDatabase,   private  utils:Utils){

   }

    listar(){
     
       //return this.dbFire.list('noticias').valueChanges();
       return  this.dbFire.list('/noticias/'  ).valueChanges().map((array)=>array.reverse())
    }




  savePost(
    post_uid,
    post_date,
    post_nome,
    post_description,
    post_conteudo,
    post_image,
    is_edit
  ){

    if(is_edit != true){ // If its a new post
      post_date  = this.utils.getTime;
    }

    return this.dbFire.database.ref("noticias/"  + post_uid)
    .update(  new Noticia(
      post_uid,
      post_date,
      post_nome,
        post_conteudo,
        post_image,
        post_description,
       ));
    


  }




  removePost( post_uid){

    return this.dbFire.list("/noticias/" +  post_uid).remove();
    
    
  }


  uploadPhotoStorage(post_image , post_uid){


    let storageRef = firebase.storage().ref();

    const imageRef = storageRef.child('images/noticias/'+post_uid+'.jpg');

    return  imageRef.putString(post_image, firebase.storage.StringFormat.DATA_URL);

  }

  removePhotoStorage(post_uid){
    let storageRef = firebase.storage().ref();

    return storageRef.child('images/noticias/'+post_uid+'.jpg').delete();


  }
  
  updatePhotoDb(post_image , post_uid){

   return  this.dbFire.database.ref("noticias/"+  post_uid).update({ 
      post_image: post_image
     });

  }





}