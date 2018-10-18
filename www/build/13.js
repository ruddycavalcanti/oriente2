webpackJsonp([13],{

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_provider__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_destaques_services__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_auth_provider__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_5__providers_destaques_services__["a" /* DestaquesServices */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

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

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_destaques_services__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, destaquesServices, iab) {
        this.navCtrl = navCtrl;
        this.destaquesServices = destaquesServices;
        this.iab = iab;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.posts = this.destaquesServices.listar();
    };
    HomePage.prototype.goToSlide = function () {
        this.slides.slideTo(2, 500);
    };
    HomePage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
    };
    HomePage.prototype.irParaPerfil = function (post) {
        this.navCtrl.push('perfil');
    };
    HomePage.prototype.irParaEdit = function (post) {
        this.navCtrl.push("edit-destaques", {
            post: post,
            is_edit: true
        });
    };
    HomePage.prototype.irParaNew = function () {
        this.navCtrl.push("edit-destaques");
    };
    HomePage.prototype.irParaDestaque = function (actionV, action) {
        if (action == "link") {
            this.openLink(actionV);
        }
        else {
            if (actionV == 'agenda') {
                this.navCtrl.push("shows");
            }
            if (action == "video") {
                this.navCtrl.push("video", {
                    'id': actionV,
                    idv: actionV
                });
            }
        }
    };
    HomePage.prototype.openLink = function (actionV) {
        var browser = this.iab.create('' + actionV, "_blank", { zoom: 'no',
            hidden: 'yes',
            location: 'yes' });
        browser.show();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/ruddy/_apps/oriente/src/pages/home/home.html"*/'<ion-header no-border>\n    <ion-navbar >\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title></ion-title>\n\n      <ion-buttons end margin-right > \n          <button ion-button  icon-only (click)="irParaPerfil()">\n          <ion-icon name="person"></ion-icon>\n          </button>\n          </ion-buttons>\n\n    </ion-navbar> \n  </ion-header> \n \n<ion-content class="slidehome" fullscreen>\n   \n  \n    <ion-fab (tap)="irParaNew()" left  class="btnAddNovoHome">\n        <button ion-fab mini color="dark" ><ion-icon name="add"></ion-icon></button>\n     </ion-fab>\n \n \n\n  <ion-slides  pager (ionSlideDidChange)="slideChanged()">\n  \n     \n        <ion-slide  *ngFor="let post of posts  | async" (click)="irParaDestaque(post.actionValue,post.action )" >\n \n\n             <ion-fab (tap)="irParaEdit(post)" left  margin-right class="btnEditDestaque">\n                <button ion-fab mini color="dark" ><ion-icon name="create"></ion-icon></button>\n             </ion-fab>\n\n\n          <div  [style.backgroundImage]="\'url(\'+ post.post_image +\')\'" class="capaHome">\n\n            <div  class="capaHomeContainer"></div>\n\n          </div>\n \n            <div class="detalhes" text-left>\n             \n              <h2 *ngIf="post.titulo">{{post.titulo}} </h2>\n               <p  *ngIf="post.desc">{{post.desc}} </p>\n          </div>\n \n\n            \n    </ion-slide>\n\n  </ion-slides>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ruddy/_apps/oriente/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_destaques_services__["a" /* DestaquesServices */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=13.js.map