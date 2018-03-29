webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_registration_component__ = __webpack_require__("./src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feed_feed_component__ = __webpack_require__("./src/app/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__limb_list_limb_list_component__ = __webpack_require__("./src/app/limb-list/limb-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authentication_lander_authentication_lander_component__ = __webpack_require__("./src/app/authentication-lander/authentication-lander.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__verify_email_verify_email_component__ = __webpack_require__("./src/app/verify-email/verify-email.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'feed', component: __WEBPACK_IMPORTED_MODULE_4__feed_feed_component__["a" /* FeedComponent */] },
    { path: 'profile/:username', component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'limbListTest', component: __WEBPACK_IMPORTED_MODULE_6__limb_list_limb_list_component__["a" /* LimbListComponent */] },
    { path: 'auth', component: __WEBPACK_IMPORTED_MODULE_7__authentication_lander_authentication_lander_component__["a" /* AuthenticationLanderComponent */] },
    { path: 'auth/:code/:state', component: __WEBPACK_IMPORTED_MODULE_7__authentication_lander_authentication_lander_component__["a" /* AuthenticationLanderComponent */] },
    { path: 'verify', component: __WEBPACK_IMPORTED_MODULE_8__verify_email_verify_email_component__["a" /* VerifyEmailComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_embed_video__ = __webpack_require__("./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_embed_video___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_embed_video__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__side_bar_side_bar_component__ = __webpack_require__("./src/app/side-bar/side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__registration_registration_component__ = __webpack_require__("./src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__limb_limb_component__ = __webpack_require__("./src/app/limb/limb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__feed_feed_component__ = __webpack_require__("./src/app/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__limb_body_limb_body_component__ = __webpack_require__("./src/app/limb-body/limb-body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__limb_list_limb_list_component__ = __webpack_require__("./src/app/limb-list/limb-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__like_like_component__ = __webpack_require__("./src/app/like/like.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_photo_profile_photo_component__ = __webpack_require__("./src/app/profile-photo/profile-photo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__new_limb_modal_new_limb_modal_component__ = __webpack_require__("./src/app/new-limb-modal/new-limb-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__auth_authentication_service__ = __webpack_require__("./src/app/auth/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__edit_limb_edit_limb_component__ = __webpack_require__("./src/app/edit-limb/edit-limb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__change_photo_change_photo_component__ = __webpack_require__("./src/app/change-photo/change-photo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__authentication_lander_authentication_lander_component__ = __webpack_require__("./src/app/authentication-lander/authentication-lander.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__backend_backend_service__ = __webpack_require__("./src/app/backend/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__node_modules_angular4_datepicker_src_my_date_picker__ = __webpack_require__("./node_modules/angular4-datepicker/src/my-date-picker/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__limb_media_modal_limb_media_modal_component__ = __webpack_require__("./src/app/limb-media-modal/limb-media-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__verify_email_verify_email_component__ = __webpack_require__("./src/app/verify-email/verify-email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__settings_settings_component__ = __webpack_require__("./src/app/settings/settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__side_bar_side_bar_component__["a" /* SideBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_9__limb_limb_component__["a" /* LimbComponent */],
                __WEBPACK_IMPORTED_MODULE_10__feed_feed_component__["a" /* FeedComponent */],
                __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__limb_body_limb_body_component__["a" /* LimbBodyComponent */],
                __WEBPACK_IMPORTED_MODULE_13__limb_list_limb_list_component__["a" /* LimbListComponent */],
                __WEBPACK_IMPORTED_MODULE_14__like_like_component__["a" /* LikeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_16__profile_photo_profile_photo_component__["a" /* ProfilePhotoComponent */],
                __WEBPACK_IMPORTED_MODULE_17__new_limb_modal_new_limb_modal_component__["a" /* NewLimbModalComponent */],
                __WEBPACK_IMPORTED_MODULE_19__edit_limb_edit_limb_component__["a" /* EditLimbComponent */],
                __WEBPACK_IMPORTED_MODULE_20__change_photo_change_photo_component__["a" /* ChangePhotoComponent */],
                __WEBPACK_IMPORTED_MODULE_21__authentication_lander_authentication_lander_component__["a" /* AuthenticationLanderComponent */],
                __WEBPACK_IMPORTED_MODULE_26__limb_media_modal_limb_media_modal_component__["a" /* LimbMediaModalComponent */],
                __WEBPACK_IMPORTED_MODULE_27__verify_email_verify_email_component__["a" /* VerifyEmailComponent */],
                __WEBPACK_IMPORTED_MODULE_28__settings_settings_component__["a" /* SettingsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_embed_video__["EmbedVideo"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_24__node_modules_angular4_datepicker_src_my_date_picker__["a" /* MyDatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__auth_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_22__backend_backend_service__["a" /* BackendService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__new_limb_modal_new_limb_modal_component__["a" /* NewLimbModalComponent */],
                __WEBPACK_IMPORTED_MODULE_19__edit_limb_edit_limb_component__["a" /* EditLimbComponent */],
                __WEBPACK_IMPORTED_MODULE_20__change_photo_change_photo_component__["a" /* ChangePhotoComponent */],
                __WEBPACK_IMPORTED_MODULE_26__limb_media_modal_limb_media_modal_component__["a" /* LimbMediaModalComponent */],
                __WEBPACK_IMPORTED_MODULE_28__settings_settings_component__["a" /* SettingsComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appSettings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appSettings; });
var appSettings = /** @class */ (function () {
    function appSettings() {
    }
    appSettings.ANGULAR_URL = 'http://35.185.104.21:8085/';
    appSettings.BACKEND_URL = 'http://35.185.104.21:8085/';
    return appSettings;
}());



/***/ }),

/***/ "./src/app/auth/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_auth0_js__ = __webpack_require__("./node_modules/auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_auth0_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__("./src/app/appSettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__backend_backend_service__ = __webpack_require__("./src/app/backend/backend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(router, server) {
        this.router = router;
        this.server = server;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_2_auth0_js__["WebAuth"]({
            clientID: '0ALaNaZnhA2AYZfI1OnEnjXsW9DBc7bL',
            domain: 'revature-limbo.auth0.com',
            responseType: 'token id_token',
            audience: 'https://revature-limbo.auth0.com/userinfo',
            redirectUri: __WEBPACK_IMPORTED_MODULE_3__appSettings__["a" /* appSettings */].ANGULAR_URL + 'auth',
            scope: 'openid email'
        });
    }
    AuthenticationService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthenticationService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
            }
            else if (err) {
                _this.router.navigate(['/verify']);
                console.log(err);
                _this.router.navigate(['/login']);
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
    };
    AuthenticationService.prototype.setSession = function (authResult) {
        // Set the time that the Access Token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        this.setProfile();
    };
    AuthenticationService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // Access Token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    AuthenticationService.prototype.getProfile = function (cb) {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                self.userProfile = profile;
            }
            cb(err, profile);
        });
    };
    AuthenticationService.prototype.setProfile = function () {
        var _this = this;
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                self.userProfile = profile;
                localStorage.setItem('profile', JSON.stringify(profile));
                _this.initializeUser();
            }
        });
    };
    AuthenticationService.prototype.initializeUser = function () {
        var _this = this;
        var userProfile = { email: '' };
        var profile = localStorage.getItem('profile');
        userProfile = JSON.parse(profile);
        //this.userEmail = userProfile.email;
        var postResult = this.server.getUserByEmail(userProfile.email).subscribe(function (res) {
            var user = res;
            console.log(user);
            if (!user.lastName) {
                _this.router.navigate(['register']);
            }
            localStorage.setItem('username', user.username);
            localStorage.setItem('userObject', JSON.stringify(user));
        });
        localStorage.setItem('email', userProfile.email);
        this.router.navigate(['feed']);
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__backend_backend_service__["a" /* BackendService */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/authentication-lander/authentication-lander.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/authentication-lander/authentication-lander.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Don't wait. Authenticate.\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/authentication-lander/authentication-lander.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationLanderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_authentication_service__ = __webpack_require__("./src/app/auth/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backend_backend_service__ = __webpack_require__("./src/app/backend/backend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationLanderComponent = /** @class */ (function () {
    function AuthenticationLanderComponent(auth, router, server) {
        this.auth = auth;
        this.router = router;
        this.server = server;
        this.auth.handleAuthentication();
    }
    AuthenticationLanderComponent.prototype.ngOnInit = function () {
    };
    AuthenticationLanderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-authentication-lander',
            template: __webpack_require__("./src/app/authentication-lander/authentication-lander.component.html"),
            styles: [__webpack_require__("./src/app/authentication-lander/authentication-lander.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__backend_backend_service__["a" /* BackendService */]])
    ], AuthenticationLanderComponent);
    return AuthenticationLanderComponent;
}());



/***/ }),

/***/ "./src/app/backend/backend.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appSettings__ = __webpack_require__("./src/app/appSettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var acceptHeader = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Accept': 'application/json' })
};
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ImagehttpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'multipart/form-data' })
};
var BackendService = /** @class */ (function () {
    function BackendService(http, router) {
        this.http = http;
        this.router = router;
        this.users = this.getAllUsers();
    }
    BackendService.prototype.postLimb = function (limb, username) {
        var url = __WEBPACK_IMPORTED_MODULE_4__appSettings__["a" /* appSettings */].BACKEND_URL + 'boers/' + username + '/limbs/new';
        return this.http.post(url, JSON.stringify(limb), httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('postLimb', [])));
    };
    BackendService.prototype.postNewUser = function (user) {
        var url = __WEBPACK_IMPORTED_MODULE_4__appSettings__["a" /* appSettings */].BACKEND_URL + 'boers/new';
        return this.http.post(url, user, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('postNewUser', [])));
    };
    BackendService.prototype.postUpdateUser = function (user) {
        var url = __WEBPACK_IMPORTED_MODULE_4__appSettings__["a" /* appSettings */].BACKEND_URL + 'boers/update';
        return this.http.post(url, user, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('postNewUser', [])));
    };
    BackendService.prototype.postUpdateLimb = function (limb, username) {
        var url = __WEBPACK_IMPORTED_MODULE_4__appSettings__["a" /* appSettings */].BACKEND_URL + 'boers/' + username + "/limbs/update";
        return this.http.post(url, limb, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('postUpdateLimb', [])));
    };
    BackendService.prototype.getAllUsers = function () {
        var url = __WEBPACK_IMPORTED_MODULE_4__appSettings__["a" /* appSettings */].BACKEND_URL + 'boers';
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getAllUsers', [])));
    };
    BackendService.prototype.getAllLimbs = function () {
        var url = __WEBPACK_IMPORTED_MODULE_4__appSettings__["a" /* appSettings */].BACKEND_URL + 'limbs/';
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getAllLimbs', [])));
    };
    BackendService.prototype.getLimbsByUserName = function (username) {
        var url = __WEBPACK_IMPORTED_MODULE_4__appSettings__["a" /* appSettings */].BACKEND_URL + 'boers/' + username + '/limbs';
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getLimbsByUsername', [])));
    };
    // The original getUserByUsername
    BackendService.prototype.getUserByUsername = function (username) {
        var url = __WEBPACK_IMPORTED_MODULE_4__appSettings__["a" /* appSettings */].BACKEND_URL + 'boers/' + username;
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getUser', [])));
    };
    BackendService.prototype.getUserByEmail = function (fetchedEmail) {
        var url = __WEBPACK_IMPORTED_MODULE_4__appSettings__["a" /* appSettings */].BACKEND_URL + 'boers/email';
        var userEmail = {
            email: fetchedEmail
        };
        return this.http.post(url, userEmail, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleUserNotFoundError('ErrorFindingUser')));
    };
    BackendService.prototype.doLike = function (userName, limbId) {
        var url = __WEBPACK_IMPORTED_MODULE_4__appSettings__["a" /* appSettings */].BACKEND_URL + "limbs/" + limbId + '/' + userName + '/1';
        console.log(url);
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('doLike', [])));
    };
    BackendService.prototype.uploadPhoto = function (userName, imageType, file) {
        //let form : Form = new Form();
        var formData = new FormData();
        formData.append('inputImg', file, file.name);
        var url = __WEBPACK_IMPORTED_MODULE_4__appSettings__["a" /* appSettings */].BACKEND_URL + 'boers/' + userName;
        if (imageType == "Profile") {
            url += '/profile-img';
        }
        else if (imageType == "Cover") {
            url += '/cover-img';
        }
        else {
            url = __WEBPACK_IMPORTED_MODULE_4__appSettings__["a" /* appSettings */].BACKEND_URL + 'upload';
        }
        return this.http.post(url, formData)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('uploadPhoto', [])));
    };
    BackendService.prototype.searchUsers = function (term) {
        console.log(term);
        if (!term) {
            term = "garbled junk that isn't a username!!!";
        }
        return this.users.map(function (users) { return users.filter(function (user) { return user.username.includes(term); }); });
    };
    BackendService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    BackendService.prototype.handleUserNotFoundError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.router.navigate(['register']);
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    BackendService.prototype.deleteLimb = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_4__appSettings__["a" /* appSettings */].BACKEND_URL + "limbs/" + id;
        console.log(url);
        return this.http.delete(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('deleteLimb', [])));
    };
    BackendService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], BackendService);
    return BackendService;
}());



/***/ }),

/***/ "./src/app/change-photo/change-photo.component.css":
/***/ (function(module, exports) {

module.exports = ".center{\r\n    width: 50%;\r\n    margin: auto;\r\n    text-align: center;\r\n    margin-top: 5%;\r\n}\r\n\r\n.photo-size{\r\n    height: 180px;\r\n    width: 180px;\r\n    margin: auto;\r\n}\r\n\r\n.modal-container {\r\n    height: auto;\r\n    width: auto;\r\n    padding: 5%;\r\n    background: #314455;\r\n    border: none;\r\n    /* For browsers that do not support gradients */\r\n    /* For Safari 5.1 to 6.0 */\r\n    /* For Opera 11.1 to 12.0 */\r\n    /* For Firefox 3.6 to 15 */\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#314455), color-stop(#314455), to(#644E5B));\r\n    background: linear-gradient(#314455, #314455, #644E5B);\r\n}\r\n\r\n.modal-title {\r\n    color: #ffffff;\r\n    font-family: Fontin-Sans-SmallCaps;\r\n}\r\n\r\ntextarea {\r\n    height: 100px;\r\n    resize: vertical;\r\n\r\n}\r\n\r\n#limbTextArea {\r\n    font-family: FontAwesome, \"Open Sans\", Verdana, sans-serif;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    text-decoration: inherit;\r\n}\r\n\r\n.form-control{\r\n    border-color: #644E5B;\r\n    border: 2px solid;\r\n    color: #644E5B;\r\n}\r\n\r\n.form-control:focus{\r\n    border-color: #97aabd;\r\n    -webkit-box-shadow: 0 1px 1px #97aabd inset, 0 0 8px #97aabd;\r\n            box-shadow: 0 1px 1px #97aabd inset, 0 0 8px #97aabd;\r\n    color: #97aabd;\r\n}\r\n\r\n/* Hiding the ugly input */\r\n\r\n.inputfile {\r\n\twidth: 0.1px;\r\n\theight: 0.1px;\r\n\topacity: 0;\r\n\toverflow: hidden;\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n}\r\n\r\n.inputfile + label {\r\n\tcursor: pointer; /* \"hand\" cursor */\r\n}\r\n\r\n.file-btn{\r\n    color: #97AABD;\r\n    background: #314455;\r\n    border: 1px solid #97AABD;\r\n    padding: 3px 10px;\r\n    border-radius: 25px;\r\n   \r\n}\r\n\r\n.form-group-custom {\r\n    text-align: center;\r\n}\r\n\r\n.file-btn:hover {\r\n    color: #314455;\r\n    background: #97AABD;\r\n}\r\n\r\n.file-input-center {\r\n    width:50%;\r\n    margin: auto;\r\n    margin-top: 5%;\r\n    \r\n}\r\n\r\n/* button customization */\r\n\r\n.btn-custom{\r\n    border-radius: 5px;\r\n    width: 80px;\r\n    height: 40px;\r\n}\r\n\r\n.btn-form {\r\n    border: 2px solid #644E5B;\r\n    color: #ffffff;\r\n    background: #644E5B;\r\n  \r\n}\r\n\r\n.btn-form:hover, .btn-form:focus {\r\n    color: #ffffff;\r\n    border-color: #314455;\r\n    background-color: #314455;\r\n}\r\n\r\n.left-btn {\r\n    display: inline-block;\r\n    /* padding-left: 15%; */\r\n}\r\n\r\n.right-btn {\r\n    display: inline-block;\r\n    position:absolute;\r\n    right: 5%;\r\n    /* margin-right: 10px;\r\n    margin-bottom: 10px; */\r\n}\r\n\r\n.post-content {\r\n    width: 80%;\r\n    margin:auto;\r\n    margin-top: 5%;\r\n}"

/***/ }),

/***/ "./src/app/change-photo/change-photo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-container\">\r\n  <h2 class=\"modal-title\">\r\n    Update Your {{type}} Photo\r\n  </h2>\r\n\r\n  <div>\r\n    <div class=\"center\">\r\n      <div class=\"photo-size\">\r\n        <app-profile-photo [url]=\"url\"></app-profile-photo>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <form id=\"imageUploadForm\">\r\n      <div class=\"file-input-center\">\r\n        <div class=\"form-group-custom\">\r\n          <input type=\"file\" name=\"inputImg\" id=\"newProfileImg\" class=\"inputfile\" (change)=\"changeLabel()\" />\r\n          <label for=\"newProfileImg\" id=\"inputImgLabel\" class=\"file-btn\">\r\n            <i class=\"fa fa-upload\" style=\"padding-right:.5em\"></i> New Image</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"left-btn\">\r\n        <button type=\"button\" id=\"cancelBtn\" class=\"btn-custom btn-form\" (click)=\"closeModal()\">Cancel</button>\r\n      </div>\r\n      <div class=\"right-btn\">\r\n        <button type=\"button\" id=\"submitBtn\" class=\"btn-custom btn-form\" (click)=\"submitPhoto()\" >Update!</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/change-photo/change-photo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePhotoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backend_backend_service__ = __webpack_require__("./src/app/backend/backend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePhotoComponent = /** @class */ (function () {
    function ChangePhotoComponent(activeModal, sanitizer, server) {
        this.activeModal = activeModal;
        this.sanitizer = sanitizer;
        this.server = server;
    }
    ChangePhotoComponent.prototype.ngOnInit = function () {
        // console.log(this.type);
        // if(this.type == "Profile"){
        //   this.url = "/assets/images/cat.png";
        // } else if (this.type == 'Cover'){
        //   this.url =  "/assets/images/kitten_background.png";
        // } else {
        //   this.url = "/assets/images/kitten_background.png";
        // }
        // The above may work if i send a regular url from the database
        // console.log("change-photo this.url inside ngOnInit: " + this.url);
    };
    ChangePhotoComponent.prototype.closeModal = function () {
        this.activeModal.close();
    };
    ChangePhotoComponent.prototype.changeLabel = function () {
        var input;
        var files = [];
        var filename;
        input = document.getElementById("newProfileImg");
        files = input.files;
        filename = files[0].name;
        var label;
        document.getElementById("inputImgLabel").innerHTML = '<i class="fa fa-upload" style="padding-right:.5em"></i>' + filename;
        this.url = window.URL.createObjectURL(files[0]);
    };
    ChangePhotoComponent.prototype.submitPhoto = function () {
        var _this = this;
        var input;
        var files = [];
        var filename;
        input = document.getElementById("newProfileImg");
        files = input.files;
        var theFile = files[0];
        //formData.append()
        if (this.type == "Profile") {
            this.server.uploadPhoto(localStorage.getItem('username'), 'Profile', theFile).subscribe(function (res) {
                _this.updateUser();
            });
        }
        else if (this.type == "Cover") {
            this.server.uploadPhoto(localStorage.getItem('username'), 'Cover', theFile).subscribe(function (res) {
                _this.updateUser();
            });
        }
        this.closeModal();
    };
    ChangePhotoComponent.prototype.updateUser = function () {
        //get new user object with update image urls
        this.server.getUserByUsername(localStorage.getItem('userName')).subscribe(function (res) {
            var user = res;
            localStorage.setItem('userObject', JSON.stringify(user));
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChangePhotoComponent.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChangePhotoComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChangePhotoComponent.prototype, "url", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChangePhotoComponent.prototype, "newImage", void 0);
    ChangePhotoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-change-photo',
            template: __webpack_require__("./src/app/change-photo/change-photo.component.html"),
            styles: [__webpack_require__("./src/app/change-photo/change-photo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"], __WEBPACK_IMPORTED_MODULE_3__backend_backend_service__["a" /* BackendService */]])
    ], ChangePhotoComponent);
    return ChangePhotoComponent;
}());



/***/ }),

/***/ "./src/app/edit-limb/edit-limb.component.css":
/***/ (function(module, exports) {

module.exports = ".modal-container {\r\n    height: auto;\r\n    width: 500px;\r\n    padding: 20px;\r\n   \r\n    background: #314455;\r\n    border: none;\r\n    /* For browsers that do not support gradients */\r\n    /* For Safari 5.1 to 6.0 */\r\n    /* For Opera 11.1 to 12.0 */\r\n    /* For Firefox 3.6 to 15 */\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#314455), color-stop(#314455), to(#644E5B));\r\n    background: linear-gradient(#314455, #314455, #644E5B);\r\n}\r\n\r\n.modal-title {\r\n    color: #ffffff;\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\ntextarea {\r\n    height: 100px;\r\n    resize: vertical;\r\n\r\n}\r\n\r\n#limbTextArea {\r\n    font-family: FontAwesome, \"Open Sans\", Verdana, sans-serif;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    text-decoration: inherit;\r\n}\r\n\r\n.form-control{\r\n    border-color: #644E5B;\r\n    border: 2px solid;\r\n    color: #644E5B;\r\n}\r\n\r\n.form-control:focus{\r\n    border-color: #97aabd;\r\n    -webkit-box-shadow: 0 1px 1px #97aabd inset, 0 0 8px #97aabd;\r\n            box-shadow: 0 1px 1px #97aabd inset, 0 0 8px #97aabd;\r\n    color: #97aabd;\r\n}\r\n\r\n/* Hiding the ugly input */\r\n\r\n.inputfile {\r\n\twidth: 0.1px;\r\n\theight: 0.1px;\r\n\topacity: 0;\r\n\toverflow: hidden;\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n}\r\n\r\n.inputfile + label {\r\n\tcursor: pointer; /* \"hand\" cursor */\r\n}\r\n\r\n.file-btn{\r\n    color: #97AABD;\r\n    background: #314455;\r\n    border: 1px solid #97AABD;\r\n    padding: 3px 10px;\r\n    border-radius: 25px;\r\n   \r\n}\r\n\r\n.form-group-custom {\r\n    text-align: center;\r\n}\r\n\r\n.file-btn:hover {\r\n    color: #314455;\r\n    background: #97AABD;\r\n}\r\n\r\n.file-input-center {\r\n    margin: 15px;\r\n    margin-top: 5%;\r\n    \r\n}\r\n\r\n/* button customization */\r\n\r\n.btn-custom{\r\n    border-radius: 5px;\r\n    width: 80px;\r\n    height: 40px;\r\n}\r\n\r\n.btn-form {\r\n    border: 2px solid #644E5B;\r\n    color: #ffffff;\r\n    background: #644E5B;\r\n  \r\n}\r\n\r\n.btn-form:hover, .btn-form:focus {\r\n    color: #ffffff;\r\n    border-color: #314455;\r\n    background-color: #314455;\r\n}\r\n\r\n.left-btn {\r\n    display: inline-block;\r\n    margin-right: 5px;\r\n}\r\n\r\n.right-btn {\r\n    display: inline-block;\r\n    position:absolute;\r\n    right: 5%;\r\n}\r\n\r\n.center-btn {\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: 42%;\r\n}\r\n\r\n.post-content {\r\n    min-width: 300px;\r\n    margin:auto;\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\r\n}"

/***/ }),

/***/ "./src/app/edit-limb/edit-limb.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-container\">\r\n  <h2 class=\"modal-title\">\r\n    Edit (Post ID: {{id}}):\r\n  </h2>\r\n\r\n  <div>\r\n    <form>\r\n      <div class=\"form-group-custom\">\r\n        <textarea class=\"form-control post-content\" id=\"limbTextArea\" rows=\"3\">{{limbBody}}</textarea>\r\n      </div>\r\n      <div class=\"file-input-center\">\r\n        <div class=\"form-group-custom\">\r\n          <input type=\"file\" name=\"inputImg\" id=\"newLimbImg\" class=\"inputfile\" (change)=\"changeLabel()\" />\r\n          <label for=\"newLimbImg\" id=\"inputImgLabel\" class=\"file-btn\">\r\n            <i class=\"fa fa-upload\" style=\"padding-right:.5em\"></i> Add an Image</label>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"left-btn\">\r\n        <button type=\"button\" id=\"cancelBtn\" class=\"btn-custom btn-form\" (click)=\"closeModal()\">Cancel</button>\r\n      </div>\r\n      <div class=\"center-btn\">\r\n          <button type=\"button\" id=\"deleteBtn\" class=\"btn-custom btn-form\" (click)=\"deleteLimb()\">Delete</button>\r\n        </div>\r\n      <div class=\"right-btn\">\r\n        <button type=\"button\" id=\"submitBtn\" class=\"btn-custom btn-form\" (click)=\"updateLimb()\">Update!</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/edit-limb/edit-limb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditLimbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects__ = __webpack_require__("./src/app/objects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backend_backend_service__ = __webpack_require__("./src/app/backend/backend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditLimbComponent = /** @class */ (function () {
    function EditLimbComponent(activeModal, server) {
        this.activeModal = activeModal;
        this.server = server;
    }
    EditLimbComponent.prototype.ngOnInit = function () {
    };
    EditLimbComponent.prototype.closeModal = function () {
        this.activeModal.close();
    };
    EditLimbComponent.prototype.updateLimb = function () {
        var _this = this;
        var limbText = document.getElementById("limbTextArea").value;
        var limb = new __WEBPACK_IMPORTED_MODULE_2__objects__["a" /* Limb */]();
        limb.id = this.id;
        //file uploading
        var input;
        var files = [];
        var filename;
        input = document.getElementById("inputImg");
        if (input) {
            files = input.files;
            var theFile = files[0];
            limb.content = limbText;
            this.server.uploadPhoto(localStorage.getItem('username'), "", theFile).subscribe(function (res) {
                var urlObject = { url: '' };
                urlObject = JSON.parse(JSON.stringify(res));
                // console.log(urlObject.url);
                limb.content = limb.content + "&&&" + urlObject.url;
                _this.server.postUpdateLimb(limb, localStorage.getItem("username")).subscribe();
                //reload the limb list
                _this.closeModal();
            });
        }
        else {
            console.log("inside else");
            limb.content = limbText;
            console.log(limb);
            this.server.postUpdateLimb(limb, localStorage.getItem("username")).subscribe();
            //reload the limb list
            this.closeModal();
        }
    };
    EditLimbComponent.prototype.deleteLimb = function () {
        this.server.deleteLimb(this.id).subscribe();
        this.closeModal();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EditLimbComponent.prototype, "id", void 0);
    EditLimbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-limb',
            template: __webpack_require__("./src/app/edit-limb/edit-limb.component.html"),
            styles: [__webpack_require__("./src/app/edit-limb/edit-limb.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */], __WEBPACK_IMPORTED_MODULE_3__backend_backend_service__["a" /* BackendService */]])
    ], EditLimbComponent);
    return EditLimbComponent;
}());



/***/ }),

/***/ "./src/app/feed/feed.component.css":
/***/ (function(module, exports) {

module.exports = ".main-content{\r\n\r\n    padding-left: 20vw;\r\n}\r\n\r\n\r\n.feed-background{\r\n    margin: 0px;\r\n    padding-top: 50px;\r\n    background-image: url('/assets/images/bg2.png');\r\n    min-height: 100vh;\r\n    height: 100%;\r\n    background-position: center;\r\n    /* background-repeat: no-repeat; */\r\n    background-size: cover;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/feed/feed.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-side-bar></app-side-bar>\r\n\r\n<div class=\"main-content feed-background\">\r\n<!-- <app-limb-list [requestUrl] = '/limbs'></app-limb-list> -->\r\n<app-limb-list [parameter]=\"1\"></app-limb-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/feed/feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_authentication_service__ = __webpack_require__("./src/app/auth/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backend_backend_service__ = __webpack_require__("./src/app/backend/backend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { LimbComponent } from './limb';
var FeedComponent = /** @class */ (function () {
    function FeedComponent(auth, router, server) {
        this.auth = auth;
        this.router = router;
        this.server = server;
        // let userProfile = { email: '' };
        // var profile = localStorage.getItem('profile');
        // userProfile = JSON.parse(profile);
        // this.userEmail = userProfile.email;
        // let postResult = this.server.getUserByEmail(this.userEmail).subscribe(res => {
        //   let user: User = <User>res;
        //   console.log(user);
        //   if (!user.lastName) {
        //     this.router.navigate(['register']);
        //   }
        //   localStorage.setItem('username', user.username);
        //   localStorage.setItem('userObject', JSON.stringify(user));
        // });
        // localStorage.setItem('email', this.userEmail);
    }
    FeedComponent.prototype.ngOnInit = function () {
        // if (!this.auth.userProfile) {
        //   this.router.navigate(['login']);
        // }
    };
    FeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__("./src/app/feed/feed.component.html"),
            styles: [__webpack_require__("./src/app/feed/feed.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__backend_backend_service__["a" /* BackendService */]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/like/like.component.css":
/***/ (function(module, exports) {

module.exports = ".fa.fa-thermometer-empty{\r\n    color: #97AABD;\r\n}\r\n.fa.fa-thermometer-quarter{\r\n    color: #314455;\r\n}\r\n.fa.fa-thermometer-half{\r\n    color: #644E5B;\r\n}\r\n.fa.fa-thermometer-three-quarters{\r\n    color: #9E5A63;\r\n}\r\n.fa.fa-thermometer-full{\r\n    color: #C96567;\r\n}\r\n.color1 {\r\n    color: #97AABD;\r\n}\r\n.color2 {\r\n    color: #314455;\r\n}\r\n.color3 {\r\n    color: #644E5B;\r\n}\r\n.color4 {\r\n    color: #9E5A63;\r\n}\r\n.color5 {\r\n    color: #C96567;\r\n}\r\n.clickable-like {\r\n    width: 90%;\r\n    margin: auto;\r\n    cursor: pointer;\r\n    padding: 5px;\r\n    \r\n}\r\n.like-icon {\r\n    display: inline-block;\r\n    font-size: 20px;\r\n}\r\n.like-cap {\r\n    display: inline-block;\r\n    height: auto;\r\n    width: 45%;\r\n    font-size: 9px;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/like/like.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"clickable-like\" (click) = \"changeCount()\">\r\n  <a><i title=\"{{likes}}\" class=\"{{temp}} like-icon\"></i>\r\n  <div class=\"{{color}} like-cap\">This post is hot!</div>\r\n  </a>\r\n</span>\r\n"

/***/ }),

/***/ "./src/app/like/like.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backend_backend_service__ = __webpack_require__("./src/app/backend/backend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LikeComponent = /** @class */ (function () {
    function LikeComponent(Server) {
        this.Server = Server;
    }
    LikeComponent.prototype.ngOnInit = function () {
        this.updateIcon(this.likes);
    };
    LikeComponent.prototype.changeCount = function () {
        if (this.owner != localStorage.getItem('username')) {
            this.doLike(this.id);
        }
        else {
            alert("Don't like your own post, loser.");
        }
    };
    LikeComponent.prototype.doLike = function (limbId) {
        var _this = this;
        this.Server.doLike(localStorage.getItem('username'), limbId).subscribe(function (res) {
            var prev_likes = _this.likes;
            var result;
            result = res;
            _this.likes = result.likes;
            if (prev_likes != _this.likes)
                _this.updateIcon(_this.likes);
        });
    };
    LikeComponent.prototype.updateIcon = function (numCount) {
        if (numCount == 0) {
            this.temp = 'fa fa-thermometer-empty';
            this.color = 'color1';
        }
        else if (numCount == 1) {
            this.temp = 'fa fa-thermometer-quarter';
            this.color = 'color2';
        }
        else if (numCount == 2) {
            this.temp = 'fa fa-thermometer-half';
            this.color = 'color3';
        }
        else if (numCount == 3) {
            this.temp = 'fa fa-thermometer-three-quarters';
            this.color = 'color4';
        }
        else {
            this.temp = 'fa fa-thermometer-full';
            this.color = 'color5';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LikeComponent.prototype, "likes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('owner'),
        __metadata("design:type", Object)
    ], LikeComponent.prototype, "owner", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('id'),
        __metadata("design:type", Object)
    ], LikeComponent.prototype, "id", void 0);
    LikeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-like',
            template: __webpack_require__("./src/app/like/like.component.html"),
            styles: [__webpack_require__("./src/app/like/like.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__backend_backend_service__["a" /* BackendService */]])
    ], LikeComponent);
    return LikeComponent;
}());



/***/ }),

/***/ "./src/app/limb-body/limb-body.component.css":
/***/ (function(module, exports) {

module.exports = ".limb-body{\r\n    padding-bottom: 10px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    font-family: Fontin-Sans-Regular;\r\n}\r\n\r\n.limb-image{\r\n    width: auto;\r\n    max-width: 300px;\r\n    max-height: 300px;\r\n    height: auto;\r\n    margin-left: 27%;\r\n    margin-bottom: 15px;\r\n    margin-top: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/limb-body/limb-body.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n<div id=\"limb-body\" class=\"limb-body\" (change)=\"format_images()\">\r\n{{content}}\r\n</div>\r\n<div *ngIf=\"(edited || edited_video)\" id=\"limb-media\" (click)=\"openImgModal()\">\r\n    <img *ngIf=\"edited\" [src] = \"srcUrl\" class=\"limb-image\">\r\n    <iframe allowfullscreen=\"true\" *ngIf=\"edited_video\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(ytUrl)\"></iframe>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/limb-body/limb-body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LimbBodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__limb_media_modal_limb_media_modal_component__ = __webpack_require__("./src/app/limb-media-modal/limb-media-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LimbBodyComponent = /** @class */ (function () {
    function LimbBodyComponent(sanitizer, modalService) {
        this.sanitizer = sanitizer;
        this.modalService = modalService;
    }
    LimbBodyComponent.prototype.ngOnInit = function () {
        this.format_media();
    };
    LimbBodyComponent.prototype.openImgModal = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__limb_media_modal_limb_media_modal_component__["a" /* LimbMediaModalComponent */]);
        modalRef.componentInstance.media = this.srcUrl;
    };
    LimbBodyComponent.prototype.format_media = function () {
        // console.log("Cont: "+this.content);
        this.edited = false;
        this.edited_video = false;
        if (this.content.includes("&&&http")) {
            this.edited = true;
            var url = this.content.substring(this.content.lastIndexOf("&&&http") + 3);
            // console.log("URL:"+url);
            this.srcUrl = url;
            // var image=document.createElement("img");
            // image.src=url;
            // document.getElementById("limb-body").appendChild(image);
            //after done
            url = "&&&" + url;
            this.content = this.content.replace(url, '');
        }
        //youtube check
        var res = this.content.replace(/\n/g, " ").split(" ");
        var i = 0;
        var breakout = false;
        var element;
        while (!breakout) {
            element = res[i];
            console.log(element);
            if (this.validateYouTubeUrl(element)) {
                this.edited_video = true;
                //breakout=true;
                this.content = this.content.replace(element, "");
                var id = element.substring(element.lastIndexOf("?v=") + 3);
                this.ytUrl = "https://www.youtube.com/embed/" + id;
            }
            ++i;
            if (i > res.length - 1) {
                breakout = true;
            }
        }
    };
    LimbBodyComponent.prototype.validateYouTubeUrl = function (url) {
        if (url != undefined || url != '') {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
            var match = url.match(regExp);
            if (match && match[2].length == 11) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LimbBodyComponent.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LimbBodyComponent.prototype, "media", void 0);
    LimbBodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-limb-body',
            template: __webpack_require__("./src/app/limb-body/limb-body.component.html"),
            styles: [__webpack_require__("./src/app/limb-body/limb-body.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], LimbBodyComponent);
    return LimbBodyComponent;
}());



/***/ }),

/***/ "./src/app/limb-list/limb-list.component.css":
/***/ (function(module, exports) {

module.exports = ".limbs {\r\n    list-style-type: none;\r\n}"

/***/ }),

/***/ "./src/app/limb-list/limb-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"limbs\">\r\n  <li *ngFor=\"let limb of list\">\r\n    <app-limb [owner]=\"limb.owner\" [postTime]=\"limb.postTime\" [id]=\"limb.id\" [content]=\"limb.content\" [likes]=\"limb.likes\" [media]=\"limb.media\" [editingOpen]=\"editingOpen\"></app-limb>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/limb-list/limb-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LimbListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backend_backend_service__ = __webpack_require__("./src/app/backend/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LimbListComponent = /** @class */ (function () {
    function LimbListComponent(Server, route) {
        this.Server = Server;
        this.route = route;
        // list: Array<LimbComponent>; 
        this.list = [];
    }
    LimbListComponent.prototype.getAllLimbs = function () {
        var _this = this;
        this.Server.getAllLimbs().subscribe(function (res) {
            var tod;
            for (var i in res) {
                if (res[i].postTime.hour > 12) {
                    res[i].postTime.hour = res[i].postTime.hour - 12;
                    tod = "PM";
                }
                else {
                    tod = "AM";
                }
                if (res[i].postTime.minute < 10) {
                    res[i].postTime.minute = "0" + res[i].postTime.minute;
                }
                res[i].postTime = res[i].postTime.monthValue + "/" + res[i].postTime.dayOfMonth + "/" + res[i].postTime.year + " " + res[i].postTime.hour + ":" + res[i].postTime.minute + " " + tod;
                _this.list.push(res[i]);
            }
            _this.list.reverse();
            // console.log(this.list);
        });
    };
    LimbListComponent.prototype.getLimbsByUser = function (userName) {
        var _this = this;
        this.Server.getLimbsByUserName(userName).subscribe(function (res) {
            var tod;
            for (var i in res) {
                if (res[i].postTime.hour > 12) {
                    res[i].postTime.hour = res[i].postTime.hour - 12;
                    tod = "PM";
                }
                else {
                    tod = "AM";
                }
                if (res[i].postTime.minute < 10) {
                    res[i].postTime.minute = "0" + res[i].postTime.minute;
                }
                res[i].postTime = res[i].postTime.monthValue + "/" + res[i].postTime.dayOfMonth + "/" + res[i].postTime.year + " " + res[i].postTime.hour + ":" + res[i].postTime.minute + " " + tod;
                _this.list.push(res[i]);
            }
            _this.list.reverse();
            // console.log(this.list);
        });
    };
    // requestUrl: any;
    // private http: HttpClient
    LimbListComponent.prototype.ngOnInit = function () {
        console.log("parameter is " + this.parameter);
        if (this.parameter == 1)
            this.getAllLimbs();
        else {
            this.getLimbsByUser(this.route.snapshot.paramMap.get('username'));
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], LimbListComponent.prototype, "parameter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LimbListComponent.prototype, "editingOpen", void 0);
    LimbListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-limb-list',
            template: __webpack_require__("./src/app/limb-list/limb-list.component.html"),
            styles: [__webpack_require__("./src/app/limb-list/limb-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__backend_backend_service__["a" /* BackendService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], LimbListComponent);
    return LimbListComponent;
}());



/***/ }),

/***/ "./src/app/limb-media-modal/limb-media-modal.component.css":
/***/ (function(module, exports) {

module.exports = ".modal-container {\r\n    max-height: 95vh;\r\n    max-width: 75vw;\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    padding: 2%;\r\n    text-align: center;\r\n    background: #314455;\r\n    background-size: cover;\r\n    border: none;\r\n    /* For browsers that do not support gradients */\r\n    /* For Safari 5.1 to 6.0 */\r\n    /* For Opera 11.1 to 12.0 */\r\n    /* For Firefox 3.6 to 15 */\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#314455), color-stop(#314455), to(#644E5B));\r\n    background: linear-gradient(#314455, #314455, #644E5B);\r\n}\r\n\r\n.modal-title {\r\n    color: #ffffff;\r\n}\r\n\r\n/* button customization */\r\n\r\n.btn-custom{\r\n    border-radius: 5px;\r\n    width: 80px;\r\n    height: 40px;\r\n    -webkit-box-shadow: -5px 6px 8px 2px rgba(0, 0, 0, 0.808);\r\n            box-shadow: -5px 6px 8px 2px rgba(0, 0, 0, 0.808);\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.btn-form {\r\n    border: 2px solid #644E5B;\r\n    color: #ffffff;\r\n    background: #644E5B;\r\n  \r\n}\r\n\r\n.btn-form:hover, .btn-form:focus {\r\n    color: #ffffff;\r\n    border-color: #314455;\r\n    background-color: #314455;\r\n    -webkit-box-shadow: -2px 3px 3px .1px rgba(0, 0, 0, 0.808);\r\n            box-shadow: -2px 3px 3px .1px rgba(0, 0, 0, 0.808);\r\n\r\n}\r\n\r\n.left-btn {\r\n    display: block;\r\n}\r\n\r\n.right-btn {\r\n    display: inline-block;\r\n    position:absolute;\r\n    right: 5%;\r\n}\r\n\r\n.adjust-width {\r\n    padding: 2%;\r\n}\r\n\r\n.image-format {\r\n    max-width: 50vw;\r\n    height: auto;\r\n    max-height: 70vh;\r\n}"

/***/ }),

/***/ "./src/app/limb-media-modal/limb-media-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-container\">\r\n  <h2 class=\"modal-title\">\r\n    Viewing Post Image:\r\n  </h2>\r\n\r\n  <div class=\"adjust-width\" style=\"margin:10px\">\r\n      <img [src]=\"srcUrl\" class=\"image-format\">\r\n  </div>\r\n  <div class=\"left-btn\">\r\n    <button type=\"button\" id=\"cancelBtn\" class=\"btn-custom btn-form\" (click)=\"closeModal()\">Close</button>\r\n  </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/limb-media-modal/limb-media-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LimbMediaModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LimbMediaModalComponent = /** @class */ (function () {
    function LimbMediaModalComponent(sanitization, activeModal) {
        this.sanitization = sanitization;
        this.activeModal = activeModal;
    }
    LimbMediaModalComponent.prototype.ngOnInit = function () {
        this.srcUrl = this.sanitization.bypassSecurityTrustUrl(this.media);
    };
    LimbMediaModalComponent.prototype.closeModal = function () {
        this.activeModal.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LimbMediaModalComponent.prototype, "media", void 0);
    LimbMediaModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-limb-media-modal',
            template: __webpack_require__("./src/app/limb-media-modal/limb-media-modal.component.html"),
            styles: [__webpack_require__("./src/app/limb-media-modal/limb-media-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], LimbMediaModalComponent);
    return LimbMediaModalComponent;
}());



/***/ }),

/***/ "./src/app/limb/limb.component.css":
/***/ (function(module, exports) {

module.exports = ".edit-visibility{\r\n    display: none;\r\n}\r\n/* Limb Header Styling */\r\n.profile-photo-size{\r\n    height: 120px;\r\n    width: 120px;\r\n}\r\n.decorated{\r\n    overflow: hidden;\r\n    text-align: center;\r\n    padding-top: 5px;\r\n}\r\n.edit-limb-position{\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 15px;\r\n    width: auto;\r\n}\r\n.fa.fa-edit {\r\n    color: #97AABD;\r\n}\r\n.fa.fa-edit:hover {\r\n    color: #C96567;\r\n}\r\n@media (min-width: 1200px) {\r\n    .decorated > .subtitle-left1{\r\n        float: left;\r\n        font-family: Fontin-Sans-Regular;\r\n    }\r\n    .decorated > .subtitle-left2{\r\n        float: right;\r\n        font-family: Fontin-Sans-Regular;\r\n    }\r\n}\r\n@media (max-width: 1200px) {\r\n    .decorated > .subtitle-left1{\r\n        display: inline-block;\r\n        position: absolute;\r\n        top: 65px;\r\n        left: 12px;\r\n        font-family: Fontin-Sans-Italics;\r\n    }\r\n    .decorated > .subtitle-left2{\r\n        display: inline-block;\r\n        position: absolute;\r\n        top: 65px;\r\n        right: 12px;\r\n        font-family: Fontin-Sans-Regular;\r\n    }\r\n}\r\n.decorated > .img-div{\r\n   position: relative;\r\n   display: inline-block;\r\n}\r\n.decorated > .img-div:before, .decorated > .img-div:after{\r\n   content: '';\r\n   position: absolute;\r\n   top: 50%;\r\n   border-bottom: 2px solid #97AABD;\r\n   /* box-shadow: -.5px .5px 5px .05px rgb(135, 152, 168); */\r\n   width: 25vw; /* half of limiter */\r\n   margin: 0 10px;\r\n}\r\n.decorated > .img-div:before{\r\n   right: 100%;\r\n}\r\n.decorated > .img-div:after{\r\n   left: 100%;\r\n}\r\n/* Limb Body Styling */\r\n.limb-border {\r\n    -webkit-box-shadow: -5px 10px 8px 2px rgba(0, 0, 0, 0.808);\r\n            box-shadow: -5px 10px 8px 2px rgba(0, 0, 0, 0.808);\r\n    height: auto;\r\n    margin: 4px;\r\n    background-color: #ffffff;\r\n   \r\n}\r\n.container-custom{\r\n    /* margin: 30px; */\r\n    /* max-width: 72vw; */\r\n    width: 55vw;\r\n    margin-left: 3vw;\r\n    margin-top: 5vw;\r\n    margin-bottom: 5%;\r\n    \r\n}\r\n.bottom-right{\r\n    /* padding: 5px; */\r\n    position: absolute;\r\n    bottom: 5px;\r\n    right: -15px;\r\n    width: auto;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/limb/limb.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-custom\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 limb-border\">\r\n            <div class=\"decorated\">\r\n                <!-- Limb Author's Name and Limb's Time Stamp in top left corner of Limb -->\r\n                <span class=\"subtitle-left1\">{{user.firstName}} {{user.lastName}}</span>\r\n                <span class=\"subtitle-left2\">{{postTime}}</span>\r\n                <!-- Limb Author's Profile Picture -->\r\n                <div class=\"img-div profile-photo-size\">\r\n                    <app-profile-photo [url]=\"url\"></app-profile-photo>\r\n                </div>\r\n\r\n            </div>\r\n            <!-- This will be the Limb Body container -->\r\n            <div>\r\n                <app-limb-body [content]=\"content\" [media]=\"media\"></app-limb-body>\r\n            </div>\r\n            <!-- clickable like component -->\r\n            <div class=\"bottom-right\">\r\n                <app-like [likes]=\"likes\" [owner]=\"owner\" [id]=\"id\"></app-like>\r\n            </div>\r\n\r\n            <!-- Clickable Edit Component. Only visible in user's own profile -->\r\n            <div *ngIf=\"editingOpen\">\r\n                <div class=\"edit-limb-position\" (click)=\"open()\">\r\n                    <i class=\"fa fa-edit\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/limb/limb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LimbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_limb_edit_limb_component__ = __webpack_require__("./src/app/edit-limb/edit-limb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects__ = __webpack_require__("./src/app/objects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__backend_backend_service__ = __webpack_require__("./src/app/backend/backend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LimbComponent = /** @class */ (function () {
    function LimbComponent(modalService, server) {
        this.modalService = modalService;
        this.server = server;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__objects__["b" /* User */];
    }
    LimbComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.url =  "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg";
        var authorResult = this.server.getUserByUsername(this.owner).subscribe(function (res) {
            _this.user = res;
            // console.log(this.user.profilePic);
            if (_this.user.profilePic) {
                _this.url = _this.user.profilePic;
            }
            else {
                _this.url = "/assets/images/user-200.png";
                // this.url = this.sanitization.bypassSecurityTrustStyle("url("+this.url+")");
            }
        });
    };
    LimbComponent.prototype.open = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__edit_limb_edit_limb_component__["a" /* EditLimbComponent */]);
        modalRef.componentInstance.id = this.id;
        modalRef.componentInstance.content = this.content;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], LimbComponent.prototype, "likes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LimbComponent.prototype, "owner", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LimbComponent.prototype, "postTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LimbComponent.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], LimbComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LimbComponent.prototype, "editingOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LimbComponent.prototype, "media", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__objects__["b" /* User */])
    ], LimbComponent.prototype, "user", void 0);
    LimbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-limb',
            template: __webpack_require__("./src/app/limb/limb.component.html"),
            styles: [__webpack_require__("./src/app/limb/limb.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_4__backend_backend_service__["a" /* BackendService */]])
    ], LimbComponent);
    return LimbComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n    text-align: center;\r\n    width: 100vw;\r\n}\r\n\r\n\r\n.btn-custom{\r\n    position: absolute;\r\n    top: 80%;\r\n    left: 40%;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n.btn-custom.outline{\r\n    margin: 0px;\r\n    font-size: 20px;\r\n    border: 2px solid #97AABD;\r\n    color: #ffffff;\r\n    background: #97AABD;\r\n    padding: 5px 15px;\r\n    -webkit-box-shadow: -5px 6px 8px 2px rgba(0, 0, 0, 0.808);\r\n            box-shadow: -5px 6px 8px 2px rgba(0, 0, 0, 0.808);\r\n}\r\n\r\n\r\n.btn-custom.outline:hover, .btn-custom.outline:focus, .btn-custom.outline:active, .btn-custom.outline.active, .open > .dropdown-toggle.btn-custom {\r\n\tcolor: #ffffff;\r\n    border-color: #314455;\r\n    background-color: #314455;\r\n    -webkit-box-shadow: -2px 3px 3px .1px rgba(0, 0, 0, 0.808);\r\n            box-shadow: -2px 3px 3px .1px rgba(0, 0, 0, 0.808);\r\n\r\n}\r\n\r\n\r\nhr.drop_shadow{\r\n    width: 200px;\r\n    height: 10px;\r\n    border: 1;\r\n    -webkit-box-shadow: inset 0 9px 9px -3px #9E5A63;\r\n            box-shadow: inset 0 9px 9px -3px #9E5A63;\r\n      border-radius: 5px;\r\n}\r\n\r\n\r\n.logo-image {\r\n    -webkit-box-shadow: -5px 6px 8px 2px rgba(0, 0, 0, 0.808);\r\n            box-shadow: -5px 6px 8px 2px rgba(0, 0, 0, 0.808);\r\n}\r\n\r\n\r\n.background{\r\n    margin: 0px;\r\n    background-image: url('/assets/images/bg1.png');\r\n    height: 100vh;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n\r\nhtml, body {\r\n    height:100%;\r\n}\r\n\r\n\r\n.logo {\r\n    display: block;\r\n    font-family: logoFont;\r\n    font-size: 350px;\r\n    color: white;\r\n    text-shadow: -5px 3px rgba(19, 19, 19, 0.952);\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: logoFont;\r\n    src: url('/assets/fonts/awesomebirds/Awesome\\ Birds.ttf');\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 offset-lg-3\">\r\n                <span class=\"logo\">Limbo</span>\r\n                <button type=\"button\" class=\"btn btn-custom outline\" id=\"userLoginButton\" (click)=\"auth.login()\">Login/Register\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backend_backend_service__ = __webpack_require__("./src/app/backend/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_authentication_service__ = __webpack_require__("./src/app/auth/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(Server, auth) {
        this.Server = Server;
        this.auth = auth;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    //TESTING
    LoginComponent.prototype.postLimb = function (limb, username) {
        this.Server.postLimb(limb, username).subscribe(function (res) {
            console.log(res);
            var x = res;
        });
    };
    LoginComponent.prototype.postNewUser = function (user) {
        this.Server.postNewUser(user).subscribe(function (res) {
            var x = res;
            console.log(res);
        });
    };
    LoginComponent.prototype.postUpdateUser = function (user) {
        this.Server.postUpdateUser(user).subscribe(function (res) {
            var x = res;
        });
    };
    LoginComponent.prototype.getAllUsers = function () {
        this.Server.getAllUsers().subscribe(function (res) {
            console.log(res);
        });
    };
    LoginComponent.prototype.getUser = function (username) {
        this.Server.getUserByUsername(username).subscribe(function (res) {
            console.log(res);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__backend_backend_service__["a" /* BackendService */], __WEBPACK_IMPORTED_MODULE_2__auth_authentication_service__["a" /* AuthenticationService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/new-limb-modal/new-limb-modal.component.css":
/***/ (function(module, exports) {

module.exports = ".modal-container {\r\n    height: auto;\r\n    width: auto;\r\n    padding: 5%;\r\n    background: #314455;\r\n    border: none;\r\n    /* For browsers that do not support gradients */\r\n    /* For Safari 5.1 to 6.0 */\r\n    /* For Opera 11.1 to 12.0 */\r\n    /* For Firefox 3.6 to 15 */\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#314455), color-stop(#314455), to(#644E5B));\r\n    background: linear-gradient(#314455, #314455, #644E5B);\r\n}\r\n\r\n.modal-title {\r\n    color: #ffffff;\r\n    \r\n}\r\n\r\n.form-container {\r\n    height: auto;\r\n    margin: auto;\r\n}\r\n\r\ntextarea {\r\n    height: 100px;\r\n    resize: vertical;\r\n\r\n}\r\n\r\n#limbTextArea {\r\n    font-family: FontAwesome, \"Open Sans\", Verdana, sans-serif;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    text-decoration: inherit;\r\n}\r\n\r\n.form-control{\r\n    border-color: #644E5B;\r\n    border: 2px solid;\r\n    color: #644E5B;\r\n}\r\n\r\n.form-control:focus{\r\n    border-color: #97aabd;\r\n    -webkit-box-shadow: 0 1px 1px #97aabd inset, 0 0 8px #97aabd;\r\n            box-shadow: 0 1px 1px #97aabd inset, 0 0 8px #97aabd;\r\n    color: #97aabd;\r\n}\r\n\r\n/* Hiding the ugly input */\r\n\r\n.inputfile {\r\n\twidth: 0.1px;\r\n\theight: 0.1px;\r\n\topacity: 0;\r\n\toverflow: hidden;\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n}\r\n\r\n.inputfile + label {\r\n\tcursor: pointer; /* \"hand\" cursor */\r\n}\r\n\r\n.file-btn{\r\n    color: #97AABD;\r\n    background: #314455;\r\n    border: 1px solid #97AABD;\r\n    padding: 3px 10px;\r\n    border-radius: 25px;\r\n   \r\n}\r\n\r\n.form-group-custom {\r\n    text-align: center;\r\n    width: 30vw;\r\n    margin:auto;\r\n}\r\n\r\n.file-btn:hover {\r\n    color: #314455;\r\n    background: #97AABD;\r\n}\r\n\r\n.file-input-center {\r\n    margin-top: 5%;\r\n    \r\n}\r\n\r\n/* button customization */\r\n\r\n.btn-custom{\r\n    border-radius: 5px;\r\n    width: 80px;\r\n    height: 40px;\r\n}\r\n\r\n.btn-form {\r\n    border: 2px solid #644E5B;\r\n    color: #ffffff;\r\n    background: #644E5B;\r\n  \r\n}\r\n\r\n.btn-form:hover, .btn-form:focus {\r\n    color: #ffffff;\r\n    border-color: #314455;\r\n    background-color: #314455;\r\n}\r\n\r\n.left-btn {\r\n    display: inline-block;\r\n    /* padding-left: 15%; */\r\n}\r\n\r\n.right-btn {\r\n    display: inline-block;\r\n    position:absolute;\r\n    right: 5%;\r\n    /* margin-right: 10px;\r\n    margin-bottom: 10px; */\r\n}\r\n\r\n.post-content {\r\n    width: 80%;\r\n    margin:auto;\r\n    margin-top: 5%;\r\n}"

/***/ }),

/***/ "./src/app/new-limb-modal/new-limb-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-container\">\r\n  <h2 class=\"modal-title\">\r\n    New Post\r\n  </h2>\r\n\r\n  <div class=\"form-container\">\r\n                  <!--servlet url-->\r\n    <form action=\"http://localhost:8080/boers/GStar/limbs/new\" method=\"post\" enctype=\"multipart/form-data\">\r\n      <div class=\"form-group-custom\">\r\n        <!-- <label for=\"limbTextArea\">Example textarea</label> -->\r\n        <textarea class=\"form-control post-content\" name=\"postText\" id=\"limbTextArea\" rows=\"3\" placeholder=\"&#xf044;\" (change)=\"detectlinks()\"></textarea>\r\n      </div>\r\n      <div class=\"file-input-center\">\r\n        <div class=\"form-group-custom\">\r\n          <input type=\"file\" name=\"inputImg\" id=\"newLimbImg\" class=\"inputfile\" (change)=\"changeLabel()\" />\r\n          <label for=\"newLimbImg\" id=\"inputImgLabel\" class=\"file-btn\">\r\n            <i class=\"fa fa-upload\" style=\"padding-right:.5em\"></i> Add an Image</label>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"left-btn\">\r\n        <button type=\"button\" id=\"cancelBtn\" class=\"btn-custom btn-form\" (click)=\"closeModal()\">Cancel</button>\r\n      </div>\r\n      <div class=\"right-btn\">\r\n        <button type=\"button\" id=\"submitBtn\" class=\"btn-custom btn-form\" (click)=\"makeLimb()\">Post</button>\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <p id=\"youtube_link\" style=\"color:white; display:none\">\r\n      </p>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/new-limb-modal/new-limb-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewLimbModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backend_backend_service__ = __webpack_require__("./src/app/backend/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects__ = __webpack_require__("./src/app/objects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_timestamp__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/timestamp.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewLimbModalComponent = /** @class */ (function () {
    function NewLimbModalComponent(activeModal, server) {
        this.activeModal = activeModal;
        this.server = server;
        this.userName = localStorage.getItem('username');
    }
    NewLimbModalComponent.prototype.ngOnInit = function () {
    };
    NewLimbModalComponent.prototype.changeLabel = function () {
        var input;
        var files = [];
        var filename;
        input = document.getElementById("newLimbImg");
        files = input.files;
        filename = files[0].name;
        var label;
        document.getElementById("inputImgLabel").innerHTML = '<i class="fa fa-upload" style="padding-right:.5em"></i>' + filename;
    };
    NewLimbModalComponent.prototype.closeModal = function () {
        this.activeModal.close();
    };
    NewLimbModalComponent.prototype.detectlinks = function () {
        var _this = this;
        var paragraph = document.getElementById("youtube_link");
        paragraph.style.display = "block";
        var youtube_count = 0;
        var text = document.getElementById("limbTextArea").value;
        var res = text.replace(/\n/g, " ").split(" ");
        res.forEach(function (element) {
            // console.log(element);
            if (_this.validateYouTubeUrl(element)) {
                ++youtube_count;
                // console.log("youtube link:"+element);
            }
        });
        if (youtube_count == 0)
            paragraph.style.display = "none";
        else if (youtube_count == 1)
            paragraph.innerHTML = youtube_count + " youtube link detected";
        else
            paragraph.innerHTML = youtube_count + " youtube links detected";
    };
    NewLimbModalComponent.prototype.validateYouTubeUrl = function (url) {
        if (url != undefined || url != '') {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
            var match = url.match(regExp);
            if (match && match[2].length == 11) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    NewLimbModalComponent.prototype.makeLimb = function () {
        var _this = this;
        var limbText = document.getElementById("limbTextArea").value;
        var limb = new __WEBPACK_IMPORTED_MODULE_3__objects__["a" /* Limb */]();
        limb.count = 0;
        limb.name = this.userName;
        limb.timeStamp = __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_timestamp__["a" /* Timestamp */];
        //file uploading
        var input;
        var files = [];
        var filename;
        input = document.getElementById("newLimbImg");
        files = input.files;
        var theFile = files[0];
        limb.content = limbText;
        if (theFile) {
            this.server.uploadPhoto(localStorage.getItem('username'), "", theFile).subscribe(function (res) {
                var urlObject = { url: '' };
                urlObject = JSON.parse(JSON.stringify(res));
                // console.log(urlObject.url);
                limb.content = limb.content + "&&&" + urlObject.url;
                _this.server.postLimb(limb, _this.userName).subscribe();
                //reload the limb list
                _this.closeModal();
            });
        }
        else {
            this.server.postLimb(limb, this.userName).subscribe();
            //reload the limb list
            this.closeModal();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NewLimbModalComponent.prototype, "name", void 0);
    NewLimbModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-limb-modal',
            template: __webpack_require__("./src/app/new-limb-modal/new-limb-modal.component.html"),
            styles: [__webpack_require__("./src/app/new-limb-modal/new-limb-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */], __WEBPACK_IMPORTED_MODULE_2__backend_backend_service__["a" /* BackendService */]])
    ], NewLimbModalComponent);
    return NewLimbModalComponent;
}());



/***/ }),

/***/ "./src/app/objects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Limb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return User; });
var Limb = /** @class */ (function () {
    function Limb() {
    }
    return Limb;
}());

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/profile-photo/profile-photo.component.css":
/***/ (function(module, exports) {

module.exports = "/* .profile-pic{\r\n    background-image:url('cat.png');\r\n    \r\n} */\r\n\r\n.img-circle {\r\n    border-radius: 50%;\r\n}\r\n\r\n.img-circle {\r\n    border-radius: 0;\r\n}\r\n\r\n.ratio {\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n\r\n    height: 0;\r\n    padding-bottom: 100%;\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n\r\n.img-circle {\r\n    border-radius: 50%;\r\n}\r\n\r\n.img-responsive {\r\n    display: block;\r\n    height: auto;\r\n    max-width: 100%;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/profile-photo/profile-photo.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"photo\" class=\"ratio img-responsive img-circle\" [style.background-image]=\"profilePhoto\"></div>"

/***/ }),

/***/ "./src/app/profile-photo/profile-photo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePhotoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePhotoComponent = /** @class */ (function () {
    function ProfilePhotoComponent(sanitization) {
        this.sanitization = sanitization;
    }
    Object.defineProperty(ProfilePhotoComponent.prototype, "url", {
        set: function (value) {
            this.profilePhoto = this.sanitization.bypassSecurityTrustStyle("url(" + value + ")");
        },
        enumerable: true,
        configurable: true
    });
    ;
    ProfilePhotoComponent.prototype.ngOnInit = function () {
        // console.log(this.profilePhoto);
    };
    ProfilePhotoComponent.prototype.ngOnChanges = function () {
    };
    ProfilePhotoComponent.prototype.setNewPhotoPreview = function (newPhoto) {
        this.profilePhoto = newPhoto;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProfilePhotoComponent.prototype, "profilePhoto", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('url'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ProfilePhotoComponent.prototype, "url", null);
    ProfilePhotoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-photo',
            template: __webpack_require__("./src/app/profile-photo/profile-photo.component.html"),
            styles: [__webpack_require__("./src/app/profile-photo/profile-photo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]])
    ], ProfilePhotoComponent);
    return ProfilePhotoComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".main-content{\r\n    padding-left: 20vw; \r\n}\r\n\r\n.cover-photo{\r\n    background-size: cover;\r\n    height: 100vh;\r\n    \r\n}\r\n\r\n.profile-shadow{\r\n    -webkit-box-shadow: -5px 6px 10px 2px rgb(0, 0, 0);\r\n            box-shadow: -5px 6px 10px 2px rgb(0, 0, 0);\r\n}\r\n\r\n.profile-background{\r\n    margin: 0px;\r\n    /* width: 100vw; */\r\n    padding-top: 50px;\r\n    background-image: url('/assets/images/bg2.png');\r\n    height: 100%;\r\n    min-height: 100vh;\r\n    background-position: center;\r\n    /* background-repeat: no-repeat; */\r\n    background-size: cover;\r\n}\r\n\r\n.profile-photo-size{\r\n    height: 26vw;\r\n    width: 26vw;\r\n    border-radius:100%;\r\n}\r\n\r\n.profile-photo-center{\r\n    padding-top: 25vh;\r\n    padding-left: 37vw;\r\n}\r\n\r\n.profile-info-center{\r\n    margin-top: 30px;\r\n    width: 50%;\r\n    margin: auto;\r\n}\r\n\r\n.profile-info{\r\n    margin-top: 5vh;\r\n    text-align:center;\r\n    color:white;\r\n    font-size: 3vh;\r\n    font-family: Fontin-Sans-Bold;\r\n    text-shadow: -3px 3px black;\r\n}\r\n\r\n.edit-icon-position {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 20px;\r\n}\r\n\r\n.edit-visibility {\r\n    display: block;\r\n}\r\n\r\n.fa.fa-lock {\r\n    font-size: 30px;\r\n    color: #97AABD;\r\n    text-shadow: 1px 1px rgba(66, 66, 66, 0.651);\r\n}\r\n\r\n.fa.fa-unlock-alt {\r\n    font-size: 30px;\r\n    color: #C96567;\r\n    text-shadow: 1px 1px rgba(66, 66, 66, 0.651);\r\n}\r\n\r\n.fa.fa-edit.profile-pic {\r\n    color: #97AABD;\r\n    font-size: 30px;\r\n    text-shadow: 1px 1px rgba(66, 66, 66, 0.651);\r\n}\r\n\r\n.fa.fa-edit.profile-pic:hover {\r\n    color: #C96567;\r\n    \r\n}\r\n\r\n.profile-pic-edit-icon {\r\n    position: absolute;\r\n    right: 33vw;\r\n    top: 22vh;\r\n}\r\n\r\n.fa.fa-edit.cover-pic {\r\n    color: #97AABD;\r\n    font-size: 30px;\r\n    text-shadow: 1px 1px rgba(66, 66, 66, 0.651);\r\n}\r\n\r\n.fa.fa-edit.cover-pic:hover {\r\n    color: #C96567;\r\n}\r\n\r\n.cover-pic-edit-icon {\r\n    position: absolute;\r\n    right: 60px;\r\n    top: 20px;\r\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-side-bar></app-side-bar>\r\n\r\n<div class=\"cover-photo\" [style.background-image]=\"coverUrl\">\r\n  <div *ngIf=\"showEditing\">\r\n  <div class=\"edit-icon-position edit-visibility\" (click)=\"openCloseEditing()\">\r\n    <i id=\"editIcon\" class=\"fa fa-lock\"></i>\r\n  </div>\r\n  </div>\r\n  <div *ngIf=\"editingOpen\">\r\n    <div class=\"cover-pic-edit-icon\" (click)=\"openCoverEditModal()\">\r\n      <i class=\"fa fa-edit cover-pic\"></i>\r\n    </div>\r\n  </div>\r\n  <div class=\"profile-photo-center\">\r\n    <div class=\"profile-photo-size profile-shadow\">\r\n      <app-profile-photo [url]=\"url\"></app-profile-photo>\r\n      <div *ngIf=\"editingOpen\">\r\n        <div class=\"profile-pic-edit-icon\" (click)=\"openProfileEditModal()\">\r\n          <i class=\"fa fa-edit profile-pic\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"profile-info-center\">\r\n    <div class=\"profile-info\">\r\n      <p>{{user.firstName}} {{user.lastName}}</p>\r\n      <p>Number of Posts: {{user.limbCount}}</p>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"main-content profile-background\">\r\n  <!-- <app-limb-list [requestUrl] = '/boers/{{username}}/limbs'></app-limb-list> -->\r\n  <app-limb-list [editingOpen]=\"editingOpen\" [parameter]=\"2\"></app-limb-list>\r\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_photo_change_photo_component__ = __webpack_require__("./src/app/change-photo/change-photo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_authentication_service__ = __webpack_require__("./src/app/auth/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__backend_backend_service__ = __webpack_require__("./src/app/backend/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__objects__ = __webpack_require__("./src/app/objects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProfileComponent = /** @class */ (function () {
    // check to see if current user's username matches this profile's username
    function ProfileComponent(location, route, modalService, auth, router, server, sanitization) {
        this.location = location;
        this.route = route;
        this.modalService = modalService;
        this.auth = auth;
        this.router = router;
        this.server = server;
        this.sanitization = sanitization;
        this.user = new __WEBPACK_IMPORTED_MODULE_7__objects__["b" /* User */];
        this.editingOpen = false;
        this.showEditing = false;
        this.getUser();
        this.showHideProfileEditing();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        // if (!this.auth.userProfile) {
        //   this.router.navigate(['login']);
        // }
    };
    //GET THE USER
    ProfileComponent.prototype.getUser = function () {
        var _this = this;
        var username = this.route.snapshot.paramMap.get('username');
        this.server.getUserByUsername(username)
            .subscribe(function (res) {
            _this.user = res;
            if (_this.user.profilePic) {
                _this.url = _this.user.profilePic;
            }
            else {
                _this.url = "/assets/images/user-200.png";
                // this.url = this.sanitization.bypassSecurityTrustStyle("url("+this.url+")");
            }
            if (!_this.user.coverPic) {
                _this.coverUrl = "/assets/images/bg2.png";
                _this.coverUrl = _this.sanitization.bypassSecurityTrustStyle("url(" + _this.coverUrl + ")");
            }
            else {
                _this.coverUrl = _this.user.coverPic;
                _this.coverUrl = _this.sanitization.bypassSecurityTrustStyle("url(" + _this.coverUrl + ")");
            }
        });
    };
    ProfileComponent.prototype.showHideProfileEditing = function () {
        var username = this.route.snapshot.paramMap.get('username');
        console.log(username);
        var thisUsername = localStorage.getItem("username");
        console.log(thisUsername);
        if (username == thisUsername) {
            this.showEditing = true;
        }
        else {
            this.showEditing = false;
        }
    };
    ProfileComponent.prototype.openProfileEditModal = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__change_photo_change_photo_component__["a" /* ChangePhotoComponent */]);
        modalRef.componentInstance.type = 'Profile';
        modalRef.componentInstance.email = this.email;
        // modalRef.componentInstance.url = this.url;
    };
    ProfileComponent.prototype.openCoverEditModal = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__change_photo_change_photo_component__["a" /* ChangePhotoComponent */]);
        modalRef.componentInstance.type = 'Cover';
        modalRef.componentInstance.email = this.email;
        modalRef.componentInstance.coverUrl = this.user.coverPic;
    };
    ProfileComponent.prototype.openCloseEditing = function () {
        var currentClass = document.getElementById("editIcon").getAttribute("class");
        console.log(currentClass);
        if (currentClass == "fa fa-lock") {
            document.getElementById("editIcon").setAttribute("class", "fa fa-unlock-alt");
            this.editingOpen = true;
        }
        else {
            document.getElementById("editIcon").setAttribute("class", "fa fa-lock");
            this.editingOpen = false;
        }
        console.log(this.editingOpen);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProfileComponent.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProfileComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__objects__["b" /* User */])
    ], ProfileComponent.prototype, "user", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_3__auth_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__backend_backend_service__["a" /* BackendService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["DomSanitizer"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/***/ (function(module, exports) {

module.exports = ".form-container-custom{\r\n    /* border: 1px solid #314455; */\r\n    /* border-radius: 5px; */\r\n    padding: 0px;\r\n    margin-top: 200px;\r\n    /* background-color: #ffffff; */\r\n    background: none;\r\n}\r\n\r\n\r\n.form-header-custom{\r\n    text-align: center;\r\n    background-color: #314455;\r\n    margin-bottom: 20px;\r\n    height: 30px;\r\n    border: 1px solid #314455;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n\r\n}\r\n\r\n\r\n.form-row{\r\n    margin: 5px;\r\n}\r\n\r\n\r\n.form-control{\r\n    border-color: #9E5A63;\r\n    color: #9E5A63;\r\n    -webkit-box-shadow: -5px 6px 8px 2px rgba(0, 0, 0, 0.808);\r\n            box-shadow: -5px 6px 8px 2px rgba(0, 0, 0, 0.808);\r\n}\r\n\r\n\r\n.form-control:focus, .form-control:hover{\r\n    border-color: #97aabd;\r\n    -webkit-box-shadow: 0 1px 1px #97aabd inset, 0 0 8px #97aabd;\r\n            box-shadow: 0 1px 1px #97aabd inset, 0 0 8px #97aabd;\r\n    \r\n    color: #97aabd;\r\n}\r\n\r\n\r\n.form-control.disabled:focus, .form-control.disabled:hover{\r\n    border-color: #644E5B;\r\n    -webkit-box-shadow:-5px 6px 8px 2px rgba(0, 0, 0, 0.808);\r\n            box-shadow:-5px 6px 8px 2px rgba(0, 0, 0, 0.808);\r\n    color: #644E5B;\r\n}\r\n\r\n\r\n.btn-custom{\r\n    position: relative;\r\n    left: 40%;\r\n    border-radius: 5px;\r\n    margin: 10px;\r\n    -webkit-box-shadow: -5px 6px 8px 2px rgba(0, 0, 0, 0.808);\r\n            box-shadow: -5px 6px 8px 2px rgba(0, 0, 0, 0.808);\r\n}\r\n\r\n\r\n.btn-custom.outline{\r\n    border: 2px solid #9E5A63;\r\n    color: #ffffff;\r\n    background-color: #9E5A63;\r\n    padding: 12px 22px;\r\n}\r\n\r\n\r\n.btn-custom.outline:hover, .btn-custom.outline:focus, .btn-custom.outline:active, .btn-custom.outline.active, .open > .dropdown-toggle.btn-custom {\r\n    border-color: #644e5b;\r\n    background-color: #644e5b;\r\n    -webkit-box-shadow: -2px 3px 3px .1px rgba(0, 0, 0, 0.808);\r\n            box-shadow: -2px 3px 3px .1px rgba(0, 0, 0, 0.808);\r\n}\r\n\r\n\r\n.disabled .form-control, .disabled .form-control:focus, .disabled .form-control:hover{\r\n    border-color: #644E5B;\r\n    color: #644E5B;\r\n}\r\n\r\n\r\n.icon-addon.disabled, .icon-addon.disabled:hover, .icon-addon.disabled:focus {\r\n    color: #644E5B;\r\n}\r\n\r\n\r\n.icon-addon.disabled .form-control:focus + .fa,\r\n.icon-addon.disabled:hover .fa {\r\n    color: #644E5B;\r\n}\r\n\r\n\r\n/* Icon in Input CSS */\r\n\r\n\r\n.center-block {\r\n    float: none;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n\r\n.input-group .icon-addon .form-control {\r\n    border-radius: 0;\r\n}\r\n\r\n\r\n.icon-addon {\r\n    position: relative;\r\n    color: #9E5A63;\r\n    display: block;\r\n}\r\n\r\n\r\n.icon-addon:after,\r\n.icon-addon:before {\r\n    display: table;\r\n    content: \" \";\r\n}\r\n\r\n\r\n.icon-addon:after {\r\n    clear: both;\r\n}\r\n\r\n\r\n.icon-addon.addon-md .glyphicon,\r\n.icon-addon .glyphicon, \r\n.icon-addon.addon-md .fa,\r\n.icon-addon .fa {\r\n    position: absolute;\r\n    z-index: 2;\r\n    left: 10px;\r\n    font-size: 14px;\r\n    width: 20px;\r\n    margin-left: -2.5px;\r\n    text-align: center;\r\n    padding: 10px 0;\r\n    top: 1px\r\n}\r\n\r\n\r\n.icon-addon.addon-lg .form-control {\r\n    line-height: 1.33;\r\n    height: 46px;\r\n    font-size: 18px;\r\n    padding: 10px 16px 10px 40px;\r\n}\r\n\r\n\r\n.icon-addon.addon-sm .form-control {\r\n    height: 30px;\r\n    padding: 5px 10px 5px 28px;\r\n    font-size: 12px;\r\n    line-height: 1.5;\r\n}\r\n\r\n\r\n.icon-addon.addon-lg .fa,\r\n.icon-addon.addon-lg .glyphicon {\r\n    font-size: 18px;\r\n    margin-left: 0;\r\n    left: 11px;\r\n    top: 4px;\r\n}\r\n\r\n\r\n.icon-addon.addon-md .form-control,\r\n.icon-addon .form-control {\r\n    padding-left: 30px;\r\n    float: left;\r\n    font-weight: normal;\r\n}\r\n\r\n\r\n.icon-addon.addon-sm .fa,\r\n.icon-addon.addon-sm .glyphicon {\r\n    margin-left: 0;\r\n    font-size: 12px;\r\n    left: 5px;\r\n    top: -1px\r\n}\r\n\r\n\r\n.icon-addon .form-control:focus + .glyphicon,\r\n.icon-addon:hover .glyphicon,\r\n.icon-addon .form-control:focus + .fa,\r\n.icon-addon:hover .fa {\r\n    color: #97aabd;\r\n}\r\n\r\n\r\n/* End Icon CSS */\r\n\r\n\r\n.background{\r\n    margin: 0px;\r\n    padding: 100px;\r\n    background-image: url('bg1.95125adb980e9f87f1a0.png');\r\n    height: 100vh;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n\r\nhtml, body {\r\n    height:100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n  <div class=\"container\">\r\n      <div class=\"col-lg-6 offset-lg-3 form-container-custom\">\r\n\r\n          <form>\r\n              <!-- <div class=\"form-header-custom\"></div> -->\r\n              <div class=\"form-row\">\r\n                <div class=\"col-md-6 offset-md-3 col-sm-6 offset-sm-3 text-center\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"icon-addon\">\r\n                            <label for=\"newUserUsername\" class=\"fa fa-user\"></label>\r\n                            <input type=\"username\" class=\"form-control\" id=\"newUserUsername\" placeholder=\"Username\" name=\"username\" [(ngModel)]=\"user.username\" required>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n              <div class=\"form-row\">\r\n                  <div class=\"col-md-6 offset-md-3 col-sm-6 offset-sm-3 text-center\">\r\n                      <div class=\"form-group\">\r\n                          <div class=\"icon-addon disabled\">\r\n                              <label for=\"newUserEmail\" class=\"fa fa-envelope\"></label>\r\n                              <input type=\"email\" class=\"form-control disabled\" id=\"newUserEmail\" placeholder=\"Email\" name=\"email\" defaultValue=\"{{email}}\" disabled>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              \r\n              <div class=\"form-row\">\r\n                  <div class=\"col-md-6 col-sm-6\">\r\n                      <div class=\"form-group\">\r\n                          <div class=\"icon-addon\">\r\n                              <label for=\"newUserFName\" class=\"fa fa-user\"></label>\r\n                              <input type=\"text\" class=\"form-control\" id=\"newUserFName\" placeholder=\"First Name\" name=\"firstName\" [(ngModel)]=\"user.firstName\" required>\r\n                          </div>\r\n\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 col-sm-6\">\r\n                      <div class=\"form-group\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"newUserLName\" placeholder=\"Last Name\" name=\"lastName\" [(ngModel)]=\"user.lastName\" required>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"form-row\" style=\"margin-bottom:0px\">\r\n                  <div class=\"col-md-6 offset-md-3 col-sm-6 offset-sm-3 text-center\">\r\n                      <div class=\"form-group\">\r\n                          <div class=\"icon-addon\">\r\n                              <label for=\"date\" class=\"fa fa-birthday-cake\"></label>\r\n                              <my-date-picker id=\"date\" name=\"mydate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"model\" required></my-date-picker>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n\r\n              </div>\r\n\r\n              <div>\r\n                  <button type=\"button\" class=\"btn btn-custom outline\" id=\"newUserSubmitButton\" (click)=\"registerUser()\">Register</button>\r\n              </div>\r\n\r\n          </form>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects__ = __webpack_require__("./src/app/objects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backend_backend_service__ = __webpack_require__("./src/app/backend/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(Server, router) {
        this.Server = Server;
        this.router = router;
        this.myDatePickerOptions = {
            dateFormat: 'mm/dd/yyyy',
        };
        this.date = new Date();
        this.model = {
            date: { year: this.date.getFullYear(),
                month: this.date.getMonth() + 1,
                day: this.date.getDate()
            }
        };
        this.user = new __WEBPACK_IMPORTED_MODULE_1__objects__["b" /* User */]();
        this.disabled = true;
        this.email = localStorage.getItem("email");
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    // verifyPasswords()
    // {
    //   if(this.password!==this.confirmpassword)
    //   {
    //       //TODO: show a modal or some shit
    //       alert("Passwords must match");
    //   }
    //   else
    //   {
    //     this.disabled=false;;
    //   }
    // }
    RegistrationComponent.prototype.registerUser = function () {
        this.user.bdate = this.model.jsdate;
        this.user.email = localStorage.getItem("email");
        console.log(this.user.bdate);
        this.postNewUser(this.user);
        this.router.navigate(['/feed']);
    };
    RegistrationComponent.prototype.postNewUser = function (user) {
        this.Server.postNewUser(user).subscribe(function (res) {
            var x = res;
            if (!x)
                alert("username is already taken!");
            else
                alert("register succesful");
        });
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__("./src/app/registration/registration.component.html"),
            styles: [__webpack_require__("./src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__backend_backend_service__["a" /* BackendService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ".search-custom{\r\n    max-width: 80%;\r\n    margin-bottom:20px;\r\n    /* padding-bottom:10px; */\r\n    margin-top:10px;\r\n    margin-left: 10%;\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Icon CSS */\r\n\r\n.input-group .icon-addon .form-control {\r\n    border-radius: 0;\r\n}\r\n\r\n.icon-addon {\r\n    position: relative;\r\n    color: #9E5A63;\r\n    display: block;\r\n}\r\n\r\n.icon-addon:after,\r\n.icon-addon:before {\r\n    display: table;\r\n    content: \" \";\r\n}\r\n\r\n.icon-addon:after {\r\n    clear: both;\r\n}\r\n\r\n.icon-addon.addon-md .glyphicon,\r\n.icon-addon .glyphicon, \r\n.icon-addon.addon-md .fa,\r\n.icon-addon .fa {\r\n    position: absolute;\r\n    z-index: 2;\r\n    left: 10px;\r\n    font-size: 14px;\r\n    width: 20px;\r\n    margin-left: -2.5px;\r\n    text-align: center;\r\n    padding: 10px 0;\r\n    top: 1px\r\n}\r\n\r\n.icon-addon.addon-lg .form-control {\r\n    line-height: 1.33;\r\n    height: 46px;\r\n    font-size: 18px;\r\n    padding: 10px 16px 10px 40px;\r\n}\r\n\r\n.icon-addon.addon-sm .form-control {\r\n    height: 30px;\r\n    padding: 5px 10px 5px 28px;\r\n    font-size: 12px;\r\n    line-height: 1.5;\r\n}\r\n\r\n.icon-addon.addon-lg .fa,\r\n.icon-addon.addon-lg .glyphicon {\r\n    font-size: 18px;\r\n    margin-left: 0;\r\n    left: 11px;\r\n    top: 4px;\r\n}\r\n\r\n.icon-addon.addon-md .form-control,\r\n.icon-addon .form-control {\r\n    padding-left: 30px;\r\n    float: left;\r\n    font-weight: normal;\r\n}\r\n\r\n.icon-addon.addon-sm .fa,\r\n.icon-addon.addon-sm .glyphicon {\r\n    margin-left: 0;\r\n    font-size: 12px;\r\n    left: 5px;\r\n    top: -1px\r\n}\r\n\r\n.icon-addon .form-control:focus + .glyphicon,\r\n.icon-addon:hover .glyphicon,\r\n.icon-addon .form-control:focus + .fa,\r\n.icon-addon:hover .fa {\r\n    color: #97aabd;\r\n}"

/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search-custom\">\r\n  <div class=\"icon-addon\">\r\n      <label for=\"navSearch\" class=\"fa fa-search\"></label>\r\n      <input #searchBox type=\"text\" class=\"form-control\" id=\"navSearch\" placeholder=\"Search\" (keyup)=\"search(searchBox.value)\" >\r\n      <ul class=\"search-result\">\r\n        <li *ngFor=\"let user of users$ | async\" >\r\n          <a href=\"http://localhost:666/profile/{{user.username}}\">\r\n            {{user.username}}\r\n          </a>\r\n        </li>\r\n      </ul>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backend_backend_service__ = __webpack_require__("./src/app/backend/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(service) {
        this.service = service;
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    // Push a search term into the observable stream.
    SearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users$ = this.searchTerms.pipe(
        // ignore new term if same as previous term
        Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* distinctUntilChanged */])(), 
        // switch to new search observable each time the term changes
        Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* switchMap */])(function (term) { return _this.service.searchUsers(term); }));
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/search/search.component.html"),
            styles: [__webpack_require__("./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__backend_backend_service__["a" /* BackendService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/***/ (function(module, exports) {

module.exports = ".modal-container {\r\n    height: auto;\r\n    width: auto;\r\n    padding: 5%;\r\n    background: #314455;\r\n    border: none;\r\n    /* For browsers that do not support gradients */\r\n    /* For Safari 5.1 to 6.0 */\r\n    /* For Opera 11.1 to 12.0 */\r\n    /* For Firefox 3.6 to 15 */\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#314455), color-stop(#314455), to(#644E5B));\r\n    background: linear-gradient(#314455, #314455, #644E5B);\r\n    background-size: 100%;\r\n}\r\n\r\n.adjust-width {\r\n    /* margin: 10px; */\r\n    display: inline-block;\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n   \r\n}\r\n\r\n.modal-title {\r\n    color: #ffffff;\r\n}\r\n\r\n.row {\r\n    margin: 15px;\r\n}\r\n\r\n.user-info {\r\n    font-size: 20px;\r\n    \r\n    color: #97AABD;\r\n}\r\n\r\n.user-info.pass {\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    -webkit-text-security: circle;\r\n    width: 80%;\r\n}\r\n\r\n.form-container-custom {\r\n    margin-top: 30px;\r\n}\r\n\r\ntextarea {\r\n    height: 100px;\r\n    resize: vertical;\r\n\r\n}\r\n\r\n.form-row{\r\n    margin: 5px;\r\n}\r\n\r\n.form-control{\r\n    border-color: #9E5A63;\r\n    color: #9E5A63;\r\n}\r\n\r\n.form-control:focus, .form-control:hover{\r\n    border-color: #97aabd;\r\n    -webkit-box-shadow: 0 1px 1px #97aabd inset, 0 0 8px #97aabd;\r\n            box-shadow: 0 1px 1px #97aabd inset, 0 0 8px #97aabd;\r\n    color: #97aabd;\r\n}\r\n\r\n.disabled .form-control:focus, .disabled .form-control:hover{\r\n    border-color: #9E5A63;\r\n    color: #9E5A63;\r\n    -webkit-box-shadow: 0 0 0 #ffffff;\r\n            box-shadow: 0 0 0 #ffffff;\r\n}\r\n\r\n/* button customization */\r\n\r\n.btn-custom{\r\n    border-radius: 5px;\r\n    width: 80px;\r\n    height: 40px;\r\n}\r\n\r\n.btn-form {\r\n    border: 2px solid #644E5B;\r\n    color: #ffffff;\r\n    background: #644E5B;\r\n  \r\n}\r\n\r\n.btn-form:hover, .btn-form:focus {\r\n    color: #ffffff;\r\n    border-color: #314455;\r\n    background-color: #314455;\r\n}\r\n\r\n.btn-visible {\r\n    display: none;\r\n}\r\n\r\n.left-btn {\r\n    display: inline-block;\r\n}\r\n\r\n.right-btn {\r\n    display: inline-block;\r\n    position:absolute;\r\n    right: 5%;\r\n}\r\n\r\n.post-content {\r\n    width: 80%;\r\n    margin:auto;\r\n    margin-top: 5%;\r\n}\r\n\r\n.edit-icon-position {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 20px;\r\n}\r\n\r\n.edit-visibility {\r\n    display: block;\r\n}\r\n\r\n.fa.fa-lock.edit {\r\n    font-size: 30px;\r\n    color: #97AABD;\r\n    text-shadow: 2px 2px rgba(24, 24, 24, 0.884);\r\n}\r\n\r\n.fa.fa-unlock-alt {\r\n    font-size: 30px;\r\n    color: #C96567;\r\n    text-shadow: 2px 2px rgba(24, 24, 24, 0.884);\r\n}\r\n\r\n.fa.fa-eye-slash {\r\n    font-size: 25px;\r\n    color: #97AABD;\r\n    text-shadow: 2px 2px rgba(24, 24, 24, 0.884);\r\n\r\n}\r\n\r\n.fa.fa-eye {\r\n    font-size: 25px;\r\n    color: #C96567;\r\n    text-shadow: 2px 2px rgba(24, 24, 24, 0.884);\r\n\r\n}\r\n\r\n.fa.fa-eye-slash:hover, .fa.fa-eye:hover, .fa.fa-unlock-alt:hover, .fa.fa-lock.edit:hover {\r\n    text-shadow: 0px 0px rgba(24, 24, 24, 0.884);\r\n\r\n}\r\n\r\n/* Icon in Input CSS */\r\n\r\n.center-block {\r\n    float: none;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.icon-addon.disabled, .icon-addon.disabled:hover, .icon-addon.disabled:focus {\r\n    color: #644E5B;\r\n}\r\n\r\n.icon-addon.disabled .form-control:focus + .fa,\r\n.icon-addon.disabled:hover .fa {\r\n    color: #644E5B;\r\n}\r\n\r\n.input-group .icon-addon .form-control {\r\n    border-radius: 0;\r\n}\r\n\r\n.icon-addon {\r\n    position: relative;\r\n    color: #9E5A63;\r\n    display: block;\r\n}\r\n\r\n.icon-addon:after,\r\n.icon-addon:before {\r\n    display: table;\r\n    content: \" \";\r\n}\r\n\r\n.icon-addon:after {\r\n    clear: both;\r\n}\r\n\r\n.icon-addon.addon-md .glyphicon,\r\n.icon-addon .glyphicon, \r\n.icon-addon.addon-md .fa,\r\n.icon-addon .fa {\r\n    position: absolute;\r\n    z-index: 2;\r\n    left: 10px;\r\n    font-size: 14px;\r\n    width: 20px;\r\n    margin-left: -2.5px;\r\n    text-align: center;\r\n    padding: 10px 0;\r\n    top: 1px\r\n}\r\n\r\n.fa.md, .icon-color {\r\n    font-size: 25px; \r\n    color:  #97AABD;\r\n}\r\n\r\n.icon-addon.addon-lg .form-control {\r\n    line-height: 1.33;\r\n    height: 46px;\r\n    font-size: 18px;\r\n    padding: 10px 16px 10px 40px;\r\n}\r\n\r\n.icon-addon.addon-sm .form-control {\r\n    height: 30px;\r\n    padding: 5px 10px 5px 28px;\r\n    font-size: 12px;\r\n    line-height: 1.5;\r\n}\r\n\r\n.icon-addon.addon-lg .fa,\r\n.icon-addon.addon-lg .glyphicon {\r\n    font-size: 18px;\r\n    margin-left: 0;\r\n    left: 11px;\r\n    top: 4px;\r\n}\r\n\r\n.icon-addon.addon-md .form-control,\r\n.icon-addon .form-control {\r\n    padding-left: 30px;\r\n    float: left;\r\n    font-weight: normal;\r\n}\r\n\r\n.icon-addon.addon-sm .fa,\r\n.icon-addon.addon-sm .glyphicon {\r\n    margin-left: 0;\r\n    font-size: 12px;\r\n    left: 5px;\r\n    top: -1px\r\n}\r\n\r\n.icon-addon .form-control:focus + .fa,\r\n.icon-addon:hover .fa {\r\n    color: #97aabd;\r\n}\r\n\r\n/* End Icon CSS */"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-container\">\r\n  <h2 class=\"modal-title\">\r\n    User Settings\r\n  </h2>\r\n\r\n  <div class=\"adjust-width\">\r\n    <div class=\"edit-icon-position edit-visibility\" (click)=\"openCloseEditing()\">\r\n      <i id=\"editIcon\" class=\"fa fa-lock edit\"></i>\r\n    </div>\r\n    <div *ngIf=\"editingOpen\">\r\n      <div class=\"form-container-custom\">\r\n        <!--servlet url-->\r\n        <form action=\"http://localhost:8080\" method=\"post\" enctype=\"multipart/form-data\">\r\n          <div class=\"form-row\">\r\n            <div class=\"col-md-6 offset-md-3 col-sm-6 offset-sm-3 text-center\">\r\n              <div class=\"form-group\">\r\n                <div class=\"icon-addon disabled\">\r\n                  <label for=\"userEmail\" class=\"fa fa-envelope\"></label>\r\n                  <input type=\"email\" class=\"form-control\" id=\"userEmail\" placeholder=\"{{userEmail}}\" disabled>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"col-md-6 col-sm-6\">\r\n              <div class=\"form-group\">\r\n                <div class=\"icon-addon\">\r\n                  <label for=\"newFName\" class=\"fa fa-user\"></label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"newFName\" placeholder=\"{{firstName}}\" value=\"{{firstName}}\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6\">\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" id=\"newLName\" placeholder=\"{{lastName}}\" value=\"{{lastName}}\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!editingOpen\">\r\n      <div class=\"form-container-custom\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 col-sm-3 text-right\">\r\n            <span class=\"icon-color\">\r\n              <i class=\"fa fa-envelope md\"></i> :\r\n            </span>\r\n          </div>\r\n          <div class=\"col-md-6 col-sm-6  align-self-center\">\r\n            <span class=\"user-info\">\r\n              {{userEmail}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 col-sm-3 text-right\">\r\n            <span class=\"icon-color\">\r\n              <i class=\"fa fa-user md\"></i> :\r\n            </span>\r\n          </div>\r\n          <div class=\"col-md-6 col-sm-6 align-self-center\" style=\"text-align:left\">\r\n            <span class=\"user-info\">\r\n              {{firstName}} {{lastName}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"left-btn\">\r\n    <button type=\"button\" id=\"cancelBtn\" class=\"btn-custom btn-form\" (click)=\"closeModal()\">Cancel</button>\r\n  </div>\r\n  \r\n  <div class=\"right-btn\" *ngIf=\"editingOpen\">\r\n    <button type=\"button\" id=\"updateBtn\" class=\"btn-custom btn-form\">Update!</button>\r\n  </div>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(activeModal) {
        this.activeModal = activeModal;
        this.editingOpen = false;
        this.userEmail = 'myemail@gmail.com';
        this.firstName = 'My';
        this.lastName = 'Name';
        this.password = 'myPassword';
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.closeModal = function () {
        this.activeModal.close();
    };
    SettingsComponent.prototype.openCloseEditing = function () {
        var currentClass = document.getElementById("editIcon").getAttribute("class");
        console.log(currentClass);
        if (currentClass == "fa fa-lock edit") {
            document.getElementById("editIcon").setAttribute("class", "fa fa-unlock-alt");
            this.editingOpen = true;
        }
        else {
            document.getElementById("editIcon").setAttribute("class", "fa fa-lock edit");
            this.editingOpen = false;
        }
        console.log(this.editingOpen);
    };
    SettingsComponent.prototype.showHidePass = function () {
        var currentClass = document.getElementById("passVisible").getAttribute("class");
        if (currentClass == "fa fa-eye-slash") {
            document.getElementById("passVisible").setAttribute("class", "fa fa-eye");
            document.getElementById("containsPass").setAttribute("class", "user-info");
        }
        else {
            document.getElementById("passVisible").setAttribute("class", "fa fa-eye-slash");
            document.getElementById("containsPass").setAttribute("class", "user-info pass");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SettingsComponent.prototype, "userEmail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SettingsComponent.prototype, "firstName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SettingsComponent.prototype, "lastName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SettingsComponent.prototype, "password", void 0);
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("./src/app/settings/settings.component.html"),
            styles: [__webpack_require__("./src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/side-bar/side-bar.component.css":
/***/ (function(module, exports) {

module.exports = "/* My CSS for Image */\r\n\r\n.img-div{\r\n    width: 50%;\r\n    margin: auto;\r\n    margin-top: 25px;\r\n}\r\n\r\n.post-header-container{\r\n    height: 120px;\r\n    width: 120px\r\n}\r\n\r\n/* Template CSS */\r\n\r\n.sidebar1 {\r\n    background: #644E5B;\r\n    /* For browsers that do not support gradients */\r\n    /* For Safari 5.1 to 6.0 */\r\n    /* For Opera 11.1 to 12.0 */\r\n    /* For Firefox 3.6 to 15 */\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#314455), color-stop(#314455), to(#644E5B));\r\n    background: linear-gradient(#314455, #314455, #644E5B);\r\n    /* Standard syntax */\r\n    padding: 0px;\r\n    /* min-height: 100%; */\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    -webkit-box-shadow: 5px 8px 8px 2px rgba(0, 0, 0, 0.808);\r\n            box-shadow: 5px 8px 8px 2px rgba(0, 0, 0, 0.808);\r\n    /* max-width: 20vw; */\r\n    width: 20vw;\r\n    /* min-width: 20vw; */\r\n    height: auto;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left:0;\r\n}\r\n\r\n.logo {\r\n    max-height: 130px;\r\n}\r\n\r\n.logo>img {\r\n    margin:auto;\r\n    width: 50%;\r\n    \r\n    padding: 3px;\r\n    border: none;\r\n    border-radius: 100%;\r\n}\r\n\r\n/* My CSS for Nav */\r\n\r\n.nav-pad{\r\n    padding-top: 15px;\r\n}\r\n\r\n.nav-user-details{\r\n    color:#9E5A63;\r\n    padding: 2px;\r\n    font-family: Fontin-Sans-SmallCaps;\r\n    font-size: 20px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin: auto;\r\n    margin-top: 15px;\r\n}\r\n\r\n.center-block {\r\n    float: none;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.search-custom{\r\n    max-width: 80%;\r\n    margin-bottom:20px;\r\n    /* padding-bottom:10px; */\r\n    margin-top:10px;\r\n    margin-left: 10%;\r\n    margin-right: 10px;\r\n}\r\n\r\n.nav-link{\r\n    padding: 5px 0px 5px 20px;\r\n    color: #97AABD;\r\n    font-size: 18px;\r\n    font-family: Fontin-Sans-Italics;\r\n}\r\n\r\n.nav-link:hover{\r\n    background-color: rgba(151, 170, 189, 0.432);\r\n    border-left: 3px solid #97AABD;\r\n    color: #97AABD;\r\n    /* font-weight: bolder; */\r\n    padding-left: 35px;\r\n}\r\n\r\n.form-control{\r\n    border-color: #9E5A63;\r\n    color: #9E5A63;\r\n}\r\n\r\n.form-control:focus{\r\n    border-color: #97aabd;\r\n    -webkit-box-shadow: 0 1px 1px #97aabd inset, 0 0 8px #97aabd;\r\n            box-shadow: 0 1px 1px #97aabd inset, 0 0 8px #97aabd;\r\n    color: #97aabd;\r\n}\r\n\r\n/* Icon CSS */\r\n\r\n.input-group .icon-addon .form-control {\r\n    border-radius: 0;\r\n}\r\n\r\n.icon-addon {\r\n    position: relative;\r\n    color: #9E5A63;\r\n    display: block;\r\n}\r\n\r\n.icon-addon:after,\r\n.icon-addon:before {\r\n    display: table;\r\n    content: \" \";\r\n}\r\n\r\n.icon-addon:after {\r\n    clear: both;\r\n}\r\n\r\n.icon-addon.addon-md .glyphicon,\r\n.icon-addon .glyphicon, \r\n.icon-addon.addon-md .fa,\r\n.icon-addon .fa {\r\n    position: absolute;\r\n    z-index: 2;\r\n    left: 10px;\r\n    font-size: 14px;\r\n    width: 20px;\r\n    margin-left: -2.5px;\r\n    text-align: center;\r\n    padding: 10px 0;\r\n    top: 1px\r\n}\r\n\r\n.icon-addon.addon-lg .form-control {\r\n    line-height: 1.33;\r\n    height: 46px;\r\n    font-size: 18px;\r\n    padding: 10px 16px 10px 40px;\r\n}\r\n\r\n.icon-addon.addon-sm .form-control {\r\n    height: 30px;\r\n    padding: 5px 10px 5px 28px;\r\n    font-size: 12px;\r\n    line-height: 1.5;\r\n}\r\n\r\n.icon-addon.addon-lg .fa,\r\n.icon-addon.addon-lg .glyphicon {\r\n    font-size: 18px;\r\n    margin-left: 0;\r\n    left: 11px;\r\n    top: 4px;\r\n}\r\n\r\n.icon-addon.addon-md .form-control,\r\n.icon-addon .form-control {\r\n    padding-left: 30px;\r\n    float: left;\r\n    font-weight: normal;\r\n}\r\n\r\n.icon-addon.addon-sm .fa,\r\n.icon-addon.addon-sm .glyphicon {\r\n    margin-left: 0;\r\n    font-size: 12px;\r\n    left: 5px;\r\n    top: -1px\r\n}\r\n\r\n.icon-addon .form-control:focus + .glyphicon,\r\n.icon-addon:hover .glyphicon,\r\n.icon-addon .form-control:focus + .fa,\r\n.icon-addon:hover .fa {\r\n    color: #97aabd;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/side-bar/side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    \r\n    <div class=\"sidebar1\" id=\"navBar\">\r\n        <div class=\"img-div post-header-container\">\r\n            <app-profile-photo [url]=\"url\"></app-profile-photo>\r\n        </div>\r\n        <div class=\"nav-user-details\">\r\n            {{user.firstName}} {{user.lastName}}\r\n        </div>\r\n        \r\n        <div class=\"nav-pad\">\r\n            <a class=\"nav-link\" routerLink=\"/feed\">Feed</a>\r\n            <a class=\"nav-link\" routerLink=\"/profile/{{user.username}}\">My Profile</a>\r\n            <span class=\"nav-link\" (click)=\"openNewPost()\">New Post</span>\r\n            <span class=\"nav-link\" (click)=\"openSettings()\">\r\n                <i class=\"fa fa-cogs\"></i> Settings</span>\r\n            <span class=\"nav-link\" (click)='logOut()'>Log Out</span>\r\n            <app-search></app-search>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    "

/***/ }),

/***/ "./src/app/side-bar/side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_limb_modal_new_limb_modal_component__ = __webpack_require__("./src/app/new-limb-modal/new-limb-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects__ = __webpack_require__("./src/app/objects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings_component__ = __webpack_require__("./src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__backend_backend_service__ = __webpack_require__("./src/app/backend/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(modalService, server, router) {
        this.modalService = modalService;
        this.server = server;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__objects__["b" /* User */];
        this.getUser();
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent.prototype.getUser = function () {
        var _this = this;
        var username = localStorage.getItem("username");
        this.server.getUserByUsername(username)
            .subscribe(function (res) {
            _this.user = res;
            if (_this.user.profilePic) {
                _this.url = _this.user.profilePic;
            }
            else {
                _this.url = "/assets/images/user-200.png";
                // this.url = this.sanitization.bypassSecurityTrustStyle("url("+this.url+")");
            }
        });
    };
    SideBarComponent.prototype.openNewPost = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_1__new_limb_modal_new_limb_modal_component__["a" /* NewLimbModalComponent */]);
    };
    SideBarComponent.prototype.openSettings = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_4__settings_settings_component__["a" /* SettingsComponent */]);
        // modalRef.componentInstance.email = 'World';
    };
    SideBarComponent.prototype.logOut = function () {
        localStorage.removeItem('profile');
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('email');
        localStorage.removeItem('username');
        localStorage.removeItem('userObject');
        this.router.navigate(['']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__objects__["b" /* User */])
    ], SideBarComponent.prototype, "user", void 0);
    SideBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__("./src/app/side-bar/side-bar.component.html"),
            styles: [__webpack_require__("./src/app/side-bar/side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_5__backend_backend_service__["a" /* BackendService */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/verify-email/verify-email.component.css":
/***/ (function(module, exports) {

module.exports = ".form-container-custom{\r\n    border: 1px solid #314455;\r\n    border-radius: 5px;\r\n    padding: 0px;\r\n    margin-top: 20px;\r\n    background-color: #ffffff;\r\n}\r\n\r\n\r\n.form-header-custom{\r\n    text-align: center;\r\n    background-color: #314455;\r\n    margin-bottom: 20px;\r\n    height: 30px;\r\n    border: 1px solid #314455;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n\r\n}\r\n\r\n\r\n.form-row{\r\n    margin: 5px;\r\n}\r\n\r\n\r\n.form-control{\r\n    border-color: #9E5A63;\r\n    color: #9E5A63;\r\n}\r\n\r\n\r\n.form-control:focus{\r\n    border-color: #97aabd;\r\n    -webkit-box-shadow: 0 1px 1px #97aabd inset, 0 0 8px #97aabd;\r\n            box-shadow: 0 1px 1px #97aabd inset, 0 0 8px #97aabd;\r\n    color: #97aabd;\r\n}\r\n\r\n\r\n.btn-custom{\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n.btn-custom.outline{\r\n    border: 2px solid #9E5A63;\r\n    color: #9E5A63;\r\n}\r\n\r\n\r\n.btn-custom.outline{\r\n    background: #ffffff;\r\n    padding: 5px 15px;\r\n}\r\n\r\n\r\n.btn-custom.outline:hover, .btn-custom.outline:focus, .btn-custom.outline:active, .btn-custom.outline.active, .open > .dropdown-toggle.btn-custom {\r\n\tcolor: #ffffff;\r\n    border-color: #ffffff;\r\n    background-color: #9E5A63;\r\n}\r\n\r\n\r\n.btn-custom.outline:active, .btn-custom.outline.active {\r\n\tborder-color: #644E5B;\r\n\tcolor: #644E5B;\r\n\t-webkit-box-shadow: none;\r\n\t        box-shadow: none;\r\n}\r\n\r\n\r\n/* Icon in Input CSS */\r\n\r\n\r\n.center-block {\r\n    float: none;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n\r\n.input-group .icon-addon .form-control {\r\n    border-radius: 0;\r\n}\r\n\r\n\r\n.icon-addon {\r\n    position: relative;\r\n    color: #9E5A63;\r\n    display: block;\r\n}\r\n\r\n\r\n.icon-addon:after,\r\n.icon-addon:before {\r\n    display: table;\r\n    content: \" \";\r\n}\r\n\r\n\r\n.icon-addon:after {\r\n    clear: both;\r\n}\r\n\r\n\r\n.icon-addon.addon-md .glyphicon,\r\n.icon-addon .glyphicon, \r\n.icon-addon.addon-md .fa,\r\n.icon-addon .fa {\r\n    position: absolute;\r\n    z-index: 2;\r\n    left: 10px;\r\n    font-size: 14px;\r\n    width: 20px;\r\n    margin-left: -2.5px;\r\n    text-align: center;\r\n    padding: 10px 0;\r\n    top: 1px\r\n}\r\n\r\n\r\n.icon-addon.addon-lg .form-control {\r\n    line-height: 1.33;\r\n    height: 46px;\r\n    font-size: 18px;\r\n    padding: 10px 16px 10px 40px;\r\n}\r\n\r\n\r\n.icon-addon.addon-sm .form-control {\r\n    height: 30px;\r\n    padding: 5px 10px 5px 28px;\r\n    font-size: 12px;\r\n    line-height: 1.5;\r\n}\r\n\r\n\r\n.icon-addon.addon-lg .fa,\r\n.icon-addon.addon-lg .glyphicon {\r\n    font-size: 18px;\r\n    margin-left: 0;\r\n    left: 11px;\r\n    top: 4px;\r\n}\r\n\r\n\r\n.icon-addon.addon-md .form-control,\r\n.icon-addon .form-control {\r\n    padding-left: 30px;\r\n    float: left;\r\n    font-weight: normal;\r\n}\r\n\r\n\r\n.icon-addon.addon-sm .fa,\r\n.icon-addon.addon-sm .glyphicon {\r\n    margin-left: 0;\r\n    font-size: 12px;\r\n    left: 5px;\r\n    top: -1px\r\n}\r\n\r\n\r\n.icon-addon .form-control:focus + .glyphicon,\r\n.icon-addon:hover .glyphicon,\r\n.icon-addon .form-control:focus + .fa,\r\n.icon-addon:hover .fa {\r\n    color: #97aabd;\r\n}\r\n\r\n\r\n/* End Icon CSS */\r\n\r\n\r\n#forgotPassLink{\r\n    color: #97aabd;\r\n   \r\n}\r\n\r\n\r\nhr.drop_shadow{\r\n    width: 200px;\r\n    height: 10px;\r\n    border: 1;\r\n    -webkit-box-shadow: inset 0 9px 9px -3px #9E5A63;\r\n            box-shadow: inset 0 9px 9px -3px #9E5A63;\r\n      border-radius: 5px;\r\n}\r\n\r\n\r\n.logo-container{\r\n    margin-bottom:50px;\r\n}\r\n\r\n\r\n.form-background{\r\n    padding-top: 30px;\r\n    /* background-color:#ffffff4f; */\r\n}\r\n\r\n\r\n.background{\r\n    margin: 0px;\r\n    padding: 100px;\r\n    background-image: url('bg1.95125adb980e9f87f1a0.png');\r\n    height: 100vh;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n\r\nhtml, body {\r\n    height:100%;\r\n}"

/***/ }),

/***/ "./src/app/verify-email/verify-email.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n  <div class=\"container\">\r\n    <div class=\"col-lg-6 offset-lg-3\">\r\n      <div class=\"logo-container\">\r\n        <!-- Logo Will Go Here -->\r\n        <hr class=\"drop_shadow\">\r\n      </div>\r\n      <div class=\"card text-center\">\r\n        <img class=\"card-img-top\" src=\"holder.js/100px180/\" alt=\"\">\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">We just sent you an email</h4>\r\n          <p class=\"card-text\">Please verify your email and then log in.</p>\r\n          <button type=\"button\" class=\"btn btn-link btn-lg btn-block\" (click)=\"auth.login()\">Log In</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/verify-email/verify-email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyEmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_authentication_service__ = __webpack_require__("./src/app/auth/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerifyEmailComponent = /** @class */ (function () {
    function VerifyEmailComponent(auth) {
        this.auth = auth;
    }
    VerifyEmailComponent.prototype.ngOnInit = function () {
    };
    VerifyEmailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-verify-email',
            template: __webpack_require__("./src/app/verify-email/verify-email.component.html"),
            styles: [__webpack_require__("./src/app/verify-email/verify-email.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_authentication_service__["a" /* AuthenticationService */]])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map