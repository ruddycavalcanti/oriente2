import { Injectable } from '@angular/core';

//import * as firebase from 'firebase/app';

import {  AngularFireDatabase } from 'angularfire2/database';



import { Configuracao } from '../models/configuracao';



@Injectable()
export class ConfiguracoesServices {

 

  constructor(
   private dbFire:AngularFireDatabase){

   }

   listar(){
    return this.dbFire.database.ref("/config").once( "value");
   }

 

    savePost(
      facebookUrl,
        youtubeUrl,
          instagramUrl,
          spotifyUrl,
          websiteUrl,
          lojaVirtualUrl,
          songkickId,
     
    ){
  
      return this.dbFire.database.ref("config/")
      .update(  new Configuracao(
        facebookUrl,
        youtubeUrl,
          instagramUrl,
           spotifyUrl,
           websiteUrl,
           lojaVirtualUrl,
           songkickId
         ));
  
    }



}