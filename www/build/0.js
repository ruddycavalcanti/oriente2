webpackJsonp([0],{

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryVideosPageModule", function() { return CategoryVideosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_videos__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_videos_services__ = __webpack_require__(412);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CategoryVideosPageModule = /** @class */ (function () {
    function CategoryVideosPageModule() {
    }
    CategoryVideosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__category_videos__["a" /* CategoryVideosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__category_videos__["a" /* CategoryVideosPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__category_videos__["a" /* CategoryVideosPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_videos_services__["a" /* VideosServices */]
            ]
        })
    ], CategoryVideosPageModule);
    return CategoryVideosPageModule;
}());

//# sourceMappingURL=category-videos.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_video__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VideosServices = /** @class */ (function () {
    function VideosServices(dbFire, http) {
        this.dbFire = dbFire;
        this.http = http;
        this.apiKeyYoutube = 'AIzaSyDJ9MvWTW_zwMXqoqYZBEBRY0AMYiaM75E';
    }
    VideosServices.prototype.listar = function () {
        return this.dbFire.list('/videos/').valueChanges().map(function (array) { return array.reverse(); });
    };
    VideosServices.prototype.savePost = function (post_uid, post_nome, post_conteudo, post_image, video_url, post_description) {
        return this.dbFire.database.ref("videos/" + post_uid)
            .update(new __WEBPACK_IMPORTED_MODULE_3__models_video__["a" /* Video */](post_uid, post_nome, post_conteudo, post_image, video_url, post_description));
    };
    VideosServices.prototype.getPlaylistsForChannel = function (channel) {
        return this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=' + this.apiKeyYoutube + '&channelId=' + channel + '&part=snippet,id,status&maxResults=30')
            .map(function (res) {
            console.log(res.json()['items']);
            return res.json()['items'];
        });
    };
    VideosServices.prototype.getListVideos = function (listId) {
        return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKeyYoutube + '&playlistId=' + listId + '&part=snippet,id,status&maxResults=30')
            .map(function (res) {
            console.log(res.json()['items']);
            return res.json()['items'];
        });
    };
    VideosServices.prototype.removePost = function (post_uid) {
        return this.dbFire.list("/videos/" + post_uid).remove();
    };
    VideosServices.prototype.uploadPhotoStorage = function (post_image, post_uid) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["storage"]().ref();
        var imageRef = storageRef.child('images/videos/' + post_uid + '.jpg');
        return imageRef.putString(post_image, __WEBPACK_IMPORTED_MODULE_1_firebase_app__["storage"].StringFormat.DATA_URL);
    };
    VideosServices.prototype.removePhotoStorage = function (post_uid) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["storage"]().ref();
        return storageRef.child('images/videos/' + post_uid + '.jpg').delete();
    };
    VideosServices.prototype.updatePhotoDb = function (post_image, post_uid) {
        return this.dbFire.database.ref("videos/" + post_uid).update({
            post_image: post_image
        });
    };
    VideosServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], VideosServices);
    return VideosServices;
}());

//# sourceMappingURL=videos-services.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Video; });
var Video = /** @class */ (function () {
    function Video(post_uid, post_name, post_content, post_image, video_url, post_description) {
        this.post_uid = post_uid;
        this.post_name = post_name;
        this.post_content = post_content;
        this.post_image = post_image;
        this.video_url = video_url;
        this.post_description = post_description;
    }
    Video.prototype.set_post_name = function (post_name) {
        this.post_name = post_name;
    };
    Video.prototype.get_post_name = function () {
        return this.post_name;
    };
    return Video;
}());

//# sourceMappingURL=video.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryVideosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_videos_services__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CategoryVideosPage = /** @class */ (function () {
    function CategoryVideosPage(navCtrl, videoServices, storage, http, dbFire, navParms) {
        this.navCtrl = navCtrl;
        this.videoServices = videoServices;
        this.storage = storage;
        this.http = http;
        this.dbFire = dbFire;
        this.navParms = navParms;
        this.is_admin = true;
        this.tituloPlaylist = true;
    }
    CategoryVideosPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.user_is_admin();
        this.origem = this.navParms.get('origem');
        this.listId = this.navParms.get('listId');
        this.titulo = "Vídeos";
        if (this.origem == "playlists") {
            this.playlists = this.videoServices.getListVideos(this.listId);
            this.tituloPlaylist = false;
            this.titulo = this.navParms.get('post').snippet.title;
        }
        else {
            this.dbFire.database.ref("/config").once("value").then(function (snapshot) {
                if (snapshot.val() != null) {
                    _this.playlists = _this.videoServices.getPlaylistsForChannel(snapshot.val().youtubeUrl);
                }
            }).catch(function (error) {
            });
            this.posts = this.videoServices.listar();
        }
    };
    CategoryVideosPage.prototype.user_is_admin = function () {
        var _this = this;
        this.storage.get('is_admin').then(function (is_admin) {
            if (is_admin == true)
                _this.is_admin = true;
        });
    };
    CategoryVideosPage.prototype.irParaSingle = function (event, post) {
        this.navCtrl.push("video", {
            'id': post.post_uid,
            post: post
        });
    };
    CategoryVideosPage.prototype.irParaVideo = function (event, post, listId) {
        if (this.origem == "playlists") {
            this.navCtrl.push("video", {
                id: post.post_uid,
                post: post,
                origem: 'playlists'
            });
        }
        else {
            this.navCtrl.push("videos", {
                post: post,
                listId: listId,
                origem: 'playlists'
            });
        }
    };
    CategoryVideosPage.prototype.irParaAdd = function () {
        this.navCtrl.push("edit-videos");
    };
    CategoryVideosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'category-videos',template:/*ion-inline-start:"/Users/ruddy/_apps/oriente/src/pages/category-videos/category-videos.html"*/'<ion-header>\n    <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{titulo}}</ion-title>\n\n    <ion-buttons end margin-right >\n        <button ion-button  icon-only (tap)="irParaAdd()" *ngIf="is_admin" >\n         <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="category">\n  \n    <ion-list>\n        <ion-item   text-wrap   *ngFor="let post of posts  | async" (click)="irParaSingle($event, post)">\n                \n            <ion-row>\n              <ion-col col-3>\n                  <ion-thumbnail item-start>\n                      <img src="{{post.post_image}}" width="70">\n                    </ion-thumbnail>\n    \n                </ion-col>\n\n\n                <ion-col col-7>\n                    <h2>{{post.post_name}}</h2>\n\n                    <p>{{post.post_description}}</p>\n        \n      \n                  </ion-col>\n\n\n                  <ion-col col-2>\n                      <p margin-top class="cat_seta">\n                          <ion-icon color="primary" ios="ios-arrow-forward" md="md-arrow-forward"></ion-icon>\n                      </p>\n        \n                    </ion-col>\n\n          </ion-row>\n\n      \n      </ion-item>\n\n      \n     \n      </ion-list>\n\n \n\n\n\n\n      <h4 padding margin-top *ngIf="tituloPlaylist" >PLAYLISTS</h4>\n\n      <!-- Youtube Videos -->\n\n      <ion-list>\n            <ion-item   text-wrap   *ngFor="let playlist of playlists  | async" (click)="irParaVideo($event, playlist, playlist.id)">\n                    \n                <ion-row *ngIf="playlist.status.privacyStatus!=\'private\'">\n                  <ion-col col-3>\n                      <ion-thumbnail item-start *ngIf="playlist.snippet.thumbnails.default.url">\n                            <img [src]="playlist.snippet.thumbnails.default.url" width="70">\n                        </ion-thumbnail>\n            \n        \n                    </ion-col>\n    \n    \n    \n                    <ion-col col-7>\n                        <h2>{{playlist.snippet.title}}</h2>\n    \n                        <p class="descCategory">{{playlist.snippet.description}}</p>\n          \n                      </ion-col>\n    \n    \n                      <ion-col col-2>\n                          <p margin-top class="cat_seta">\n                              <ion-icon color="primary" ios="ios-arrow-forward" md="md-arrow-forward"></ion-icon>\n                          </p>\n            \n                        </ion-col>\n    \n              </ion-row>\n    \n          \n          </ion-item>\n    \n          \n         \n          </ion-list>\n    \n\n</ion-content>\n'/*ion-inline-end:"/Users/ruddy/_apps/oriente/src/pages/category-videos/category-videos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_videos_services__["a" /* VideosServices */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], CategoryVideosPage);
    return CategoryVideosPage;
}());

//# sourceMappingURL=category-videos.js.map

/***/ })

});
//# sourceMappingURL=0.js.map