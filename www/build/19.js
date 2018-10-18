webpackJsonp([19],{

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleVideoPageModule", function() { return SingleVideoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single_video__ = __webpack_require__(448);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SingleVideoPageModule = /** @class */ (function () {
    function SingleVideoPageModule() {
    }
    SingleVideoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__single_video__["a" /* SingleVideoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__single_video__["a" /* SingleVideoPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__single_video__["a" /* SingleVideoPage */]
            ]
        })
    ], SingleVideoPageModule);
    return SingleVideoPageModule;
}());

//# sourceMappingURL=single-video.module.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleVideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SingleVideoPage = /** @class */ (function () {
    function SingleVideoPage(navCtrl, navParams, dbFire, domSanitizer, platform, storage, navParms) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbFire = dbFire;
        this.domSanitizer = domSanitizer;
        this.platform = platform;
        this.storage = storage;
        this.navParms = navParms;
        this.is_admin = true;
        this.idv = this.navParms.get('idv');
        this.origem = this.navParms.get('origem');
        this.post = this.navParams.get('post');
        if (this.origem == "playlists") {
            this.post_name = this.post.snippet.title;
            this.video_url = this.post.snippet.resourceId.videoId;
            this.post_image = this.post.snippet.thumbnails.default.url;
            this.post_content = this.post.snippet.description;
            this.post_description = '';
            this.post_uid = this.post.snippet.id;
        }
        else if (this.idv != undefined) {
            //alert("HERE:"+this.idv);
            var authorRef = this.dbFire.database.ref('/videos/' + this.idv);
            authorRef.on('value', function (snapshot) {
                _this.post_name = snapshot.val().post_name;
                _this.video_url = snapshot.val().video_url;
                _this.post_image = snapshot.val().post_image;
                _this.post_content = snapshot.val().post_content;
                _this.post_description = snapshot.val().post_description;
                _this.post_uid = snapshot.val().post_uid;
                _this.videoUrl = _this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + _this.video_url);
            });
            /* let  authorRef =  this.dbFire.database.ref('/videos').orderByChild('video_url').equalTo(this.idv);
                          
              authorRef.on('value', authorList => {
                  
                authorList.forEach( author => {
                    
                  this.post_name =  author.val().post_name;
                  this.video_url =   author.val().video_url;
             
                  this.post_image =   author.val().post_image;
                  this.post_content = author.val().post_content;
                  this.post_description = author.val().post_description;
                  this.post_uid = author.val().post_uid;
                  
                  return false;
                });
      
      
              }); */
            //GET POST VIDEO FROM FIREBASE;
        }
        else {
            if (this.post != undefined) {
                this.post_name = this.post.post_name;
                this.video_url = this.post.video_url;
                this.post_image = this.post.post_image;
                this.post_content = this.post.post_content;
                this.post_description = this.post.post_description;
                this.post_uid = this.post.post_uid;
            }
            else {
                this.navCtrl.push("home");
            }
        }
        this.platform.ready().then(function () {
            _this.videoUrl = _this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + _this.video_url);
        });
    }
    SingleVideoPage.prototype.ionViewWillEnter = function () {
        this.user_is_admin();
    };
    SingleVideoPage.prototype.user_is_admin = function () {
        var _this = this;
        this.storage.get('is_admin').then(function (is_admin) {
            if (is_admin == true)
                _this.is_admin = true;
        });
    };
    SingleVideoPage.prototype.irParaEdit = function () {
        this.navCtrl.push("edit-videos", {
            post: this.post,
            is_edit: true
        });
    };
    SingleVideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-single-video',template:/*ion-inline-start:"/Users/ruddy/_apps/oriente/src/pages/single-video/single-video.html"*/'<ion-header>\n    <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{post_name}}</ion-title>\n\n   <ion-buttons end  *ngIf="is_admin"  margin-right>\n    <button ion-button  icon-only (click)="irParaEdit()">\n    <ion-icon name="create"></ion-icon>\n    </button>\n    </ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content  >\n\n\n\n    <ion-row >\n\n            <ion-col>\n                <div text-center>\n                     <iframe width="100%" height="250" [src]="videoUrl" frameborder="0" allowfullscreen></iframe>\n\n                    \n                </div>\n\n                <div class="mainInfo">\n                    <h1 class="nome">{{post_name}}</h1>\n                    \n                    <p>{{post_description}}</p>\n\n                </div>\n        \n            </ion-col>\n        \n    </ion-row>\n\n  \n    <ion-row padding>\n\n            <ion-col>\n        \n               \n              <p class="conteudo">{{post_content}}</p>\n        \n            </ion-col>\n        \n    </ion-row>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ruddy/_apps/oriente/src/pages/single-video/single-video.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SingleVideoPage);
    return SingleVideoPage;
}());

//# sourceMappingURL=single-video.js.map

/***/ })

});
//# sourceMappingURL=19.js.map