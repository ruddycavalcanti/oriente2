webpackJsonp([25],{

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageModule", function() { return ForgetPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forget_password__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_provider__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ForgetPasswordPageModule = /** @class */ (function () {
    function ForgetPasswordPageModule() {
    }
    ForgetPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forget_password__["a" /* ForgetPasswordPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forget_password__["a" /* ForgetPasswordPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__forget_password__["a" /* ForgetPasswordPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_auth_provider__["a" /* AuthProvider */],
            ]
        })
    ], ForgetPasswordPageModule);
    return ForgetPasswordPageModule;
}());

//# sourceMappingURL=forget-password.module.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_provider__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgetPasswordPage = /** @class */ (function () {
    function ForgetPasswordPage(navCtrl, toastCtrl, authProvider) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.authProvider = authProvider;
    }
    ForgetPasswordPage.prototype.createToast = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: 'middle'
        }).present();
    };
    ForgetPasswordPage.prototype.recuperarSenha = function (form) {
        var _this = this;
        var email = form.value.email;
        this.authProvider.recoverPass(email).then(function (result) {
            _this.createToast('Um email foi enviado para você com as instruções.');
            _this.navCtrl.setRoot("home");
        }).catch(function (error) {
            _this.createToast(error);
        });
    };
    ForgetPasswordPage.prototype.irParaLogin = function () {
        this.navCtrl.push("login");
    };
    ForgetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forget-password',template:/*ion-inline-start:"/Users/ruddy/_apps/oriente/src/pages/forget-password/forget-password.html"*/'<!--<ion-header>\n    <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Recover Password</ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-content text-center  padding class="loginRegister">\n\n    <p  margin-top margin-bottom padding-bottom>\n        <img width="80"  src="assets/imgs/logo.png" class="logo"  /></p>\n\n  \n    <p  margin-top padding-top> \n    Preencha o campo abaixo com seu email para recuperar sua senha.\n  </p>\n\n\n  \n  <form #f="ngForm" (ngSubmit)="recuperarSenha(f)">\n\n  \n\n  \n    <ion-item>\n        <ion-label floating><ion-icon float-left name="mail"></ion-icon> Email</ion-label>\n        <ion-input name="email"  ngModel  required type="email" value=""></ion-input>\n      </ion-item>\n\n\n      <div margin-top >\n          <button ion-button color="dark"  round full class="loginRegisterBtn" >Enviar</button>\n\n        </div>\n\n  \n    </form>\n\n    <br>\n\n    <div margin-top padding-top text-left>\n      <button  color="light" ion-button round outline (click)="irParaLogin()">Voltar</button>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ruddy/_apps/oriente/src/pages/forget-password/forget-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_provider__["a" /* AuthProvider */]])
    ], ForgetPasswordPage);
    return ForgetPasswordPage;
}());

//# sourceMappingURL=forget-password.js.map

/***/ })

});
//# sourceMappingURL=25.js.map