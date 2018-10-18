import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { NoticiasServices} from '../../providers/noticias-services';

import { Storage } from '@ionic/storage';

@IonicPage({
	name: 'noticias',
  segment: 'noticias'
  }) 
@Component({
  selector: 'category-noticias',
  templateUrl: 'category-noticias.html'
})
export class CategoryNoticiasPage {

  posts:any;

  is_admin:any =true;

  constructor(public navCtrl: NavController,
     public noticiaServices:NoticiasServices,
    public storage:Storage) {
  }

  ionViewWillEnter() {
    
    this.listando();

    this.user_is_admin();
     
  }



  user_is_admin(){
    this.storage.get('is_admin').then((is_admin) => {
      if(is_admin==true)
        this.is_admin = true;
      });
  }


  listando(){
    this.posts =  this.noticiaServices.listar();
  }



  irParaSingle(event, post){
    this.navCtrl.push("noticia", { 
      'id':post.post_uid,
      post:post
    });
  }

  irParaAdd(){
    this.navCtrl.push("edit-noticias");
  }

}
