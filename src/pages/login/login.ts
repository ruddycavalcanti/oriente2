import { Component } from '@angular/core';
import { NavController , ToastController, LoadingController, AlertController, IonicPage} from 'ionic-angular';

import { NgForm } from '@angular/forms';


import { AuthProvider } from '../../providers/auth-provider';


@IonicPage({
	name: 'login',
	segment: 'login'
  })
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {


	 user_tipo = "assinante";
	 user_notification   = true;
	post_date :any;
	

	constructor(public navCtrl: NavController, 
		public authProvider : AuthProvider, 
		public toastCtrl: ToastController, 
		public loadingCtrl: LoadingController,
		public alertCtrl:AlertController
	) {

	
		//this.verificarLogado();

	}
  

	/*verificarLogado(){
	 
		this.afAuth.authState.subscribe(user=>{
			if (user) {
				this.navCtrl.setRoot(HomePage);
			}
			  
		 }) 

	}*/

	
/* 
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
} */
		
  loginUser(form: NgForm){

		

		let  email = form.value.email;
		let  senha = form.value.password;

		this.authProvider.loginWithEmail(email, senha).then((result)=>{

				this.navCtrl.setRoot("home");

			

		}).catch(error=>{


				this.createToast(error);
		})
	   
   }




  irParaForgetPassword(){
    this.navCtrl.push("esqueceu-senha");
  }

  irParaRegister(){
    this.navCtrl.push("registro");
  }



  loginFacebook(){

	let user_nome :any;
	let user_image :any;
	let user_uid :any;
	let user_email:any;
	let email2 :any;

	let isNewUser = false;

	this.authProvider.signInWithFacebook().then(result=>{


		console.log(result);

		if(result.displayName==undefined){ //if is on computer
			user_uid = result.user.uid;
			user_nome = result.user.displayName;
			 user_image = result.user.photoURL;
			 user_email = result.user.email;
			 isNewUser = result.additionalUserInfo.isNewUser;
		}else{ //if is on mobile or others
			user_uid = result.uid;
			user_nome = result.displayName;
			user_image = result.photoURL;
			user_email = result.email;
			isNewUser = result.additionalUserInfo.isNewUser;
		}

			

		
		//email2 = user_email.replace("." , ",");

		this.authProvider.verificarInfoDatabase(user_email).then(snapshot=> {


		//this.dbFire.database.ref("/users/" + email2 ).once( "value").then(snapshot=> {

			//console.log(snapshot);
		
			if(snapshot.val()!=undefined){
				this.navCtrl.setRoot("home");

			}else{ //if is on mobile or others
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

							
							/* this.addPontosCriarConta(
								user_uid,
								user_email
								
							).then(result=>{
								this.createToast("Sua conta foi criada com sucesso. Seja bem vindo!");

								//this.ganhouPontos();
							}).catch(error=>{
							}); */
						}
	
					}).catch(error=>{
						this.createToast(error);
				});
			}

		  }).catch(error => {

			this.createToast(error);
		
		  });

		  

	}).catch(error=>{        

		this.createToast(error);
	});
	
}


loginGoogle(){

	let user_nome :any;
	let user_image :any;
	let user_uid:any;
	let user_email :any;
	let email2 :any;

	let isNewUser = false;

	this.authProvider.signInWithGoogle().then(result=>{

		
		console.log(result);
		

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

		//email2 = user_email.replace("." , ",");


		this.authProvider.verificarInfoDatabase(user_email).then(snapshot=> {

			console.log(snapshot.val());

		
			if(snapshot.val()!=undefined){
				this.navCtrl.setRoot("home");

			}else{
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

							/* this.addPontosCriarConta(
								user_uid,
								user_email
								
							).then(result=>{
								this.createToast("Sua conta foi criada com sucesso. Seja bem vindo!");

								this.ganhouPontos();
							}).catch(error=>{
							}); */
						}


					}).catch(error=>{
						//this.createToast(error);
				});
			}

		}).catch(error => {
			//console.log( 'login: ' + error);
			//alert('oi');
			//this.createToast(error);
	
		});



		}).catch(error=>{        

			this.createToast(error);
			console.log(error);
	});


}


createToast(message){
	this.toastCtrl.create({
	  message: message,
	  duration: 3000,
	  position: 'middle'
	  }).present();
  }
  
	

}
