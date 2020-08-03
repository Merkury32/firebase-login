function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/users-edit/users-edit.component */
    "./src/app/pages/users-edit/users-edit.component.ts");

    var routes = [{
      path: '',
      component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'login',
      component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'edit',
      component: _pages_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_3__["UsersEditComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'firebase-login';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/users-edit/users-edit.component */
    "./src/app/pages/users-edit/users-edit.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _pages_users_edit_add_user_popup_add_user_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/users-edit/add-user-popup/add-user-popup.component */
    "./src/app/pages/users-edit/add-user-popup/add-user-popup.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _pages_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_5__["UsersEditComponent"], _pages_users_edit_add_user_popup_add_user_popup_component__WEBPACK_IMPORTED_MODULE_7__["AddUserPopupComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _pages_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_5__["UsersEditComponent"], _pages_users_edit_add_user_popup_add_user_popup_component__WEBPACK_IMPORTED_MODULE_7__["AddUserPopupComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/user.model.ts":
  /*!**************************************!*\
    !*** ./src/app/models/user.model.ts ***!
    \**************************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User(user) {
      _classCallCheck(this, User);

      if (user) Object.assign(this, user);
    };
    /***/

  },

  /***/
  "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/authService/auth.service */
    "./src/app/services/authService/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, authService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.authService = authService;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this = this;

          var email = form.value.email;
          var password = form.value.password;
          console.log("Login with email: ".concat(email, " and password: ").concat(password));
          var authObs;
          authObs = this.authService.onLogin(email, password);
          authObs.subscribe(function (resData) {
            console.log(resData);

            _this.router.navigate(['/edit']);
          }, function (errorMessage) {
            console.log(errorMessage);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["login"]],
      decls: 17,
      vars: 0,
      consts: [[1, "login-container"], [1, "form-container"], [3, "ngSubmit"], ["loginForm", "ngForm"], ["type", "email", "id", "email", "name", "email", "ngModel", "", 1, "email-input"], ["for", "email", 1, "email-label"], [1, "fas", "fa-eye-slash"], ["type", "password", "id", "password", "name", "password", "ngModel", "", 1, "password-input"], ["for", "password", 1, "password-label"], ["type", "submit", 1, "login-button"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            return ctx.onSubmit(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Has\u0142o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Zaloguj si\u0119");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: [".login-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 250px;\n  margin-top: 12%;\n  background: #ffffff;\n}\n\n.email-input[_ngcontent-%COMP%], .password-input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  border-bottom: 1px solid #8b8b8b;\n  margin-bottom: 2px;\n  margin-top: 20px;\n  margin-left: 10px;\n  width: 260px;\n  height: 25px;\n  font-size: 15px;\n}\n\n.email-label[_ngcontent-%COMP%], .password-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #b6b4b1;\n  margin-left: 10px;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  background: #004cff;\n  color: #ffffff;\n  font-size: 18px;\n  font-weight: 500;\n  border: none;\n  border-radius: 5px;\n  width: 75%;\n  height: 50px;\n  margin-top: 25px;\n  margin-left: 37px;\n  outline: none;\n  cursor: pointer;\n}\n\n.login-button[_ngcontent-%COMP%]:active {\n  background: #1a5efa;\n}\n\ni[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #656565;\n  left: 872px;\n  top: 280px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vUDpcXHByb2pla3R5XFxmaXJlYmFzZS1sb2dpbi9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxtQkFBQTtBQ0NKOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBtYXJnaW4tdG9wOiAxMiU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG5cclxuLmVtYWlsLWlucHV0LCAucGFzc3dvcmQtaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOGI4YjhiO1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIHdpZHRoOiAyNjBweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uZW1haWwtbGFiZWwsIC5wYXNzd29yZC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICNiNmI0YjE7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6ICMwMDRjZmY7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogNzUlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzN3B4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWE1ZWZhO1xyXG4gIH1cclxufVxyXG5cclxuaSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiBcdCM2NTY1NjU7XHJcbiAgbGVmdDogODcycHg7XHJcbiAgdG9wOiAyODBweDtcclxufVxyXG4iLCIubG9naW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgbWFyZ2luLXRvcDogMTIlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uZW1haWwtaW5wdXQsIC5wYXNzd29yZC1pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4YjhiOGI7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAyNjBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5lbWFpbC1sYWJlbCwgLnBhc3N3b3JkLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2I2YjRiMTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5sb2dpbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMDA0Y2ZmO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDc1JTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogMzdweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxvZ2luLWJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMWE1ZWZhO1xufVxuXG5pIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogIzY1NjU2NTtcbiAgbGVmdDogODcycHg7XG4gIHRvcDogMjgwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/users-edit/add-user-popup/add-user-popup.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/users-edit/add-user-popup/add-user-popup.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AddUserPopupComponent */

  /***/
  function srcAppPagesUsersEditAddUserPopupAddUserPopupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddUserPopupComponent", function () {
      return AddUserPopupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["*"];

    var AddUserPopupComponent = /*#__PURE__*/function () {
      function AddUserPopupComponent() {
        _classCallCheck(this, AddUserPopupComponent);
      }

      _createClass(AddUserPopupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggle",
        value: function toggle(className) {
          document.querySelector(className).classList.toggle('hide');
        }
      }]);

      return AddUserPopupComponent;
    }();

    AddUserPopupComponent.ɵfac = function AddUserPopupComponent_Factory(t) {
      return new (t || AddUserPopupComponent)();
    };

    AddUserPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddUserPopupComponent,
      selectors: [["add-user-popup"]],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [[1, "popupBg", "hide", 3, "click"]],
      template: function AddUserPopupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddUserPopupComponent_Template_div_click_0_listener() {
            return ctx.toggle(".popupBg");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".popupBg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  min-height: 100vh;\n  width: 100vw;\n  justify-content: center;\n  align-items: center;\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.popupBg-hide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMtZWRpdC9hZGQtdXNlci1wb3B1cC9QOlxccHJvamVrdHlcXGZpcmViYXNlLWxvZ2luL3NyY1xcYXBwXFxwYWdlc1xcdXNlcnMtZWRpdFxcYWRkLXVzZXItcG9wdXBcXGFkZC11c2VyLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy91c2Vycy1lZGl0L2FkZC11c2VyLXBvcHVwL2FkZC11c2VyLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzLWVkaXQvYWRkLXVzZXItcG9wdXAvYWRkLXVzZXItcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9wdXBCZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwwLDAsMC41KVxyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnBvcHVwQmctaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iLCIucG9wdXBCZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnBvcHVwQmctaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddUserPopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'add-user-popup',
          templateUrl: './add-user-popup.component.html',
          styleUrls: ['./add-user-popup.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/users-edit/users-edit.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/users-edit/users-edit.component.ts ***!
    \**********************************************************/

  /*! exports provided: UsersEditComponent */

  /***/
  function srcAppPagesUsersEditUsersEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersEditComponent", function () {
      return UsersEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/user.model */
    "./src/app/models/user.model.ts");
    /* harmony import */


    var _add_user_popup_add_user_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./add-user-popup/add-user-popup.component */
    "./src/app/pages/users-edit/add-user-popup/add-user-popup.component.ts");
    /* harmony import */


    var _services_userService_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/userService/user.service */
    "./src/app/services/userService/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function UsersEditComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersEditComponent_div_18_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var i_r3 = ctx.index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.onDelete(i_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "X");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r3 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", i_r3 % 2 == 0 ? "tableRow--even" : "tableRow--odd");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.users[i_r3].firstname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.users[i_r3].lastname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.users[i_r3].adress);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.users[i_r3].phone);
      }
    }

    var UsersEditComponent = /*#__PURE__*/function () {
      function UsersEditComponent(userService) {
        _classCallCheck(this, UsersEditComponent);

        this.userService = userService;
      }

      _createClass(UsersEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.reloadTable();
        }
      }, {
        key: "reloadTable",
        value: function reloadTable() {
          var _this2 = this;

          this.userService.fetchUsers().subscribe(function (users) {
            _this2.users = users;
          });
        }
      }, {
        key: "toggle",
        value: function toggle(className) {
          this.userPopup.toggle(className);
        }
      }, {
        key: "onAdd",
        value: function onAdd(form) {
          var user = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]({
            firstname: form.value.firstname,
            lastname: form.value.lastname,
            adress: form.value.adress,
            phone: form.value.phone,
            id: '4'
          }); // this.userService.addUser(user).subscribe(users => {
          //   this.reloadTable();
          // })
          // form.reset();

          this.userService.addUser(user);
        }
      }, {
        key: "onDelete",
        value: function onDelete(userID) {
          var _this3 = this;

          this.userService.deleteUser(userID).subscribe(function (users) {
            _this3.reloadTable();
          });
        }
      }, {
        key: "onClear",
        value: function onClear(form) {
          form.reset();
        }
      }]);

      return UsersEditComponent;
    }();

    UsersEditComponent.ɵfac = function UsersEditComponent_Factory(t) {
      return new (t || UsersEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_userService_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
    };

    UsersEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UsersEditComponent,
      selectors: [["app-users-edit"]],
      viewQuery: function UsersEditComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_add_user_popup_add_user_popup_component__WEBPACK_IMPORTED_MODULE_2__["AddUserPopupComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.userPopup = _t.first);
        }
      },
      decls: 49,
      vars: 1,
      consts: [[1, "table-container"], [1, "add_user-button", 3, "click"], [1, "table"], [1, "tableBody"], [1, "tableHead"], [1, "tableRow--odd"], [1, "tableCell--head"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["onclick", "event.stopPropagation()", 1, "add_user-container"], [3, "ngSubmit"], ["userEditForm", "ngForm"], ["for", "firstname", 1, "add_user-label"], ["type", "text", "name", "firstname", "id", "firstname", "ngModel", "", 1, "add_user-input"], ["for", "lastname", 1, "add_user-label"], ["type", "text", "name", "lastname", "id", "lastname", "ngModel", "", 1, "add_user-input"], ["for", "adress", 1, "add_user-label"], ["type", "text", "name", "adress", "id", "adress", "ngModel", "", 1, "add_user-input"], ["for", "phone", 1, "add_user-label"], ["type", "text", "name", "phone", "id", "phone", "ngModel", "", 1, "add_user-input"], ["type", "submit", 1, "add_user-button--add", 3, "click"], ["type", "button", 1, "add_user-button--clear", 3, "click"], ["type", "button", 1, "add_user-button--close", 3, "click"], [3, "ngClass"], [1, "tableCell"], [1, "delete-button", 3, "click"]],
      template: function UsersEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersEditComponent_Template_button_click_2_listener() {
            return ctx.toggle(".popupBg");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dodaj u\u017Cytkownika");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "U\u017Cytkownicy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Imi\u0119");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nazwisko");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Adres");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Telefon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UsersEditComponent_div_18_Template, 12, 5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "add-user-popup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UsersEditComponent_Template_form_ngSubmit_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return ctx.onAdd(_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Imi\u0119");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Nazwisko");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Adres");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Numer telefonu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersEditComponent_Template_button_click_43_listener() {
            return ctx.toggle(".popupBg");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Dodaj");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersEditComponent_Template_button_click_45_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return ctx.onClear(_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Wyczy\u015B\u0107");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersEditComponent_Template_button_click_47_listener() {
            return ctx.toggle(".popupBg");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Anuluj");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _add_user_popup_add_user_popup_component__WEBPACK_IMPORTED_MODULE_2__["AddUserPopupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
      styles: [".table-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 2%;\n}\n\n.table[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #327a81;\n  border-radius: 5px;\n  text-align: center;\n  box-shadow: 0 1px 0 1px #aecdd0;\n  font-size: 20px;\n}\n\n.divTableBody[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.tableRow--even[_ngcontent-%COMP%] {\n  background: #ffffff;\n  display: flex;\n  border: 0px;\n}\n\n.tableRow--odd[_ngcontent-%COMP%] {\n  background: #daeff1;\n  display: flex;\n}\n\n.tableCell[_ngcontent-%COMP%] {\n  padding: 20px 20px;\n  color: #5c7d88;\n  font-weight: 500;\n  flex: 1;\n}\n\n.tableCell--head[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  color: #5c7d88;\n  font-weight: 500;\n  flex: 1;\n}\n\n.tableHead[_ngcontent-%COMP%] {\n  color: white;\n  background: #327a81;\n  padding: 10px 0;\n  font-size: 20px;\n  border-radius: 4px 4px 0px 0px;\n}\n\n.delete-button[_ngcontent-%COMP%] {\n  border: none;\n  background: #b2dfe2;\n  padding: 5px 10px;\n  outline: none;\n}\n\n.delete-button[_ngcontent-%COMP%]:active {\n  background: #e2f7f8;\n}\n\n.delete-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.add_user-button[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #5c7d88;\n  background: #b2dfe2;\n  padding: 5px;\n  margin-left: 5px;\n  border-radius: 5px 5px 0px 0px;\n}\n\n.add_user-button[_ngcontent-%COMP%]:active {\n  background: #cee7e9;\n}\n\n.add_user-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.add_user-container[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  background: #daeff1;\n  border-radius: 4px;\n  width: 190px;\n  height: 240px;\n  padding: 10px;\n}\n\n.add_user-input[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-left: 10px;\n  outline: none;\n  background: #fafcfc;\n  border: 1px solid #c3d2d3;\n  border-radius: 2px;\n  height: 20px;\n}\n\n.add_user-label[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-left: 12px;\n}\n\n.add_user-button--add[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-top: 8px;\n  border: none;\n  outline: none;\n  background: #edf7f8;\n  padding: 5px;\n}\n\n.add_user-button--add[_ngcontent-%COMP%]:active {\n  background: #e2f7f8;\n}\n\n.add_user-button--add[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.add_user-button--close[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  margin-top: 8px;\n  border: none;\n  outline: none;\n  background: #edf7f8;\n  padding: 5px;\n}\n\n.add_user-button--close[_ngcontent-%COMP%]:active {\n  background: #e2f7f8;\n}\n\n.add_user-button--close[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.add_user-button--clear[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  margin-top: 8px;\n  border: none;\n  outline: none;\n  background: #edf7f8;\n  padding: 5px;\n}\n\n.add_user-button--clear[_ngcontent-%COMP%]:active {\n  background: #e2f7f8;\n}\n\n.add_user-button--clear[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMtZWRpdC9QOlxccHJvamVrdHlcXGZpcmViYXNlLWxvZ2luL3NyY1xcYXBwXFxwYWdlc1xcdXNlcnMtZWRpdFxcdXNlcnMtZWRpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdXNlcnMtZWRpdC91c2Vycy1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREdFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FDREo7O0FETUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7QUNIRjs7QURLRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtBQ0hKOztBRFFBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQ0xGOztBRFFBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDTEY7O0FETUU7RUFDRSxtQkFBQTtBQ0pKOztBRE9FO0VBQ0UsZUFBQTtBQ0xKOztBRFNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQ05GOztBRFFFO0VBQ0UsbUJBQUE7QUNOSjs7QURTRTtFQUNFLGVBQUE7QUNQSjs7QURXQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDUkY7O0FEV0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1JGOztBRFdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDUkY7O0FEWUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1RKOztBRFdJO0VBQ0UsbUJBQUE7QUNUTjs7QURZSTtFQUNFLGVBQUE7QUNWTjs7QURjRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDWko7O0FEY0k7RUFDRSxtQkFBQTtBQ1pOOztBRGVJO0VBQ0UsZUFBQTtBQ2JOOztBRGlCRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDZko7O0FEaUJJO0VBQ0UsbUJBQUE7QUNmTjs7QURrQkk7RUFDRSxlQUFBO0FDaEJOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlcnMtZWRpdC91c2Vycy1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMjdhODE7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDFweCAwIDFweCAjYWVjZGQwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmRpdlRhYmxlQm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnRhYmxlUm93IHtcclxuICAmLS1ldmVuIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgfVxyXG5cclxuICAmLS1vZGQge1xyXG4gICAgYmFja2dyb3VuZDogI2RhZWZmMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLnRhYmxlQ2VsbCB7XHJcbiAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gIGNvbG9yOiAjNWM3ZDg4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZmxleDogMTtcclxuXHJcbiAgJi0taGVhZCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGNvbG9yOiAjNWM3ZDg4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLnRhYmxlSGVhZCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICMzMjdhODE7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5kZWxldGUtYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2IyZGZlMjtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlMmY3Zjg7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5hZGRfdXNlci1idXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjNWM3ZDg4O1xyXG4gIGJhY2tncm91bmQ6ICNiMmRmZTI7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4O1xyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2VlN2U5O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uYWRkX3VzZXItY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgYmFja2dyb3VuZDogI2RhZWZmMTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgd2lkdGg6IDE5MHB4O1xyXG4gIGhlaWdodDogMjQwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmFkZF91c2VyLWlucHV0IHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZmFmY2ZjO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjM2QyZDM7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmFkZF91c2VyLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbn1cclxuXHJcbi5hZGRfdXNlci1idXR0b24ge1xyXG4gICYtLWFkZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRmN2Y4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG5cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogI2UyZjdmODtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi0tY2xvc2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRmN2Y4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG5cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogI2UyZjdmODtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi0tY2xlYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRmN2Y4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG5cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogI2UyZjdmODtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIudGFibGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuXG4udGFibGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzI3YTgxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAxcHggMCAxcHggI2FlY2RkMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZGl2VGFibGVCb2R5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRhYmxlUm93LS1ldmVuIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiAwcHg7XG59XG4udGFibGVSb3ctLW9kZCB7XG4gIGJhY2tncm91bmQ6ICNkYWVmZjE7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50YWJsZUNlbGwge1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIGNvbG9yOiAjNWM3ZDg4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmbGV4OiAxO1xufVxuLnRhYmxlQ2VsbC0taGVhZCB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjb2xvcjogIzVjN2Q4ODtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZmxleDogMTtcbn1cblxuLnRhYmxlSGVhZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzMyN2E4MTtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMHB4IDBweDtcbn1cblxuLmRlbGV0ZS1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNiMmRmZTI7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuLmRlbGV0ZS1idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2UyZjdmODtcbn1cbi5kZWxldGUtYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkX3VzZXItYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNWM3ZDg4O1xuICBiYWNrZ3JvdW5kOiAjYjJkZmUyO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcbn1cbi5hZGRfdXNlci1idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2NlZTdlOTtcbn1cbi5hZGRfdXNlci1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGRfdXNlci1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGJhY2tncm91bmQ6ICNkYWVmZjE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDE5MHB4O1xuICBoZWlnaHQ6IDI0MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uYWRkX3VzZXItaW5wdXQge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmFmY2ZjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzNkMmQzO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmFkZF91c2VyLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cblxuLmFkZF91c2VyLWJ1dHRvbi0tYWRkIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZWRmN2Y4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4uYWRkX3VzZXItYnV0dG9uLS1hZGQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2UyZjdmODtcbn1cbi5hZGRfdXNlci1idXR0b24tLWFkZDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hZGRfdXNlci1idXR0b24tLWNsb3NlIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNlZGY3Zjg7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5hZGRfdXNlci1idXR0b24tLWNsb3NlOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlMmY3Zjg7XG59XG4uYWRkX3VzZXItYnV0dG9uLS1jbG9zZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hZGRfdXNlci1idXR0b24tLWNsZWFyIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNlZGY3Zjg7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5hZGRfdXNlci1idXR0b24tLWNsZWFyOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlMmY3Zjg7XG59XG4uYWRkX3VzZXItYnV0dG9uLS1jbGVhcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-users-edit',
          templateUrl: './users-edit.component.html',
          styleUrls: ['./users-edit.component.scss']
        }]
      }], function () {
        return [{
          type: _services_userService_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }];
      }, {
        userPopup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_add_user_popup_add_user_popup_component__WEBPACK_IMPORTED_MODULE_2__["AddUserPopupComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/authService/auth.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/authService/auth.service.ts ***!
    \******************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
      }

      _createClass(AuthService, [{
        key: "onLogin",
        value: function onLogin(email, password) {
          return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].firebaseApiKey, {
            email: email,
            password: password,
            returnSecureToken: true
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/userService/user.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/userService/user.service.ts ***!
    \******************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/user.model */
    "./src/app/models/user.model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      }

      _createClass(UserService, [{
        key: "fetchUsers",
        value: function fetchUsers() {
          var usersArr = this.allUsers;
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(usersArr);
        }
      }, {
        key: "addUser",
        value: function addUser(user) {
          // let usersArr = this.allUsers;
          // let mapIds = usersArr.map(ids => ids.id);
          // let maxId = Math.max(...mapIds);
          // if (usersArr.length == 0) {
          //   user.id = 0;
          // } else {
          //   user.id = maxId + 1;
          // }
          // usersArr.push(user);
          // this.allUsers = usersArr;
          // return of(user);
          var postData = user;
          this.http.post("https://fir-login-1416c.firebaseio.com/posts.json", postData, {
            observe: "response"
          }).subscribe(function (responseData) {
            console.log(responseData.body);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(id) {
          var deletedUser = this.allUsers;
          deletedUser.splice(id, 1);
          this.allUsers = deletedUser;
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(deletedUser);
        }
      }, {
        key: "allUsers",
        get: function get() {
          if (localStorage.getItem('users') === null) {
            return [];
          } else if (localStorage.length > 0) {
            var usersArr = JSON.parse(localStorage.getItem('users'));
            var mapUser = usersArr.map(function (user) {
              return new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](user);
            });
            return mapUser;
          }
        },
        set: function set(users) {
          localStorage.setItem('users', JSON.stringify(users));
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebaseApiKey: "AIzaSyA7pMaqfDaMKogW45qOCNFWxl_OsU0tByY"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! P:\projekty\firebase-login\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map