webpackJsonp([3],{

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditShowsModule", function() { return AddEditShowsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_edit_shows__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shows_services__ = __webpack_require__(411);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddEditShowsModule = /** @class */ (function () {
    function AddEditShowsModule() {
    }
    AddEditShowsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_edit_shows__["a" /* AddEditShowPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_edit_shows__["a" /* AddEditShowPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__add_edit_shows__["a" /* AddEditShowPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_shows_services__["a" /* ShowsServices */]
            ]
        })
    ], AddEditShowsModule);
    return AddEditShowsModule;
}());

//# sourceMappingURL=add-edit-shows.module.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowsServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_show__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// songkick: http://api.songkick.com/api/3.0/artists/8539349/calendar.json?apikey=bsAn7eoPHzpBhICh


var ShowsServices = /** @class */ (function () {
    function ShowsServices(dbFire, utils, http) {
        this.dbFire = dbFire;
        this.utils = utils;
        this.http = http;
    }
    ShowsServices.prototype.listar = function () {
        var today = 'YYYY-MM-DD';
        today = this.utils.getDataAtual;
        return this.dbFire.list('/shows/', function (ref) { return ref.orderByChild('post_dia').startAt(today); }).valueChanges().map(function (array) { return array; });
    };
    ShowsServices.prototype.getShowsSongkick = function () {
        var apiSongkick = 'bsAn7eoPHzpBhICh';
        var idArtistaSongkick = '8539349';
        return this.http.get('http://api.songkick.com/api/3.0/artists/' + idArtistaSongkick + '/calendar.json?apikey=' + apiSongkick)
            .map(function (res) {
            console.log(res.json());
            return res.json().resultsPage.results['event'];
        });
    };
    ShowsServices.prototype.savePost = function (post_nome, post_conteudo, post_image, post_dia, post_local, post_horario, post_cidade, post_estado, post_uid, link_ingresso) {
        //let post_dia_new =   post_dia[8] +  post_dia[9] + "/" +   post_dia[5] +   post_dia[6] + "/"+
        // post_dia[0] +    post_dia[1] +   post_dia[2] +   post_dia[3] ;
        return this.dbFire.database.ref("shows/" + post_uid)
            .update(new __WEBPACK_IMPORTED_MODULE_3__models_show__["a" /* Show */](post_uid, post_nome, post_conteudo, post_image, post_dia, post_local, post_horario, post_cidade, post_estado, link_ingresso));
    };
    ShowsServices.prototype.removePost = function (post_uid) {
        return this.dbFire.list("/shows/" + post_uid).remove();
    };
    ShowsServices.prototype.uploadPhotoStorage = function (post_image, post_uid) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["storage"]().ref();
        var imageRef = storageRef.child('images/shows/' + post_uid + '.jpg');
        return imageRef.putString(post_image, __WEBPACK_IMPORTED_MODULE_1_firebase_app__["storage"].StringFormat.DATA_URL);
    };
    ShowsServices.prototype.removePhotoStorage = function (post_uid) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["storage"]().ref();
        return storageRef.child('images/shows/' + post_uid + '.jpg').delete();
    };
    ShowsServices.prototype.updatePhotoDb = function (post_image, post_uid) {
        return this.dbFire.database.ref("shows/" + post_uid).update({
            post_image: post_image
        });
    };
    ShowsServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* Utils */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], ShowsServices);
    return ShowsServices;
}());

//# sourceMappingURL=shows-services.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Show; });
var Show = /** @class */ (function () {
    function Show(post_uid, post_name, post_content, post_image, post_dia, post_local, post_horario, post_cidade, post_estado, link_ingresso) {
        this.post_uid = post_uid;
        this.post_name = post_name;
        this.post_content = post_content;
        this.post_image = post_image;
        this.post_dia = post_dia;
        this.post_local = post_local;
        this.post_horario = post_horario;
        this.post_cidade = post_cidade;
        this.post_estado = post_estado;
        this.link_ingresso = link_ingresso;
    }
    Show.prototype.set_post_name = function (post_name) {
        this.post_name = post_name;
    };
    Show.prototype.get_post_name = function () {
        return this.post_name;
    };
    return Show;
}());

//# sourceMappingURL=show.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEditShowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_provider__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_storage__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_shows_services__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddEditShowPage = /** @class */ (function () {
    function AddEditShowPage(navCtrl, navParams, toastCtrl, dbFire, navParms, authProvider, actionSheetCtrl, afAuth, loadingCtrl, alertCtrl, showService, storage) {
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
        this.showService = showService;
        this.storage = storage;
    }
    AddEditShowPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('email').then(function (email) {
            _this.email = email;
        });
        this.post_image = "assets/imgs/no_avatar.jpg";
        this.is_edit = this.navParms.get("is_edit");
        if (this.is_edit == true) {
            this.title = "Edit ";
            this.post = this.navParams.get('post');
            this.post_name = this.post.post_name;
            this.post_dia = this.post.post_dia;
            this.post_diaV = this.post.post_dia;
            this.post_local = this.post.post_local;
            this.post_horario = this.post.post_horario;
            this.post_cidade = this.post.post_cidade;
            this.post_estado = this.post.post_estado;
            this.post_content = this.post.post_content;
            this.link_ingresso = this.post.link_ingresso;
            this.post_uid = this.post.post_uid;
            this.post_image = this.post.post_image;
            if (this.post_image == "") {
                this.post_image = "assets/imgs/logo.png";
            }
        }
        else {
            this.title = "Add Show";
            this.post_uid = this.dbFire.database.ref().child('shows/').push().key;
        }
        this.loading = this.loadingCtrl.create({
            content: 'Please, wait...',
            duration: 5000
        });
    };
    AddEditShowPage.prototype.createToast = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: 'middle'
        }).present();
    };
    AddEditShowPage.prototype.salvarEdit = function (form) {
        var _this = this;
        var post_name = form.value.post_name;
        var dia = form.value.post_dia;
        var post_local = form.value.post_local;
        var post_horario = form.value.post_horario;
        var cidade = form.value.post_cidade;
        var estado = form.value.post_estado;
        var link_ingresso2 = form.value.link_ingresso;
        if (dia == undefined) {
            dia = '';
        }
        if (post_horario == undefined) {
            post_horario = '';
        }
        var post_content = form.value.post_content;
        this.loading.present();
        this.showService.savePost(post_name, post_content, this.post_image, //post_image
        dia, post_local, post_horario, cidade, estado, this.post_uid, link_ingresso2).then(function (result) {
            _this.loading.dismiss();
            _this.createToast("Informação atualizada com sucesso.");
            _this.navCtrl.setRoot("home");
        }).catch(function (error) {
            _this.loading.dismiss();
            _this.createToast(error);
        });
    };
    AddEditShowPage.prototype.apagar = function () {
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
                        _this.showService.removePost(_this.post_uid).then(function (result) {
                            // categoriaRemove.remove().then(result=> {
                            confirmarRemocao.present();
                            _this.navCtrl.setRoot("home");
                            // this.showService.removePhotoStorage(this.post_uid).catch(error=>{});
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
    ], AddEditShowPage.prototype, "fileInput", void 0);
    AddEditShowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-edit-shows',template:/*ion-inline-start:"/Users/ruddy/_apps/oriente/src/pages/add-edit-shows/add-edit-shows.html"*/'<ion-header>\n    <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{title}} {{post_name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center class="addEdit">\n\n  \n\n        \n  <form #f="ngForm" (ngSubmit)="salvarEdit(f)">\n\n  <ion-list>\n\n      <ion-item>\n          <ion-label floating>Nome do Show</ion-label>\n          <ion-input name="post_name"  ngModel  required type="text" value="{{post_name}}"></ion-input>\n        </ion-item>\n    \n      \n          \n         \n        <ion-item>\n                <ion-label floating>Local</ion-label>\n                <ion-input  name="post_local"  ngModel  type="email" [value]="post_local"></ion-input>\n            </ion-item>\n                \n\n              <ion-row>\n                <ion-col>\n                    <ion-item no-lines>\n                        <ion-label floating>Cidade</ion-label>\n                        <ion-input  name="post_cidade"  ngModel  type="email" [value]="post_cidade"></ion-input>\n            \n                        </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item>\n                        <ion-label floating>Estado</ion-label>\n                        <ion-select [(ngModel)]="post_estado" name="post_estado">\n\n                                <ion-option value=""></ion-option>\n                            <ion-option value="AC">Acre</ion-option>\n                            <ion-option value="AL">Alagoas</ion-option>\n                            <ion-option value="AP">Amapá</ion-option>\n                            <ion-option value="AM">Amazonas</ion-option>\n                            <ion-option value="BA">Bahia</ion-option>\n                            <ion-option value="CE">Ceará</ion-option>\n                            <ion-option value="DF">Distrito Federal</ion-option>\n                            <ion-option value="ES">Espírito Santo</ion-option>\n                            <ion-option value="GO">Goiás</ion-option>\n                            <ion-option value="MA">Maranhão</ion-option>\n                            <ion-option value="MT">Mato Grosso</ion-option>\n                            <ion-option value="MS">Mato Grosso do Sul</ion-option>\n                            <ion-option value="MG">Minas Gerais</ion-option>\n                            <ion-option value="PA">Pará</ion-option>\n                            <ion-option value="PB">Paraíba</ion-option>\n                            <ion-option value="PR">Paraná</ion-option>\n                            <ion-option value="PE">Pernambuco</ion-option>\n                            <ion-option value="PI">Piauí</ion-option>\n                            <ion-option value="RJ">Rio de Janeiro</ion-option>\n                            <ion-option value="RN">Rio Grande do Norte</ion-option>\n                            <ion-option value="RS">Rio Grande do Sul</ion-option>\n                            <ion-option value="RO">Rondônia</ion-option>\n                            <ion-option value="RR">Roraima</ion-option>\n                            <ion-option value="SC">Santa Catarina</ion-option>\n                            <ion-option value="SP">São Paulo</ion-option>\n                            <ion-option value="SE">Sergipe</ion-option>\n                            <ion-option value="TO">Tocantins</ion-option>\n                        </ion-select>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n\n              <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label floating>Dia</ion-label>\n                        <ion-datetime min="2018" required   displayFormat="DD-MM-YYYY" [(ngModel)]="post_dia" name="post_dia"  ></ion-datetime>\n                       \n                      </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item>\n                        <ion-label floating>Horário</ion-label>\n                        <ion-datetime name="post_horario"   displayFormat="H:mm" [(ngModel)]="post_horario"></ion-datetime>\n                       \n                      </ion-item>\n                  </ion-col>\n              </ion-row>\n\n\n\n\n\n              <ion-item>\n                  <ion-label floating>Informações adicionais</ion-label>\n                  <ion-textarea  name="post_content"  ngModel  type="email" [value]="post_content"></ion-textarea>\n                </ion-item>\n\n\n\n                <ion-item>\n                        <ion-label floating>Link Ingresso</ion-label>\n                        <ion-input name="link_ingresso"  ngModel   type="text" value="{{link_ingresso}}"></ion-input>\n                      </ion-item>\n          \n            \n  \n            <div margin-top padding-top>\n                <button ion-button full  round [disabled]="!f.valid" color="dark">{{title}}</button>\n              </div>\n\n       \n\n  </ion-list >\n\n</form>\n\n\n<br><br>\n\n\n<div  margin>\n    <p (click)="apagar()"  *ngIf="is_edit"  float-right margin-top>\n       <ion-icon name="close"></ion-icon> Remover Show\n   </p>\n </div>\n\n \n</ion-content>\n'/*ion-inline-end:"/Users/ruddy/_apps/oriente/src/pages/add-edit-shows/add-edit-shows.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_provider__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_shows_services__["a" /* ShowsServices */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], AddEditShowPage);
    return AddEditShowPage;
}());

//# sourceMappingURL=add-edit-shows.js.map

/***/ })

});
//# sourceMappingURL=3.js.map