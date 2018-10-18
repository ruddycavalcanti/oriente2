webpackJsonp([10],{

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditNoticiasModule", function() { return AddEditNoticiasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_edit_noticias__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_noticias_services__ = __webpack_require__(409);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddEditNoticiasModule = /** @class */ (function () {
    function AddEditNoticiasModule() {
    }
    AddEditNoticiasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_edit_noticias__["a" /* AddEditNoticiaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_edit_noticias__["a" /* AddEditNoticiaPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__add_edit_noticias__["a" /* AddEditNoticiaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_noticias_services__["a" /* NoticiasServices */]
            ]
        })
    ], AddEditNoticiasModule);
    return AddEditNoticiasModule;
}());

//# sourceMappingURL=add-edit-noticias.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_noticia__ = __webpack_require__(416);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NoticiasServices = /** @class */ (function () {
    function NoticiasServices(dbFire, utils) {
        this.dbFire = dbFire;
        this.utils = utils;
    }
    NoticiasServices.prototype.listar = function () {
        //return this.dbFire.list('noticias').valueChanges();
        return this.dbFire.list('/noticias/').valueChanges().map(function (array) { return array.reverse(); });
    };
    NoticiasServices.prototype.savePost = function (post_uid, post_date, post_nome, post_description, post_conteudo, post_image, is_edit) {
        if (is_edit != true) {
            post_date = this.utils.getTime;
        }
        return this.dbFire.database.ref("noticias/" + post_uid)
            .update(new __WEBPACK_IMPORTED_MODULE_4__models_noticia__["a" /* Noticia */](post_uid, post_date, post_nome, post_conteudo, post_image, post_description));
    };
    NoticiasServices.prototype.removePost = function (post_uid) {
        return this.dbFire.list("/noticias/" + post_uid).remove();
    };
    NoticiasServices.prototype.uploadPhotoStorage = function (post_image, post_uid) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["storage"]().ref();
        var imageRef = storageRef.child('images/noticias/' + post_uid + '.jpg');
        return imageRef.putString(post_image, __WEBPACK_IMPORTED_MODULE_1_firebase_app__["storage"].StringFormat.DATA_URL);
    };
    NoticiasServices.prototype.removePhotoStorage = function (post_uid) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["storage"]().ref();
        return storageRef.child('images/noticias/' + post_uid + '.jpg').delete();
    };
    NoticiasServices.prototype.updatePhotoDb = function (post_image, post_uid) {
        return this.dbFire.database.ref("noticias/" + post_uid).update({
            post_image: post_image
        });
    };
    NoticiasServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* Utils */]])
    ], NoticiasServices);
    return NoticiasServices;
}());

//# sourceMappingURL=noticias-services.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Noticia; });
var Noticia = /** @class */ (function () {
    function Noticia(post_uid, post_date, post_name, post_content, post_image, post_description) {
        this.post_uid = post_uid;
        this.post_date = post_date;
        this.post_name = post_name;
        this.post_content = post_content;
        this.post_image = post_image;
        this.post_description = post_description;
    }
    Noticia.prototype.set_post_name = function (post_name) {
        this.post_name = post_name;
    };
    Noticia.prototype.get_post_name = function () {
        return this.post_name;
    };
    return Noticia;
}());

//# sourceMappingURL=noticia.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEditNoticiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_provider__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_storage__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_noticias_services__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddEditNoticiaPage = /** @class */ (function () {
    function AddEditNoticiaPage(navCtrl, navParams, toastCtrl, camera, dbFire, navParms, authProvider, actionSheetCtrl, afAuth, loadingCtrl, alertCtrl, noticiasServices, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.dbFire = dbFire;
        this.navParms = navParms;
        this.authProvider = authProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.afAuth = afAuth;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.noticiasServices = noticiasServices;
        this.storage = storage;
    }
    AddEditNoticiaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('email').then(function (email) {
            _this.email = email;
        });
        this.post_image = "assets/imgs/noImage.jpg";
        this.is_edit = this.navParms.get("is_edit");
        if (this.is_edit == true) {
            this.title = "Edit ";
            this.post = this.navParams.get('post');
            this.post_name = this.post.post_name;
            this.post_description = this.post.post_description;
            this.post_date = this.post.post_date;
            this.post_content = this.post.post_content;
            this.post_uid = this.post.post_uid;
            this.post_image = this.post.post_image;
            if (this.post_image == "") {
                this.post_image = "assets/imgs/noImage.jpg";
            }
        }
        else {
            this.title = "Add Noticia";
            this.post_uid = this.dbFire.database.ref().child('noticias/').push().key;
        }
        this.loading = this.loadingCtrl.create({
            content: 'Please, wait...',
            duration: 5000
        });
    };
    AddEditNoticiaPage.prototype.createToast = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: 'middle'
        }).present();
    };
    AddEditNoticiaPage.prototype.createActionAddPhoto = function () {
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
    AddEditNoticiaPage.prototype.addPhoto = function () {
        this.createActionAddPhoto();
    };
    AddEditNoticiaPage.prototype.getPicture = function (sourceType) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]['installed']()) {
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
    AddEditNoticiaPage.prototype.processWebImage = function (event) {
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
    AddEditNoticiaPage.prototype.saveImageFirebase = function (imageData) {
        var _this = this;
        this.noticiasServices.uploadPhotoStorage(imageData, this.post_uid).then(function (result) {
            _this.noticiasServices.updatePhotoDb(result.downloadURL, _this.post_uid).then(function (result) {
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
    AddEditNoticiaPage.prototype.salvarEdit = function (form) {
        var _this = this;
        var post_name = form.value.post_name;
        var post_descricao = form.value.post_description;
        var post_content = form.value.post_content;
        this.loading.present();
        this.noticiasServices.savePost(this.post_uid, this.post_date, post_name, post_descricao, post_content, this.post_image, this.is_edit).then(function (result) {
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
    AddEditNoticiaPage.prototype.apagar = function () {
        var _this = this;
        var confirmarRemocao = this.toastCtrl.create({
            message: 'Post removido com sucesso.',
            duration: 3000,
            position: 'middle'
        });
        var alert = this.alertCtrl.create({
            title: 'Remover Show',
            message: 'Tem certeza que deseja remover o show ' + this.post_name + '?',
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
                        _this.noticiasServices.removePost(_this.post_uid).then(function (result) {
                            // categoriaRemove.remove().then(result=> {
                            confirmarRemocao.present();
                            _this.navCtrl.setRoot("home");
                            _this.noticiasServices.removePhotoStorage(_this.post_uid).catch(function (error) {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], AddEditNoticiaPage.prototype, "fileInput", void 0);
    AddEditNoticiaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-edit-noticias',template:/*ion-inline-start:"/Users/ruddy/_apps/oriente/src/pages/add-edit-noticias/add-edit-noticias.html"*/'<ion-header>\n    <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{title}} {{post_name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  text-center>\n\n    <div margin-top text-center class="profile-image-wrapper page" (click)="addPhoto()">\n\n       \n       <p>\n          <img src="{{post_image}}"  width="114" >\n        </p>\n \n    <button ion-button small  round outline>Escolher Foto</button>\n\n      <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n\n    </div>\n\n\n        \n  <form #f="ngForm" (ngSubmit)="salvarEdit(f)">\n\n  <ion-list>\n\n      <ion-item>\n          <ion-label floating>Título da Notícia</ion-label>\n          <ion-input name="post_name"  ngModel  required type="text" value="{{post_name}}"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n            <ion-label floating>Descrição</ion-label>\n            <ion-input name="post_description"  ngModel  required type="text" value="{{post_description}}"></ion-input>\n          </ion-item>\n      \n\n\n              <ion-item>\n                  <ion-label floating>Conteúdo</ion-label>\n                  <ion-textarea  name="post_content"  ngModel  type="email" [value]="post_content"></ion-textarea>\n                </ion-item>\n          \n            \n  \n            <div margin-top padding-top>\n                <button ion-button full  round [disabled]="!f.valid" color="dark">{{title}}</button>\n              </div>\n\n       \n\n  </ion-list >\n\n</form>\n\n\n<br><br>\n\n\n<div  margin>\n    <p (click)="apagar()"  *ngIf="is_edit"  float-right margin-top>\n       <ion-icon name="close"></ion-icon> Remover Notícia\n   </p>\n </div>\n\n \n</ion-content>\n'/*ion-inline-end:"/Users/ruddy/_apps/oriente/src/pages/add-edit-noticias/add-edit-noticias.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_provider__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_noticias_services__["a" /* NoticiasServices */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]])
    ], AddEditNoticiaPage);
    return AddEditNoticiaPage;
}());

//# sourceMappingURL=add-edit-noticias.js.map

/***/ })

});
//# sourceMappingURL=10.js.map