webpackJsonp([22],{

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistModule", function() { return PlaylistModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playlist__ = __webpack_require__(442);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlaylistModule = /** @class */ (function () {
    function PlaylistModule() {
    }
    PlaylistModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__playlist__["a" /* Playlist */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__playlist__["a" /* Playlist */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__playlist__["a" /* Playlist */]
            ]
        })
    ], PlaylistModule);
    return PlaylistModule;
}());

//# sourceMappingURL=playlist.module.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Playlist; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Playlist = /** @class */ (function () {
    function Playlist(navCtrl, navParams, alertCtrl, toastCtrl, dbFire, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.dbFire = dbFire;
        this.events = events;
        this.post = this.navParams.get("post");
        this.post_uid = this.post.post_uid;
        this.playlistNome = this.post.nome;
        console.log(this.post);
        this.musicas = this.dbFire.list('/playlists/' + this.post_uid + '/musicas/').valueChanges();
    }
    Playlist.prototype.play = function (post) {
        //faz tocar e abrir o player na hora
        this.events.publish('musica:played', post.post_artista, post.post_name, post.musica_url, true);
    };
    Playlist.prototype.deletar = function (musicaKey) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Tem certeza que deseja apagar essa música dessa playlist ?',
            buttons: [
                {
                    text: 'Apagar',
                    handler: function (data) {
                        _this.dbFire.list('/playlists/' + _this.post_uid + '/musicas/').remove(musicaKey);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
            ]
        });
        alert.present();
    };
    Playlist = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-playlist',template:/*ion-inline-start:"/Users/ruddy/_apps/oriente/src/pages/playlist/playlist.html"*/'<ion-header>\n    <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{playlistNome}}</ion-title>\n\n\n  </ion-navbar>\n</ion-header>\n\n\n\n\n<ion-content>\n\n\n\n  <!--<div text-center>\n\n    <p texct-center  (click)="addPlaylist()"><ion-icon name="add-circle"></ion-icon> Adicionar música nesta playlist</p>\n  </div>-->\n\n\n <ion-list>\n <ion-item-sliding #item  *ngFor="let musica of musicas | async; let i=index;">\n    <ion-item (click)="play( musica )" >\n\n      <ion-row>\n        <ion-col>\n          \n            <!--<ion-thumbnail margin-right  float-left>\n              <img width="80" src="assets/imgs/noMusic.png" />\n              </ion-thumbnail>-->\n\n           <h2>{{i+1}}. {{musica.post_name}}</h2>\n           <p>{{musica.post_artista}}</p>\n\n\n          </ion-col>\n        </ion-row>\n\n    </ion-item>\n\n\n      <ion-item-options side="right">\n\n        <button color="danger" ion-button outline (click)="deletar(musica.post_uid)"><ion-icon  name="trash"></ion-icon>Remover</button>\n\n    </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ruddy/_apps/oriente/src/pages/playlist/playlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], Playlist);
    return Playlist;
}());

//# sourceMappingURL=playlist.js.map

/***/ })

});
//# sourceMappingURL=22.js.map