webpackJsonp([15],{

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesModule", function() { return ConfiguracoesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuracoes__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_configuracoes_services__ = __webpack_require__(421);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ConfiguracoesModule = /** @class */ (function () {
    function ConfiguracoesModule() {
    }
    ConfiguracoesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__configuracoes__["a" /* ConfiguracoesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__configuracoes__["a" /* ConfiguracoesPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__configuracoes__["a" /* ConfiguracoesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_configuracoes_services__["a" /* ConfiguracoesServices */]
            ]
        })
    ], ConfiguracoesModule);
    return ConfiguracoesModule;
}());

//# sourceMappingURL=configuracoes.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracoesServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_configuracao__ = __webpack_require__(434);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import * as firebase from 'firebase/app';


var ConfiguracoesServices = /** @class */ (function () {
    function ConfiguracoesServices(dbFire) {
        this.dbFire = dbFire;
    }
    ConfiguracoesServices.prototype.listar = function () {
        return this.dbFire.database.ref("/config").once("value");
    };
    ConfiguracoesServices.prototype.savePost = function (facebookUrl, youtubeUrl, instagramUrl, spotifyUrl, websiteUrl, lojaVirtualUrl, songkickId) {
        return this.dbFire.database.ref("config/")
            .update(new __WEBPACK_IMPORTED_MODULE_2__models_configuracao__["a" /* Configuracao */](facebookUrl, youtubeUrl, instagramUrl, spotifyUrl, websiteUrl, lojaVirtualUrl, songkickId));
    };
    ConfiguracoesServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ConfiguracoesServices);
    return ConfiguracoesServices;
}());

//# sourceMappingURL=configuracoes-services.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_configuracoes_services__ = __webpack_require__(421);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfiguracoesPage = /** @class */ (function () {
    function ConfiguracoesPage(navCtrl, configServices, toastCtrl) {
        this.navCtrl = navCtrl;
        this.configServices = configServices;
        this.toastCtrl = toastCtrl;
    }
    ConfiguracoesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.configServices.listar().then(function (snapshot) {
            _this.facebookUrl = snapshot.val().facebookUrl;
            _this.youtubeUrl = snapshot.val().youtubeUrl;
            _this.instagramUrl = snapshot.val().instagramUrl;
            _this.spotifyUrl = snapshot.val().spotifyUrl;
            _this.websiteUrl = snapshot.val().websiteUrl;
            _this.lojaVirtualUrl = snapshot.val().lojaVirtualUrl;
            _this.songkickId = snapshot.val().songkickId;
        }).catch(function (error) {
        });
    };
    ConfiguracoesPage.prototype.salvarEdit = function (form) {
        var _this = this;
        var facebook = form.value.facebook;
        var youtube = form.value.youtube;
        var instagram = form.value.instagram;
        var spotify = form.value.spotify;
        var website = form.value.website;
        var lojavirtual = form.value.lojavirtual;
        var songkick = form.value.songkick;
        this.configServices.savePost(facebook, youtube, instagram, spotify, website, lojavirtual, songkick).then(function (result) {
            _this.createToast("Informação atualizada com sucesso.");
            _this.navCtrl.setRoot("home");
        }).catch(function (error) {
            _this.createToast(error);
        });
    };
    ConfiguracoesPage.prototype.createToast = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: 'middle'
        }).present();
    };
    ConfiguracoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configuracoes',template:/*ion-inline-start:"/Users/ruddy/_apps/oriente/src/pages/configuracoes/configuracoes.html"*/'<ion-header>\n    <ion-navbar color="dark">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Configurações</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n  \n\n\n\n    <form #f="ngForm" (ngSubmit)="salvarEdit(f)">\n\n        <h4 padding>Redes Sociais </h4>\n        <ion-list>\n           \n     \n            <ion-item>\n                <ion-label floating>Youtube (apenas usuário)</ion-label>\n                <ion-input  name="youtube"    ngModel  type="text" [value]="youtubeUrl"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label floating>Instagram (apenas usuário)</ion-label>\n                  <ion-input  name="instagram"    ngModel  type="text" [value]="instagramUrl"></ion-input>\n                </ion-item>\n  \n       \n                <ion-item>\n                    <ion-label floating>Facebook (apenas usuário)</ion-label>\n                    <ion-input  name="facebook"    ngModel  type="text" [value]="facebookUrl"></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                      <ion-label floating>Spotify (apenas usuário)</ion-label>\n                      <ion-input  name="spotify"    ngModel  type="text" [value]="spotifyUrl"></ion-input>\n                    </ion-item>\n\n\n                    <ion-item>\n                        <ion-label floating>Website (URL completa)</ion-label>\n                        <ion-input  name="website"    ngModel  type="text" [value]="websiteUrl"></ion-input>\n                      </ion-item>\n    \n          \n                  <ion-item>\n                      <ion-label floating>Loja Virtual (URL Completa)</ion-label>\n                      <ion-input  name="lojavirtual"    ngModel  type="text" [value]="lojaVirtualUrl"></ion-input>\n                    </ion-item>\n  \n                    <ion-item>\n                        <ion-label floating>SongKick (apenas usuário)</ion-label>\n                        <ion-input  name="songkick"    ngModel  type="text" [value]="songkickId"></ion-input>\n                      </ion-item>\n\n\n                    <div margin-top>\n                        <button ion-button  full round  [disabled]="!f.valid"  color="dark">Salvar</button>\n                    </div>\n             </ion-list>\n\n\n\n             <!-- \n          <button ion-button (click)="integrarInstagram()">Conectar-se ao Instagram</button>\n\n\n             \n                  <ion-grid>\n                        <ion-row class="galleryProfile">\n                        <ion-col col-3 *ngFor="let post of posts">\n                        \n                            <img src="{{post.images.thumbnail.url}}" width="80" height="80" >\n\n                        </ion-col>  \n                </ion-row>\n                </ion-grid>\n -->\n\n\n\n            \n                <!--  </ion-list>\n\n            \n              <h4 padding>Cores</h4>\n              <ion-list>\n                 \n           \n                  <ion-item>\n                      <ion-label floating>Cor Primária (ex.: #000000)</ion-label>\n                      <ion-input  name="corPrimaria"    ngModel  type="text" [value]="corPrimaria"></ion-input>\n                    </ion-item>\n      \n                    <ion-item>\n                        <ion-label floating>Cor Secundária (ex.: #000000)</ion-label>\n                        <ion-input  name="corSecundaria"    ngModel  type="text" [value]="corSecundaria"></ion-input>\n                      </ion-item>\n      \n      \n                        <div margin-top>\n                          <button ion-button  full round  [disabled]="!f.valid"  color="dark">Salvar</button>\n                        </div>\n              \n                 \n                  \n                    </ion-list>\n                    -->\n             \n          </form> \n\n\n  </ion-content>\n  '/*ion-inline-end:"/Users/ruddy/_apps/oriente/src/pages/configuracoes/configuracoes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_configuracoes_services__["a" /* ConfiguracoesServices */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], ConfiguracoesPage);
    return ConfiguracoesPage;
}());

//# sourceMappingURL=configuracoes.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuracao; });
var Configuracao = /** @class */ (function () {
    function Configuracao(facebookUrl, youtubeUrl, instagramUrl, spotifyUrl, websiteUrl, lojaVirtualUrl, songkickId) {
        this.facebookUrl = facebookUrl;
        this.youtubeUrl = youtubeUrl;
        this.instagramUrl = instagramUrl;
        this.spotifyUrl = spotifyUrl;
        this.websiteUrl = websiteUrl;
        this.lojaVirtualUrl = lojaVirtualUrl;
        this.songkickId = songkickId;
    }
    Configuracao.prototype.set_post_name = function (youtubeUrl) {
        this.youtubeUrl = youtubeUrl;
    };
    Object.defineProperty(Configuracao.prototype, "get_post_name", {
        get: function () {
            return this.youtubeUrl;
        },
        enumerable: true,
        configurable: true
    });
    return Configuracao;
}());

//# sourceMappingURL=configuracao.js.map

/***/ })

});
//# sourceMappingURL=15.js.map