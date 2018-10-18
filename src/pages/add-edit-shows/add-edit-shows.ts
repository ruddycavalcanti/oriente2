import { Component, ViewChild} from '@angular/core';
import { NavController, IonicPage, ToastController, ActionSheetController, LoadingController, NavParams, AlertController } from 'ionic-angular';


import { NgForm } from '@angular/forms';
import { AuthProvider } from '../../providers/auth-provider';


import {  AngularFireDatabase } from 'angularfire2/database';


import 'firebase/storage';


import { AngularFireAuth } from 'angularfire2/auth';

import { ShowsServices} from '../../providers/shows-services';

import { Storage } from '@ionic/storage';


@IonicPage({
	name: 'edit-shows',
  segment: 'edit-shows'
  }) 
@Component({
  selector: 'page-add-edit-shows',
  templateUrl: 'add-edit-shows.html'
})
export class AddEditShowPage   {

 @ViewChild('fileInput') fileInput;

  

  post:any;
  post_name:any;
  email:any;
  post_dia:any;
  post_diaV:any;
  post_local:any;
  post_horario:any;
  post_cidade:any;
  post_estado:any;
  post_content:any;
  post_uid:any;
  link_ingresso : any;

  post_image:any;
  downloadURL:any;
  title:any;



  email2 :any;

  captureDataUrl:any;


  actionAddPhoto:any;

  is_edit:any;

  
  user_notificacao: boolean;

  loading:any;
  
  constructor(public navCtrl: NavController,
    public navParams:NavParams,
     public toastCtrl:ToastController , 
    public dbFire: AngularFireDatabase,
    public navParms : NavParams,
    public authProvider:AuthProvider,
    public actionSheetCtrl: ActionSheetController,
  public afAuth:AngularFireAuth,
  public loadingCtrl: LoadingController,
public alertCtrl:AlertController,
public showService:ShowsServices,
public storage: Storage
) {

   
   

  }


  ionViewDidLoad(){

    this.storage.get('email').then((email) => {
        this.email = email;
    });



   this.post_image = "assets/imgs/no_avatar.jpg";

    this.is_edit = this.navParms.get("is_edit");
    if(this.is_edit ==true){

        
      this.title = "Edit ";



      this.post = this.navParams.get('post');
      this.post_name =  this.post.post_name;
      this.post_dia  =   this.post.post_dia;
      this.post_diaV =   this.post.post_dia;
 
      this.post_local =   this.post.post_local;
      this.post_horario = this.post.post_horario;
      this.post_cidade = this.post.post_cidade;
      this.post_estado = this.post.post_estado;
      this.post_content = this.post.post_content;
      this.link_ingresso  = this.post.link_ingresso;


      this.post_uid = this.post.post_uid;

      this.post_image =   this.post.post_image;
      if(this.post_image==""){
        this.post_image = "assets/imgs/logo.png";
      }

      


    }else{

      this.title = "Add Show";
        this.post_uid = this.dbFire.database.ref().child('shows/').push().key;
    

        

    }

    



    this.loading = this.loadingCtrl.create({
			content: 'Please, wait...',
			duration: 5000
    });
    
  

    
  }

  createToast(message){
    this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'middle'
      }).present();
  }
  






  salvarEdit(form: NgForm){

    
    let  post_name = form.value.post_name;
    let dia = form.value.post_dia;
    let  post_local = form.value.post_local;
    let post_horario = form.value.post_horario;
    let cidade = form.value.post_cidade;
    let estado  = form.value.post_estado;
    let link_ingresso2  = form.value.link_ingresso;

    if(dia==undefined){
     dia= '';
    }

    if(post_horario==undefined){
      post_horario= '';
    }
    let post_content = form.value.post_content;

    this.loading.present();


    this.showService.savePost(
      post_name,
      post_content,
      this.post_image, //post_image
      dia,
      post_local,
      post_horario,
      cidade,
      estado,
      this.post_uid,
      link_ingresso2

    ).then(result=>{
      

    
        this.loading.dismiss();
        this.createToast("Informação atualizada com sucesso.");
       this.navCtrl.setRoot("home");
     

    }).catch(error=>{
      this.loading.dismiss();
      this.createToast(error);
    });



  }




apagar() {

 
  let confirmarRemocao = this.toastCtrl.create({
    message: 'Post removido com sucesso.',
    duration: 3000,
    position: 'middle'
  });


  let alert = this.alertCtrl.create({
    title: 'Remover Show',
    message: 'Tem certeza que deseja remover o show ' + this.post_name +'?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          //console.log('Cancel clicked');
        }
      },
      {
        text: 'Remover',
        handler: () => {

          this.showService.removePost( this.post_uid).then(result=>{
           
            // categoriaRemove.remove().then(result=> {
              confirmarRemocao.present();
              this.navCtrl.setRoot("home");

             // this.showService.removePhotoStorage(this.post_uid).catch(error=>{});

         // });
          }).catch(error=>{
            this.createToast(error);
          });
           
           

        }
      }
    ]
  });
  alert.present();
  
}




}
