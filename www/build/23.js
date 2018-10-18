webpackJsonp([23],{

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesModule", function() { return ConfiguracoesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player__ = __webpack_require__(441);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfiguracoesModule = /** @class */ (function () {
    function ConfiguracoesModule() {
    }
    ConfiguracoesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__player__["a" /* PlayerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__player__["a" /* PlayerPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__player__["a" /* PlayerPage */]
            ]
        })
    ], ConfiguracoesModule);
    return ConfiguracoesModule;
}());

//# sourceMappingURL=player.module.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_media__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var file;
var PlayerPage = /** @class */ (function () {
    function PlayerPage(navCtrl, navParams, media) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.media = media;
        //items: Array<{artista: string, musica: string , disco:string, conteudo:string, imagem:string , mp3:string}>;
        this.botaoPause = true;
        this.botaoPlay = false;
        this.botaoRefresh = true;
        this.botaoRepeat = false;
        this.botaoShuffle = false;
    }
    PlayerPage.prototype.ionViewDidLoad = function () {
        this.imagemAlbum = 'assets/imgs/noMusic.png';
        this.mediaTimer = 0;
    };
    PlayerPage.prototype.ionViewWillUnload = function () {
        //this.verificarOrigem =  this.musicProvider.setVerificarOrigem(false);
    };
    PlayerPage.prototype.ionViewWillEnter = function () {
        if (this.mp3Url != "" && this.verificarOrigem == true) {
            this.tocarMusicaAoAbrir();
        }
    };
    PlayerPage.prototype.pausarMusica = function () {
        if (file != undefined) {
            file.pause();
            this.botaoPause = false;
            this.botaoPlay = true;
        }
    };
    PlayerPage.prototype.tocarMusica = function () {
        if (file != undefined) {
            file.play();
            this.botaoPause = true;
            this.botaoPlay = false;
        }
    };
    PlayerPage.prototype.tocarMusicaAoAbrir = function () {
        if (file != undefined) {
            file.release();
        }
        file = this.media.create(this.mp3Url);
        file.play();
        this.botaoPause = true;
        this.botaoPlay = false;
        // this.duracao = file.getDuration();
        this.showProgress();
    };
    PlayerPage.prototype.showProgress = function () {
        var _this = this;
        setInterval(function () {
            file.getCurrentPosition().then(function (result) {
                // do whatever with curpos
                _this.mediaTimer = result;
            });
        }, 1000);
        /*
        var self = this;
        this.mediaTimer = setInterval(function () {
          file.getCurrentPosition().then((result) => {
            self.mediaTimer = result;
            if ( result < file.getDuration() ) {
              self.showProgress();
            }
          });
          }, 1000);
          */
    };
    PlayerPage.prototype.refresh = function () {
        this.botaoRefresh = false;
        this.botaoRepeat = true;
        this.botaoShuffle = false;
    };
    PlayerPage.prototype.repeat = function () {
        this.botaoRefresh = false;
        this.botaoRepeat = false;
        this.botaoShuffle = true;
    };
    PlayerPage.prototype.shuffle = function () {
        this.botaoRefresh = true;
        this.botaoRepeat = false;
        this.botaoShuffle = false;
    };
    PlayerPage.prototype.anterior = function () {
    };
    PlayerPage.prototype.proximo = function () {
        // skip to 10 seconds (expects int value in ms)
        file.seekTo(10000);
    };
    PlayerPage.prototype.share = function () {
        //this.socialSharing.share();
    };
    PlayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-player',template:/*ion-inline-start:"/Users/ruddy/_apps/oriente/src/pages/player/player.html"*/'<ion-header>\n    <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Player</ion-title>\n\n    <ion-buttons end margin-right >\n        <button ion-button  icon-only >\n        <!--<ion-icon name="add"></ion-icon>-->\n        </button>\n        </ion-buttons>\n\n\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content class="player">\n\n	<div class="content">\n\n	    <ion-thumbnail margin-top class="thumb">\n	        <img width="200" src="{{imagemAlbum}}" />\n	    </ion-thumbnail>\n\n\n    </div>\n\n	<ion-footer padding>\n\n			<p>{{musica_nome}} <span *ngIf="musica_artista">- {{musica_artista}}</span></p>\n\n\n			<div class="tempo" *ngIf="mediaTimer!=\'0\'">\n				<span float-left>{{mediaTimer}}</span>\n\n				<span float-right>{{duracao}}</span>\n			  </div>\n		\n	\n			  <div  class="tempoDrag" margin-top margin-bottom>\n			  <ion-range [(ngModel)]="mediaTimer">  </ion-range>\n			</div>\n		\n			  \n  \n			<ion-grid>\n				<ion-row>\n				  <ion-col>\n				 <ion-icon  *ngIf="botaoRefresh"  margin-right  name=\'refresh\' (click)="refresh()"></ion-icon>\n		\n					   <ion-icon margin-right *ngIf="botaoRepeat"  name=\'repeat\' (click)="repeat()"></ion-icon>\n		\n									<ion-icon  *ngIf="botaoShuffle"  margin-right  name=\'shuffle\' (click)="shuffle()"></ion-icon>\n				   </ion-col>\n		\n				  <ion-col>\n							<ion-icon margin-right name=\'ios-skip-backward\' (click)="anterior()"></ion-icon>\n				  </ion-col>\n		\n				  <ion-col>\n				  	<ion-icon *ngIf="botaoPause" margin-right name=\'pause\' (click)="pausarMusica()"></ion-icon>\n		\n							<ion-icon *ngIf="botaoPlay"  margin-right name=\'play\' (click)="tocarMusica()"></ion-icon>\n				  </ion-col>\n		\n				  <ion-col>\n							<ion-icon margin-right name=\'ios-skip-forward\' (click)="proximo()"></ion-icon>\n				  </ion-col>\n		\n				  <ion-col>\n							<ion-icon   name=\'share\' (click)="share()"></ion-icon>\n				  </ion-col>\n		\n				</ion-row>\n			  </ion-grid>\n		  \n  \n		</ion-footer> \n</ion-content>\n'/*ion-inline-end:"/Users/ruddy/_apps/oriente/src/pages/player/player.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_media__["a" /* Media */]])
    ], PlayerPage);
    return PlayerPage;
}());

//# sourceMappingURL=player.js.map

/***/ })

});
//# sourceMappingURL=23.js.map