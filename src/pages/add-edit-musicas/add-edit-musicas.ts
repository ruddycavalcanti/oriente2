import { Component, ViewChild} from '@angular/core';
import { NavController, ToastController,  ActionSheetController, LoadingController, NavParams, AlertController, ViewController, IonicPage } from 'ionic-angular';


import { NgForm } from '@angular/forms';
import { AuthProvider } from '../../providers/auth-provider';


import {  AngularFireDatabase } from 'angularfire2/database';



import { AngularFireAuth } from 'angularfire2/auth';

import { MusicasServices} from '../../providers/musicas-services';
import { Camera } from '@ionic-native/camera';

@IonicPage({
	name: 'edit-musicas',
  segment: 'edit-musicas'
  }) 
@Component({
  selector: 'page-add-edit-musicas',
  templateUrl: 'add-edit-musicas.html'
})
export class AddEditMusicaPage   {


  @ViewChild('fileInput') fileInput;

  

 post:any;
  post_name:any;
  musica_url:any;
  post_content:any;
  post_uid:any;
  post_artista:any;
  title:any;



   email2 :any;


   captureDataUrl:any;
   actionAddPhoto:any;

  is_edit:any;

  
  user_notificacao: boolean;

  loading:any;

  post_image:any;
  
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
public musicaServices:MusicasServices,
public viewCtrl:ViewController,
public camera:Camera
) {

   

  }



  ionViewDidLoad(){

  

    this.post_image = "assets/imgs/noImage.jpg";

    this.is_edit = this.navParms.get("is_edit");
    if(this.is_edit ==true){

        
      this.title = "Edit ";



      this.post = this.navParams.get('post');
      this.post_name =  this.post.post_name;
      this.musica_url =   this.post.musica_url;
      this.post_content = this.post.post_content;
     // this.post_artista = this.post.post_artista;
      this.post_uid = this.post.post_uid;


      


    }else{

      this.title = "Add Música";
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

    this.musicaServices.uploadPhotoStorage(imageData,this.post_uid).then(result=>{

      this.musicaServices.updatePhotoDb(result.downloadURL,this.post_uid).then(result=>{


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
    let  musica_url = form.value.musica_url;


    let artista= form.value.post_artista;
    if(artista==''){
      artista= "Oriente";
    }

    this.loading.present();


    this.musicaServices.savePost(
      this.post_uid,
      post_name,
      musica_url,
      this.post_image,
      artista

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
    title: 'Remover Musica',
    message: 'Tem certeza que deseja remover a música ' + this.post_name +'?',
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

          this.musicaServices.removePost( this.post_uid).then(result=>{
           
            // categoriaRemove.remove().then(result=> {
              confirmarRemocao.present();
              this.navCtrl.setRoot("home");

              this.musicaServices.removePhotoStorage(this.post_uid).catch(error=>{
      
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


dismiss(){
  this.viewCtrl.dismiss();
}



}
