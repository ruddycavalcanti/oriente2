import { Component } from '@angular/core';
import { NavController, NavParams , AlertController, IonicPage} from 'ionic-angular';

import {  AngularFireDatabase  } from 'angularfire2/database';
import { PlaylistsServices } from '../../providers/playlists-services';

import { AuthProvider } from '../../providers/auth-provider';
 
@IonicPage({
	name: 'playlists',
  segment: 'playlists'
  })
@Component({
  selector: 'page-playlists',
  templateUrl: 'playlists.html',
})
export class Playlists {

  playlists: any;

 
  toastCtrl:any;

  email:any;
 
  constructor(public navCtrl: NavController,
   public navParams: NavParams, 
     private alertCtrl: AlertController,
   public dbFire: AngularFireDatabase,
   public authProvider:AuthProvider,
   public playlistsServices :PlaylistsServices
       ) {

       //this.produtoList =  this.dbFire.list('playlists').valueChanges();

      this.email = this.authProvider.currentUserEmail;

      this.playlists =  this.dbFire.list('/playlists/' , 
        ref => ref.orderByChild("author_email").equalTo(this.email)
      ).valueChanges(); 



///////////////

/*
this.produtoRef = this.dbFire.database.ref('/playlists').orderByChild("author_email").equalTo(this.email);

this.produtoRef.on('value', produtoList => {
   let produtos = [];
   //let produtosKey = []; 
   produtoList.forEach( produto => {
       produtos.push(produto.val());
      // produtosKey.push(produto.key);
      return false;
    });

 this.produtoList = produtos;
 console.log(this.produtoList);
//this.produtoListKey = produtosKey;
//this.loadedprodutoList = produtos;
});
*/
    
 ///////////////

 //this.qtdMusicas();

  }



  qtdMusicas() {

     this.dbFire.database.ref('/playlists/-LAQbV2S5z6gcr7uWtL4/musicas/').once('value').then(result=>{
        console.log(result.numChildren());
         return   result.numChildren();
   
     
    })

  }



  tocarPlaylist(post){
    console.log(post);
  }




  irParaPlaylist(event, post){
    this.navCtrl.push("playlist", { 
      'id':post.post_uid,
      post:post
    });
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
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Salvar',
        handler: data => {

            if(data.nome!=""){ 

              let post_uid = this.dbFire.database.ref().child('playlists/').push().key;

             this.playlistsServices.savePost(post_uid, data.nome , this.email);
             


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




editar(post_uid, playlistNome) {

  let alert = this.alertCtrl.create({
    title: 'O que você deseja fazer ?',
    
    buttons: [
      
      {
        text: 'Atualizar Nome',
        handler: data => {

          this.editarNome(post_uid, playlistNome);

        }
      },
      {
        text: 'Apagar',
        handler: data => {

         this.playlistsServices.removePost(post_uid);

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


remover(post_uid: string){

   this.playlistsServices.removePost(post_uid);
}



  editarNome(post_uid: string, playlistNome: string){
      
      let alert = this.alertCtrl.create({
    title: 'Atualizar Nome da Playlist',
    inputs: [
      {
        name: 'nome',
        placeholder: 'Nome da playlist',
        value: playlistNome
      }
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Salvar',
        handler: data => {

            this.playlistsServices.savePost(post_uid,data.nome, this.email);


        }
      }
    ]
  });
  alert.present();

  }


  

}




