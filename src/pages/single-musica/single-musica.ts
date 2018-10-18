import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import {  AngularFireDatabase } from 'angularfire2/database';

@IonicPage({
	name: 'musica',
  segment: 'musica/:id'
  })
@Component({
  selector: 'page-single-musica',
  templateUrl: 'single-musica.html'
})
export class SingleMusicaPage {

  post:any;
  post_name:any;
  musica_url:any;
  post_image:any;
  post_content:any;
  post_uid:any;

  can_edit = true;

  constructor(public navCtrl: NavController,   
    public navParams:NavParams,
    public dbFire: AngularFireDatabase) {

  }


  ionViewCanEnter(){

    this.post = this.navParams.get('post');
    
    if(this.post!=undefined){
    this.post_name =  this.post.post_name;
    this.musica_url =   this.post.musica_url;
    this.post_image =   this.post.post_image;
    this.post_content = this.post.post_content;
    this.post_uid = this.post.post_uid;
    }else{
      this.navCtrl.push("home");
    }
    
  }



  irParaEdit(){
   this.navCtrl.push("edit-musicas", { 
      post:this.post,
      is_edit:true
   } );
  }

 

}
