import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import {  AngularFireDatabase } from 'angularfire2/database';

import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage({
	name: 'noticia',
  segment: 'noticia/:id'
  })
@Component({
  selector: 'page-single-noticia',
  templateUrl: 'single-noticia.html'
})
export class SingleNoticiaPage {

  post:any;
  post_name:any;
  post_image:any;
  post_content:any;
  post_uid:any;
  post_date:any;
  post_description:any;

  is_admin = true;

  constructor(public navCtrl: NavController,   
    public navParams:NavParams,
    public dbFire: AngularFireDatabase,
    public storage:Storage,
  public socialSharing:SocialSharing) {



    
  }

  ionViewDidLoad(){

    this.post = this.navParams.get('post');

      if(this.post!=undefined){
      this.post_uid = this.post.post_uid;
      this.post_name =  this.post.post_name;
      this.post_description =   this.post.post_description;
      this.post_image =   this.post.post_image;
      this.post_content = this.post.post_content;
      this.post_date = this.post.post_date;
    }else{
      this.navCtrl.push("home");
    }

  }

  ionViewWillEnter(){
    this.user_is_admin();
  }


  user_is_admin(){
    this.storage.get('is_admin').then((is_admin) => {
      if(is_admin==true)
        this.is_admin = true;
      });
  }


  share(){
    /* let imagePosition = this.post_image.indexOf("=media");
    this.post_image = this.post_image.slice(0,imagePosition+6);
    this.socialSharing.share(this.post_name, null,this.post_image, null); */
   }


  irParaEdit(){
   this.navCtrl.push("edit-noticias", { 
      post:this.post,
      is_edit:true
   } );
  }

  

}
