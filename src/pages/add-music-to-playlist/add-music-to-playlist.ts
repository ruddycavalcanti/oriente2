import { Component } from '@angular/core';
import { NavController, NavParams , AlertController, ViewController, ToastController, IonicPage} from 'ionic-angular';


import {  AngularFireDatabase  } from 'angularfire2/database';

import { PlaylistsServices } from '../../providers/playlists-services';
import { AuthProvider } from '../../providers/auth-provider';

@IonicPage({
  name: 'add-to-playlist',
  segment: 'add-to-playlist'
  }) 
@Component({
  selector: 'page-add-music-to-playlist',
  templateUrl: 'add-music-to-playlist.html',
})
export class AddMusicToPlaylist {

  playlists:any;

  musicas: any;

  musicaNome:any;
  musicaKey:any;
  musicaArtista:any;
  musicaDuracao:any;
  musicaMp3Url:any;

  imagemPlaylist:any;

  playlistSelecionada:any;


  playlists2:any;

  post:any;

  email:any;

  constructor(public navCtrl: NavController,
   public navParams: NavParams, 
     private alertCtrl: AlertController,
     public viewCtrl:  ViewController,
    public playlistsServices:PlaylistsServices,
     private toastCtrl: ToastController,
     public dbFire: AngularFireDatabase,
     public authProvider:AuthProvider
       ) {

        this.email = this.authProvider.currentUserEmail;
        
  }

  ionViewDidLoad(){
     this.imagemPlaylist = "assets/imgs/noMusic.png";

     //this.playlists =  this.dbFire.list('playlists').valueChanges();
     
     this.playlists =  this.dbFire.list('/playlists/' , 
     ref => ref.orderByChild("author_email").equalTo(this.email)
   ).valueChanges();


     

     this.post = this.navParams.get("post");
     if(this.post!= undefined){
     this.musicaKey = this.post.post_uid;
     this.musicaNome = this.post.post_name;
     this.musicaArtista = this.post.post_artista;
     this.musicaMp3Url = this.post.musica_url;

     console.log(this.post);
    }else{
      this.dismiss();
    }

      
     
  }



dismiss() {
   this.viewCtrl.dismiss();
 }




salvarMusicToPlaylist(){


  if(this.playlistSelecionada != undefined){


   this.dbFire.database.ref("/playlists/" + this.playlistSelecionada + "/musicas/"+ this.musicaKey).update({
         post_name: this.musicaNome,
         post_artista:this.musicaArtista,
         musica_url:this.musicaMp3Url,
         post_uid:this.musicaKey

      }).then( value => { 

       this.viewCtrl.dismiss();

      });

  }else{

    this.viewCtrl.dismiss();

  }


}



addPlaylist() {
  let alert = this.alertCtrl.create({
    title: 'Criar Playlist',
    inputs: [
      {
        name: 'nome',
        placeholder: 'Nome da playlist'
      }
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancelar',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Salvar',
        role: 'salvar',
        handler: data => {


          if(data.nome!=""){ 

            let post_uid = this.dbFire.database.ref().child('playlists/').push().key;

           this.playlistsServices.savePost(post_uid,data.nome , this.email);
           


        }else{
           
          this.toastCtrl.create({
            message: 'É preciso escrever algum nome para sua playlist.',
            duration: 3000,
            position: 'middle'
          }).present();
        }



        }
      }
    ]
  });
  alert.present();
}





  

}





          