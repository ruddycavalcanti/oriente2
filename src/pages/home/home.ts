import { Component ,ViewChild} from '@angular/core';
import { NavController,  IonicPage, } from 'ionic-angular';


import { DestaquesServices } from '../../providers/destaques-services';
import { Slides } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';


 
@IonicPage({
	name: 'home',
  segment: 'home'
  })
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  posts:any;

  constructor(public navCtrl: NavController, 
    public destaquesServices:DestaquesServices,
    public iab: InAppBrowser 
) {

  }


  
  ionViewDidLoad(){
    this.posts =  this.destaquesServices.listar();

   
 }



  goToSlide() {
    this.slides.slideTo(2, 500);
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
 
  irParaPerfil(post){
      this.navCtrl.push('perfil');
  }

  irParaEdit(post){ 
 
    this.navCtrl.push("edit-destaques", {
      post:post,
      is_edit:true
    });
  }



  irParaNew(){
    this.navCtrl.push("edit-destaques");
  }

  

   
  irParaDestaque(actionV,action){
   if(action=="link"){
     this.openLink(actionV);
   }else{
     if(actionV=='agenda'){
        this.navCtrl.push("shows");
     } 
     if(action=="video"){
      this.navCtrl.push("video",{
        'id':actionV,
        idv:actionV
      });
      }
   } 

 } 
 

  openLink(actionV){

   const browser = this.iab.create(''+actionV, "_blank", 
   {zoom: 'no',
   hidden: 'yes',
   location:  'yes'}
   );
   browser.show();
  }
 
}
