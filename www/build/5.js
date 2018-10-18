webpackJsonp([5],{

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileModule", function() { return MyProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_profile__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pontos_services__ = __webpack_require__(407);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MyProfileModule = /** @class */ (function () {
    function MyProfileModule() {
    }
    MyProfileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_profile__["a" /* MyProfile */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_profile__["a" /* MyProfile */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__my_profile__["a" /* MyProfile */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_pontos_services__["a" /* PontosServices */]
            ]
        })
    ], MyProfileModule);
    return MyProfileModule;
}());

//# sourceMappingURL=my-profile.module.js.map

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

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_provider__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pontos_services__ = __webpack_require__(407);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { EditProfile } from '../edit-profile/edit-profile';

//import { Storage } from '@ionic/storage';

//import { InAppBrowser,InAppBrowserOptions, InAppBrowserEvent } from '@ionic-native/in-app-browser';
var MyProfile = /** @class */ (function () {
    function MyProfile(navCtrl, navParams, toastCtrl, dbFire, authProvider, pontoServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.dbFire = dbFire;
        this.authProvider = authProvider;
        this.pontoServices = pontoServices;
    }
    MyProfile.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.email = this.authProvider.currentUserEmail;
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
            }
        }).catch(function (error) {
        });
        this.getPontosAtuais();
    };
    MyProfile.prototype.getPontosAtuais = function () {
        var _this = this;
        this.pontoServices.getPontosAtuais(this.authProvider.currentUserId).then(function (snapshot) {
            _this.pontos_atuais = snapshot;
        }).catch(function (error) {
            _this.pontos_atuais = 0;
        });
    };
    MyProfile.prototype.irParaEditProfile = function () {
        this.navCtrl.push("editar-perfil");
    };
    MyProfile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-profile',template:/*ion-inline-start:"/Users/ruddy/_apps/oriente/src/pages/my-profile/my-profile.html"*/'<ion-header>\n    <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Meu Perfil</ion-title>\n\n    <ion-buttons end margin-right >\n            <button ion-button  icon-only (click)="irParaEditProfile()">\n            <ion-icon name="create"></ion-icon>\n            </button>\n            </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  >\n <!-- \n    <div class="profileBackground">\n\n      <div class="editarPerfilBtn text-right">\n            <img src="assets/imgs/icons/editPerfilBtn.png" width="44"  (click)="irParaEditProfile()">\n          </div\n    </div>\n>-->\n    \n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-avatar class="avatarPerfil">\n            <img src="{{user_image}}" class="perfil circle" width="100" height="100">\n        </ion-avatar>\n\n        <div class="mainInfo">\n            <p class="nome">{{nome}}</p>\n            <p>{{user_tipo}}</p>\n\n            <p> <img src="assets/imgs/trofeu.jpg" class="trofeu" width="24" margin-right float-left>\n                <span float-left> {{pontos_atuais}}</span></p>\n\n\n        </div>\n\n    </ion-col>\n\n    <!--\n    <ion-col>\n\n        <ion-row>\n          <ion-col text-center>\n             <img src="assets/imgs/icons/heart.png" width="24"><br>75\n          </ion-col> \n\n          <ion-col  text-center>\n              <img src="assets/imgs/icons/views.png" width="24"><br>2.4k\n          </ion-col>\n\n      </ion-row>\n\n\n    </ion-col>\n-->\n\n  </ion-row>\n\n\n  <!--\n  <ion-grid>\n        <ion-row class="galleryProfile">\n        <ion-col col-3 *ngFor="let post of posts">\n        \n            <img src="{{post.images.thumbnail.url}}" width="80" height="80" >\n\n        </ion-col>  \n</ion-row>\n</ion-grid>\n\n-->\n\n\n \n</ion-content>\n'/*ion-inline-end:"/Users/ruddy/_apps/oriente/src/pages/my-profile/my-profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_provider__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_pontos_services__["a" /* PontosServices */]])
    ], MyProfile);
    return MyProfile;
}());

//# sourceMappingURL=my-profile.js.map

/***/ })

});
//# sourceMappingURL=5.js.map