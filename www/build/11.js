webpackJsonp([11],{

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryMusicasPageModule", function() { return CategoryMusicasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_musicas__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_musicas_services__ = __webpack_require__(410);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CategoryMusicasPageModule = /** @class */ (function () {
    function CategoryMusicasPageModule() {
    }
    CategoryMusicasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__category_musicas__["a" /* CategoryMusicasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__category_musicas__["a" /* CategoryMusicasPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__category_musicas__["a" /* CategoryMusicasPage */]
            ], providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_musicas_services__["a" /* MusicasServices */]
            ]
        })
    ], CategoryMusicasPageModule);
    return CategoryMusicasPageModule;
}());

//# sourceMappingURL=category-musicas.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicasServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_musica__ = __webpack_require__(417);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MusicasServices = /** @class */ (function () {
    function MusicasServices(dbFire) {
        this.dbFire = dbFire;
    }
    MusicasServices.prototype.listar = function () {
        return this.dbFire.list('musicas').valueChanges();
    };
    MusicasServices.prototype.savePost = function (post_uid, post_nome, musica_url, post_image, post_artista) {
        return this.dbFire.database.ref("musicas/" + post_uid)
            .update(new __WEBPACK_IMPORTED_MODULE_3__models_musica__["a" /* Musica */](post_uid, post_nome, musica_url, post_image, post_artista));
    };
    MusicasServices.prototype.removePost = function (post_uid) {
        return this.dbFire.list("/musicas/" + post_uid).remove();
    };
    MusicasServices.prototype.uploadPhotoStorage = function (post_image, post_uid) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["storage"]().ref();
        var imageRef = storageRef.child('images/musicas/' + post_uid + '.jpg');
        return imageRef.putString(post_image, __WEBPACK_IMPORTED_MODULE_1_firebase_app__["storage"].StringFormat.DATA_URL);
    };
    MusicasServices.prototype.removePhotoStorage = function (post_uid) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["storage"]().ref();
        return storageRef.child('images/musicas/' + post_uid + '.jpg').delete();
    };
    MusicasServices.prototype.updatePhotoDb = function (post_image, post_uid) {
        return this.dbFire.database.ref("musicas/" + post_uid).update({
            post_image: post_image
        });
    };
    MusicasServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], MusicasServices);
    return MusicasServices;
}());

//# sourceMappingURL=musicas-services.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Musica; });
var Musica = /** @class */ (function () {
    function Musica(post_uid, post_name, musica_url, post_image, post_artista) {
        this.post_uid = post_uid;
        this.post_name = post_name;
        this.musica_url = musica_url;
        this.post_image = post_image;
        this.post_artista = post_artista;
    }
    Musica.prototype.set_post_name = function (post_name) {
        this.post_name = post_name;
    };
    Musica.prototype.get_post_name = function () {
        return this.post_name;
    };
    return Musica;
}());

//# sourceMappingURL=musica.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryMusicasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_musicas_services__ = __webpack_require__(410);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var file;
var CategoryMusicasPage = /** @class */ (function () {
    function CategoryMusicasPage(navCtrl, musicaServices, alertCtrl, modalCtrl, navParms, events) {
        this.navCtrl = navCtrl;
        this.musicaServices = musicaServices;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.navParms = navParms;
        this.events = events;
        this.is_admin = true;
        this.habilitarPlayer = true;
    }
    CategoryMusicasPage.prototype.ionViewDidLoad = function () {
        this.posts = this.musicaServices.listar();
    };
    CategoryMusicasPage.prototype.abreAddMusicToPlaylist = function (post) {
        console.log(post);
        var modal = this.modalCtrl.create("add-to-playlist", {
            post: post
        });
        modal.present();
    };
    // Play audio
    CategoryMusicasPage.prototype.play = function (post) {
        //faz tocar e abrir o player na hora
        this.events.publish('musica:played', post.post_artista, post.post_name, post.musica_url, true);
    };
    CategoryMusicasPage.prototype.irParaAdd = function () {
        this.modalCtrl.create("edit-musicas").present();
    };
    CategoryMusicasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'category-musicas',template:/*ion-inline-start:"/Users/ruddy/_apps/oriente/src/pages/category-musicas/category-musicas.html"*/'<ion-header>\n    <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Músicas</ion-title>\n\n    <ion-buttons end margin-right >\n        <button ion-button  icon-only (click)="irParaAdd()">\n        <ion-icon name="add"></ion-icon>\n        </button>\n        </ion-buttons>\n\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n\n\n\n        <ion-list>\n\n            <ion-item   text-wrap   *ngFor="let post of posts  | async; let i=index;" >\n\n\n                <ion-row>\n                    <ion-col col-10 (click)="play(post)">\n                       \n                       <!-- <ion-thumbnail margin-right  float-left >\n                            <img width="80" src="assets/imgs/noMusic.png" />\n                        </ion-thumbnail>-->\n                \n        \n                        <h2>{{i+1}}. {{post.post_name}} </h2>\n                        <p>{{post.post_artista}}</p>\n\n                    </ion-col>\n\n\n                    <ion-col col-2>\n                            <button clear ion-button icon-only (click)="abreAddMusicToPlaylist(post)" item-end>\n                                 \n                                    <ion-icon color="grey" name="heart" isActive="true"></ion-icon>\n                                  </button>\n                    </ion-col>\n\n            </ion-row>\n          </ion-item>\n\n     \n      </ion-list>\n\n\n      <!--\n      <h4 padding margin-top>MÚSICAS DO SPOTIFY</h4>\n\n\n      <ion-list>\n            <ion-item   text-wrap   *ngFor="let playlist of playlists  | async; let i = index;" (click)="playSpotify(playlist)">\n                    \n                <ion-row >\n               <ion-col col-3>\n                    <ion-thumbnail item-start  >\n\n                            <img [src]="playlist.album.images[2].url" width="64">\n                        </ion-thumbnail>\n            \n        \n                    </ion-col>\n    \n    \n                    <ion-col col-7>\n                        <h2>{{playlist.name}}</h2>\n                        \n                        <p>Popularidade: {{playlist.popularity}}</p>\n    \n          \n                      </ion-col>\n    \n    \n                      <ion-col col-2>\n                          <p margin-top class="cat_seta">\n                              <ion-icon color="primary" ios="ios-arrow-forward" md="md-arrow-forward"></ion-icon>\n                          </p>\n            \n                        </ion-col>\n    \n              </ion-row>\n    \n          \n          </ion-item>\n    \n          \n         \n          </ion-list>\n        -->\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ruddy/_apps/oriente/src/pages/category-musicas/category-musicas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_musicas_services__["a" /* MusicasServices */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], CategoryMusicasPage);
    return CategoryMusicasPage;
}());

//# sourceMappingURL=category-musicas.js.map

/***/ })

});
//# sourceMappingURL=11.js.map