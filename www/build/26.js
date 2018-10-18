webpackJsonp([26],{

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileModule", function() { return EditProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile__ = __webpack_require__(436);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditProfileModule = /** @class */ (function () {
    function EditProfileModule() {
    }
    EditProfileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfile */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfile */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfile */]
            ]
        })
    ], EditProfileModule);
    return EditProfileModule;
}());

//# sourceMappingURL=edit-profile.module.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_provider__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_storage__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditProfile = /** @class */ (function () {
    function EditProfile(navCtrl, navParams, toastCtrl, camera, dbFire, authProvider, actionSheetCtrl, afAuth, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.dbFire = dbFire;
        this.authProvider = authProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.afAuth = afAuth;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    EditProfile.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.email = this.authProvider.currentUserEmail;
        console.log(this.email);
        var email2 = this.email.replace(".", ",");
        this.dbFire.database.ref("/users/" + email2).once("value").then(function (snapshot) {
            if (snapshot.val() != null) {
                console.log(snapshot.val());
                _this.user_image = snapshot.val().user_photoURL;
                if (_this.user_image == "" || _this.user_image == null) {
                    _this.user_image = "assets/imgs/no_avatar.jpg";
                }
                _this.nome = snapshot.val().user_displayName;
                _this.user_tipo = snapshot.val().user_tipo;
                _this.user_notification = snapshot.val().user_notify;
                _this.user_uid = snapshot.val().user_uid;
            }
        }).catch(function (error) {
            _this.createToast(error);
        });
        this.loading = this.loadingCtrl.create({
            content: 'Please, wait...',
            duration: 5000
        });
        // this.getPontosAeT();
    };
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
    EditProfile.prototype.addPhoto = function () {
        this.createActionAddPhoto();
    };
    EditProfile.prototype.createActionAddPhoto = function () {
        var _this = this;
        this.actionAddPhoto = this.actionSheetCtrl.create({
            title: 'Tirar Foto',
            buttons: [
                {
                    text: 'Escolher Foto da Galeria',
                    handler: function () {
                        _this.getFoto(_this.camera.PictureSourceType.SAVEDPHOTOALBUM);
                    }
                },
                {
                    text: 'Tirar Foto da Camera',
                    handler: function () {
                        _this.getFoto(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        this.actionAddPhoto.present();
    };
    EditProfile.prototype.getFoto = function (sourceType) {
        var _this = this;
        var options = {
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: sourceType,
            targetWidth: 100,
            targetHeight: 100,
            quality: 80,
            allowEdit: true,
            correctOrientation: true
        };
        if (__WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this.camera.getPicture(options).then(function (imageData) {
                _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
                _this.user_image = 'data:image/jpeg;base64,' + imageData;
                _this.actionAddPhoto.dismiss();
            }, function (error) {
                _this.createToast(error);
            });
        }
        else {
            this.fileInput.nativeElement.click();
            // go to processWebImage method. //  ir para o método processWebImage
        }
    };
    EditProfile.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.user_image = imageData;
            _this.captureDataUrl = imageData;
            _this.actionAddPhoto.dismiss();
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    EditProfile.prototype.saveImageFirebase = function (imageData) {
        var _this = this;
        this.authProvider.uploadPhotoStorage(imageData, this.email).then(function (result) {
            _this.authProvider.updatePhotoDb(result.downloadURL, _this.email).then(function (result) {
                _this.loading.dismiss();
                _this.createToast('Informarção atualizada com sucesso.');
                _this.navCtrl.setRoot("home");
            }).catch(function (error) {
                _this.loading.dismiss();
                _this.createToast(error);
            });
        }).catch(function (error) {
            _this.loading.dismiss();
            _this.createToast(error);
        });
    };
    EditProfile.prototype.salvarPerfil = function (form) {
        var _this = this;
        var name = form.value.nome;
        this.loading.present();
        this.authProvider.updateUserDatabase(name, this.email, this.user_image, this.user_uid, this.user_notification, this.user_tipo).then(function (result) {
            if (_this.captureDataUrl != undefined) {
                _this.saveImageFirebase(_this.user_image);
            }
            else {
                _this.loading.dismiss();
                _this.createToast('Informarção atualizada com sucesso.');
                _this.navCtrl.setRoot("home");
            }
        }).catch(function (error) {
            _this.loading.dismiss();
            _this.createToast(error);
        });
    };
    EditProfile.prototype.alterarSenha = function (form) {
        var _this = this;
        var currentPass = form.value.currentPass;
        var newPass = form.value.newPass;
        this.authProvider.getCredentials(this.email, currentPass).then(function (result) {
            _this.authProvider.changePass(newPass).then(function (result) {
                _this.createToast("Senha atualizada com sucesso.");
                _this.navCtrl.setRoot("home");
            }).catch(function (error) {
                _this.createToast(error);
            });
        }).catch(function (error) {
            _this.createToast(error);
        });
    };
    EditProfile.prototype.alterarNotificacao = function () {
        var _this = this;
        var email2 = this.email.replace(".", ",");
        this.dbFire.database.ref("users").child(email2).update({
            user_notify: this.user_notification
        }).then(function (result) {
            _this.createToast('Notificação atualizada com sucesso.');
        }).catch(function (error) {
            _this.createToast(error);
        });
    };
    EditProfile.prototype.logout = function () {
        this.authProvider.signOut();
        this.navCtrl.setRoot("login");
    };
    EditProfile.prototype.createToast = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: 'middle'
        }).present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], EditProfile.prototype, "fileInput", void 0);
    EditProfile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"/Users/ruddy/_apps/oriente/src/pages/edit-profile/edit-profile.html"*/'<ion-header>\n    <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Editar Perfil</ion-title>\n\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n\n    <div   text-center class="profile-image-wrapper page" (click)="addPhoto()">\n\n        <ion-avatar>\n        <img src="{{user_image}}" class="perfil circle" width="100" height="100">\n    </ion-avatar>\n\n  <button ion-button small   round outline >Tirar Foto</button>\n\n      <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n\n    </div>\n\n\n        \n  <form #f="ngForm" (ngSubmit)="salvarPerfil(f)">\n\n  <ion-list>\n\n      <ion-item>\n          <ion-label floating>Nome</ion-label>\n          <ion-input name="nome"  ngModel  required type="text" [value]="nome"></ion-input>\n        </ion-item>\n    \n      \n          \n     \n\n            <ion-item>\n                <ion-label floating>Email</ion-label>\n                <ion-input disabled name="email"  ngModel  type="email" [value]="email"></ion-input>\n              </ion-item>\n\n               \n              \n               <ion-item >\n                  <ion-label floating>Tipo</ion-label>\n                  <ion-input  name="user_tipo"  ngModel  type="text"  [value]="user_tipo"></ion-input>\n                </ion-item>\n         \n  \n            <div margin-top padding-top>\n                <button ion-button full  round [disabled]="!f.valid"  color="dark">Salvar</button>\n              </div>\n\n       \n\n  </ion-list >\n\n</form>\n\n<br><br>\n<div class="alterarSenha" margin-top padding-top>\n\n<h3 text-left>ALTERAR SENHA</h3>\n   \n<form #fa="ngForm" (ngSubmit)="alterarSenha(fa)">\n\n        <ion-list>\n      \n            <ion-item>\n                <ion-label floating>Senha atual</ion-label>\n                <ion-input name="currentPass"  ngModel  required type="password" [value]="currentPass"></ion-input>\n              </ion-item>\n          \n              <ion-item>\n                  <ion-label floating>Nova Senha</ion-label>\n                  <ion-input  name="newPass"  ngModel required  type="password" [value]="newPass"></ion-input>\n                </ion-item>\n          \n                <!--\n            <ion-item>\n                    <ion-label floating>Password</ion-label>\n                    <ion-input type="password" value=""></ion-input>\n                  </ion-item> -->\n             \n        \n                  <div margin-top padding-top>\n                      <button ion-button full  round  [disabled]="!fa.valid"  color="dark" >Alterar Senha</button>\n                    </div>\n      \n             \n      \n        </ion-list >\n      \n      </form>\n\n    </div>\n\n\n\n<br><br>\n\n\n<!--\n<ion-card  margin-top text-left>\n    <ion-card-content >\n\n      <div padding margin-bottom>\n        <h2>Pontuação</h2>\n\n        <p float-left>Pontos atuais: {{pontos_atuais}} </p>\n\n        <p float-right>Pontos totais: {{pontos_totais}}</p>\n\n    </div>\n\n    <hr>\n\n      <form #pt="ngForm" (ngSubmit)="resgatePremios(pt)">\n\n          <h2 padding>Resgatar Prêmios</h2>\n\n      <ion-list radio-group required ngModel name="premio">\n          <ion-item>\n            <ion-label>Copo (1.000 pts)</ion-label>\n            <ion-radio value="copo" ></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Chaveiro (2.000 pts)</ion-label>\n            <ion-radio value="chaveiro"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Boné (8.000 pts)</ion-label>\n            <ion-radio value="bone"></ion-radio>\n          </ion-item>\n          <ion-item>\n              <ion-label>Casaco (16.000 pts)</ion-label>\n              <ion-radio value="casaco"></ion-radio>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>1 dia de Camarim (100.000 pts)</ion-label>\n            <ion-radio value="camarim" [disabled]="true"></ion-radio>\n          </ion-item>\n        </ion-list>\n\n      <button ion-button [disabled]="!pt.valid">Resgatar Prêmios</button>\n\n    </form>\n\n\n    <br>\n    <button ion-button (click)="somarPontos()" float-right>Somar Pontos (teste +10)</button>\n\n     \n    \n    </ion-card-content>\n  </ion-card>\n-->\n\n<br><br>\n\n\n	<ion-card  margin-top>\n      <ion-card-content >\n        <ion-toggle  (ionChange)="alterarNotificacao()" float-right checked="true" [(ngModel)]="user_notification"></ion-toggle>\n      \n        <ion-label  text-left> Receber notificações</ion-label>\n      \n      </ion-card-content>\n    </ion-card>\n  \n\n<br><br>\n  \n    <ion-card  margin-top>\n      <ion-card-content >\n      \n        <ion-label  text-left (click)="logout()" > Sair</ion-label>\n      \n      </ion-card-content>\n    </ion-card>\n  \n\n  <!--  <ion-card  margin-top>\n        <ion-card-content >\n      <ion-label  (click)="removeAccount()"  text-left margin-top>\n         <ion-icon name="close"></ion-icon> Remover Conta\n     </ion-label >\n    </ion-card-content>\n    </ion-card> -->\n  \n\n \n</ion-content>\n'/*ion-inline-end:"/Users/ruddy/_apps/oriente/src/pages/edit-profile/edit-profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_provider__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], EditProfile);
    return EditProfile;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ })

});
//# sourceMappingURL=26.js.map