import { Component, ViewChild} from '@angular/core';
import { NavController, ToastController, ActionSheetController, LoadingController, NavParams, AlertController, IonicPage } from 'ionic-angular';


import { NgForm } from '@angular/forms';
import { AuthProvider } from '../../providers/auth-provider';


import {  AngularFireDatabase } from 'angularfire2/database';

import { Camera , CameraOptions} from '@ionic-native/camera';

import 'firebase/storage';

import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage({
  name: 'editar-perfil',
  segment: 'editar-perfil'
  }) 

@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html'
})
export class EditProfile   {

 @ViewChild('fileInput') fileInput;

 user_image:any;
  captureDataUrl:any;
  user_uid:any;

  nome:any;
  email:any;
  user_notification: boolean;
  user_date_created:any;

  actionAddPhoto:any;

  
  user_tipo:any;
  user_email:any;

  loading:any;

  is_admin:any;

  pontos_atuais:any;
  pontos_totais:any;
  
  constructor(public navCtrl: NavController,
    public navParams:NavParams,
     public toastCtrl:ToastController , 
     private camera: Camera,
    public dbFire: AngularFireDatabase,
    public authProvider:AuthProvider,
    public actionSheetCtrl: ActionSheetController,
  public afAuth:AngularFireAuth,
  public loadingCtrl: LoadingController,
public alertCtrl:AlertController) {


}

ionViewDidLoad(){


      this.email = this.authProvider.currentUserEmail;
      console.log(this.email);
    
       var email2 =  this.email.replace("." , ",");
   


      this.dbFire.database.ref("/users/" + email2 ).once( "value").then(snapshot=> {

        if(snapshot.val() != null){

          console.log(snapshot.val());
          
          this.user_image = snapshot.val().user_photoURL;
          if(this.user_image=="" || this.user_image == null){
            this.user_image = "assets/imgs/no_avatar.jpg";
          }

          this.nome =   snapshot.val().user_displayName;
          this.user_tipo = snapshot.val().user_tipo;

          this.user_notification = snapshot.val().user_notify;

          this.user_uid = snapshot.val().user_uid;


      }

        }).catch(error => {
          this.createToast(error);
        });

  


      this.loading = this.loadingCtrl.create({
        content: 'Please, wait...',
        duration: 5000
      });


     // this.getPontosAeT();
    
  }

  /* getPontosAeT(){
    this.pontoServices.getPontosAeT(this.authProvider.currentUserId).then(snapshot=> {
      this.pontos_atuais = snapshot.val().pontos_atuais;
      this.pontos_totais = snapshot.val().pontos_totais;
    }).catch(error => {
      this.pontos_atuais = 0;
      this.pontos_totais = 0;
    });
  }





  resgatePremios(form: NgForm){
    
    let  premio = form.value.premio;


    let pontos_premio:any;

    if(premio == "copo"){
      pontos_premio = 1000;
    }else  if(premio == "chaveiro"){
      pontos_premio = 2000;
    }else  if(premio == "bone"){
      pontos_premio = 8000;
    }
    

    if(this.pontos_atuais>=pontos_premio){

      this.pontos_atuais = this.pontos_atuais - pontos_premio;


       this.pontoServices.updatePontosAtuais(this.authProvider.currentUserId , this.pontos_atuais).then(snapshot=> {
     
         this.ganhouPremioAlert(premio);

      }).catch(error=>{
        this.createToast("Infelizmente não foi possível realizar esse resgate. Contate-nos!");
      });

    }else{

      this.createToast("Infelizmente você ainda não possui pontos suficientes para resgatar prêmios.");
    }


  }



  somarPontos(){
    this.pontoServices.getPontosAeT(this.authProvider.currentUserId).then((result) => {
      let pt_at = result.val().pontos_atuais;
      let pt_tt = result.val().pontos_totais;
      
      console.log(result.val().pontos_atuais);
      console.log(result.val().pontos_totais);

      this.atualizarPontosDb(this.authProvider.currentUserId,pt_at,pt_tt).then((result) => {

        this.ganhouPontosAlert();
      }).catch(error=>{
         
      });

    }).catch(error=>{
        
     });
}





atualizarPontosDb(post_author_id, pontos_atuais,pontos_totais){

  pontos_atuais = pontos_atuais + 10;
  pontos_totais = pontos_totais + 10;

  return this.pontoServices.updatePontos(post_author_id, pontos_atuais,pontos_totais);
}


ganhouPremioAlert(nomePremio) {
  let alert = this.alertCtrl.create({
    title: 'Parabéns!',
    subTitle: 'Você resgatou seus pontos pelo prêmio: ' +nomePremio,
    cssClass: 'alertPontos alertPontos_'+nomePremio,
    buttons: ['Fechar']
  });
  alert.present();
}



ganhouPontosAlert() {
  let alert = this.alertCtrl.create({
    title: 'Parabéns!',
    subTitle: 'Você ganhou 20 pontos.',
    cssClass: 'alertPontos',
    buttons: ['Fechar']
  });
  alert.present();
}
 */



addPhoto() {
  this.createActionAddPhoto();
}


createActionAddPhoto(){
  this.actionAddPhoto = this.actionSheetCtrl.create({
    title: 'Tirar Foto',
    buttons: [
      {
        text: 'Escolher Foto da Galeria',
        handler: () => {
          this.getFoto(this.camera.PictureSourceType.SAVEDPHOTOALBUM);
        }
      },
      {
        text: 'Tirar Foto da Camera',
        handler: () => {
          this.getFoto(this.camera.PictureSourceType.CAMERA);
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

    






 getFoto(sourceType) {

  const options: CameraOptions = {
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: sourceType,
    targetWidth: 100,
    targetHeight: 100,
     quality: 80,
     allowEdit: true,
     correctOrientation:true
  }

        if (Camera['installed']()) {
          this.camera.getPicture(options).then((imageData) => {

            this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
            this.user_image =  'data:image/jpeg;base64,' + imageData;
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
		
        this.user_image = imageData;
        this.captureDataUrl = imageData;

        this.actionAddPhoto.dismiss();


    };

    reader.readAsDataURL(event.target.files[0]);

  }


  saveImageFirebase(imageData){

    this.authProvider.uploadPhotoStorage(imageData,this.email).then(result=>{

      this.authProvider.updatePhotoDb(result.downloadURL,this.email).then(result=>{


         this.loading.dismiss();
         this.createToast('Informarção atualizada com sucesso.');
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




  salvarPerfil(form: NgForm){
    
    let  name = form.value.nome;
 

    this.loading.present();



    this.authProvider.updateUserDatabase(
        name,
        this.email,
        this.user_image, 
        this.user_uid,
        this.user_notification,
        this.user_tipo
        ).then(result=> {
          if(this.captureDataUrl!=undefined){
            this.saveImageFirebase( this.user_image);
          }else{
            this.loading.dismiss();
            this.createToast('Informarção atualizada com sucesso.');
  

           this.navCtrl.setRoot("home");
          }

    
        }).catch(error => {
      
          this.loading.dismiss();
          this.createToast(error);
          
        });

  }


  alterarSenha(form: NgForm){

    let  currentPass = form.value.currentPass;
    let  newPass = form.value.newPass;


    this.authProvider.getCredentials(this.email, currentPass).then(result =>{

      this.authProvider.changePass(newPass).then(result =>{

        this.createToast("Senha atualizada com sucesso.");
        this.navCtrl.setRoot("home");

      }).catch(error =>{
        this.createToast(error);
      })

    }).catch(error=>{
      this.createToast(error);
    })

    
   
  }


alterarNotificacao(){


    let email2 = this.email.replace("." , ",");
   
    this.dbFire.database.ref("users").child(email2).update({
    user_notify: this.user_notification
    }).then(result=> {

      this.createToast('Notificação atualizada com sucesso.');

    }).catch(error=>{

      this.createToast(error);

  })


}


  
  logout(){

    this.authProvider.signOut();
    this.navCtrl.setRoot("login");

    
  }




  createToast(message){
    this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'middle'
      }).present();
  }


}
