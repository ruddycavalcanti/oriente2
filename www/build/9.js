webpackJsonp([9],{

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryNoticiasPageModule", function() { return CategoryNoticiasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_noticias__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_noticias_services__ = __webpack_require__(409);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CategoryNoticiasPageModule = /** @class */ (function () {
    function CategoryNoticiasPageModule() {
    }
    CategoryNoticiasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__category_noticias__["a" /* CategoryNoticiasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__category_noticias__["a" /* CategoryNoticiasPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__category_noticias__["a" /* CategoryNoticiasPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_noticias_services__["a" /* NoticiasServices */]
            ]
        })
    ], CategoryNoticiasPageModule);
    return CategoryNoticiasPageModule;
}());

//# sourceMappingURL=category-noticias.module.js.map

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

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryNoticiasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_noticias_services__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryNoticiasPage = /** @class */ (function () {
    function CategoryNoticiasPage(navCtrl, noticiaServices, storage) {
        this.navCtrl = navCtrl;
        this.noticiaServices = noticiaServices;
        this.storage = storage;
        this.is_admin = true;
    }
    CategoryNoticiasPage.prototype.ionViewWillEnter = function () {
        this.listando();
        this.user_is_admin();
    };
    CategoryNoticiasPage.prototype.user_is_admin = function () {
        var _this = this;
        this.storage.get('is_admin').then(function (is_admin) {
            if (is_admin == true)
                _this.is_admin = true;
        });
    };
    CategoryNoticiasPage.prototype.listando = function () {
        this.posts = this.noticiaServices.listar();
    };
    CategoryNoticiasPage.prototype.irParaSingle = function (event, post) {
        this.navCtrl.push("noticia", {
            'id': post.post_uid,
            post: post
        });
    };
    CategoryNoticiasPage.prototype.irParaAdd = function () {
        this.navCtrl.push("edit-noticias");
    };
    CategoryNoticiasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'category-noticias',template:/*ion-inline-start:"/Users/ruddy/_apps/oriente/src/pages/category-noticias/category-noticias.html"*/'<ion-header>\n    <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Notícias</ion-title>\n\n    <ion-buttons end margin-right >\n    <button ion-button  icon-only (tap)="irParaAdd()" *ngIf="is_admin" >\n    <ion-icon name="add"></ion-icon>\n    </button>\n    </ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content class="category" >\n\n        <ion-list >\n        <ion-card  text-wrap   *ngFor="let post of posts  | async" (click)="irParaSingle($event, post)">\n\n            <ion-item>\n                <h2>{{post.post_name}}</h2>\n                <p class="data">{{post.post_date}}</p>\n            </ion-item>\n            \n            <img [src]="post.post_image ? post.post_image : \'assets/imgs/noImage.png\'" width="70"/>\n            \n            <ion-card-content>\n                <p>{{post.post_description}}</p>\n            </ion-card-content>\n             <!--<ion-row>\n                <ion-col>\n                <button ion-button icon-left clear small>\n                    <ion-icon name="thumbs-up"></ion-icon>\n                    <div>12 Likes</div>\n                </button>\n                </ion-col>\n                <ion-col>\n                <button ion-button icon-left clear small>\n                    <ion-icon name="text"></ion-icon>\n                    <div>4 Comments</div>\n                </button>\n                </ion-col>\n                <ion-col center text-center>\n                <ion-note>\n                    11h ago\n                </ion-note>\n                </ion-col>\n            </ion-row> -->\n            \n            </ion-card>\n</ion-list>\n\n         \n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ruddy/_apps/oriente/src/pages/category-noticias/category-noticias.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_noticias_services__["a" /* NoticiasServices */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], CategoryNoticiasPage);
    return CategoryNoticiasPage;
}());

//# sourceMappingURL=category-noticias.js.map

/***/ })

});
//# sourceMappingURL=9.js.map