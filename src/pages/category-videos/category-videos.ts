 import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';



import { VideosServices} from '../../providers/videos-services';

import { Storage } from '@ionic/storage';

  
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage({
	name: 'videos',
  segment: 'videos'
  }) 
  
  @Component({
    selector: 'category-videos',
    templateUrl: 'category-videos.html'
  })
 export class CategoryVideosPage {



        posts:any;
        playlists:any;

        is_admin:any =true;

        origem:any;
        listId:any;


        tituloPlaylist = true;
        titulo:any;
      
        constructor(public navCtrl: NavController,
           public videoServices:VideosServices,
          public storage:Storage,
          public http: Http,
        public dbFire:AngularFireDatabase,
      public navParms:NavParams) {
          
        }
      
      
      
        ionViewWillEnter() {
      
          this.user_is_admin();
          
          this.origem = this.navParms.get('origem');
          this.listId = this.navParms.get('listId');

          this.titulo = "Vídeos";
          

          if(this.origem == "playlists"){
            this.playlists = this.videoServices.getListVideos(this.listId);
            this.tituloPlaylist = false;
            this.titulo = this.navParms.get('post').snippet.title;
          }else{


            this.dbFire.database.ref("/config").once( "value").then(snapshot=> {
    
              if(snapshot.val() !=null){
                this.playlists = this.videoServices.getPlaylistsForChannel(snapshot.val().youtubeUrl);
              }
        
            }).catch(error => {
            });

            this.posts =  this.videoServices.listar();

          }

          
        }

      
      
      
        user_is_admin(){
          this.storage.get('is_admin').then((is_admin) => {
            if(is_admin==true)
              this.is_admin = true;
            });
        }
      
       
      
      
      
        irParaSingle(event, post){
          this.navCtrl.push("video", { 
            'id': post.post_uid,
            post:post
          });
        }


        irParaVideo(event, post, listId){

          if(this.origem == "playlists"){
            this.navCtrl.push("video", { 
              id:post.post_uid,
              post:post,
              origem:'playlists'
            });
          }else{
            this.navCtrl.push("videos", { 
              post:post,
              listId:listId,
              origem:'playlists'
            });
          }

        }

      
        irParaAdd(){
          this.navCtrl.push("edit-videos");
        }
      
      }
      