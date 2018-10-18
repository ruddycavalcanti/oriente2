webpackJsonp([2],{

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsPageModule", function() { return ShowsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_shows__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shows_services__ = __webpack_require__(411);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ShowsPageModule = /** @class */ (function () {
    function ShowsPageModule() {
    }
    ShowsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__category_shows__["a" /* ShowsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__category_shows__["a" /* ShowsPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__category_shows__["a" /* ShowsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_shows_services__["a" /* ShowsServices */]
            ]
        })
    ], ShowsPageModule);
    return ShowsPageModule;
}());

//# sourceMappingURL=category-shows.module.js.map

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

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shows_services__ = __webpack_require__(411);
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




var ShowsPage = /** @class */ (function () {
    function ShowsPage(navCtrl, showServices, storage) {
        this.navCtrl = navCtrl;
        this.showServices = showServices;
        this.storage = storage;
        this.is_admin = true;
    }
    ShowsPage.prototype.ionViewWillEnter = function () {
        this.user_is_admin();
        this.posts = this.showServices.listar();
        this.shows = this.showServices.getShowsSongkick();
    };
    ShowsPage.prototype.user_is_admin = function () {
        var _this = this;
        this.storage.get('is_admin').then(function (is_admin) {
            if (is_admin == true)
                _this.is_admin = true;
        });
    };
    ShowsPage.prototype.irParaSingle = function (event, post) {
        this.navCtrl.push("show", {
            'id': post.post_uid,
            post: post
        });
    };
    ShowsPage.prototype.irParaSingleSongKick = function (event, show) {
        this.navCtrl.push("show", {
            'id': show.id,
            show: show
        });
    };
    ShowsPage.prototype.irParaAdd = function () {
        this.navCtrl.push("edit-shows");
    };
    ShowsPage.prototype.getMonthName = function (monthNum) {
        switch (monthNum) {
            case "01": return "JAN";
            case "02": return "FEV";
            case "03": return "MAR";
            case "04": return "ABR";
            case "05": return "MAI";
            case "06": return "JUN";
            case "07": return "JUL";
            case "08": return "AGO";
            case "09": return "SET";
            case "10": return "OUT";
            case "11": return "NOV";
            case "12": return "DEZ";
        }
    };
    ShowsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shows-category',template:/*ion-inline-start:"/Users/ruddy/_apps/oriente/src/pages/category-shows/category-shows.html"*/'<ion-header>\n    <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Agenda de Shows</ion-title>\n\n    <ion-buttons end margin-right >\n    <button ion-button  icon-only (tap)="irParaAdd()" *ngIf="is_admin" >\n    <ion-icon name="add"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="show">\n\n\n\n  <ion-list >\n\n      <ion-item   text-wrap   *ngFor="let post of posts  | async" (click)="irParaSingle($event, post)">\n  \n        <ion-row>\n          <ion-col col-3 padding text-center margin-top>\n              <p class="dia">{{ post.post_dia.substr(8,2) }} </p>\n              <p class="mes">{{getMonthName(post.post_dia.substr(5,2))}}</p>\n              <p class="hora"><span *ngIf="post.post_horario" >{{post.post_horario}}h</span></p>\n          </ion-col>\n\n          <ion-col col-9 class="maisDetalhes" padding>\n              <h2 class="nomeEvento" margin-top margin-bottom class="primaryColor"> {{post.post_name}} </h2>\n              \n              \n              <ion-row>\n                <ion-col col-10>\n                    <ion-row >\n                        <ion-col no-padding col-2 class="data" margin-bottom>\n                            <img width="28" src="assets/imgs/hora.png" /> \n                        </ion-col>\n                         <ion-col  col-10 class="detalheSpace">\n                            <span>  {{post.post_dia.substr(8,2) }}/{{post.post_dia.substr(5,2) }}/{{post.post_dia.substr(0,4) }}  <span *ngIf="post.post_horario" >- {{post.post_horario}}h</span></span>\n                        </ion-col>\n                    </ion-row>\n      \n                    <ion-row>\n                        <ion-col  no-padding  col-2  class="data" margin-bottom>\n                            <img width="28" src="assets/imgs/local.png" /> \n                        </ion-col>\n                         <ion-col  col-10 class="detalheSpace">\n                      <span>{{post.post_cidade}} / {{post.post_estado}}</span>\n                        </ion-col>\n                    </ion-row>\n\n                  </ion-col>\n\n                  <ion-col col-2>\n                      <p margin-top class="cat_seta">\n                          <ion-icon color="primary" ios="ios-arrow-forward" md="md-arrow-forward"></ion-icon>\n                      </p>\n        \n                    </ion-col>\n              </ion-row>\n              \n              \n          \n\n            \n\n             \n            </ion-col>\n        </ion-row>\n      \n      </ion-item>\n  \n  \n    </ion-list>\n\n\n\n  <ion-list >\n\n    <ion-item   text-wrap   *ngFor="let show of shows | async; let i = index;" (click)="irParaSingleSongKick($event, show)">\n\n      <ion-row >\n        <ion-col col-3 padding text-center margin-top>\n                <p class="dia">{{ show.start.date.substr(8,2) }} </p>\n                <p class="mes">{{getMonthName(show.start.date.substr(5,2))}}</p>\n              <p class="hora"><span *ngIf="show.start.time" >{{show.start.time.substr(0,6)}}h</span></p>\n        </ion-col>\n\n        <ion-col col-9 class="maisDetalhes" padding>\n            <h2 class="nomeEvento" margin-top margin-bottom class="primaryColor">\n                    {{show.performance[0].artist.displayName}} -  {{show.venue.metroArea.displayName}}\n\n                    <span *ngIf="show.status==\'cancelled\'"> (Cancelado)</span>\n              </h2>\n            \n            \n            <ion-row>\n              <ion-col col-10>\n                  <ion-row >\n                      <ion-col no-padding col-2 class="data" margin-bottom>\n                          <img width="28" src="assets/imgs/hora.png" /> \n                      </ion-col>\n                       <ion-col  col-10 class="detalheSpace">\n                        \n                        <span> {{show.start.date.substr(8,2) }}/{{show.start.date.substr(5,2) }}/{{show.start.date.substr(0,4) }}\n                              <span *ngIf="show.start.time">- {{show.start.time.substr(0,6)}}h</span>\n                        </span>\n                      \n                      </ion-col>\n                  </ion-row>\n    \n                  <ion-row>\n                      <ion-col  no-padding  col-2  class="data" margin-bottom>\n                          <img width="28" src="assets/imgs/local.png" /> \n                      </ion-col>\n                       <ion-col  col-10 class="detalheSpace">\n                        <span>{{show.venue.displayName}}  - {{show.venue.metroArea.displayName}} </span>\n                      </ion-col>\n                  </ion-row>\n\n                </ion-col>\n\n                <ion-col col-2>\n                    <p margin-top class="cat_seta">\n                        <ion-icon color="primary" ios="ios-arrow-forward" md="md-arrow-forward"></ion-icon>\n                    </p>\n      \n                  </ion-col>\n            </ion-row>\n            \n            \n        \n\n          \n\n           \n          </ion-col>\n      </ion-row>\n    \n    </ion-item>\n\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ruddy/_apps/oriente/src/pages/category-shows/category-shows.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shows_services__["a" /* ShowsServices */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ShowsPage);
    return ShowsPage;
}());

//# sourceMappingURL=category-shows.js.map

/***/ })

});
//# sourceMappingURL=2.js.map