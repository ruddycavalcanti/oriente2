webpackJsonp([27],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_utils__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AuthProvider = /** @class */ (function () {
    function AuthProvider(afAuth, dbFire, platform, fb, utils, googlePlus, storage, http) {
        var _this = this;
        this.afAuth = afAuth;
        this.dbFire = dbFire;
        this.platform = platform;
        this.fb = fb;
        this.utils = utils;
        this.googlePlus = googlePlus;
        this.storage = storage;
        this.http = http;
        this.afAuth.authState.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    AuthProvider.prototype.signInWithGoogle = function () {
        if (this.platform.is('cordova')) {
            return this.googlePlus.login({
                //  'scopes': 'profile email',
                'webClientId': '1085462696311-2imb89i4t6bu5g14rntl5vnloo6frbl0.apps.googleusercontent.com',
                'offline': true
            }).then(function (res) {
                var googleCredential = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider.credential(res.idToken);
                return __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().signInWithCredential(googleCredential);
            });
        }
        else {
            return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider());
        }
    };
    AuthProvider.prototype.signInWithFacebook = function () {
        if (this.platform.is('cordova')) {
            return this.fb.login(['email', 'public_profile', 'user_birthday', 'user_location', 'user_hometown', 'user_friends', 'user_photos', 'user_likes']).then(function (res) {
                var facebookCredential = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
                return __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().signInWithCredential(facebookCredential);
            });
        }
        else {
            return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider());
        }
    };
    AuthProvider.prototype.loginWithEmail = function (email, senha) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, senha);
    };
    AuthProvider.prototype.signInWithEmail = function (nome, email, senha) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, senha);
    };
    AuthProvider.prototype.updateUserDatabase = function (user_name, user_email, user_foto, user_uid, user_notification, user_tipo) {
        /*
      let post_date = "amanha";
  
  
     let data_registro  = this.utils.getTime; //data de hoje
     let new_user = false;
  
     if(data_registro!=post_date){
        new_user  =  true;
     }
  */
        var email2 = user_email.replace(".", ",");
        return this.dbFire.database.ref("users/" + email2).update({
            user_displayName: user_name,
            user_email: user_email,
            user_photoURL: user_foto,
            user_tipo: user_tipo,
            user_uid: user_uid,
            user_notify: user_notification
        });
    };
    AuthProvider.prototype.verificarInfoDatabase = function (email) {
        var email2 = email.replace(".", ",");
        return this.dbFire.database.ref("/users/" + email2).once("value");
    };
    AuthProvider.prototype.removeUser = function (email) {
        var email2 = email.replace(".", ",");
        return this.dbFire.list("/users/" + email2).remove();
    };
    Object.defineProperty(AuthProvider.prototype, "authenticated", {
        get: function () {
            return this.currentUser !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "currentUserEmail", {
        get: function () {
            return this.currentUser.email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthProvider.prototype, "currentUserId", {
        get: function () {
            return this.authenticated ? this.currentUser.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    AuthProvider.prototype.currentUserInfo = function () {
        var email2 = this.currentUser.email.replace(".", ",");
        return this.dbFire.database.ref("/users/" + email2).once("value");
    };
    AuthProvider.prototype.signOut = function () {
        this.storage.set('email', "");
        this.storage.set("is_admin", "");
        return this.afAuth.auth.signOut();
    };
    AuthProvider.prototype.recoverPass = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.getCredentials = function (email, currentPass) {
        var credential = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].EmailAuthProvider.credential(email, currentPass);
        return this.afAuth.auth.signInWithCredential(credential);
    };
    AuthProvider.prototype.changePass = function (newPass) {
        var user = this.afAuth.auth.currentUser;
        return user.updatePassword(newPass);
    };
    AuthProvider.prototype.uploadPhotoStorage = function (user_image, user_email) {
        var email2 = user_email.replace(".", ",");
        var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["storage"]().ref();
        var imageRef = storageRef.child('images/perfil/' + email2 + '.jpg');
        return imageRef.putString(user_image, __WEBPACK_IMPORTED_MODULE_4_firebase_app__["storage"].StringFormat.DATA_URL);
    };
    AuthProvider.prototype.updatePhotoDb = function (user_image, user_email) {
        var email2 = user_email.replace(".", ",");
        return this.dbFire.database.ref("users/" + email2).update({
            user_image: user_image
        });
    };
    /*
    removeAccount(){
  
      var user = firebase.auth().currentUser;
      var credential;
  
      user.reauthenticateWithCredential(credential);
         return user.delete();
    }
    */
    AuthProvider.prototype.getInstagramUserInfo = function () {
        //let client_id = 'd716ba37049b4593981d845f392dfc62';
        //let redirect_url = 'http://192.168.25.4:8104/';
        //let client_secret = 'befd89adccfb43ec94ddfddc1842279c';
        //let url = "https://api.instagram.com/oauth/access_token?client_id=" + client_id + "&client_secret="  + client_secret + "&code=" +response
        // + "&grant_type=authorization_code&redirect_uri" +redirect_url;
        //224825177.d716ba3.4aa044916c26402c9ae3ed3ff47c6dac
        var instaToken = '224825177.d716ba3.4aa044916c26402c9ae3ed3ff47c6dac';
        /* return this.http.get(url).map((res) => {
             console.log(res.json());
            return res.json();
          }) */
        //https://api.instagram.com/oauth/access_token&client_id=d716ba37049b4593981d845f392dfc62&client_secret=  code=
        //GET USER PHOTOS
        return this.http.get('https://api.instagram.com/v1/users/self/media/recent?access_token=' + instaToken + '&count=50');
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_6__utils_utils__["a" /* Utils */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Http */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth-provider.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Utils = /** @class */ (function () {
    function Utils() {
        this.horaCadastro = '';
        this.month = '';
    }
    Object.defineProperty(Utils.prototype, "getDataAtual", {
        get: function () {
            var date = new Date();
            var dia;
            var diaNumber = date.getDate();
            if (diaNumber < 10) {
                dia = diaNumber;
                dia = '0' + dia;
            }
            else {
                dia = date.getDate();
            }
            var mes;
            var mesNumber = date.getMonth() + 1;
            if (mesNumber < 10) {
                mes = mesNumber;
                mes = '0' + mes;
            }
            else {
                mes = date.getMonth() + 1;
            }
            var ano = date.getFullYear();
            return this.horaCadastro = ano + "-" + mes + "-" + dia;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Utils.prototype, "getTime", {
        get: function () {
            var date = new Date();
            var horaAtual = date.getHours();
            var minutoAtual;
            var minutoAtualNumber = date.getMinutes();
            if (minutoAtualNumber < 10) {
                minutoAtual = minutoAtualNumber;
                minutoAtual = '0' + minutoAtual;
            }
            else {
                minutoAtual = date.getMinutes();
            }
            var segundoAtual;
            var segundoAtualNumber = date.getSeconds();
            if (segundoAtualNumber < 10) {
                segundoAtual = segundoAtualNumber;
                segundoAtual = '0' + segundoAtual;
            }
            else {
                segundoAtual = date.getSeconds();
            }
            var dia;
            var diaNumber = date.getDate();
            if (diaNumber < 10) {
                dia = diaNumber;
                dia = '0' + dia;
            }
            else {
                dia = date.getDate();
            }
            var mes;
            var mesNumber = date.getMonth() + 1;
            if (mesNumber < 10) {
                mes = mesNumber;
                mes = '0' + mes;
            }
            else {
                mes = date.getMonth() + 1;
            }
            var ano = date.getFullYear();
            return this.horaCadastro = dia + "/" + mes + "/" + ano + " " + horaAtual + ":" + minutoAtual + ":" + segundoAtual;
        },
        enumerable: true,
        configurable: true
    });
    Utils = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Utils);
    return Utils;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-edit-destaques/add-edit-destaques.module": [
		380,
		14
	],
	"../pages/add-edit-musicas/add-edit-musicas.module": [
		382,
		12
	],
	"../pages/add-edit-noticias/add-edit-noticias.module": [
		381,
		10
	],
	"../pages/add-edit-shows/add-edit-shows.module": [
		383,
		3
	],
	"../pages/add-edit-videos/add-edit-videos.module": [
		384,
		1
	],
	"../pages/add-music-to-playlist/add-music-to-playlist.module": [
		385,
		8
	],
	"../pages/category-musicas/category-musicas.module": [
		386,
		11
	],
	"../pages/category-noticias/category-noticias.module": [
		388,
		9
	],
	"../pages/category-shows/category-shows.module": [
		387,
		2
	],
	"../pages/category-videos/category-videos.module": [
		389,
		0
	],
	"../pages/configuracoes/configuracoes.module": [
		390,
		15
	],
	"../pages/edit-profile/edit-profile.module": [
		392,
		26
	],
	"../pages/forget-password/forget-password.module": [
		391,
		25
	],
	"../pages/home/home.module": [
		393,
		13
	],
	"../pages/local/local.module": [
		394,
		24
	],
	"../pages/login/login.module": [
		395,
		6
	],
	"../pages/my-profile/my-profile.module": [
		396,
		5
	],
	"../pages/player/player.module": [
		397,
		23
	],
	"../pages/playlist/playlist.module": [
		398,
		22
	],
	"../pages/playlists/playlists.module": [
		399,
		7
	],
	"../pages/register/register.module": [
		400,
		4
	],
	"../pages/single-musica/single-musica.module": [
		401,
		21
	],
	"../pages/single-noticia/single-noticia.module": [
		403,
		16
	],
	"../pages/single-show/single-show.module": [
		402,
		20
	],
	"../pages/single-video/single-video.module": [
		404,
		19
	],
	"../pages/tabs/tabs.module": [
		405,
		18
	],
	"../pages/usuarios/page-usuarios.module": [
		406,
		17
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 172;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(265);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firebase_config__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_provider__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_facebook__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_google_plus__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_utils__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_media__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//import { AngularFirestoreModule } from 'angularfire2/firestore';
//import { FcmProvider } from '../providers/fcm';









//import { FCM } from '@ionic-native/fcm';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-edit-destaques/add-edit-destaques.module#AddEditDestaquesModule', name: 'edit-destaques', segment: 'edit-destaques', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-edit-noticias/add-edit-noticias.module#AddEditNoticiasModule', name: 'edit-noticias', segment: 'edit-noticias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-edit-musicas/add-edit-musicas.module#AddEditMusicaPageModule', name: 'edit-musicas', segment: 'edit-musicas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-edit-shows/add-edit-shows.module#AddEditShowsModule', name: 'edit-shows', segment: 'edit-shows', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-edit-videos/add-edit-videos.module#AddEditDestaquesModule', name: 'edit-videos', segment: 'edit-videos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-music-to-playlist/add-music-to-playlist.module#AddMusicToPlaylistModule', name: 'add-to-playlist', segment: 'add-to-playlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category-musicas/category-musicas.module#CategoryMusicasPageModule', name: 'musicas', segment: 'musicas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category-shows/category-shows.module#ShowsPageModule', name: 'shows', segment: 'shows', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category-noticias/category-noticias.module#CategoryNoticiasPageModule', name: 'noticias', segment: 'noticias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category-videos/category-videos.module#CategoryVideosPageModule', name: 'videos', segment: 'videos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configuracoes/configuracoes.module#ConfiguracoesModule', name: 'configuracoes', segment: 'configuracoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forget-password/forget-password.module#ForgetPasswordPageModule', name: 'esqueceu-senha', segment: 'esqueceu-senha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfileModule', name: 'editar-perfil', segment: 'editar-perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'home', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/local/local.module#LocalModule', name: 'local', segment: 'local', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'login', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-profile/my-profile.module#MyProfileModule', name: 'perfil', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/player/player.module#ConfiguracoesModule', name: 'player', segment: 'player', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/playlist/playlist.module#PlaylistModule', name: 'playlist', segment: 'playlist/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/playlists/playlists.module#PlaylistsModule', name: 'playlists', segment: 'playlists', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'registro', segment: 'registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/single-musica/single-musica.module#SingleMusicaPageModule', name: 'musica', segment: 'musica/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/single-show/single-show.module#SingleShowPageModule', name: 'show', segment: 'show/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/single-noticia/single-noticia.module#SingleNoticiaPageModule', name: 'noticia', segment: 'noticia/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/single-video/single-video.module#SingleVideoPageModule', name: 'video', segment: 'video/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'tabs', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usuarios/page-usuarios.module#UsuariosModule', name: 'usuarios', segment: 'usuarios', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__firebase_config__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["b" /* AngularFireAuthModule */],
                //AngularFirestoreModule,
                __WEBPACK_IMPORTED_MODULE_19__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_11__providers_auth_provider__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_14__utils_utils__["a" /* Utils */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_media__["a" /* Media */],
                // FcmProvider,
                //Firebase,
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_media__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_provider__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import { FcmProvider } from '../providers/fcm';
//import { tap } from 'rxjs/operators';
var file;
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, iab, authProvider, events, media, alertCtrl, toastCtrl
        //,public fcm:FcmProvider
    ) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.iab = iab;
        this.authProvider = authProvider;
        this.events = events;
        this.media = media;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.rootPage = "login";
        this.is_admin = false;
        this.habilitarPlayer = false;
        this.botaoPause = false;
        this.botaoPlay = true;
        this.botaoRefresh = true;
        this.botaoRepeat = false;
        this.botaoShuffle = false;
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            if (_this.platform.is('cordova')) {
                _this.getFcmToken();
            }
            _this.platform.registerBackButtonAction(function () {
                _this.presentConfirm();
            }, 100);
            var unsubscribe = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a
                .auth()
                .onAuthStateChanged(function (user) {
                if (user) {
                    _this.rootPage = "home";
                    _this.email = user.email;
                    unsubscribe();
                }
                else {
                    _this.rootPage = "login";
                    unsubscribe();
                }
            });
            _this.pages = [
                { title: 'Home', component: "home", icon: 'home' },
                { title: 'Agenda de Shows', component: "shows", icon: 'calendar' },
                { title: 'Vídeos', component: "videos", icon: 'film' },
                { title: 'Notícias', component: "noticias", icon: 'paper' },
                { title: 'Músicas', component: "tabs", icon: 'headset' },
                { title: 'Loja Virtual', component: "Loja Virtual", icon: 'cart' },
                { title: 'Meu Perfil', component: "perfil", icon: 'person' },
                { title: 'Usuários', component: "usuarios", icon: 'people' },
                { title: 'Configurações', component: "configuracoes", icon: 'settings' }
            ];
        });
        this.events.subscribe('musica:played', function (musica_artista, musica_nome, musica_url, habilitar_player) {
            _this.musica_artista = musica_artista;
            _this.musica_nome = musica_nome;
            _this.musica_url = musica_url;
            _this.habilitarPlayer = habilitar_player;
            if (musica_artista != undefined) {
                _this.tocarMusicaAoAbrir(musica_url);
            }
        });
    };
    MyApp.prototype.ionViewDidLoad = function () {
    };
    MyApp.prototype.tocarMusicaAoAbrir = function (musica_url) {
        if (file != undefined) {
            file.release();
        }
        else {
            file = this.media.create(musica_url);
        }
        if (this.media != undefined) {
            file = this.media.create(musica_url);
            file.play();
            this.botaoPause = true;
            this.botaoPlay = false;
        }
    };
    MyApp.prototype.tocarMusica = function () {
        if (file != undefined) {
            file.play();
            this.botaoPause = true;
            this.botaoPlay = false;
        }
    };
    MyApp.prototype.pausarMusica = function () {
        if (file != undefined) {
            file.pause();
            this.botaoPause = false;
            this.botaoPlay = true;
        }
    };
    MyApp.prototype.refresh = function () {
        this.botaoRefresh = false;
        this.botaoRepeat = true;
        this.botaoShuffle = false;
    };
    MyApp.prototype.repeat = function () {
        this.botaoRefresh = false;
        this.botaoRepeat = false;
        this.botaoShuffle = true;
    };
    MyApp.prototype.shuffle = function () {
        this.botaoRefresh = true;
        this.botaoRepeat = false;
        this.botaoShuffle = false;
    };
    MyApp.prototype.anterior = function () {
    };
    MyApp.prototype.proximo = function () {
        // skip to 10 seconds (expects int value in ms)
        file.seekTo(20000);
    };
    MyApp.prototype.share = function () {
        //this.socialSharing.share();
    };
    MyApp.prototype.openLojaVirtual = function () {
        var options = {
            zoom: 'no',
            hidden: 'yes',
            location: 'yes'
        };
        var website = 'https://bocadooriente.com/';
        var browser = this.iab.create(website, "_blank", options);
        browser.show();
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.component == "Loja Virtual") {
            this.openLojaVirtual();
        }
        else {
            this.nav.setRoot(page.component);
        }
    };
    MyApp.prototype.presentConfirm = function () {
        var _this = this;
        this.alertCtrl.create({
            title: 'Oriente APP',
            message: 'Você deseja sair do aplicativo?',
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        _this.platform.exitApp();
                        console.log('Sim clicked');
                    }
                }
            ]
        }).present();
    };
    MyApp.prototype.getFcmToken = function () {
        /*  this.fcm.getToken();
     
         this.fcm.listenToNotifications().pipe(
           tap(msg =>{
             const toast = this.toastCtrl.create({
               message: msg.body,
               duration:5000
             });
             toast.present();
           })
         ).subscribe()  */
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/ruddy/_apps/oriente/src/app/app.html"*/'<ion-menu [content]="content">\n\n    <ion-header >\n\n      <ion-toolbar  color="dark">\n\n\n       <div text-center>\n          <p  >\n              <img src="assets/imgs/logo.png" width="80"></p>\n\n          <p ></p>\n       </div> \n\n      </ion-toolbar>\n\n    </ion-header>\n\n\n    <ion-navbar color="dark"></ion-navbar>\n    <ion-content>\n      <ion-list no-lines>\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{p.title}}\n          <ion-icon [name]="p.icon" item-left></ion-icon>\n        </button>\n      </ion-list>\n    </ion-content>\n \n  </ion-menu>\n  \n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n\n  <ion-footer  class="playerGlobal">\n   \n      <ion-icon  *ngIf="habilitarPlayer"  float-right (click)="habilitarPlayer = !habilitarPlayer" class=\'esconderBotao\' name="arrow-dropdown-circle"></ion-icon>\n      <ion-icon   *ngIf="!habilitarPlayer"  (click)="habilitarPlayer = !habilitarPlayer" float-right class=\'exibirBotao\' name="arrow-dropup-circle"></ion-icon>\n\n     <div padding class="playerGlobalCont" *ngIf="habilitarPlayer">\n\n     <p>{{musica_nome}} <span *ngIf="musica_artista">- {{musica_artista}}</span></p>\n\n\n			<div class="tempo" *ngIf="mediaTimer!=\'0\'">\n				<span float-left>{{mediaTimer}}</span>\n\n				<span float-right>{{duracao}}</span>\n			  </div>\n		\n	\n			  <div  class="tempoDrag" >\n			  <ion-range [(ngModel)]="mediaTimer">  </ion-range>\n			</div>\n\n      <ion-grid>\n				<ion-row>\n				  <ion-col>\n				 <ion-icon  *ngIf="botaoRefresh"  margin-right  name=\'refresh\' (click)="refresh()"></ion-icon>\n		\n					   <ion-icon *ngIf="botaoRepeat"  margin-right   name=\'repeat\' (click)="repeat()"></ion-icon>\n		\n									<ion-icon  *ngIf="botaoShuffle"  margin-right  name=\'shuffle\' (click)="shuffle()"></ion-icon>\n				   </ion-col>\n		\n				  <ion-col>\n							<ion-icon margin-right name=\'ios-skip-backward\' (click)="anterior()"></ion-icon>\n				  </ion-col>\n		\n				  <ion-col>\n				  	<ion-icon  *ngIf="botaoPause" margin-right name=\'pause\' (click)="pausarMusica()"></ion-icon>\n		\n							<ion-icon *ngIf="botaoPlay"  margin-right name=\'play\' (click)="tocarMusica()"></ion-icon>\n				  </ion-col>\n		\n				  <ion-col>\n							<ion-icon margin-right name=\'ios-skip-forward\' (click)="proximo()"></ion-icon>\n				  </ion-col>\n		\n				  <ion-col>\n							<ion-icon   name=\'heart\' (click)="share()"></ion-icon>\n				  </ion-col>\n		\n				</ion-row>\n        </ion-grid>\n        \n      </div> \n		  \n   \n  </ion-footer>'/*ion-inline-end:"/Users/ruddy/_apps/oriente/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_7__providers_auth_provider__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_media__["a" /* Media */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]
            //,public fcm:FcmProvider
        ])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyBe8To91xb8vTTk4RzS-jSK4KWWtHHiW4w",
    authDomain: "brartist-c47d3.firebaseapp.com",
    databaseURL: "https://brartist-c47d3.firebaseio.com",
    projectId: "brartist-c47d3",
    storageBucket: "brartist-c47d3.appspot.com",
    messagingSenderId: "1085462696311"
};
//# sourceMappingURL=firebase.config.js.map

/***/ })

},[245]);
//# sourceMappingURL=main.js.map