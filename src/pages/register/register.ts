import { Component } from '@angular/core';
import { NavController, ToastController, AlertController, IonicPage } from 'ionic-angular';

import { NgForm } from '@angular/forms';

//import { LoginPage } from '../../pages/login/login';
//import { HomePage } from '../../pages/home/home';

import { AuthProvider } from '../../providers/auth-provider';


import {  AngularFireDatabase } from 'angularfire2/database';
import { PontosServices } from '../../providers/pontos-services';

//import { FCM } from '@ionic-native/fcm';


 @IonicPage({
	name: 'registro',
  segment: 'registro'
  }) 
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

	user_tipo = "assinante";
	user_notification   = true;
	//is_new_user  = true;

	
	

	constructor(public navCtrl: NavController, 
		 public dbFire: AngularFireDatabase, 
		 public authProvider: AuthProvider, 
		 public toastCtrl: ToastController,
		public alertCtrl:AlertController,
		public pontoServices:PontosServices,
		//public fcm: FCM
	) {

		 }

	



  loginFacebook(){

	let user_nome :"";
	let user_email :"";
	let user_image :"";
	let user_uid:"";


	this.authProvider.signInWithFacebook().then(result=>{

		if(result.displayName==undefined){ //if is on computer
			user_uid = result.user.uid;
			user_nome = result.user.displayName;
			 user_image = result.user.photoURL;
			 user_email = result.user.email;
		}else{ //if is on mobile or others
			user_uid = result.uid;
			user_nome = result.displayName;
			user_image = result.photoURL;
			user_email = result.email;
		}

		this.authProvider.verificarInfoDatabase(user_email).then(snapshot=> {

			
		
			if(snapshot.val()!=undefined){ //ja estava registrado
				this.navCtrl.setRoot("home");
			}else{
				this.registrar(user_nome,user_email, user_image, user_uid);
			}

		  }).catch(error => {

			this.createToast(error);
		
		  });

		  

	});
	
}



	loginGoogle(){
		this.authProvider.signInWithGoogle().then(result=>{

			let user_nome :"";
			let user_email :"";
			let user_image :"";
			let user_uid:"";

	
			if(result.displayName==undefined){ //if is on computer
				user_uid = result.user.uid;
				 user_nome = result.user.displayName;
				 user_email = result.user.email;
				 user_image = result.user.photoURL;
	
			}else{
				user_uid = result.uid;
				user_nome = result.displayName;
				 user_email = result.email;
				 user_image = result.photoURL;
			}


		this.authProvider.verificarInfoDatabase(user_email).then(snapshot=> {

		
			if(snapshot.val()!=undefined){  //ja estava registrado
				this.navCtrl.setRoot("home");

			}else{
				this.registrar(user_nome,user_email, user_image, user_uid);
			}

		  }).catch(error => {

			this.createToast(error);
		
		  });



		}).catch(error => {
	     });


	}



  createUser(form: NgForm){

	

		let user_nome = form.value.name;
		let user_email = form.value.email;
        let senha = form.value.password;
		let user_uid =  this.dbFire.database.ref().child('users/').push().key;
		let user_image = "";
	

	    this.authProvider.signInWithEmail(user_nome,user_email, senha).then(result=>{

			this.registrar(user_nome,user_email, user_image, user_uid);


		}).catch(error=>{
			this.createToast(error);
		})
   }



   registrar(user_nome,user_email,user_image,user_uid){

		let isNewUser = true;

		/* this.fcm.subscribeToTopic('assinante');
		this.fcm.getToken().then(token => {
			//backend.registerToken(token);
			//alert(token);
		}); */

		this.authProvider.updateUserDatabase(
			user_nome,
			user_email,
			user_image, 
			user_uid,
			this.user_notification,
			this.user_tipo
			).then(result=>{
				this.navCtrl.setRoot("home");

				if(isNewUser==true){

					
					this.addPontosCriarConta(
						user_uid,
						user_email
						
					).then(result=>{
						this.createToast("Sua conta foi criada com sucesso. Seja bem vindo!");

						this.ganhouPontos();
					}).catch(error=>{
					}); 
				} 


			}).catch(error=>{
				this.createToast(error);
		});
   }



  
   irParaLogin(){
    this.navCtrl.push("login");
    
  }


ganhouPontos() {
	let alert = this.alertCtrl.create({
	  title: 'Parabéns!',
	  subTitle: 'Você ganhou 10 pontos e atingiu o nível 1.',
	  cssClass: 'alertPontos',
	  buttons: ['Fechar']
	});
	alert.present();
  }


addPontosCriarConta( post_author_id, post_author_email){
	
	let pontos_totais = 10;
	let pontos_atuais = 10;

	return this.pontoServices.savePost(
		post_author_id,
		post_author_email,
		pontos_totais,
		pontos_atuais
	);
}

  createToast(message){
	this.toastCtrl.create({
	  message: message,
	  duration: 5000,
	  position: 'middle'
	  }).present();
  }


}
