import { Component } from '@angular/core';
import { NavController, NavParams, Platform, IonicPage } from 'ionic-angular';

import {  AngularFireDatabase } from 'angularfire2/database';

import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
import { Storage } from '@ionic/storage';

@IonicPage({
	name: 'video',
  segment: 'video/:id'
  })
@Component({
  selector: 'page-single-video',
  templateUrl: 'single-video.html'
})
export class SingleVideoPage {

  post:any;
  post_name:any;
  video_url:any;
  post_image:any;
  post_content:any;
  post_uid:any;
  post_description:any;

  fromFirebase : any;

  is_admin = true;
  origem:any;
  idv:any;


	 videoUrl: SafeResourceUrl;


  constructor(public navCtrl: NavController,   
    public navParams:NavParams,
    public dbFire: AngularFireDatabase,
    public domSanitizer: DomSanitizer,
  public platform:Platform,
  public storage:Storage,
public navParms:NavParams) {


    this.idv =  this.navParms.get('idv');
    this.origem = this.navParms.get('origem');
    this.post = this.navParams.get('post');
    
    if(this.origem == "playlists"){


      this.post_name =  this.post.snippet.title;
      
      this.video_url =  this.post.snippet.resourceId.videoId;
      this.post_image =   this.post.snippet.thumbnails.default.url;
      this.post_content =  this.post.snippet.description;
      this.post_description = '';
      this.post_uid =  this.post.snippet.id;

    }else if( this.idv != undefined){

      //alert("HERE:"+this.idv);
       let  authorRef =  this.dbFire.database.ref('/videos/' + this.idv);


       authorRef.on('value', snapshot => {
            
          this.post_name =  snapshot.val().post_name;
          this.video_url =   snapshot.val().video_url;
          this.post_image =   snapshot.val().post_image;
          this.post_content = snapshot.val().post_content;
          this.post_description = snapshot.val().post_description;
          this.post_uid = snapshot.val().post_uid;
          this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' +  this.video_url );

          
        }); 
        
      /* let  authorRef =  this.dbFire.database.ref('/videos').orderByChild('video_url').equalTo(this.idv);
                    
        authorRef.on('value', authorList => {
            
          authorList.forEach( author => {
              
            this.post_name =  author.val().post_name;
            this.video_url =   author.val().video_url;
       
            this.post_image =   author.val().post_image;
            this.post_content = author.val().post_content;
            this.post_description = author.val().post_description;
            this.post_uid = author.val().post_uid;
            
            return false;
          }); 


        }); */

        //GET POST VIDEO FROM FIREBASE;
  
      }else{
   
      
      if(this.post!=undefined){
          this.post_name =  this.post.post_name;
          this.video_url =   this.post.video_url;
          this.post_image =   this.post.post_image;
          this.post_content = this.post.post_content;
          this.post_description = this.post.post_description;
          this.post_uid = this.post.post_uid;
        }else{
          this.navCtrl.push("home");
          
        }


       
    

    }

    
    this.platform.ready().then(() => {
      
      this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' +  this.video_url );

    });

 
    
    

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


  irParaEdit(){
   this.navCtrl.push("edit-videos", { 
      post:this.post,
      is_edit:true
   } );
  }

 

}
