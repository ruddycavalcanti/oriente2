webpackJsonp([8],{

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMusicToPlaylistModule", function() { return AddMusicToPlaylistModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_music_to_playlist__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_playlists_services__ = __webpack_require__(413);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddMusicToPlaylistModule = /** @class */ (function () {
    function AddMusicToPlaylistModule() {
    }
    AddMusicToPlaylistModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_music_to_playlist__["a" /* AddMusicToPlaylist */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_music_to_playlist__["a" /* AddMusicToPlaylist */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__add_music_to_playlist__["a" /* AddMusicToPlaylist */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_playlists_services__["a" /* PlaylistsServices */]
            ]
        })
    ], AddMusicToPlaylistModule);
    return AddMusicToPlaylistModule;
}());

//# sourceMappingURL=add-music-to-playlist.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistsServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_playlist__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlaylistsServices = /** @class */ (function () {
    function PlaylistsServices(dbFire) {
        this.dbFire = dbFire;
    }
    PlaylistsServices.prototype.listar = function (author_email) {
        //return this.dbFire.list('playlists').valueChanges();
        this.dbFire.database.ref('/playlists').orderByChild("author_email").equalTo(author_email);
    };
    PlaylistsServices.prototype.savePost = function (post_uid, post_nome, author_email) {
        return this.dbFire.database.ref("playlists/" + post_uid)
            .update(new __WEBPACK_IMPORTED_MODULE_0__models_playlist__["a" /* PlaylistModel */](post_uid, post_nome, author_email));
    };
    PlaylistsServices.prototype.removePost = function (post_uid) {
        return this.dbFire.list("/playlists/" + post_uid).remove();
    };
    PlaylistsServices.prototype.uploadPhotoStorage = function (post_image, post_uid) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"]().ref();
        var imageRef = storageRef.child('images/playlists/' + post_uid + '.jpg');
        return imageRef.putString(post_image, __WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"].StringFormat.DATA_URL);
    };
    PlaylistsServices.prototype.removePhotoStorage = function (post_uid) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"]().ref();
        return storageRef.child('images/playlists/' + post_uid + '.jpg').delete();
    };
    PlaylistsServices.prototype.updatePhotoDb = function (post_image, post_uid) {
        return this.dbFire.database.ref("playlists/" + post_uid).update({
            post_image: post_image
        });
    };
    PlaylistsServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], PlaylistsServices);
    return PlaylistsServices;
}());

//# sourceMappingURL=playlists-services.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistModel; });
//import { Musica } from "./musica";
var PlaylistModel = /** @class */ (function () {
    function PlaylistModel(post_uid, nome, author_email
        //public musicas: Musica[] 
    ) {
        this.post_uid = post_uid;
        this.nome = nome;
        this.author_email = author_email;
    }
    return PlaylistModel;
}());

//# sourceMappingURL=playlist.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMusicToPlaylist; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_playlists_services__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_provider__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddMusicToPlaylist = /** @class */ (function () {
    function AddMusicToPlaylist(navCtrl, navParams, alertCtrl, viewCtrl, playlistsServices, toastCtrl, dbFire, authProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.playlistsServices = playlistsServices;
        this.toastCtrl = toastCtrl;
        this.dbFire = dbFire;
        this.authProvider = authProvider;
        this.email = this.authProvider.currentUserEmail;
    }
    AddMusicToPlaylist.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.imagemPlaylist = "assets/imgs/noMusic.png";
        //this.playlists =  this.dbFire.list('playlists').valueChanges();
        this.playlists = this.dbFire.list('/playlists/', function (ref) { return ref.orderByChild("author_email").equalTo(_this.email); }).valueChanges();
        this.post = this.navParams.get("post");
        if (this.post != undefined) {
            this.musicaKey = this.post.post_uid;
            this.musicaNome = this.post.post_name;
            this.musicaArtista = this.post.post_artista;
            this.musicaMp3Url = this.post.musica_url;
            console.log(this.post);
        }
        else {
            this.dismiss();
        }
    };
    AddMusicToPlaylist.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddMusicToPlaylist.prototype.salvarMusicToPlaylist = function () {
        var _this = this;
        if (this.playlistSelecionada != undefined) {
            this.dbFire.database.ref("/playlists/" + this.playlistSelecionada + "/musicas/" + this.musicaKey).update({
                post_name: this.musicaNome,
                post_artista: this.musicaArtista,
                musica_url: this.musicaMp3Url,
                post_uid: this.musicaKey
            }).then(function (value) {
                _this.viewCtrl.dismiss();
            });
        }
        else {
            this.viewCtrl.dismiss();
        }
    };
    AddMusicToPlaylist.prototype.addPlaylist = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Criar Playlist',
            inputs: [
                {
                    name: 'nome',
                    placeholder: 'Nome da playlist'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancelar',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Salvar',
                    role: 'salvar',
                    handler: function (data) {
                        if (data.nome != "") {
                            var post_uid = _this.dbFire.database.ref().child('playlists/').push().key;
                            _this.playlistsServices.savePost(post_uid, data.nome, _this.email);
                        }
                        else {
                            _this.toastCtrl.create({
                                message: 'É preciso escrever algum nome para sua playlist.',
                                duration: 3000,
                                position: 'middle'
                            }).present();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    AddMusicToPlaylist = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-music-to-playlist',template:/*ion-inline-start:"/Users/ruddy/_apps/oriente/src/pages/add-music-to-playlist/add-music-to-playlist.html"*/'\n<ion-header>\n    <ion-navbar color="dark">\n        \n\n    <ion-title>Adicionar à Playlist</ion-title>\n\n  <ion-buttons end margin-right>\n      <button ion-button  icon-only (click)="salvarMusicToPlaylist()">\n      <ion-icon name="checkmark"></ion-icon>\n      </button>\n      </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n\n  <div text-center>\n\n    <p (click)="addPlaylist()"><ion-icon name="add-circle"></ion-icon> Criar nova playlist</p>\n  </div>\n\n\n <ion-list radio-group [(ngModel)]="playlistSelecionada">\n    <ion-item *ngFor="let playlist of playlists | async">\n\n  \n\n       <ion-thumbnail item-start>\n        <img width="80" src="{{imagemPlaylist}}" />\n      </ion-thumbnail>\n\n      <div item-start>\n        <h2>{{playlist.nome}}</h2>\n        <!--<p>{{playlist.qtdMusicas}} músicas </p>-->\n     </div>\n\n     <ion-radio  item-end value="{{playlist.post_uid}}" ></ion-radio>\n      \n\n    </ion-item>\n  </ion-list>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ruddy/_apps/oriente/src/pages/add-music-to-playlist/add-music-to-playlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_playlists_services__["a" /* PlaylistsServices */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_provider__["a" /* AuthProvider */]])
    ], AddMusicToPlaylist);
    return AddMusicToPlaylist;
}());

//# sourceMappingURL=add-music-to-playlist.js.map

/***/ })

});
//# sourceMappingURL=8.js.map