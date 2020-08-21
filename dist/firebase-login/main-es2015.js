(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/users-edit/users-edit.component */ "./src/app/pages/users-edit/users-edit.component.ts");






const routes = [
    { path: '', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    {
        path: 'edit',
        component: _pages_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_3__["UsersEditComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'firebase-login';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/users-edit/users-edit.component */ "./src/app/pages/users-edit/users-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _pages_users_edit_add_user_popup_add_user_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/users-edit/add-user-popup/add-user-popup.component */ "./src/app/pages/users-edit/add-user-popup/add-user-popup.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _services_authService_authGuard_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/authService/authGuard/auth-guard.service */ "./src/app/services/authService/authGuard/auth-guard.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_13__);
















firebase__WEBPACK_IMPORTED_MODULE_13__["initializeApp"](src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebaseConfig);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_authService_authGuard_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        _pages_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_5__["UsersEditComponent"],
        _pages_users_edit_add_user_popup_add_user_popup_component__WEBPACK_IMPORTED_MODULE_7__["AddUserPopupComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                    _pages_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_5__["UsersEditComponent"],
                    _pages_users_edit_add_user_popup_add_user_popup_component__WEBPACK_IMPORTED_MODULE_7__["AddUserPopupComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebaseConfig),
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"],
                ],
                providers: [_services_authService_authGuard_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(user) {
        if (user)
            Object.assign(this, user);
    }
}


/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authService/auth.service */ "./src/app/services/authService/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function LoginComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Poda\u0142e\u015B z\u0142y login lub has\u0142o ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() { }
    onSubmit(form) {
        const email = form.value.email;
        const password = form.value.password;
        console.log(`Login with email: ${email} and password: ${password}`);
        this.authService.onLogin(email, password);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["login"]], decls: 18, vars: 1, consts: [[1, "login-container"], [1, "form-container"], [3, "ngSubmit"], ["loginForm", "ngForm"], ["class", "wrong-auth-text", 4, "ngIf"], ["type", "email", "id", "email", "name", "email", "ngModel", "", 1, "email-input"], ["for", "email", 1, "email-label"], ["type", "password", "id", "password", "name", "password", "ngModel", "", 1, "password-input"], [1, "fas", "fa-eye-slash"], ["for", "password", 1, "password-label"], ["type", "submit", 1, "login-button"], [1, "wrong-auth-text"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_p_4_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Has\u0142o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Zaloguj si\u0119");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isWrongData === true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".login-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 250px;\n  margin-top: 12%;\n  background: #ffffff;\n}\n\n.email-input[_ngcontent-%COMP%], .password-input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  border-bottom: 1px solid #8b8b8b;\n  margin-bottom: 3px;\n  margin-top: 10px;\n  margin-left: 10px;\n  width: 260px;\n  height: 25px;\n  font-size: 15px;\n}\n\n.email-input[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\n.email-label[_ngcontent-%COMP%], .password-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #b6b4b1;\n  margin-left: 10px;\n}\n\n.wrong-auth-text[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #ff0000;\n  margin-left: 10px;\n  position: absolute;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  background: #004cff;\n  color: #ffffff;\n  font-size: 18px;\n  font-weight: 500;\n  border: none;\n  border-radius: 5px;\n  width: 75%;\n  height: 50px;\n  margin-top: 25px;\n  margin-left: 37px;\n  outline: none;\n  cursor: pointer;\n}\n\n.login-button[_ngcontent-%COMP%]:active {\n  background: #1a5efa;\n}\n\ni[_ngcontent-%COMP%] {\n  position: relative;\n  color: #656565;\n  margin-left: -15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vUDpcXHByb2pla3R5XFxmaXJlYmFzZS1sb2dpbi9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7O0VBRUUsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTs7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNDRjs7QURDRTtFQUNFLG1CQUFBO0FDQ0o7O0FER0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDEyJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uZW1haWwtaW5wdXQsXHJcbi5wYXNzd29yZC1pbnB1dCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4YjhiOGI7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5lbWFpbC1pbnB1dCB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLmVtYWlsLWxhYmVsLFxyXG4ucGFzc3dvcmQtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjYjZiNGIxO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ud3JvbmctYXV0aC10ZXh0IHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgY29sb3I6ICNmZjAwMDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4ubG9naW4tYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiAjMDA0Y2ZmO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBtYXJnaW4tbGVmdDogMzdweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzFhNWVmYTtcclxuICB9XHJcbn1cclxuXHJcbmkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogIzY1NjU2NTtcclxuICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbn1cclxuIiwiLmxvZ2luLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIG1hcmdpbi10b3A6IDEyJTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuLmVtYWlsLWlucHV0LFxuLnBhc3N3b3JkLWlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzhiOGI4YjtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDI2MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmVtYWlsLWlucHV0IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmVtYWlsLWxhYmVsLFxuLnBhc3N3b3JkLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2I2YjRiMTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi53cm9uZy1hdXRoLXRleHQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmYwMDAwO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubG9naW4tYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzAwNGNmZjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDM3cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5sb2dpbi1idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzFhNWVmYTtcbn1cblxuaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICM2NTY1NjU7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss'],
            }]
    }], function () { return [{ type: _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/users-edit/add-user-popup/add-user-popup.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/users-edit/add-user-popup/add-user-popup.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddUserPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserPopupComponent", function() { return AddUserPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class AddUserPopupComponent {
    constructor() { }
    ngOnInit() {
    }
    toggle(className) {
        document.querySelector(className).classList.toggle('hide');
    }
}
AddUserPopupComponent.ɵfac = function AddUserPopupComponent_Factory(t) { return new (t || AddUserPopupComponent)(); };
AddUserPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddUserPopupComponent, selectors: [["add-user-popup"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "popupBg", "hide", 3, "click"]], template: function AddUserPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddUserPopupComponent_Template_div_click_0_listener() { return ctx.toggle(".popupBg"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".popupBg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  min-height: 100vh;\n  width: 100vw;\n  justify-content: center;\n  align-items: center;\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.popupBg-hide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMtZWRpdC9hZGQtdXNlci1wb3B1cC9QOlxccHJvamVrdHlcXGZpcmViYXNlLWxvZ2luL3NyY1xcYXBwXFxwYWdlc1xcdXNlcnMtZWRpdFxcYWRkLXVzZXItcG9wdXBcXGFkZC11c2VyLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy91c2Vycy1lZGl0L2FkZC11c2VyLXBvcHVwL2FkZC11c2VyLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzLWVkaXQvYWRkLXVzZXItcG9wdXAvYWRkLXVzZXItcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9wdXBCZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwwLDAsMC41KVxyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnBvcHVwQmctaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iLCIucG9wdXBCZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnBvcHVwQmctaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddUserPopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'add-user-popup',
                templateUrl: './add-user-popup.component.html',
                styleUrls: ['./add-user-popup.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/users-edit/users-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/users-edit/users-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: UsersEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEditComponent", function() { return UsersEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _add_user_popup_add_user_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-user-popup/add-user-popup.component */ "./src/app/pages/users-edit/add-user-popup/add-user-popup.component.ts");
/* harmony import */ var _services_userService_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/userService/user.service */ "./src/app/services/userService/user.service.ts");
/* harmony import */ var src_app_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authService/auth.service */ "./src/app/services/authService/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









function UsersEditComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersEditComponent_div_20_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onDelete(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", i_r3 % 2 == 0 ? "tableRow--even" : "tableRow--odd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.users[i_r3].firstname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.users[i_r3].lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.users[i_r3].adress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.users[i_r3].phone);
} }
class UsersEditComponent {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    ngOnInit() {
        this.reloadTable();
    }
    reloadTable() {
        this.userService.fetchUsers().subscribe((users) => {
            this.users = users;
        });
    }
    toggle(className) {
        this.userPopup.toggle(className);
    }
    onAdd(form) {
        const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]({
            firstname: form.value.firstname,
            lastname: form.value.lastname,
            adress: form.value.adress,
            phone: form.value.phone,
            id: 0,
        });
        form.reset();
        this.userService.addUser(user);
        this.reloadTable();
    }
    onDelete(userID) {
        this.userService.deleteUser();
    }
    onClear(form) {
        form.reset();
    }
    onLogout() {
        this.authService.onLogout();
    }
}
UsersEditComponent.ɵfac = function UsersEditComponent_Factory(t) { return new (t || UsersEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_userService_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
UsersEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersEditComponent, selectors: [["app-users-edit"]], viewQuery: function UsersEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_add_user_popup_add_user_popup_component__WEBPACK_IMPORTED_MODULE_2__["AddUserPopupComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.userPopup = _t.first);
    } }, decls: 51, vars: 1, consts: [["type", "button", 1, "logout-button", 3, "click"], [1, "table-container"], [1, "add_user-button", 3, "click"], [1, "table"], [1, "tableBody"], [1, "tableHead"], [1, "tableRow--odd"], [1, "tableCell--head"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["onclick", "event.stopPropagation()", 1, "add_user-container"], [3, "ngSubmit"], ["userEditForm", "ngForm"], ["for", "firstname", 1, "add_user-label"], ["type", "text", "name", "firstname", "id", "firstname", "ngModel", "", 1, "add_user-input"], ["for", "lastname", 1, "add_user-label"], ["type", "text", "name", "lastname", "id", "lastname", "ngModel", "", 1, "add_user-input"], ["for", "adress", 1, "add_user-label"], ["type", "text", "name", "adress", "id", "adress", "ngModel", "", 1, "add_user-input"], ["for", "phone", 1, "add_user-label"], ["type", "text", "name", "phone", "id", "phone", "ngModel", "", 1, "add_user-input"], ["type", "submit", 1, "add_user-button--add", 3, "click"], ["type", "button", 1, "add_user-button--clear", 3, "click"], ["type", "button", 1, "add_user-button--close", 3, "click"], [3, "ngClass"], [1, "tableCell"], [1, "delete-button", 3, "click"]], template: function UsersEditComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersEditComponent_Template_button_click_0_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Wyloguj si\u0119\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersEditComponent_Template_button_click_4_listener() { return ctx.toggle(".popupBg"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Dodaj u\u017Cytkownika ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "U\u017Cytkownicy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Imi\u0119");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Nazwisko");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Adres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Telefon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UsersEditComponent_div_20_Template, 12, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "add-user-popup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UsersEditComponent_Template_form_ngSubmit_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return ctx.onAdd(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Imi\u0119");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Nazwisko");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Adres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Numer telefonu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersEditComponent_Template_button_click_45_listener() { return ctx.toggle(".popupBg"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Dodaj ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersEditComponent_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return ctx.onClear(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Wyczy\u015B\u0107 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersEditComponent_Template_button_click_49_listener() { return ctx.toggle(".popupBg"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Anuluj ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _add_user_popup_add_user_popup_component__WEBPACK_IMPORTED_MODULE_2__["AddUserPopupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".table-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 2%;\n}\n\n.table[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #327a81;\n  border-radius: 5px;\n  text-align: center;\n  box-shadow: 0 1px 0 1px #aecdd0;\n  font-size: 20px;\n}\n\n.divTableBody[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.tableRow--even[_ngcontent-%COMP%] {\n  background: #ffffff;\n  display: flex;\n  border: 0px;\n}\n\n.tableRow--odd[_ngcontent-%COMP%] {\n  background: #daeff1;\n  display: flex;\n}\n\n.tableCell[_ngcontent-%COMP%] {\n  padding: 20px 20px;\n  color: #5c7d88;\n  font-weight: 500;\n  flex: 1;\n}\n\n.tableCell--head[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  color: #5c7d88;\n  font-weight: 500;\n  flex: 1;\n}\n\n.tableHead[_ngcontent-%COMP%] {\n  color: white;\n  background: #327a81;\n  padding: 10px 0;\n  font-size: 20px;\n  border-radius: 4px 4px 0px 0px;\n}\n\n.delete-button[_ngcontent-%COMP%] {\n  border: none;\n  background: #b2dfe2;\n  padding: 5px 10px;\n  outline: none;\n}\n\n.delete-button[_ngcontent-%COMP%]:active {\n  background: #e2f7f8;\n}\n\n.delete-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.add_user-button[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #5c7d88;\n  background: #b2dfe2;\n  padding: 5px;\n  margin-left: 5px;\n  border-radius: 5px 5px 0px 0px;\n}\n\n.add_user-button[_ngcontent-%COMP%]:active {\n  background: #cee7e9;\n}\n\n.add_user-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.add_user-container[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  background: #daeff1;\n  border-radius: 4px;\n  width: 190px;\n  height: 240px;\n  padding: 10px;\n}\n\n.add_user-input[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-left: 10px;\n  outline: none;\n  background: #fafcfc;\n  border: 1px solid #c3d2d3;\n  border-radius: 2px;\n  height: 20px;\n}\n\n.add_user-label[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-left: 12px;\n}\n\n.add_user-button--add[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-top: 8px;\n  border: none;\n  outline: none;\n  background: #edf7f8;\n  padding: 5px;\n}\n\n.add_user-button--add[_ngcontent-%COMP%]:active {\n  background: #e2f7f8;\n}\n\n.add_user-button--add[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.add_user-button--close[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  margin-top: 8px;\n  border: none;\n  outline: none;\n  background: #edf7f8;\n  padding: 5px;\n}\n\n.add_user-button--close[_ngcontent-%COMP%]:active {\n  background: #e2f7f8;\n}\n\n.add_user-button--close[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.add_user-button--clear[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  margin-top: 8px;\n  border: none;\n  outline: none;\n  background: #edf7f8;\n  padding: 5px;\n}\n\n.add_user-button--clear[_ngcontent-%COMP%]:active {\n  background: #e2f7f8;\n}\n\n.add_user-button--clear[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.logout-button[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #e2f7f8;\n  border: none;\n  padding: 12px;\n  font-size: 15px;\n  outline: none;\n  cursor: pointer;\n  top: 0px;\n  right: 0px;\n}\n\n.logout-button[_ngcontent-%COMP%]:active {\n  background: #bff8fa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMtZWRpdC9QOlxccHJvamVrdHlcXGZpcmViYXNlLWxvZ2luL3NyY1xcYXBwXFxwYWdlc1xcdXNlcnMtZWRpdFxcdXNlcnMtZWRpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdXNlcnMtZWRpdC91c2Vycy1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREdFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FDREo7O0FES0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7QUNGRjs7QURJRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtBQ0ZKOztBRE1BO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQ0hGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDSEY7O0FESUU7RUFDRSxtQkFBQTtBQ0ZKOztBREtFO0VBQ0UsZUFBQTtBQ0hKOztBRE9BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQ0pGOztBRE1FO0VBQ0UsbUJBQUE7QUNKSjs7QURPRTtFQUNFLGVBQUE7QUNMSjs7QURTQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDTkY7O0FEU0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ05GOztBRFNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDTkY7O0FEVUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1BKOztBRFNJO0VBQ0UsbUJBQUE7QUNQTjs7QURVSTtFQUNFLGVBQUE7QUNSTjs7QURZRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDVko7O0FEWUk7RUFDRSxtQkFBQTtBQ1ZOOztBRGFJO0VBQ0UsZUFBQTtBQ1hOOztBRGVFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNiSjs7QURlSTtFQUNFLG1CQUFBO0FDYk47O0FEZ0JJO0VBQ0UsZUFBQTtBQ2ROOztBRG1CQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDaEJGOztBRGtCRTtFQUNFLG1CQUFBO0FDaEJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlcnMtZWRpdC91c2Vycy1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMjdhODE7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDFweCAwIDFweCAjYWVjZGQwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmRpdlRhYmxlQm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnRhYmxlUm93IHtcclxuICAmLS1ldmVuIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgfVxyXG5cclxuICAmLS1vZGQge1xyXG4gICAgYmFja2dyb3VuZDogI2RhZWZmMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG59XHJcblxyXG4udGFibGVDZWxsIHtcclxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgY29sb3I6ICM1YzdkODg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmbGV4OiAxO1xyXG5cclxuICAmLS1oZWFkIHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgY29sb3I6ICM1YzdkODg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbn1cclxuXHJcbi50YWJsZUhlYWQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiAjMzI3YTgxO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwcHggMHB4O1xyXG59XHJcblxyXG4uZGVsZXRlLWJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNiMmRmZTI7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTJmN2Y4O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uYWRkX3VzZXItYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzVjN2Q4ODtcclxuICBiYWNrZ3JvdW5kOiAjYjJkZmUyO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2NlZTdlOTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmFkZF91c2VyLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNkYWVmZjE7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHdpZHRoOiAxOTBweDtcclxuICBoZWlnaHQ6IDI0MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5hZGRfdXNlci1pbnB1dCB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2ZhZmNmYztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzNkMmQzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5hZGRfdXNlci1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG59XHJcblxyXG4uYWRkX3VzZXItYnV0dG9uIHtcclxuICAmLS1hZGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI2VkZjdmODtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlMmY3Zjg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtLWNsb3NlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI2VkZjdmODtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlMmY3Zjg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtLWNsZWFyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI2VkZjdmODtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlMmY3Zjg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5sb2dvdXQtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogI2UyZjdmODtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdG9wOiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2JmZjhmYTtcclxuICB9XHJcbn1cclxuIiwiLnRhYmxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLnRhYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMyN2E4MTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgMXB4ICNhZWNkZDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmRpdlRhYmxlQm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50YWJsZVJvdy0tZXZlbiB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMHB4O1xufVxuLnRhYmxlUm93LS1vZGQge1xuICBiYWNrZ3JvdW5kOiAjZGFlZmYxO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGFibGVDZWxsIHtcbiAgcGFkZGluZzogMjBweCAyMHB4O1xuICBjb2xvcjogIzVjN2Q4ODtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZmxleDogMTtcbn1cbi50YWJsZUNlbGwtLWhlYWQge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY29sb3I6ICM1YzdkODg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZsZXg6IDE7XG59XG5cbi50YWJsZUhlYWQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMzMjdhODE7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDBweCAwcHg7XG59XG5cbi5kZWxldGUtYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjYjJkZmUyO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5kZWxldGUtYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlMmY3Zjg7XG59XG4uZGVsZXRlLWJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZF91c2VyLWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzVjN2Q4ODtcbiAgYmFja2dyb3VuZDogI2IyZGZlMjtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDBweCAwcHg7XG59XG4uYWRkX3VzZXItYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNjZWU3ZTk7XG59XG4uYWRkX3VzZXItYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkX3VzZXItY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZGFlZmYxO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxOTBweDtcbiAgaGVpZ2h0OiAyNDBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmFkZF91c2VyLWlucHV0IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZhZmNmYztcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzZDJkMztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5hZGRfdXNlci1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5cbi5hZGRfdXNlci1idXR0b24tLWFkZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2VkZjdmODtcbiAgcGFkZGluZzogNXB4O1xufVxuLmFkZF91c2VyLWJ1dHRvbi0tYWRkOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlMmY3Zjg7XG59XG4uYWRkX3VzZXItYnV0dG9uLS1hZGQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRkX3VzZXItYnV0dG9uLS1jbG9zZSB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZWRmN2Y4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4uYWRkX3VzZXItYnV0dG9uLS1jbG9zZTphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZTJmN2Y4O1xufVxuLmFkZF91c2VyLWJ1dHRvbi0tY2xvc2U6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRkX3VzZXItYnV0dG9uLS1jbGVhciB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZWRmN2Y4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4uYWRkX3VzZXItYnV0dG9uLS1jbGVhcjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZTJmN2Y4O1xufVxuLmFkZF91c2VyLWJ1dHRvbi0tY2xlYXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2dvdXQtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZTJmN2Y4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn1cbi5sb2dvdXQtYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNiZmY4ZmE7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users-edit',
                templateUrl: './users-edit.component.html',
                styleUrls: ['./users-edit.component.scss'],
            }]
    }], function () { return [{ type: _services_userService_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: src_app_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, { userPopup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_add_user_popup_add_user_popup_component__WEBPACK_IMPORTED_MODULE_2__["AddUserPopupComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/services/authService/auth.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/authService/auth.service.ts ***!
  \******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");






class AuthService {
    constructor(router, fireAuth) {
        this.router = router;
        this.fireAuth = fireAuth;
    }
    onLogin(email, password) {
        firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
            this.router.navigate(['edit']);
            console.log('Succes');
        })
            .catch((error) => {
            console.log(error);
        });
    }
    onLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut();
                this.router.navigate(['./']);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/authService/authGuard/auth-guard.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/services/authService/authGuard/auth-guard.service.ts ***!
  \**********************************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/login/login.component */ "./src/app/pages/login/login.component.ts");




class AuthGuardService {
    constructor(router, loginComponent) {
        this.router = router;
        this.loginComponent = loginComponent;
    }
    canActivate() {
        console.log(this.loginComponent.isWrongData);
        if (!this.loginComponent.isWrongData) {
            console.log('true');
            return true;
        }
        console.log('false');
        return false;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/userService/user.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/userService/user.service.ts ***!
  \******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");








class UserService {
    constructor() {
        this.usersIds = [];
    }
    fetchUsers() {
        let result = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        const usersData = firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('users');
        usersData.on('value', (snap) => {
            const snapVal = snap.val();
            let usersArr = Object.keys(snapVal).map((id) => new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](snapVal[id]));
            for (let i = 0; i < usersArr.length; i++) {
                this.usersIds.push(usersArr[i].id);
            }
            result.next(usersArr);
        });
        return result.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    addUser(user) {
        const postData = user;
        const database = firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"]();
        let userId;
        if (this.usersIds.length === 0) {
            userId = 0;
        }
        else {
            userId = Math.max(...this.usersIds) + 1;
        }
        console.log('Added user id is:', userId);
        database.ref('users/' + userId).set({
            firstname: postData.firstname,
            lastname: postData.lastname,
            adress: postData.adress,
            phone: postData.phone,
            id: userId,
        });
        this.fetchUsers();
    }
    deleteUser() { }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyA7pMaqfDaMKogW45qOCNFWxl_OsU0tByY',
        authDomain: 'fir-login-1416c.firebaseapp.com',
        databaseURL: 'https://fir-login-1416c.firebaseio.com',
        projectId: 'fir-login-1416c',
        storageBucket: 'fir-login-1416c.appspot.com',
        messagingSenderId: '29457885746',
        appId: '1:29457885746:web:c3e7c3bd2cee9aad74ea2b',
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! P:\projekty\firebase-login\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map