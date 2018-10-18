import { Component, ViewChild} from '@angular/core';
import { NavController, ToastController, IonicPage, ActionSheetController, LoadingController, NavParams, AlertController} from 'ionic-angular';


import { NgForm } from '@angular/forms';
import { AuthProvider } from '../../providers/auth-provider';


import {  AngularFireDatabase } from 'angularfire2/database';

import { Camera } from '@ionic-native/camera';

import 'firebase/storage';


import { AngularFireAuth } from 'angularfire2/auth';

import { DestaquesServices } from '../../providers/destaques-services';


@IonicPage({
  name: 'edit-destaques',
  segment: 'edit-destaques'
})
@Component({
  selector: 'add-edit-destaques',
  templateUrl: 'add-edit-destaques.html'
})
export class AddEditDestaquesPage   {

 @ViewChild('fileInput') fileInput;

  

 post:any;
  titulo:any;
  email:any;
  action:any;
  actionValue:any;
  desc:any;
  post_uid:any;

  post_image:any;
  downloadURL:any;
  title:any;



   email2 :any;

  captureDataUrl:any;


  actionAddPhoto:any;

  is_edit:any;

  order:any;

  
  user_notificacao: boolean;

  loading:any;
  
  constructor(public navCtrl: NavController,
    public navParams:NavParams,
     public toastCtrl:ToastController , 
     private camera: Camera,
    public dbFire: AngularFireDatabase,
    public navParms : NavParams,
    public authProvider:AuthProvider,
    public actionSheetCtrl: ActionSheetController,
  public afAuth:AngularFireAuth,
  public loadingCtrl: LoadingController,
public alertCtrl:AlertController
,public destaqueServices:DestaquesServices
) {

  }


  ionViewDidLoad(){


   this.post_image = "assets/imgs/noImage.jpg";


    this.is_edit = this.navParms.get("is_edit");
    if(this.is_edit ==true){


      this.post = this.navParams.get('post');


      this.title = "Edit ";
      
      this.action =  this.post.action;
      this.actionValue =   this.post.actionValue;
      this.desc =   this.post.desc;
      this.titulo = this.post.titulo;
      this.post_uid = this.post.post_uid;

      this.order = this.post.order;

      this.post_image =   this.post.post_image;
      if(this.post_image==""){
        this.post_image = "assets/imgs/noImage.jpg";
      }
      

    }else{

      this.title = "Add Destaque";
        this.post_uid = this.dbFire.database.ref().child('destaques/').push().key;
    
        
    }

    this.loading = this.loadingCtrl.create({
			content: 'Por favor, aguarde...',
			duration: 5000
    });
    
    
  }


  irParaAdd(){
    this.navCtrl.push("edit-destaques", {
      is_edit:false
    });
  }


  createToast(message){
    this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'middle'
      }).present();
  }
  



createActionAddPhoto(){
  this.actionAddPhoto = this.actionSheetCtrl.create({
    title: 'Tirar Foto',
    buttons: [
      {
        text: 'Escolher uma foto da galeria',
        handler: () => {
          this.getPicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Tirar uma foto da Camera',
        handler: () => {
          this.getPicture(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });

  this.actionAddPhoto.present();
}

    
addPhoto() {
  

  this.createActionAddPhoto();

}




 getPicture(sourceType) {


        if (Camera['installed']()) {
          this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: sourceType,
            targetWidth: 100,
            targetHeight: 100,
             quality: 90,
             allowEdit: true,
             correctOrientation:true
          }).then((imageData) => {

          

            this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
            this.post_image =  'data:image/jpeg;base64,' + imageData;
            this.actionAddPhoto.dismiss();
            
            
          }, (error) => {
            this.createToast(error);
          })
        } else {
          this.fileInput.nativeElement.click();
          // go to processWebImage method. //  ir para o método processWebImage

        }
   
  }





  processWebImage(event) {
  
    let reader = new FileReader();
    reader.onloadend = (readerEvent) => {

        let imageData = (readerEvent.target as any).result;

          this.captureDataUrl = imageData;
        this.post_image = imageData;

        this.actionAddPhoto.dismiss();

    }

    reader.readAsDataURL(event.target.files[0]);

  }


  saveImageFirebase(imageData){

    this.destaqueServices.uploadPhotoStorage(imageData,this.post_uid).then(result=>{

      this.destaqueServices.updatePhotoDb(result.downloadURL,this.post_uid).then(result=>{


        this.loading.dismiss();
        this.createToast("Informação atualizada com sucesso.");
         this.navCtrl.setRoot("home");


        }).catch(error=>{
          this.loading.dismiss();
          this.createToast(error);
        });


    }).catch(error=>{
      this.loading.dismiss();
      this.createToast(error);
    });

  }




  salvarEdit(form: NgForm){

    
    let  titulo = form.value.titulo;
    let  desc = form.value.desc;
    let action = form.value.action;
    let actionValue = form.value.actionValue;

    let order:number = form.value.order; 

    this.loading.present();


    this.destaqueServices.savePost(
      action,
      actionValue,
      this.post_image, //post_image
      desc,
      titulo,
      this.post_uid,
      order

    ).then(result=>{
      

      if(this.captureDataUrl!=undefined){
        this.saveImageFirebase( this.post_image);
      }else{
        this.loading.dismiss();
        this.createToast("Informação atualizada com sucesso.");
       this.navCtrl.setRoot("home");
      }



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
    title: 'Remover Destaque',
    message: 'Tem certeza que deseja remover o post ' + this.titulo +'?',
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

          this.destaqueServices.removePost( this.post_uid).then(result=>{
           
            // categoriaRemove.remove().then(result=> {
              confirmarRemocao.present();
              this.navCtrl.setRoot("home");

              this.destaqueServices.removePhotoStorage(this.post_uid).catch(error=>{
           
              });

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
