webpackJsonp([24],{

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalModule", function() { return LocalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local__ = __webpack_require__(438);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LocalModule = /** @class */ (function () {
    function LocalModule() {
    }
    LocalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__local__["a" /* Local */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__local__["a" /* Local */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__local__["a" /* Local */]
            ]
        })
    ], LocalModule);
    return LocalModule;
}());

//# sourceMappingURL=local.module.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Local; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(244);
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




var Local = /** @class */ (function () {
    function Local(navCtrl, navParams, file, dbFire, modalCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.file = file;
        this.dbFire = dbFire;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.posts = [];
    }
    Local.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.imagemAlbum = 'assets/imgs/noMusic.png';
        this.file.listDir(this.file.externalRootDirectory, 'Music')
            .then(function (result) {
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var item = result_1[_i];
                console.log(item);
                if (item.isDirectory == true && item.name != '.' && item.name != '..') {
                    // this.getFileList(item.name); //Get all the files inside the folder. recursion will probably be useful here.
                }
                else if (item.isFile == true)
                    _this.posts.push({
                        post_name: item.name,
                        post_artista: '',
                        post_uid: _this.dbFire.database.ref().child('musicas/').push().key,
                        musica_url: item.nativeURL
                    });
                // }
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    Local.prototype.getFileList = function (path) {
        var _this = this;
        var file = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */]();
        this.file.listDir(file.externalRootDirectory, path)
            .then(function (result) {
            for (var _i = 0, result_2 = result; _i < result_2.length; _i++) {
                var item = result_2[_i];
                if (item.isDirectory == true && item.name != '.' && item.name != '..') {
                    _this.getFileList(path + '/' + item.name);
                }
                else if (item.isFile == true) {
                    _this.posts.push({
                        post_name: item.name,
                    });
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    Local.prototype.abreAddMusicToPlaylist = function (post) {
        console.log(post);
        var modal = this.modalCtrl.create("add-to-playlist", {
            post: post
        });
        modal.present();
    };
    // Play audio
    Local.prototype.play = function (post) {
        this.events.publish('musica:played', post.post_artista, post.post_name, post.musica_url, true);
    };
    Local = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-local',template:/*ion-inline-start:"/Users/ruddy/_apps/oriente/src/pages/local/local.html"*/'<ion-header>\n    <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Minhas Músicas</ion-title>\n\n    <ion-buttons end margin-right >\n        <button ion-button  icon-only >\n        <!--<ion-icon name="add"></ion-icon>-->\n        </button>\n        </ion-buttons>\n\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n\n\n \n  <ion-list>\n    <ion-item *ngFor="let post of posts; let i=index;" >\n\n      <ion-row>\n\n        <ion-col col-10 (click)="play(post)">\n            <!-- <ion-thumbnail margin-right  float-left >\n                 <img width="80" src="assets/imgs/noMusic.png" />\n             </ion-thumbnail>-->\n\n             <h2>{{i+1}}. {{post.post_name}} </h2>\n             <p>{{post.post_artista}}</p>\n\n         </ion-col>\n\n\n        \n        <ion-col col-2 (click)="abreAddMusicToPlaylist(post)">\n            <button color="dark" ion-button icon-only  item-end>\n                <ion-icon name="add-circle"></ion-icon>\n              </button>\n        </ion-col>\n\n\n    </ion-row>\n\n\n    </ion-item>\n  </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/ruddy/_apps/oriente/src/pages/local/local.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], Local);
    return Local;
}());

//# sourceMappingURL=local.js.map

/***/ })

});
//# sourceMappingURL=24.js.map