import { Component} from '@angular/core';
import { NavController, NavParams, ModalController, IonicPage, Events } from 'ionic-angular';

import { File } from '@ionic-native/file';
import { AngularFireDatabase } from 'angularfire2/database';




@IonicPage({
	name: 'local',
  segment: 'local'
  })
@Component({
  selector: 'page-local',
  templateUrl: 'local.html',
})
export class Local {

  posts:any= [];

  imagemAlbum:any;

  constructor(public navCtrl: NavController,  
  	public navParams: NavParams,
 private file: File ,
 public dbFire:AngularFireDatabase,
 public modalCtrl:ModalController,
 public events:Events
   ) {



  }


  ionViewWillEnter(){
    this.imagemAlbum = 'assets/imgs/noMusic.png';


    this.file.listDir(this.file.externalRootDirectory, 'Music')
    .then(result => {

      for(let item of result) {
      
        console.log(item);

       if(item.isDirectory == true && item.name != '.' && item.name!= '..')  {

  

         // this.getFileList(item.name); //Get all the files inside the folder. recursion will probably be useful here.
        
        }   else if (item.isFile == true)
          this.posts.push({
            post_name: item.name,
            post_artista: '',
            post_uid: this.dbFire.database.ref().child('musicas/').push().key,
            musica_url:item.nativeURL
          });
       // }

      }
    })
    .catch(err => console.log(err));


  }


   getFileList(path: string): any{
    let file = new File();

    this.file.listDir(file.externalRootDirectory,  path)
    .then((result)=>{


      for(let item of result)
      {
        if(item.isDirectory == true && item.name != '.' && item.name != '..') {
          
            this.getFileList(path + '/' + item.name);

        }   else if (item.isFile == true){
       
          this.posts.push({
            post_name: item.name,
           // path: item.fullPath
          })
        }
      }
    },(error)=>{
      console.log(error);
    })
  }



  abreAddMusicToPlaylist(post){
    console.log(post);

    let modal = this.modalCtrl.create("add-to-playlist", { 
          post:post
      } );
    modal.present();
  }

  
// Play audio
 play(post) {
  this.events.publish('musica:played', post.post_artista,  post.post_name, post.musica_url, true);

}


}




