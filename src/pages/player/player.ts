import { Component  } from '@angular/core';
import {  NavController, NavParams, IonicPage } from 'ionic-angular';

import { Media, MediaObject} from '@ionic-native/media';




let file: MediaObject;


@IonicPage({
	name: 'player',
  segment: 'player'
  })
@Component({
  selector: 'page-player',
  templateUrl: 'player.html'
})

export class PlayerPage {

	public imagemAlbum:any;

	//items: Array<{artista: string, musica: string , disco:string, conteudo:string, imagem:string , mp3:string}>;

	botaoPause:boolean = true;
	botaoPlay:boolean = false;
	botaoRefresh:boolean= true;
	botaoRepeat:boolean= false;
	botaoShuffle:boolean= false;

  mp3Url:any;
  musica_nome:any;
  musica_artista:any;
  verificarOrigem:any;

  mediaTimer :any;
  duracao :any;


  constructor(public navCtrl: NavController,
   public navParams: NavParams,
        private media: Media
    )  {

     
   }


   ionViewDidLoad(){
    this.imagemAlbum = 'assets/imgs/noMusic.png';

    this.mediaTimer = 0;

   }

   ionViewWillUnload(){
    //this.verificarOrigem =  this.musicProvider.setVerificarOrigem(false);
   }


   ionViewWillEnter(){
     
  
    
    if( this.mp3Url!="" && this.verificarOrigem == true){ 
     this.tocarMusicaAoAbrir();

    }

   }


   pausarMusica(){
       if (file != undefined) {
        file.pause();
        this.botaoPause = false;
        this.botaoPlay = true;
       }
    }

    tocarMusica(){
        if (file != undefined) { // se tiver tocando
            file.play();
            this.botaoPause = true;
            this.botaoPlay = false;
        }
   }


    tocarMusicaAoAbrir(){

       
        if (file != undefined) { // se tiver tocando
          file.release();
        }
      
     
        file = this.media.create(this.mp3Url);
        file.play();

        this.botaoPause = true;
        this.botaoPlay = false;

       // this.duracao = file.getDuration();

        this.showProgress();
       
   }


    showProgress(){

    

      setInterval(() => {
        file.getCurrentPosition().then((result) => {
          // do whatever with curpos
          this.mediaTimer = result;
        });
      }, 1000);

      /*
      var self = this;
      this.mediaTimer = setInterval(function () {
        file.getCurrentPosition().then((result) => {
          self.mediaTimer = result;
          if ( result < file.getDuration() ) {
            self.showProgress();
          }
        });
        }, 1000);
        */
    }
  
   refresh(){
   		this.botaoRefresh = false;
   		this.botaoRepeat = true;
       this.botaoShuffle = false;
   }
   repeat(){
   		this.botaoRefresh = false;
   		this.botaoRepeat = false;
       this.botaoShuffle = true;
   }
   shuffle(){
   		this.botaoRefresh = true;
   		this.botaoRepeat = false;
       this.botaoShuffle = false;
   }

   anterior(){
   }
 
   

   proximo(){
   	  // skip to 10 seconds (expects int value in ms)
       file.seekTo(10000);
   }


   share(){
      //this.socialSharing.share();
   }


}
