webpackJsonp([7],{

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistsModule", function() { return PlaylistsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playlists__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_playlists_services__ = __webpack_require__(413);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PlaylistsModule = /** @class */ (function () {
    function PlaylistsModule() {
    }
    PlaylistsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__playlists__["a" /* Playlists */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__playlists__["a" /* Playlists */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__playlists__["a" /* Playlists */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_playlists_services__["a" /* PlaylistsServices */]
            ]
        })
    ], PlaylistsModule);
    return PlaylistsModule;
}());

//# sourceMappingURL=playlists.module.js.map

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

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Playlists; });
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





var Playlists = /** @class */ (function () {
    function Playlists(navCtrl, navParams, alertCtrl, dbFire, authProvider, playlistsServices) {
        //this.produtoList =  this.dbFire.list('playlists').valueChanges();
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.dbFire = dbFire;
        this.authProvider = authProvider;
        this.playlistsServices = playlistsServices;
        this.email = this.authProvider.currentUserEmail;
        this.playlists = this.dbFire.list('/playlists/', function (ref) { return ref.orderByChild("author_email").equalTo(_this.email); }).valueChanges();
        ///////////////
        /*
        this.produtoRef = this.dbFire.database.ref('/playlists').orderByChild("author_email").equalTo(this.email);
        
        this.produtoRef.on('value', produtoList => {
           let produtos = [];
           //let produtosKey = [];
           produtoList.forEach( produto => {
               produtos.push(produto.val());
              // produtosKey.push(produto.key);
              return false;
            });
        
         this.produtoList = produtos;
         console.log(this.produtoList);
        //this.produtoListKey = produtosKey;
        //this.loadedprodutoList = produtos;
        });
        */
        ///////////////
        //this.qtdMusicas();
    }
    Playlists.prototype.qtdMusicas = function () {
        this.dbFire.database.ref('/playlists/-LAQbV2S5z6gcr7uWtL4/musicas/').once('value').then(function (result) {
            console.log(result.numChildren());
            return result.numChildren();
        });
    };
    Playlists.prototype.tocarPlaylist = function (post) {
        console.log(post);
    };
    Playlists.prototype.irParaPlaylist = function (event, post) {
        this.navCtrl.push("playlist", {
            'id': post.post_uid,
            post: post
        });
    };
    Playlists.prototype.addPlaylist = function () {
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
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Salvar',
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
    Playlists.prototype.editar = function (post_uid, playlistNome) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'O que você deseja fazer ?',
            buttons: [
                {
                    text: 'Atualizar Nome',
                    handler: function (data) {
                        _this.editarNome(post_uid, playlistNome);
                    }
                },
                {
                    text: 'Apagar',
                    handler: function (data) {
                        _this.playlistsServices.removePost(post_uid);
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
    Playlists.prototype.remover = function (post_uid) {
        this.playlistsServices.removePost(post_uid);
    };
    Playlists.prototype.editarNome = function (post_uid, playlistNome) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Atualizar Nome da Playlist',
            inputs: [
                {
                    name: 'nome',
                    placeholder: 'Nome da playlist',
                    value: playlistNome
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Salvar',
                    handler: function (data) {
                        _this.playlistsServices.savePost(post_uid, data.nome, _this.email);
                    }
                }
            ]
        });
        alert.present();
    };
    Playlists = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-playlists',template:/*ion-inline-start:"/Users/ruddy/_apps/oriente/src/pages/playlists/playlists.html"*/'<ion-header>\n    <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Minhas Playlists</ion-title>\n\n    <ion-buttons end margin-right >\n        <button ion-button  icon-only (click)="addPlaylist()">\n        <ion-icon name="add"></ion-icon>\n        </button>\n        </ion-buttons>\n\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="cat_playlists">\n\n\n<!--\n  <div text-center margin-top>\n\n    <p (click)="addPlaylist()"><ion-icon name="add-circle"></ion-icon>Criar nova playlist</p>\n  </div>\n-->\n\n <ion-list>\n    <ion-item *ngFor="let playlist of playlists | async">\n\n\n\n    <ion-row>\n      <ion-col col-8  (click)="irParaPlaylist($event, playlist)">\n  \n      \n           <ion-thumbnail margin-right  float-left>\n            <img width="80" src="assets/imgs/noMusic.png" />\n          </ion-thumbnail>\n\n           <h2>{{playlist.nome}}</h2>\n    \n          <!--  <h2>{{qtdMusicas}} aa</h2> -->\n          \n            <!--  <p>{{qtdMusicas()}} músicas</p> -->\n            \n \n\n     </ion-col>\n\n\n     <ion-col col-4 class="iconsMore">\n       <ion-icon  name="play" (click)="tocarPlaylist(playlist)" ></ion-icon>\n       <ion-icon  name="create" (click)="editar(playlist.post_uid, playlist.nome)"></ion-icon>\n     </ion-col>\n  \n     </ion-row>\n\n\n\n    </ion-item>\n  </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ruddy/_apps/oriente/src/pages/playlists/playlists.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_provider__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_playlists_services__["a" /* PlaylistsServices */]])
    ], Playlists);
    return Playlists;
}());

//# sourceMappingURL=playlists.js.map

/***/ })

});
//# sourceMappingURL=7.js.map