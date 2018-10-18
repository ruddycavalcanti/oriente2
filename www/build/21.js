webpackJsonp([21],{

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleMusicaPageModule", function() { return SingleMusicaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single_musica__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SingleMusicaPageModule = /** @class */ (function () {
    function SingleMusicaPageModule() {
    }
    SingleMusicaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__single_musica__["a" /* SingleMusicaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__single_musica__["a" /* SingleMusicaPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__single_musica__["a" /* SingleMusicaPage */]
            ]
        })
    ], SingleMusicaPageModule);
    return SingleMusicaPageModule;
}());

//# sourceMappingURL=single-musica.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleMusicaPage; });
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



var SingleMusicaPage = /** @class */ (function () {
    function SingleMusicaPage(navCtrl, navParams, dbFire) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbFire = dbFire;
        this.can_edit = true;
    }
    SingleMusicaPage.prototype.ionViewCanEnter = function () {
        this.post = this.navParams.get('post');
        if (this.post != undefined) {
            this.post_name = this.post.post_name;
            this.musica_url = this.post.musica_url;
            this.post_image = this.post.post_image;
            this.post_content = this.post.post_content;
            this.post_uid = this.post.post_uid;
        }
        else {
            this.navCtrl.push("home");
        }
    };
    SingleMusicaPage.prototype.irParaEdit = function () {
        this.navCtrl.push("edit-musicas", {
            post: this.post,
            is_edit: true
        });
    };
    SingleMusicaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-single-musica',template:/*ion-inline-start:"/Users/ruddy/_apps/oriente/src/pages/single-musica/single-musica.html"*/'<ion-header>\n    <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{post_name}}</ion-title>\n\n   <ion-buttons end   *ngIf="can_edit" margin-right>\n    <button ion-button  icon-only (click)="irParaEdit()">\n    <ion-icon name="create"></ion-icon>\n    </button>\n    </ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content  >\n\n    \n\n\n    <ion-row>\n\n            <ion-col>\n        \n             \n        \n                <div class="mainInfo">\n                    <p class="nome">{{post_name}}</p>\n\n                    <p>{{post_content}}</p>\n\n                    <p>Url da Musica: {{musica_url}}</p>\n                </div>\n        \n            </ion-col>\n        \n    </ion-row>\n        \n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ruddy/_apps/oriente/src/pages/single-musica/single-musica.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], SingleMusicaPage);
    return SingleMusicaPage;
}());

//# sourceMappingURL=single-musica.js.map

/***/ })

});
//# sourceMappingURL=21.js.map