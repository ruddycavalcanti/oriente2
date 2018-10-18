import { Injectable } from '@angular/core';

import {  AngularFireDatabase } from 'angularfire2/database';



import { Ponto } from '../models/ponto';
//import { Utils } from '../utils/utils';



@Injectable()
export class PontosServices {

 

  constructor( private dbFire:AngularFireDatabase
    //, public utils:Utils
  ){

   }

    listar(){
       return this.dbFire.list('pontos').valueChanges();
    }



  savePost(
    post_author_id,
    post_author_email,
    pontos_totais,
    pontos_atuais
  ){

   //let post_dia  = this.utils.getTime;

    //let post_dia_new =   post_dia[8] +  post_dia[9] + "/" +   post_dia[5] +   post_dia[6] + "/"+  post_dia[0] +    post_dia[1] +   post_dia[2] +   post_dia[3] ;


    return this.dbFire.database.ref("pontos/"  + post_author_id)
    .update(  new Ponto(
      post_author_email,
      //post_dia,
      post_author_id,
      pontos_totais,
      pontos_atuais
       ));
       


  }




  updatePontos(post_author_id, pontos_atuais,pontos_totais){
    return this.dbFire.database.ref("pontos/"  + post_author_id).update({
      pontos_atuais:pontos_atuais,
      pontos_totais:pontos_totais
    })
  }

  updatePontosAtuais(post_author_id, pontos_atuais){
    return this.dbFire.database.ref("pontos/"  + post_author_id).update({
      pontos_atuais:pontos_atuais
    })
  }
  updatePontosTotais(post_author_id, pontos_totais){
    return this.dbFire.database.ref("pontos/"  + post_author_id).update({
      pontos_totais:pontos_totais
    });
  }


  getPontosTotais(post_author_id){
    return this.dbFire.database.ref("pontos/"  + post_author_id).once( "value").then(result=>{
      return result.val().pontos_totais;
    });
  }

  getPontosAtuais(post_author_id){
    return this.dbFire.database.ref("pontos/"  + post_author_id).once( "value").then(result=>{
      return result.val().pontos_atuais;
    });
  }

  getPontosAeT(post_author_id){
    return this.dbFire.database.ref("pontos/"  + post_author_id).once( "value");
  }





  removePost( post_uid){

    return this.dbFire.list("/pontos/" +  post_uid).remove();
    
    
  }







}