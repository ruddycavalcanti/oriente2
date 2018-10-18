webpackJsonp([14],{

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditDestaquesModule", function() { return AddEditDestaquesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_edit_destaques__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_destaques_services__ = __webpack_require__(408);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddEditDestaquesModule = /** @class */ (function () {
    function AddEditDestaquesModule() {
    }
    AddEditDestaquesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_edit_destaques__["a" /* AddEditDestaquesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_edit_destaques__["a" /* AddEditDestaquesPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__add_edit_destaques__["a" /* AddEditDestaquesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_destaques_services__["a" /* DestaquesServices */]
            ]
        })
    ], AddEditDestaquesModule);
    return AddEditDestaquesModule;
}());

//# sourceMappingURL=add-edit-destaques.module.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DestaquesServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_destaque__ = __webpack_require__(415);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DestaquesServices = /** @class */ (function () {
    function DestaquesServices(dbFire) {
        this.dbFire = dbFire;
    }
    DestaquesServices.prototype.listar = function () {
        //return this.dbFire.list('destaques').valueChanges();
        return this.dbFire.list('/destaques/', function (ref) { return ref.orderByChild('order'); }).valueChanges().map(function (array) { return array.reverse(); });
    };
    DestaquesServices.prototype.savePost = function (action, actionValue, post_image, desc, titulo, post_uid, order) {
        return this.dbFire.database.ref("destaques/" + post_uid)
            .update(new __WEBPACK_IMPORTED_MODULE_3__models_destaque__["a" /* Destaque */](action, actionValue, post_image, desc, titulo, post_uid, order));
    };
    DestaquesServices.prototype.removePost = function (post_uid) {
        return this.dbFire.list("destaques/" + post_uid).remove();
    };
    DestaquesServices.prototype.uploadPhotoStorage = function (post_image, post_uid) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["storage"]().ref();
        var imageRef = storageRef.child('images/destaques/' + post_uid + '.jpg');
        return imageRef.putString(post_image, __WEBPACK_IMPORTED_MODULE_1_firebase_app__["storage"].StringFormat.DATA_URL);
    };
    DestaquesServices.prototype.removePhotoStorage = function (post_uid) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["storage"]().ref();
        return storageRef.child('images/destaques/' + post_uid + '.jpg').delete();
    };
    DestaquesServices.prototype.updatePhotoDb = function (post_image, post_uid) {
        return this.dbFire.database.ref("destaques/" + post_uid).update({
            post_image: post_image
        });
    };
    DestaquesServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], DestaquesServices);
    return DestaquesServices;
}());

//# sourceMappingURL=destaques-services.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Destaque; });
var Destaque = /** @class */ (function () {
    function Destaque(action, actionValue, post_image, desc, titulo, post_uid, order) {
        this.action = action;
        this.actionValue = actionValue;
        this.post_image = post_image;
        this.desc = desc;
        this.titulo = titulo;
        this.post_uid = post_uid;
        this.order = order;
    }
    Destaque.prototype.set_actiond = function (action) {
        this.action = action;
    };
    Destaque.prototype.get_action = function () {
        return this.action;
    };
    return Destaque;
}());

//# sourceMappingURL=destaque.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEditDestaquesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_provider__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_storage__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_destaques_services__ = __webpack_require__(408);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddEditDestaquesPage = /** @class */ (function () {
    function AddEditDestaquesPage(navCtrl, navParams, toastCtrl, camera, dbFire, navParms, authProvider, actionSheetCtrl, afAuth, loadingCtrl, alertCtrl, destaqueServices) {
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
        this.destaqueServices = destaqueServices;
    }
    AddEditDestaquesPage.prototype.ionViewDidLoad = function () {
        this.post_image = "assets/imgs/noImage.jpg";
        this.is_edit = this.navParms.get("is_edit");
        if (this.is_edit == true) {
            this.post = this.navParams.get('post');
            this.title = "Edit ";
            this.action = this.post.action;
            this.actionValue = this.post.actionValue;
            this.desc = this.post.desc;
            this.titulo = this.post.titulo;
            this.post_uid = this.post.post_uid;
            this.order = this.post.order;
            this.post_image = this.post.post_image;
            if (this.post_image == "") {
                this.post_image = "assets/imgs/noImage.jpg";
            }
        }
        else {
            this.title = "Add Destaque";
            this.post_uid = this.dbFire.database.ref().child('destaques/').push().key;
        }
        this.loading = this.loadingCtrl.create({
            content: 'Por favor, aguarde...',
            duration: 5000
        });
    };
    AddEditDestaquesPage.prototype.irParaAdd = function () {
        this.navCtrl.push("edit-destaques", {
            is_edit: false
        });
    };
    AddEditDestaquesPage.prototype.createToast = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: 'middle'
        }).present();
    };
    AddEditDestaquesPage.prototype.createActionAddPhoto = function () {
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
    AddEditDestaquesPage.prototype.addPhoto = function () {
        this.createActionAddPhoto();
    };
    AddEditDestaquesPage.prototype.getPicture = function (sourceType) {
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
    AddEditDestaquesPage.prototype.processWebImage = function (event) {
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
    AddEditDestaquesPage.prototype.saveImageFirebase = function (imageData) {
        var _this = this;
        this.destaqueServices.uploadPhotoStorage(imageData, this.post_uid).then(function (result) {
            _this.destaqueServices.updatePhotoDb(result.downloadURL, _this.post_uid).then(function (result) {
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
    AddEditDestaquesPage.prototype.salvarEdit = function (form) {
        var _this = this;
        var titulo = form.value.titulo;
        var desc = form.value.desc;
        var action = form.value.action;
        var actionValue = form.value.actionValue;
        var order = form.value.order;
        this.loading.present();
        this.destaqueServices.savePost(action, actionValue, this.post_image, //post_image
        desc, titulo, this.post_uid, order).then(function (result) {
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
    AddEditDestaquesPage.prototype.apagar = function () {
        var _this = this;
        var confirmarRemocao = this.toastCtrl.create({
            message: 'Post removido com sucesso.',
            duration: 3000,
            position: 'middle'
        });
        var alert = this.alertCtrl.create({
            title: 'Remover Destaque',
            message: 'Tem certeza que deseja remover o post ' + this.titulo + '?',
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
                        _this.destaqueServices.removePost(_this.post_uid).then(function (result) {
                            // categoriaRemove.remove().then(result=> {
                            confirmarRemocao.present();
                            _this.navCtrl.setRoot("home");
                            _this.destaqueServices.removePhotoStorage(_this.post_uid).catch(function (error) {
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
    ], AddEditDestaquesPage.prototype, "fileInput", void 0);
    AddEditDestaquesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'add-edit-destaques',template:/*ion-inline-start:"/Users/ruddy/_apps/oriente/src/pages/add-edit-destaques/add-edit-destaques.html"*/'<ion-header>\n    <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{title}} {{titulo}}</ion-title>\n\n  <ion-buttons end margin-right *ngIf="is_edit">\n      <button ion-button  icon-only (click)="irParaAdd()">\n      <ion-icon name="add"></ion-icon>\n      </button>\n      </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding text-center>\n\n    <div text-center class="profile-image-wrapper page" (click)="addPhoto()">\n\n        <ion-avatar text-center>\n        <img src="{{post_image}}" class="destaqueImg"  width="114" >\n\n        <button text-center ion-button small margin-top round outline>Escolher/Tirar Foto</button>\n\n    </ion-avatar>\n\n   \n      <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n\n    </div>\n\n\n  <form #f="ngForm" (ngSubmit)="salvarEdit(f)">\n\n  <ion-list>\n\n      <ion-item>\n          <ion-label floating>Titulo</ion-label>\n          <ion-input name="titulo"  ngModel  required type="text" value="{{titulo}}"></ion-input>\n        </ion-item>\n    \n      \n          \n          <ion-item>\n              <ion-label floating>Descrição</ion-label>\n              <ion-input  name="desc"    ngModel  type="text" [value]="desc"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Destino (Página ou Link) </ion-label>\n                \n                \n                <ion-select [(ngModel)]="action" name="action">\n                    <ion-option value=""></ion-option>\n                    <ion-option value="agenda">Agenda</ion-option>\n                    <ion-option value="video">Vídeo</ion-option>\n                    <ion-option value="link">Link</ion-option>\n               \n            </ion-select>\n\n\n              </ion-item>\n\n\n              <ion-item>\n                  <ion-label floating>Valor do destino</ion-label>\n                  <ion-input  name="actionValue"  ngModel  type="email" [value]="actionValue"></ion-input>\n                </ion-item>\n          \n            \n                   <ion-item>\n                    <ion-label floating>Orderm</ion-label>\n                    <ion-input name="order"  ngModel  required type="text" value="{{order}}"></ion-input>\n                  </ion-item>\n          \n                   \n                  \n  \n            <div margin-top padding-top>\n                <button ion-button full round  [disabled]="!f.valid" color="dark">{{title}}</button>\n              </div>\n\n       \n\n  </ion-list >\n\n</form>\n\n\n<br><br>\n\n\n<div  margin-top>\n    <p (click)="apagar()"  *ngIf="is_edit"  float-right margin-top>\n       <ion-icon name="close"></ion-icon> Remover Destaque\n   </p>\n </div>\n\n \n</ion-content>\n'/*ion-inline-end:"/Users/ruddy/_apps/oriente/src/pages/add-edit-destaques/add-edit-destaques.html"*/
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
            __WEBPACK_IMPORTED_MODULE_7__providers_destaques_services__["a" /* DestaquesServices */]])
    ], AddEditDestaquesPage);
    return AddEditDestaquesPage;
}());

//# sourceMappingURL=add-edit-destaques.js.map

/***/ })

});
//# sourceMappingURL=14.js.map