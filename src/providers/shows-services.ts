import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';

import {  AngularFireDatabase } from 'angularfire2/database';



import { Show } from '../models/show';

import { Utils } from '../utils/utils';

// songkick: http://api.songkick.com/api/3.0/artists/8539349/calendar.json?apikey=bsAn7eoPHzpBhICh



import {  Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ShowsServices {


  constructor( private dbFire:AngularFireDatabase,public utils:Utils,
  public http:Http ){

   }

    listar(){
      var today = 'YYYY-MM-DD';
      today = this.utils.getDataAtual;
       return  this.dbFire.list('/shows/' , ref => ref.orderByChild('post_dia').startAt(today)).valueChanges().map((array)=>array) 
    }



    getShowsSongkick() {

      let apiSongkick = 'bsAn7eoPHzpBhICh';
      let idArtistaSongkick = '8539349';

      return this.http.get('http://api.songkick.com/api/3.0/artists/' + idArtistaSongkick + '/calendar.json?apikey=' + apiSongkick )
       .map(res =>  {


        console.log(res.json());
        
        return res.json().resultsPage.results['event'];
      })
    }



  savePost(
    post_nome,
    post_conteudo,
    post_image,
    post_dia,
    post_local,
    post_horario,
    post_cidade,
    post_estado,
    post_uid,
    link_ingresso
  ){

    //let post_dia_new =   post_dia[8] +  post_dia[9] + "/" +   post_dia[5] +   post_dia[6] + "/"+
   // post_dia[0] +    post_dia[1] +   post_dia[2] +   post_dia[3] ;


    return this.dbFire.database.ref("shows/"  + post_uid)
    .update(  new Show(
      post_uid,
      post_nome,
        post_conteudo,
        post_image,
        post_dia,
        post_local,
        post_horario,
        post_cidade,
        post_estado,
        link_ingresso
        
       ));
    


  }




  removePost( post_uid){

    return this.dbFire.list("/shows/" +  post_uid).remove();
    
    
  }


  uploadPhotoStorage(post_image , post_uid){


    let storageRef = firebase.storage().ref();

    const imageRef = storageRef.child('images/shows/'+post_uid+'.jpg');

    return  imageRef.putString(post_image, firebase.storage.StringFormat.DATA_URL);

  }

  removePhotoStorage(post_uid){
    let storageRef = firebase.storage().ref();

    return storageRef.child('images/shows/'+post_uid+'.jpg').delete();


  }
  
  updatePhotoDb(post_image , post_uid){

   return  this.dbFire.database.ref("shows/"+  post_uid).update({ 
      post_image: post_image
     });

  }





}