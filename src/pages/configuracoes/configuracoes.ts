import { Component } from '@angular/core';
import { NavController, ToastController, IonicPage } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ConfiguracoesServices } from '../../providers/configuracoes-services';



@IonicPage({
	name: 'configuracoes',
  segment: 'configuracoes'
  }) 
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html'
})
export class ConfiguracoesPage {

  post_uid:any;

  facebookUrl:any;
  youtubeUrl:any;
  instagramUrl:any;
  spotifyUrl:any;
  websiteUrl:any;
  lojaVirtualUrl:any;
  songkickId:any;
  
  posts : any;

  constructor(public navCtrl: NavController,
    public configServices:ConfiguracoesServices,
  public toastCtrl:ToastController) {

  }


   ionViewDidLoad(){

      this.configServices.listar().then(snapshot=> {
       
          this.facebookUrl =   snapshot.val().facebookUrl;
          this.youtubeUrl = snapshot.val().youtubeUrl;
          this.instagramUrl =   snapshot.val().instagramUrl;
          
          this.spotifyUrl =   snapshot.val().spotifyUrl;

          this.websiteUrl=   snapshot.val().websiteUrl;
          this.lojaVirtualUrl=   snapshot.val().lojaVirtualUrl;
          this.songkickId =   snapshot.val().songkickId;


      }).catch(error => {

      });
  }

  
  salvarEdit(form: NgForm){
    let  facebook = form.value.facebook;
    let  youtube = form.value.youtube;
    let  instagram = form.value.instagram;
    let spotify = form.value.spotify;

    let  website = form.value.website;
    let  lojavirtual = form.value.lojavirtual;
    let songkick = form.value.songkick;
      
    this.configServices.savePost(
      facebook,
      youtube,
      instagram,
      spotify,
      website,
      lojavirtual,
      songkick,

    ).then(result=>{
      

        this.createToast("Informação atualizada com sucesso.");
       this.navCtrl.setRoot("home");
   

    }).catch(error=>{
      this.createToast(error);
    });



  }
 


  createToast(message){
    this.toastCtrl.create({
      message: message, 
      duration: 5000,
      position: 'middle'
      }).present();
  }




/* integrarInstagram(){
    this.authProvider.getInstagramUserInfo().subscribe(res => {
      console.log(res.json()['data']);
     this.posts = res.json()['data'];
    }) 
} */





}

