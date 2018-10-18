webpackJsonp([20],{

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleShowPageModule", function() { return SingleShowPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single_show__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SingleShowPageModule = /** @class */ (function () {
    function SingleShowPageModule() {
    }
    SingleShowPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__single_show__["a" /* SingleShowPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__single_show__["a" /* SingleShowPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__single_show__["a" /* SingleShowPage */]
            ]
        })
    ], SingleShowPageModule);
    return SingleShowPageModule;
}());

//# sourceMappingURL=single-show.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleShowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SingleShowPage = /** @class */ (function () {
    function SingleShowPage(navCtrl, navParams, dbFire, storage, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbFire = dbFire;
        this.storage = storage;
        this.iab = iab;
        this.is_admin = true;
        this.show = this.navParams.get('show'); //object vindo do songkick
        this.post = this.navParams.get('post');
        if (this.post != undefined) {
            this.show = this.post;
            this.post_name = this.post.post_name;
            this.post_dia = this.post.post_dia;
            this.post_image = this.post.post_image;
            this.post_local = this.post.post_local;
            this.post_horario = this.post.post_horario;
            this.post_content = this.post.post_content;
            this.post_uid = this.post.post_uid;
            this.post_cidade = this.post.post_cidade;
            this.post_estado = this.post.post_estado;
            this.link_ingresso = this.post.link_ingresso;
            this.day = this.post_dia.substr(0, 2);
            var monthNumber = this.post_dia.substr(5, 2);
            this.month = this.getMonthName(monthNumber);
        }
        else if (this.show != undefined) {
            this.post = this.show;
            this.post_cidade = this.show.venue.metroArea.displayName;
            this.post_name = this.show.performance[0].artist.displayName + " - " + this.post_cidade;
            this.post_dia = this.show.start.date;
            this.post_image = '';
            this.post_local = this.show.venue.displayName;
            this.post_horario = this.show.start.time;
            this.post_content = '';
            this.post_uid = this.show.id;
            this.post_estado = '';
            this.link_ingresso = '';
            this.linkSongKick = this.show.uri;
            this.day = this.post_dia.substr(0, 2);
            var monthNumber = this.post_dia.substr(5, 2);
            this.month = this.getMonthName(monthNumber);
            this.linkSongKick = this.show.uri;
        }
        else {
            this.navCtrl.push("home");
        }
    }
    SingleShowPage.prototype.ionViewWillEnter = function () {
        this.user_is_admin();
    };
    SingleShowPage.prototype.user_is_admin = function () {
        var _this = this;
        this.storage.get('is_admin').then(function (is_admin) {
            if (is_admin == true)
                _this.is_admin = true;
        });
    };
    SingleShowPage.prototype.getMonthName = function (monthNum) {
        switch (monthNum) {
            case "01": return this.month = "JAN";
            case "02": return this.month = "FEV";
            case "03": return this.month = "MAR";
            case "04": return this.month = "ABR";
            case "05": return this.month = "MAI";
            case "06": return this.month = "JUN";
            case "07": return this.month = "JUL";
            case "08": return this.month = "AGO";
            case "09": return this.month = "SET";
            case "10": return this.month = "OUT";
            case "11": return this.month = "NOV";
            case "12": return this.month = "DEZ";
        }
    };
    SingleShowPage.prototype.irParaEdit = function () {
        this.navCtrl.push("edit-shows", {
            post: this.post,
            is_edit: true
        });
    };
    SingleShowPage.prototype.openLink = function (actionV) {
        var options = {
            zoom: 'no',
            hidden: 'yes',
            location: 'yes'
        };
        var browser = this.iab.create('' + actionV, "_blank", options);
        browser.show();
    };
    SingleShowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-single-show',template:/*ion-inline-start:"/Users/ruddy/_apps/oriente/src/pages/single-show/single-show.html"*/'<ion-header>\n    <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{post_name}}</ion-title>\n\n   <ion-buttons end   *ngIf="is_admin" margin-right>\n    <button ion-button  icon-only (click)="irParaEdit()">\n    <ion-icon name="create"></ion-icon>\n    </button>\n    </ion-buttons>\n    \n  </ion-navbar> \n</ion-header>\n\n<ion-content class="show" margin-top>\n\n\n    \n\n        <ion-row>\n                <ion-col col-3 padding text-center >\n                    <p class="diaSingle">{{post_dia.substr(8,2) }}</p>\n                    <p class="mes">{{month}} </p>\n                    <p class="hora">{{post_horario.substr(0,6)}}h</p>\n                </ion-col>\n      \n                <ion-col col-9 class="maisDetalhes" padding>\n                    <h2 class="nomeEvento" margin-top padding-bottom margin-bottom class="primaryColor">{{post_name}} \n                        <span  *ngIf="show.status==\'cancelled\'">\n                            (Cancelado)\n                        </span>    \n                    </h2>\n                    \n                    \n                    <ion-row >\n                        <ion-col no-padding col-2  >\n                                <p><img width="24" src="assets/imgs/hora.png" /> </p>\n                        </ion-col>\n                         <ion-col no-padding col-10 class="detalheSpace">\n                            <p>  {{post_dia.substr(8,2) }}/{{post_dia.substr(5,2) }}/{{post_dia.substr(0,4) }}  - {{post_horario.substr(0,6)}}h</p>\n                          \n                        </ion-col>\n                    </ion-row>\n      \n      \n                    <ion-row>\n                        <ion-col  no-padding  col-2   >\n                            <p><img width="24" src="assets/imgs/local.png" /> </p>\n                        </ion-col>\n                         <ion-col no-padding col-10 class="detalheSpace">\n                      <p>{{post_local}} - {{post_cidade}} <span *ngIf="post_estado!=\'\'">/ {{post_estado}}</span> </p>\n                        </ion-col>\n                    </ion-row>\n\n\n                   \n\n                    <div margni-left margin-top *ngIf="post_content!=\'\'" >\n                        <strong>Informações adicionais:</strong>\n                        <p>{{post_content}}</p>\n                    </div>\n\n                    <div margni-left margin-top *ngIf="link_ingresso!=\'\'" >\n                            <strong>Link ngresso:</strong>\n                            <p><button ion-button (click)="openLink(link_ingresso)" >Comprar</button></p> \n                    </div>\n\n                    <div  margin-top *ngIf="linkSongKick" >\n                           <span (click)="openLink(linkSongKick)" >\n                                <img float-right width="24" src="assets/imgs/songkick.png" width="100" />\n                           </span>\n                    </div>\n                    \n      \n                   \n                  </ion-col>\n              </ion-row>\n\n\n        \n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ruddy/_apps/oriente/src/pages/single-show/single-show.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], SingleShowPage);
    return SingleShowPage;
}());

//# sourceMappingURL=single-show.js.map

/***/ })

});
//# sourceMappingURL=20.js.map