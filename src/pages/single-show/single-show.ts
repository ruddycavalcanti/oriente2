import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import {  AngularFireDatabase } from 'angularfire2/database';

import { Storage } from '@ionic/storage';

import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser';


@IonicPage({
	name: 'show',
  segment: 'show/:id'
  })
@Component({
  selector: 'page-single-show',
  templateUrl: 'single-show.html'
})
export class SingleShowPage {

  show:any;

  post:any;
  post_name:any;
  post_dia:any;
  post_image:any;
  post_local:any;
  post_horario:any;
  post_content:any;
  post_uid:any;

  post_cidade:any;
  post_estado:any;

  day:any;
  month:any;

  is_admin = true;

    link_ingresso:any;
  linkSongKick:any;

  constructor(public navCtrl: NavController,   
    public navParams:NavParams,
    public dbFire: AngularFireDatabase,
  public storage:Storage,    public iab: InAppBrowser ) {
    
    this.show = this.navParams.get('show'); //object vindo do songkick
    this.post = this.navParams.get('post');
    if(this.post!=undefined){
        this.show = this.post;
        this.post_name =  this.post.post_name;
        this.post_dia =   this.post.post_dia;
        this.post_image =   this.post.post_image;
        this.post_local =   this.post.post_local;
        this.post_horario = this.post.post_horario;
        this.post_content = this.post.post_content;
        this.post_uid = this.post.post_uid;
        this.post_cidade = this.post.post_cidade;
        this.post_estado = this.post.post_estado;
        this.link_ingresso = this.post.link_ingresso;

        this.day = this.post_dia.substr(0,2);
        let monthNumber =  this.post_dia.substr(5,2);
        this.month = this.getMonthName(monthNumber);

    }else  if(this.show!=undefined) {

      this.post = this.show;
      this.post_cidade = this.show.venue.metroArea.displayName;
      this.post_name = this.show.performance[0].artist.displayName + " - " + this.post_cidade;
      this.post_dia =   this.show.start.date;
      this.post_image =   '';
      this.post_local =   this.show.venue.displayName;
      this.post_horario = this.show.start.time;
      this.post_content = '';
      this.post_uid = this.show.id;
      this.post_estado = '';
      this.link_ingresso = '';
      this.linkSongKick = this.show.uri;

      this.day = this.post_dia.substr(0,2);
      let monthNumber =  this.post_dia.substr(5,2);
      this.month = this.getMonthName(monthNumber);

      this.linkSongKick = this.show.uri;

    }else{
      this.navCtrl.push("home");
    }

   

  }

  ionViewWillEnter(){
    this.user_is_admin();
  }


  user_is_admin(){
    this.storage.get('is_admin').then((is_admin) => {
      if(is_admin==true)
        this.is_admin = true;
      });
  }


getMonthName(monthNum) :string{

  switch(monthNum){
      case "01": return this.month  = "JAN";
      case "02": return this.month  = "FEV";
      case "03": return this.month  = "MAR";
      case "04": return this.month  = "ABR";
      case "05": return this.month  = "MAI";
      case "06": return this.month  = "JUN"; 
      case "07": return this.month  = "JUL";
      case "08": return this.month  = "AGO";
      case "09": return this.month  = "SET";
      case "10": return this.month  = "OUT";
      case "11": return this.month  = "NOV";
      case "12": return this.month  = "DEZ";
       
          
      }
      
  }
  

  irParaEdit(){
   this.navCtrl.push("edit-shows", { 
      post:this.post,
      is_edit:true
   } );
  }




  openLink(actionV){
    const options: InAppBrowserOptions = {
      zoom: 'no',
       hidden: 'yes',
       location:  'yes'
    }

   const browser = this.iab.create(''+actionV, "_blank", options);
   browser.show();
  }
 


 

}
