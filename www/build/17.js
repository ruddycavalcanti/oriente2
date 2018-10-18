webpackJsonp([17],{

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosModule", function() { return UsuariosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_usuarios__ = __webpack_require__(450);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UsuariosModule = /** @class */ (function () {
    function UsuariosModule() {
    }
    UsuariosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page_usuarios__["a" /* Usuarios */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page_usuarios__["a" /* Usuarios */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__page_usuarios__["a" /* Usuarios */]
            ]
        })
    ], UsuariosModule);
    return UsuariosModule;
}());

//# sourceMappingURL=page-usuarios.module.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuarios; });
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



//import { EditProfile } from '../edit-profile/edit-profile';
//import { MyProfile } from '../my-profile/my-profile';
//import { Usuario } from '../../pages/usuario/page-usuario'
var Usuarios = /** @class */ (function () {
    function Usuarios(navCtrl, dbFire) {
        this.navCtrl = navCtrl;
        this.dbFire = dbFire;
    }
    Usuarios.prototype.ionViewDidLoad = function () {
        this.usuarios = this.dbFire.list("users/").valueChanges();
    };
    Usuarios.prototype.irParaEditarPerfil = function (event, usuario) {
        this.navCtrl.push("editar-perfil", {
            usuario: usuario,
            is_admin: true
        });
    };
    Usuarios.prototype.irParaPerfil = function (event, usuario) {
        /*this.navCtrl.push(MyProfile, {
          usuario:usuario,
          is_admin:true
        });*/
    };
    Usuarios = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page-usuarios',template:/*ion-inline-start:"/Users/ruddy/_apps/oriente/src/pages/usuarios/page-usuarios.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Usuários</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n<ion-list >\n\n\n <ion-item-sliding #item text-wrap  *ngFor="let usuario of usuarios | async" >\n\n    <ion-item (click)="irParaPerfil($event, usuario)">\n  	<ion-row>\n\n      <ion-col col-3>\n        	<img float-left  margin-right  [src]="usuario.user_photoURL ? usuario.user_photoURL : \'assets/imgs/no_avatar.jpg\'" width="60" height="60" class="circle" />\n      </ion-col>\n\n      <ion-col col-9>\n          <h2> {{usuario.user_displayName}}</h2>\n          <p>{{usuario.user_email}}</p>\n        <p> {{usuario.user_tipo}}</p>\n        </ion-col>\n    </ion-row>\n  </ion-item>\n  \n    <ion-item-options side="right">\n\n        <button color="danger" ion-button outline (click)="irParaEditarPerfil($event, usuario)"><ion-icon  name="create"></ion-icon>Editar</button>\n\n    </ion-item-options>\n\n\n    </ion-item-sliding>\n\n\n</ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ruddy/_apps/oriente/src/pages/usuarios/page-usuarios.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], Usuarios);
    return Usuarios;
}());

//# sourceMappingURL=page-usuarios.js.map

/***/ })

});
//# sourceMappingURL=17.js.map