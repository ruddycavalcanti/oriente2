import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';


import { ShowsServices} from '../../providers/shows-services';

import { Storage } from '@ionic/storage';

@IonicPage({
  name: 'shows',
  segment: 'shows'
  }) 
@Component({
  selector: 'page-shows-category',
  templateUrl: 'category-shows.html'
})
export class ShowsPage {

  posts:any;
  shows:any;

  is_admin:any =true;

  constructor(public navCtrl: NavController,
     public showServices:ShowsServices,
    public storage:Storage) {
  }

  ionViewWillEnter() {

    this.user_is_admin();
    
    
    this.posts =  this.showServices.listar();

    this.shows = this.showServices.getShowsSongkick();
     
  }

  user_is_admin(){
    this.storage.get('is_admin').then((is_admin) => {
      if(is_admin==true)
        this.is_admin = true;
      });
  }




  irParaSingle(event, post){
    this.navCtrl.push("show", { 
      'id':post.post_uid,
      post:post
    });
  }

  irParaSingleSongKick(event, show){
    this.navCtrl.push("show", { 
      'id':show.id,
      show:show
    });
  }

  irParaAdd(){
    this.navCtrl.push("edit-shows");
  }


getMonthName(monthNum) :string{

  switch(monthNum){
      case "01": return  "JAN";
      case "02": return  "FEV";
      case "03": return  "MAR";
      case "04": return  "ABR";
      case "05": return  "MAI";
      case "06": return  "JUN"; 
      case "07": return  "JUL";
      case "08": return  "AGO";
      case "09": return  "SET";
      case "10": return  "OUT";
      case "11": return  "NOV";
      case "12": return  "DEZ";
       
          
      }
      
  }

}
