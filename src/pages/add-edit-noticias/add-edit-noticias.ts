import { Component, ViewChild} from '@angular/core';
import { NavController, ToastController, ActionSheetController, LoadingController, NavParams, AlertController, IonicPage } from 'ionic-angular';


import { NgForm } from '@angular/forms';
import { AuthProvider } from '../../providers/auth-provider';


import {  AngularFireDatabase } from 'angularfire2/database';

import { Camera } from '@ionic-native/camera';

import 'firebase/storage';


import { AngularFireAuth } from 'angularfire2/auth';

import { NoticiasServices} from '../../providers/noticias-services';

import { Storage } from '@ionic/storage';

@IonicPage({
	name: 'edit-noticias',
  segment: 'edit-noticias'
  }) 
@Component({
  selector: 'page-add-edit-noticias',
  templateUrl: 'add-edit-noticias.html'
})
export class AddEditNoticiaPage   {

 @ViewChild('fileInput') fileInput;

  

 post:any;
  post_name:any;
  email:any;
  post_description:any;
  post_content:any;
  post_uid:any;
  post_date:any;

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
     private camera: Camera,
    public dbFire: AngularFireDatabase,
    public navParms : NavParams,
    public authProvider:AuthProvider,
    public actionSheetCtrl: ActionSheetController,
  public afAuth:AngularFireAuth,
  public loadingCtrl: LoadingController,
public alertCtrl:AlertController,
public noticiasServices:NoticiasServices,
public storage: Storage
) {

   

  }


  ionViewDidLoad(){

    this.storage.get('email').then((email) => {
        this.email = email;
    });



   this.post_image = "assets/imgs/noImage.jpg";

    this.is_edit = this.navParms.get("is_edit");
    if(this.is_edit ==true){

        
      this.title = "Edit ";



      this.post = this.navParams.get('post');
      this.post_name =  this.post.post_name;
      this.post_description =   this.post.post_description;
      this.post_date = this.post.post_date;
      this.post_content = this.post.post_content;

      this.post_uid = this.post.post_uid;

      this.post_image =   this.post.post_image;
      if(this.post_image==""){
        this.post_image = "assets/imgs/noImage.jpg";
      }

      


    }else{

      this.title = "Add Noticia";
        this.post_uid = this.dbFire.database.ref().child('noticias/').push().key;
    

        

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

    this.noticiasServices.uploadPhotoStorage(imageData,this.post_uid).then(result=>{

      this.noticiasServices.updatePhotoDb(result.downloadURL,this.post_uid).then(result=>{


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

    
    let  post_name = form.value.post_name;
    let  post_descricao = form.value.post_description;

    let post_content = form.value.post_content;

    this.loading.present();


    this.noticiasServices.savePost(
      this.post_uid,
      this.post_date,
      post_name,
      post_descricao,
      post_content,
      this.post_image,
      this.is_edit

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

          this.noticiasServices.removePost( this.post_uid).then(result=>{
           
            // categoriaRemove.remove().then(result=> {
              confirmarRemocao.present();
              this.navCtrl.setRoot("home");

              this.noticiasServices.removePhotoStorage(this.post_uid).catch(error=>{
                
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
