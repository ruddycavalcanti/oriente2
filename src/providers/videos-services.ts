import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';

import {  AngularFireDatabase } from 'angularfire2/database';



import { Video } from '../models/video';


import {  Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VideosServices {

  apiKeyYoutube = 'AIzaSyDJ9MvWTW_zwMXqoqYZBEBRY0AMYiaM75E';
  channelId :any; 

 constructor(
   private dbFire:AngularFireDatabase, public http:Http){

   } 


    listar(){

       return  this.dbFire.list('/videos/'  ).valueChanges().map((array)=>array.reverse())
    }


  savePost(
    post_uid,
    post_nome,
    post_conteudo,
    post_image,
    video_url,
    post_description
   
  ){

    return this.dbFire.database.ref("videos/"  + post_uid)
    .update(  new Video(
      post_uid,
       post_nome,
        post_conteudo,
        post_image,
        video_url,
        post_description
       ));
    


  }


  getPlaylistsForChannel(channel) {


        return this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=' + this.apiKeyYoutube + '&channelId=' + channel + '&part=snippet,id,status&maxResults=30')
        .map((res) => {
         console.log(res.json()['items']);
         return res.json()['items'];
       })

  }

  getListVideos(listId) {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKeyYoutube + '&playlistId=' + listId + '&part=snippet,id,status&maxResults=30')
     .map((res) => {
      console.log(res.json()['items']);
      return res.json()['items'];
    })
  }


  removePost( post_uid){
    return this.dbFire.list("/videos/" +  post_uid).remove();
  }


  uploadPhotoStorage(post_image , post_uid){


    let storageRef = firebase.storage().ref();

    const imageRef = storageRef.child('images/videos/'+post_uid+'.jpg');

    return  imageRef.putString(post_image, firebase.storage.StringFormat.DATA_URL);

  }

  removePhotoStorage(post_uid){
    let storageRef = firebase.storage().ref();

    return storageRef.child('images/videos/'+post_uid+'.jpg').delete();


  }
  
  updatePhotoDb(post_image , post_uid){

   return  this.dbFire.database.ref("videos/"+  post_uid).update({ 
      post_image: post_image
     });

  }





}