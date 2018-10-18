import { Component } from '@angular/core';
import { NavController, AlertController, ModalController, NavParams, IonicPage } from 'ionic-angular';

import { Media, MediaObject} from '@ionic-native/media';

import { MusicasServices} from '../../providers/musicas-services';


import { Events } from 'ionic-angular';

let file: MediaObject;

@IonicPage({
	name: 'musicas',
  segment: 'musicas'
  }) 
@Component({
  selector: 'category-musicas',
  templateUrl: 'category-musicas.html'
})
export class CategoryMusicasPage {

  posts:any;
  
  is_admin:any =true;

  //playlists:any;

  channelId:any;


  habilitarPlayer = true;

  constructor(public navCtrl: NavController,
     public musicaServices:MusicasServices,
    public alertCtrl:AlertController,
  public modalCtrl:ModalController,
public navParms:NavParams,
public events: Events) {

    
     
  }
  ionViewDidLoad() {
    this.posts =  this.musicaServices.listar();
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
  //faz tocar e abrir o player na hora
  this.events.publish('musica:played', post.post_artista,  post.post_name, post.musica_url, true);
}



  irParaAdd(){
    
    this.modalCtrl.create("edit-musicas" ).present();
  }





}
