webpackJsonp([12],{

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditMusicaPageModule", function() { return AddEditMusicaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_edit_musicas__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_musicas_services__ = __webpack_require__(410);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddEditMusicaPageModule = /** @class */ (function () {
    function AddEditMusicaPageModule() {
    }
    AddEditMusicaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_edit_musicas__["a" /* AddEditMusicaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_edit_musicas__["a" /* AddEditMusicaPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__add_edit_musicas__["a" /* AddEditMusicaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_musicas_services__["a" /* MusicasServices */]
            ]
        })
    ], AddEditMusicaPageModule);
    return AddEditMusicaPageModule;
}());

//# sourceMappingURL=add-edit-musicas.module.js.map

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

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEditMusicaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_provider__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_musicas_services__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddEditMusicaPage = /** @class */ (function () {
    function AddEditMusicaPage(navCtrl, navParams, toastCtrl, dbFire, navParms, authProvider, actionSheetCtrl, afAuth, loadingCtrl, alertCtrl, musicaServices, viewCtrl, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.dbFire = dbFire;
        this.navParms = navParms;
        this.authProvider = authProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.afAuth = afAuth;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.musicaServices = musicaServices;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
    }
    AddEditMusicaPage.prototype.ionViewDidLoad = function () {
        this.post_image = "assets/imgs/noImage.jpg";
        this.is_edit = this.navParms.get("is_edit");
        if (this.is_edit == true) {
            this.title = "Edit ";
            this.post = this.navParams.get('post');
            this.post_name = this.post.post_name;
            this.musica_url = this.post.musica_url;
            this.post_content = this.post.post_content;
            // this.post_artista = this.post.post_artista;
            this.post_uid = this.post.post_uid;
        }
        else {
            this.title = "Add Música";
            this.post_uid = this.dbFire.database.ref().child('shows/').push().key;
        }
        this.loading = this.loadingCtrl.create({
            content: 'Please, wait...',
            duration: 5000
        });
    };
    AddEditMusicaPage.prototype.createToast = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: 'middle'
        }).present();
    };
    AddEditMusicaPage.prototype.createActionAddPhoto = function () {
        var _this = this;
        this.actionAddPhoto = this.actionSheetCtrl.create({
            title: 'Tirar Foto',
            buttons: [
                {
                    text: 'Escolher uma foto da galeria',
                    handler: function () {
                        _this.getPicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Tirar uma foto da Camera',
                    handler: function () {
                        _this.getPicture(_this.camera.PictureSourceType.CAMERA);
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
    AddEditMusicaPage.prototype.addPhoto = function () {
        this.createActionAddPhoto();
    };
    AddEditMusicaPage.prototype.getPicture = function (sourceType) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: sourceType,
                targetWidth: 100,
                targetHeight: 100,
                quality: 90,
                allowEdit: true,
                correctOrientation: true
            }).then(function (imageData) {
                _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
                _this.post_image = 'data:image/jpeg;base64,' + imageData;
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
    AddEditMusicaPage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.captureDataUrl = imageData;
            _this.post_image = imageData;
            _this.actionAddPhoto.dismiss();
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    AddEditMusicaPage.prototype.saveImageFirebase = function (imageData) {
        var _this = this;
        this.musicaServices.uploadPhotoStorage(imageData, this.post_uid).then(function (result) {
            _this.musicaServices.updatePhotoDb(result.downloadURL, _this.post_uid).then(function (result) {
                _this.loading.dismiss();
                _this.createToast("Informação atualizada com sucesso.");
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
    AddEditMusicaPage.prototype.salvarEdit = function (form) {
        var _this = this;
        var post_name = form.value.post_name;
        var musica_url = form.value.musica_url;
        var artista = form.value.post_artista;
        if (artista == '') {
            artista = "Oriente";
        }
        this.loading.present();
        this.musicaServices.savePost(this.post_uid, post_name, musica_url, this.post_image, artista).then(function (result) {
            if (_this.captureDataUrl != undefined) {
                _this.saveImageFirebase(_this.post_image);
            }
            else {
                _this.loading.dismiss();
                _this.createToast("Informação atualizada com sucesso.");
                _this.navCtrl.setRoot("home");
            }
        }).catch(function (error) {
            _this.loading.dismiss();
            _this.createToast(error);
        });
    };
    AddEditMusicaPage.prototype.apagar = function () {
        var _this = this;
        var confirmarRemocao = this.toastCtrl.create({
            message: 'Post removido com sucesso.',
            duration: 3000,
            position: 'middle'
        });
        var alert = this.alertCtrl.create({
            title: 'Remover Musica',
            message: 'Tem certeza que deseja remover a música ' + this.post_name + '?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Remover',
                    handler: function () {
                        _this.musicaServices.removePost(_this.post_uid).then(function (result) {
                            // categoriaRemove.remove().then(result=> {
                            confirmarRemocao.present();
                            _this.navCtrl.setRoot("home");
                            _this.musicaServices.removePhotoStorage(_this.post_uid).catch(function (error) {
                            });
                            // });
                        }).catch(function (error) {
                            _this.createToast(error);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    AddEditMusicaPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], AddEditMusicaPage.prototype, "fileInput", void 0);
    AddEditMusicaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-edit-musicas',template:/*ion-inline-start:"/Users/ruddy/_apps/oriente/src/pages/add-edit-musicas/add-edit-musicas.html"*/'<ion-header>\n    <ion-navbar color="dark">\n\n    <ion-title>{{title}} {{post_name}}</ion-title>\n\n\n  <ion-buttons end margin-right>\n      <button ion-button  icon-only (click)="dismiss()">\n      <ion-icon name="close"></ion-icon>\n      </button>\n      </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n\n \n    <div margin-top text-center class="profile-image-wrapper page" (click)="addPhoto()">\n\n       \n        <p>\n           <img src="{{post_image}}"  width="114" >\n         </p>\n  \n     <button ion-button small  round outline>Escolher Foto</button>\n \n       <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n \n     </div>\n\n     \n        \n  <form #f="ngForm" (ngSubmit)="salvarEdit(f)">\n\n  <ion-list>\n\n      <ion-item>\n          <ion-label floating>Nome da Música</ion-label>\n          <ion-input name="post_name"  ngModel  required type="text" value="{{post_name}}"></ion-input>\n        </ion-item>\n    \n      \n          \n          <ion-item>\n              <ion-label floating>URL da Música</ion-label>\n              <ion-input  name="musica_url" required   ngModel  type="text" [value]="musica_url"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Nome do Artista</ion-label>\n                <ion-input  name="post_artista"    ngModel  type="text" [value]="post_artista"></ion-input>\n              </ion-item>\n\n       \n          \n            \n  \n            <div margin-top padding-top>\n                <button ion-button full round  [disabled]="!f.valid"  color="dark">{{title}}</button>\n              </div>\n\n       \n\n  </ion-list >\n\n</form>\n\n\n<br><br>\n\n\n<div  margin>\n    <p (click)="apagar()"  *ngIf="is_edit"  float-right margin-top>\n       <ion-icon name="close"></ion-icon> Remover Música\n   </p>\n </div>\n\n \n</ion-content>\n'/*ion-inline-end:"/Users/ruddy/_apps/oriente/src/pages/add-edit-musicas/add-edit-musicas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_provider__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_musicas_services__["a" /* MusicasServices */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]])
    ], AddEditMusicaPage);
    return AddEditMusicaPage;
}());

//# sourceMappingURL=add-edit-musicas.js.map

/***/ })

});
//# sourceMappingURL=12.js.map