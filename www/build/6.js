webpackJsonp([6],{

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pontos_services__ = __webpack_require__(407);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_pontos_services__["a" /* PontosServices */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PontosServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_ponto__ = __webpack_require__(414);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Utils } from '../utils/utils';
var PontosServices = /** @class */ (function () {
    function PontosServices(dbFire
        //, public utils:Utils
    ) {
        this.dbFire = dbFire;
    }
    PontosServices.prototype.listar = function () {
        return this.dbFire.list('pontos').valueChanges();
    };
    PontosServices.prototype.savePost = function (post_author_id, post_author_email, pontos_totais, pontos_atuais) {
        //let post_dia  = this.utils.getTime;
        //let post_dia_new =   post_dia[8] +  post_dia[9] + "/" +   post_dia[5] +   post_dia[6] + "/"+  post_dia[0] +    post_dia[1] +   post_dia[2] +   post_dia[3] ;
        return this.dbFire.database.ref("pontos/" + post_author_id)
            .update(new __WEBPACK_IMPORTED_MODULE_2__models_ponto__["a" /* Ponto */](post_author_email, 
        //post_dia,
        post_author_id, pontos_totais, pontos_atuais));
    };
    PontosServices.prototype.updatePontos = function (post_author_id, pontos_atuais, pontos_totais) {
        return this.dbFire.database.ref("pontos/" + post_author_id).update({
            pontos_atuais: pontos_atuais,
            pontos_totais: pontos_totais
        });
    };
    PontosServices.prototype.updatePontosAtuais = function (post_author_id, pontos_atuais) {
        return this.dbFire.database.ref("pontos/" + post_author_id).update({
            pontos_atuais: pontos_atuais
        });
    };
    PontosServices.prototype.updatePontosTotais = function (post_author_id, pontos_totais) {
        return this.dbFire.database.ref("pontos/" + post_author_id).update({
            pontos_totais: pontos_totais
        });
    };
    PontosServices.prototype.getPontosTotais = function (post_author_id) {
        return this.dbFire.database.ref("pontos/" + post_author_id).once("value").then(function (result) {
            return result.val().pontos_totais;
        });
    };
    PontosServices.prototype.getPontosAtuais = function (post_author_id) {
        return this.dbFire.database.ref("pontos/" + post_author_id).once("value").then(function (result) {
            return result.val().pontos_atuais;
        });
    };
    PontosServices.prototype.getPontosAeT = function (post_author_id) {
        return this.dbFire.database.ref("pontos/" + post_author_id).once("value");
    };
    PontosServices.prototype.removePost = function (post_uid) {
        return this.dbFire.list("/pontos/" + post_uid).remove();
    };
    PontosServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]
            //, public utils:Utils
        ])
    ], PontosServices);
    return PontosServices;
}());

//# sourceMappingURL=pontos-services.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ponto; });
var Ponto = /** @class */ (function () {
    function Ponto(post_author_email, post_author_id, pontos_totais, pontos_atuais) {
        this.post_author_email = post_author_email;
        this.post_author_id = post_author_id;
        this.pontos_totais = pontos_totais;
        this.pontos_atuais = pontos_atuais;
    }
    Ponto.prototype.set_post_author_id = function (post_author_id) {
        this.post_author_id = post_author_id;
    };
    Ponto.prototype.get_post_author_id = function () {
        return this.post_author_id;
    };
    return Ponto;
}());

//# sourceMappingURL=ponto.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_provider__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, authProvider, toastCtrl, loadingCtrl, alertCtrl) {
        //this.verificarLogado();
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.user_tipo = "assinante";
        this.user_notification = true;
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
    LoginPage.prototype.loginUser = function (form) {
        var _this = this;
        var email = form.value.email;
        var senha = form.value.password;
        this.authProvider.loginWithEmail(email, senha).then(function (result) {
            _this.navCtrl.setRoot("home");
        }).catch(function (error) {
            _this.createToast(error);
        });
    };
    LoginPage.prototype.irParaForgetPassword = function () {
        this.navCtrl.push("esqueceu-senha");
    };
    LoginPage.prototype.irParaRegister = function () {
        this.navCtrl.push("registro");
    };
    LoginPage.prototype.loginFacebook = function () {
        var _this = this;
        var user_nome;
        var user_image;
        var user_uid;
        var user_email;
        var email2;
        var isNewUser = false;
        this.authProvider.signInWithFacebook().then(function (result) {
            console.log(result);
            if (result.displayName == undefined) {
                user_uid = result.user.uid;
                user_nome = result.user.displayName;
                user_image = result.user.photoURL;
                user_email = result.user.email;
                isNewUser = result.additionalUserInfo.isNewUser;
            }
            else {
                user_uid = result.uid;
                user_nome = result.displayName;
                user_image = result.photoURL;
                user_email = result.email;
                isNewUser = result.additionalUserInfo.isNewUser;
            }
            //email2 = user_email.replace("." , ",");
            _this.authProvider.verificarInfoDatabase(user_email).then(function (snapshot) {
                //this.dbFire.database.ref("/users/" + email2 ).once( "value").then(snapshot=> {
                //console.log(snapshot);
                if (snapshot.val() != undefined) {
                    _this.navCtrl.setRoot("home");
                }
                else {
                    _this.authProvider.updateUserDatabase(user_nome, user_email, user_image, user_uid, _this.user_notification, _this.user_tipo).then(function (result) {
                        _this.navCtrl.setRoot("home");
                        if (isNewUser == true) {
                            /* this.addPontosCriarConta(
                                user_uid,
                                user_email
                                
                            ).then(result=>{
                                this.createToast("Sua conta foi criada com sucesso. Seja bem vindo!");

                                //this.ganhouPontos();
                            }).catch(error=>{
                            }); */
                        }
                    }).catch(function (error) {
                        _this.createToast(error);
                    });
                }
            }).catch(function (error) {
                _this.createToast(error);
            });
        }).catch(function (error) {
            _this.createToast(error);
        });
    };
    LoginPage.prototype.loginGoogle = function () {
        var _this = this;
        var user_nome;
        var user_image;
        var user_uid;
        var user_email;
        var email2;
        var isNewUser = false;
        this.authProvider.signInWithGoogle().then(function (result) {
            console.log(result);
            if (result.displayName == undefined) {
                user_uid = result.user.uid;
                user_nome = result.user.displayName;
                user_email = result.user.email;
                user_image = result.user.photoURL;
            }
            else {
                user_uid = result.uid;
                user_nome = result.displayName;
                user_email = result.email;
                user_image = result.photoURL;
            }
            //email2 = user_email.replace("." , ",");
            _this.authProvider.verificarInfoDatabase(user_email).then(function (snapshot) {
                console.log(snapshot.val());
                if (snapshot.val() != undefined) {
                    _this.navCtrl.setRoot("home");
                }
                else {
                    _this.authProvider.updateUserDatabase(user_nome, user_email, user_image, user_uid, _this.user_notification, _this.user_tipo).then(function (result) {
                        _this.navCtrl.setRoot("home");
                        if (isNewUser == true) {
                            /* this.addPontosCriarConta(
                                user_uid,
                                user_email
                                
                            ).then(result=>{
                                this.createToast("Sua conta foi criada com sucesso. Seja bem vindo!");

                                this.ganhouPontos();
                            }).catch(error=>{
                            }); */
                        }
                    }).catch(function (error) {
                        //this.createToast(error);
                    });
                }
            }).catch(function (error) {
                //console.log( 'login: ' + error);
                //alert('oi');
                //this.createToast(error);
            });
        }).catch(function (error) {
            _this.createToast(error);
            console.log(error);
        });
    };
    LoginPage.prototype.createToast = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'middle'
        }).present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/ruddy/_apps/oriente/src/pages/login/login.html"*/'\n<!--\n<ion-header>\n    <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-content text-center  padding class="loginRegister">\n\n    <p  margin-top margin-bottom padding-bottom>\n    <img width="80"  src="assets/imgs/logo.png" class="logo"  /></p>\n\n   <!-- <p  margin-top> Login with your social media</p>-->\n\n\n    <div margin-top>\n            <button  margin-bottom class="fbBtn" ion-button round (click)="loginFacebook()" > Login com Facebook</button>\n           <button  margin-bottom  class="gBtn" ion-button color="danger" round   (click)="loginGoogle()" >Login com Google</button>\n    </div>\n\n    \n    <div  padding-top>\n        <p color="light">ou faça o login com seu email</p>\n    </div>\n    \n    <form #f="ngForm" (ngSubmit)="loginUser(f)">\n\n        <ion-item>\n            <ion-label floating><ion-icon float-left name="mail"></ion-icon> Email</ion-label>\n            <ion-input name="email"  ngModel  required  type="email" value=""></ion-input>\n        </ion-item>\n    \n        \n        <ion-item >\n            <ion-label floating><ion-icon float-left name="lock"></ion-icon> Senha  </ion-label>\n            <ion-input name="password"  ngModel  required  type="password" value=""></ion-input>\n            </ion-item>\n\n\n            <div margin-top  >\n            <button ion-button color="dark" round class="loginRegisterBtn"  full >Login</button>\n        </div>\n    </form>\n    <br>\n    <div margin-top >\n        <p  color="light"  (click)="irParaRegister()">Ainda não possui uma conta?<span class="bold"> Crie uma aqui!</span></p>\n        <!--<button ion-button round  color="primary" (click)="irParaRegister()">Register</button>\n        -->\n        <br>\n        \n        <button ion-button  round outline color="light" (click)="irParaForgetPassword()">Esqueceu sua senha ?</button>\n    \n    </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ruddy/_apps/oriente/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_provider__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=6.js.map