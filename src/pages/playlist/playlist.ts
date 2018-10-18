import { Component } from '@angular/core';
import { NavController, NavParams ,  ToastController, AlertController, IonicPage, Events} from 'ionic-angular';

import {  AngularFireDatabase  } from 'angularfire2/database';


@IonicPage({
	name: 'playlist',
  segment: 'playlist/:id'
  })
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
})
export class Playlist {

  

      musicas: any;
      playlistNome:any;

      post:any;
      post_uid:any;


  constructor(public navCtrl: NavController,
   public navParams: NavParams, 
     private alertCtrl: AlertController,
      public toastCtrl: ToastController,
      public dbFire: AngularFireDatabase,
     public events:Events
       ) {


       this.post = this.navParams.get("post");
       this.post_uid = this.post.post_uid;
       this.playlistNome = this.post.nome;
       console.log(this.post);

       this.musicas = this.dbFire.list('/playlists/' +  this.post_uid + '/musicas/').valueChanges();

    
  }


  play(post) {
  //faz tocar e abrir o player na hora
  this.events.publish('musica:played', post.post_artista,  post.post_name, post.musica_url, true);
  }
  




deletar(musicaKey) {

  let alert = this.alertCtrl.create({
    title: 'Tem certeza que deseja apagar essa música dessa playlist ?',
    
    buttons: [
      
      {
        text: 'Apagar',
        handler: data => {

       
          this.dbFire.list('/playlists/' +  this.post_uid + '/musicas/').remove(musicaKey);

        }
      },
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
    ]
  });
  alert.present();
}



  

}




