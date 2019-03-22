(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _components_page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page/page.component */ "./src/app/components/page/page.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_design_work_design_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/design-work/design-work.component */ "./src/app/components/design-work/design-work.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_architecture_architecture_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/architecture/architecture.component */ "./src/app/components/architecture/architecture.component.ts");
/* harmony import */ var _components_interior_interior_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/interior/interior.component */ "./src/app/components/interior/interior.component.ts");










var routes = [
    {
        path: '',
        component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"]
    },
    {
        path: '',
        component: _components_page_page_component__WEBPACK_IMPORTED_MODULE_4__["PageComponent"],
        children: [
            {
                path: 'design-works',
                component: _components_design_work_design_work_component__WEBPACK_IMPORTED_MODULE_6__["DesignWorkComponent"]
            },
            {
                path: 'about',
                component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
            },
            {
                path: 'contact',
                component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
            },
            {
                path: 'architecture',
                component: _components_architecture_architecture_component__WEBPACK_IMPORTED_MODULE_8__["ArchitectureComponent"]
            },
            {
                path: 'interior',
                component: _components_interior_interior_component__WEBPACK_IMPORTED_MODULE_9__["InteriorComponent"]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_project_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/project-service.service */ "./src/app/services/project-service.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(projectService) {
        this.projectService = projectService;
        this.title = 'an';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_project_service_service__WEBPACK_IMPORTED_MODULE_2__["ProjectServiceService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _components_page_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page/page.component */ "./src/app/components/page/page.component.ts");
/* harmony import */ var _components_navigator_navigator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navigator/navigator.component */ "./src/app/components/navigator/navigator.component.ts");
/* harmony import */ var _components_design_work_design_work_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/design-work/design-work.component */ "./src/app/components/design-work/design-work.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "./src/app/components/main-page/main-page.component.ts");
/* harmony import */ var _components_sub_page_sub_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sub-page/sub-page.component */ "./src/app/components/sub-page/sub-page.component.ts");
/* harmony import */ var _components_project_project_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/project/project.component */ "./src/app/components/project/project.component.ts");
/* harmony import */ var _components_architecture_architecture_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/architecture/architecture.component */ "./src/app/components/architecture/architecture.component.ts");
/* harmony import */ var _components_interior_interior_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/interior/interior.component */ "./src/app/components/interior/interior.component.ts");
/* harmony import */ var _directives_defer_load_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/defer-load.directive */ "./src/app/directives/defer-load.directive.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
                _components_page_page_component__WEBPACK_IMPORTED_MODULE_7__["PageComponent"],
                _components_navigator_navigator_component__WEBPACK_IMPORTED_MODULE_8__["NavigatorComponent"],
                _components_design_work_design_work_component__WEBPACK_IMPORTED_MODULE_9__["DesignWorkComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_13__["MainPageComponent"],
                _components_sub_page_sub_page_component__WEBPACK_IMPORTED_MODULE_14__["SubPageComponent"],
                _components_project_project_component__WEBPACK_IMPORTED_MODULE_15__["ProjectComponent"],
                _components_architecture_architecture_component__WEBPACK_IMPORTED_MODULE_16__["ArchitectureComponent"],
                _components_interior_interior_component__WEBPACK_IMPORTED_MODULE_17__["InteriorComponent"],
                _directives_defer_load_directive__WEBPACK_IMPORTED_MODULE_18__["DeferLoadDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-page/main-page.component */ "./src/app/components/main-page/main-page.component.ts");



var AboutComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AboutComponent, _super);
    function AboutComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = 'an <b>anatelier</b> for <b>architectural design</b>';
        _this.description = 'an atelier for architectural design is a boutique design studio \
        based in jakarta. our team comes from multiple design discipline and \
        experience, to specialize in tailoring your project with style and \
        substance.';
        return _this;
    }
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./../main-page/main-page.component.html */ "./src/app/components/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./../main-page/main-page.component.css */ "./src/app/components/main-page/main-page.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}(_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"]));



/***/ }),

/***/ "./src/app/components/architecture/architecture.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/architecture/architecture.component.ts ***!
  \*******************************************************************/
/*! exports provided: ArchitectureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchitectureComponent", function() { return ArchitectureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sub_page_sub_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sub-page/sub-page.component */ "./src/app/components/sub-page/sub-page.component.ts");
/* harmony import */ var src_app_services_project_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/project-service.service */ "./src/app/services/project-service.service.ts");




var ArchitectureComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ArchitectureComponent, _super);
    function ArchitectureComponent(projectService) {
        var _this = _super.call(this) || this;
        _this.projectService = projectService;
        _this.title = 'ARCHITECTURE';
        _this.description = 'BRINGING EVERY RELEVANT DESIGN DISCIPLINE WITH OUR \
        EXPERIENCE TO CREATE THE MOST CONTEXTUAL DESIGN  THAT FIT THE PROJECT.';
        return _this;
    }
    ArchitectureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectSub = this.projectService.getContent('architecture', 'project')
            .subscribe(function (val) {
            _this.projects = val;
            _this.contents = _this.projectService.generatePageArray('architecture', _this.projects, _this.showcases);
        });
        this.showcaseSub = this.projectService.getContent('architecture', 'showcase')
            .subscribe(function (val) {
            _this.showcases = val;
            _this.contents = _this.projectService.generatePageArray('architecture', _this.projects, _this.showcases);
        });
        this.projectService.refreshData();
    };
    ArchitectureComponent.prototype.ngOnDestroy = function () {
        this.projectSub.unsubscribe();
        this.showcaseSub.unsubscribe();
    };
    ArchitectureComponent.prototype.isLastOddMainContent = function (index) {
        if (this.projects === undefined)
            return false;
        return (this.isMainContent(index) && index == this.projects.length);
    };
    ArchitectureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-architecture',
            template: __webpack_require__(/*! ./../sub-page/sub-page.component.html */ "./src/app/components/sub-page/sub-page.component.html"),
            styles: [__webpack_require__(/*! ./../sub-page/sub-page.component.css */ "./src/app/components/sub-page/sub-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_project_service_service__WEBPACK_IMPORTED_MODULE_3__["ProjectServiceService"]])
    ], ArchitectureComponent);
    return ArchitectureComponent;
}(_sub_page_sub_page_component__WEBPACK_IMPORTED_MODULE_2__["SubPageComponent"]));



/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-page/main-page.component */ "./src/app/components/main-page/main-page.component.ts");



var ContactComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContactComponent, _super);
    function ContactComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = 'contact';
        _this.description = 'if you would like to commission an atelier for architectural\
         design to help with your project or if you have any questions, \
         comments, or just feel like reaching out, contact us now!';
        return _this;
    }
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./../main-page/main-page.component.html */ "./src/app/components/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./../main-page/main-page.component.css */ "./src/app/components/main-page/main-page.component.css")]
        })
    ], ContactComponent);
    return ContactComponent;
}(_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"]));



/***/ }),

/***/ "./src/app/components/design-work/design-work.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/design-work/design-work.component.ts ***!
  \*****************************************************************/
/*! exports provided: DesignWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignWorkComponent", function() { return DesignWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-page/main-page.component */ "./src/app/components/main-page/main-page.component.ts");



var DesignWorkComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DesignWorkComponent, _super);
    function DesignWorkComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = 'design works.';
        _this.description = 'designing starts when we think of a solution for the problem\
         - our design aim to create a better lifestyle for the user, \
         a series of dialogue, consist of the user and the collaborator.';
        return _this;
    }
    DesignWorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-design-work',
            template: __webpack_require__(/*! ./../main-page/main-page.component.html */ "./src/app/components/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./../main-page/main-page.component.css */ "./src/app/components/main-page/main-page.component.css")]
        })
    ], DesignWorkComponent);
    return DesignWorkComponent;
}(_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"]));



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'fontello';\n  src: url('fontello.eot?80731445');\n  src: url('fontello.eot?80731445#iefix') format('embedded-opentype'),\n       url('fontello.woff2?80731445') format('woff2'),\n       url('fontello.woff?80731445') format('woff'),\n       url('fontello.ttf?80731445') format('truetype'),\n       url('fontello.svg?80731445#fontello') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n/* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */\n/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */\n/*\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n  @font-face {\n    font-family: 'fontello';\n    src: url('../font/fontello.svg?80731445#fontello') format('svg');\n  }\n}\n*/\n[class^=\"icon-\"]:before, [class*=\" icon-\"]:before {\n  font-family: \"fontello\";\n  font-style: normal;\n  font-weight: normal;\n  speak: none;\n \n  display: inline-block;\n  text-decoration: inherit;\n  width: 1em;\n  margin-right: .2em;\n  text-align: center;\n  /* opacity: .8; */\n \n  /* For safety - reset parent styles, that can break glyph codes*/\n  font-variant: normal;\n  text-transform: none;\n \n  /* fix buttons height, for twitter bootstrap */\n  line-height: 1em;\n \n  /* Animation center compensation - margins should be symmetric */\n  /* remove if not needed */\n  margin-left: .2em;\n \n  /* you can be more comfortable with increased icons size */\n  /* font-size: 120%; */\n \n  /* Font smoothing. That was taken from TWBS */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n \n  /* Uncomment for 3D effect */\n  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */\n}\n.icon-twitter:before { content: '\\f099'; }\n/* '' */\n.icon-copyright:before { content: '\\f1f9'; }\n/* '' */\n.icon-facebook-official:before { content: '\\f230'; }\n/* '' */\n.icon-vimeo:before { content: '\\f27d'; }\n/* '' */\n.icon-instagram:before { content: '\\f31e'; }\n/* '' */\n.footer {\n    background-color: #3D3D3D;\n    min-height: 120px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n}\n.footer-links {\n    width: 12%;\n    display: flex;\n    justify-content: space-evenly;\n}\n.icon {\n    font-size: 1.2em;\n    opacity: 0.35;\n    transition: opacity 0.1s;\n}\n.icon:hover {\n    opacity: 1;\n}\n.footer-copyright{\n    color: #E5DACE;\n    font-size: 0.7em;\n    font-family: 'PT Serif', serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2ZvbnRlbGxvLmNzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsaUNBQXlDO0VBQ3pDOzs7OzBEQUlnRTtFQUNoRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0EsZ0dBQWdHO0FBQ2hHLDJGQUEyRjtBQUMzRjs7Ozs7OztDQU9DO0FBRUE7RUFDQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXOztFQUVYLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCOztFQUVqQixnRUFBZ0U7RUFDaEUsb0JBQW9CO0VBQ3BCLG9CQUFvQjs7RUFFcEIsOENBQThDO0VBQzlDLGdCQUFnQjs7RUFFaEIsZ0VBQWdFO0VBQ2hFLHlCQUF5QjtFQUN6QixpQkFBaUI7O0VBRWpCLDBEQUEwRDtFQUMxRCxxQkFBcUI7O0VBRXJCLDZDQUE2QztFQUM3QyxtQ0FBbUM7RUFDbkMsa0NBQWtDOztFQUVsQyw0QkFBNEI7RUFDNUIsdURBQXVEO0FBQ3pEO0FBRUEsdUJBQXVCLGdCQUFnQixFQUFFO0FBQUUsUUFBUTtBQUNuRCx5QkFBeUIsZ0JBQWdCLEVBQUU7QUFBRSxRQUFRO0FBQ3JELGlDQUFpQyxnQkFBZ0IsRUFBRTtBQUFFLFFBQVE7QUFDN0QscUJBQXFCLGdCQUFnQixFQUFFO0FBQUUsUUFBUTtBQUNqRCx5QkFBeUIsZ0JBQWdCLEVBQUU7QUFBRSxRQUFRO0FDMURyRDtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdmb250ZWxsbyc7XG4gIHNyYzogdXJsKCcuLi9mb250L2ZvbnRlbGxvLmVvdD84MDczMTQ0NScpO1xuICBzcmM6IHVybCgnLi4vZm9udC9mb250ZWxsby5lb3Q/ODA3MzE0NDUjaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG4gICAgICAgdXJsKCcuLi9mb250L2ZvbnRlbGxvLndvZmYyPzgwNzMxNDQ1JykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgIHVybCgnLi4vZm9udC9mb250ZWxsby53b2ZmPzgwNzMxNDQ1JykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgdXJsKCcuLi9mb250L2ZvbnRlbGxvLnR0Zj84MDczMTQ0NScpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiAgICAgICB1cmwoJy4uL2ZvbnQvZm9udGVsbG8uc3ZnPzgwNzMxNDQ1I2ZvbnRlbGxvJykgZm9ybWF0KCdzdmcnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLyogQ2hyb21lIGhhY2s6IFNWRyBpcyByZW5kZXJlZCBtb3JlIHNtb290aCBpbiBXaW5kb3p6ZS4gMTAwJSBtYWdpYywgdW5jb21tZW50IGlmIHlvdSBuZWVkIGl0LiAqL1xuLyogTm90ZSwgdGhhdCB3aWxsIGJyZWFrIGhpbnRpbmchIEluIG90aGVyIE9TLWVzIGZvbnQgd2lsbCBiZSBub3QgYXMgc2hhcnAgYXMgaXQgY291bGQgYmUgKi9cbi8qXG5AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOjApIHtcbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdmb250ZWxsbyc7XG4gICAgc3JjOiB1cmwoJy4uL2ZvbnQvZm9udGVsbG8uc3ZnPzgwNzMxNDQ1I2ZvbnRlbGxvJykgZm9ybWF0KCdzdmcnKTtcbiAgfVxufVxuKi9cbiBcbiBbY2xhc3NePVwiaWNvbi1cIl06YmVmb3JlLCBbY2xhc3MqPVwiIGljb24tXCJdOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnRlbGxvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3BlYWs6IG5vbmU7XG4gXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICB3aWR0aDogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IC4yZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogb3BhY2l0eTogLjg7ICovXG4gXG4gIC8qIEZvciBzYWZldHkgLSByZXNldCBwYXJlbnQgc3R5bGVzLCB0aGF0IGNhbiBicmVhayBnbHlwaCBjb2RlcyovXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiBcbiAgLyogZml4IGJ1dHRvbnMgaGVpZ2h0LCBmb3IgdHdpdHRlciBib290c3RyYXAgKi9cbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiBcbiAgLyogQW5pbWF0aW9uIGNlbnRlciBjb21wZW5zYXRpb24gLSBtYXJnaW5zIHNob3VsZCBiZSBzeW1tZXRyaWMgKi9cbiAgLyogcmVtb3ZlIGlmIG5vdCBuZWVkZWQgKi9cbiAgbWFyZ2luLWxlZnQ6IC4yZW07XG4gXG4gIC8qIHlvdSBjYW4gYmUgbW9yZSBjb21mb3J0YWJsZSB3aXRoIGluY3JlYXNlZCBpY29ucyBzaXplICovXG4gIC8qIGZvbnQtc2l6ZTogMTIwJTsgKi9cbiBcbiAgLyogRm9udCBzbW9vdGhpbmcuIFRoYXQgd2FzIHRha2VuIGZyb20gVFdCUyAqL1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiBcbiAgLyogVW5jb21tZW50IGZvciAzRCBlZmZlY3QgKi9cbiAgLyogdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMTI3LCAxMjcsIDEyNywgMC4zKTsgKi9cbn1cbiBcbi5pY29uLXR3aXR0ZXI6YmVmb3JlIHsgY29udGVudDogJ1xcZjA5OSc7IH0gLyogJ++CmScgKi9cbi5pY29uLWNvcHlyaWdodDpiZWZvcmUgeyBjb250ZW50OiAnXFxmMWY5JzsgfSAvKiAn74e5JyAqL1xuLmljb24tZmFjZWJvb2stb2ZmaWNpYWw6YmVmb3JlIHsgY29udGVudDogJ1xcZjIzMCc7IH0gLyogJ++IsCcgKi9cbi5pY29uLXZpbWVvOmJlZm9yZSB7IGNvbnRlbnQ6ICdcXGYyN2QnOyB9IC8qICfvib0nICovXG4uaWNvbi1pbnN0YWdyYW06YmVmb3JlIHsgY29udGVudDogJ1xcZjMxZSc7IH0gLyogJ++MnicgKi8iLCJAaW1wb3J0IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9jc3MvZm9udGVsbG8uY3NzXCIpO1xuXG5cbi5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDNEM0Q7XG4gICAgbWluLWhlaWdodDogMTIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb290ZXItbGlua3Mge1xuICAgIHdpZHRoOiAxMiU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgb3BhY2l0eTogMC4zNTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXM7XG59XG5cbi5pY29uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uZm9vdGVyLWNvcHlyaWdodHtcbiAgICBjb2xvcjogI0U1REFDRTtcbiAgICBmb250LXNpemU6IDAuN2VtO1xuICAgIGZvbnQtZmFtaWx5OiAnUFQgU2VyaWYnLCBzZXJpZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='footer'>\n    <div class=\"footer-links\">\n        <i class=\"icon icon-facebook-official\"></i>\n        <i class=\"icon icon-twitter\"></i>\n        <i class=\"icon icon-instagram\"></i>\n        <i class=\"icon icon-vimeo\"></i>\n    </div>\n    <div class='footer-copyright'>\n        <i class=\"icon-copyright\"></i>\n        an atelier for architectural design 2019\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/homepage.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'fontello';\n  src: url('fontello.eot?80731445');\n  src: url('fontello.eot?80731445#iefix') format('embedded-opentype'),\n       url('fontello.woff2?80731445') format('woff2'),\n       url('fontello.woff?80731445') format('woff'),\n       url('fontello.ttf?80731445') format('truetype'),\n       url('fontello.svg?80731445#fontello') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n/* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */\n/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */\n/*\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n  @font-face {\n    font-family: 'fontello';\n    src: url('../font/fontello.svg?80731445#fontello') format('svg');\n  }\n}\n*/\n[class^=\"icon-\"]:before, [class*=\" icon-\"]:before {\n  font-family: \"fontello\";\n  font-style: normal;\n  font-weight: normal;\n  speak: none;\n \n  display: inline-block;\n  text-decoration: inherit;\n  width: 1em;\n  margin-right: .2em;\n  text-align: center;\n  /* opacity: .8; */\n \n  /* For safety - reset parent styles, that can break glyph codes*/\n  font-variant: normal;\n  text-transform: none;\n \n  /* fix buttons height, for twitter bootstrap */\n  line-height: 1em;\n \n  /* Animation center compensation - margins should be symmetric */\n  /* remove if not needed */\n  margin-left: .2em;\n \n  /* you can be more comfortable with increased icons size */\n  /* font-size: 120%; */\n \n  /* Font smoothing. That was taken from TWBS */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n \n  /* Uncomment for 3D effect */\n  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */\n}\n.icon-twitter:before { content: '\\f099'; }\n/* '' */\n.icon-copyright:before { content: '\\f1f9'; }\n/* '' */\n.icon-facebook-official:before { content: '\\f230'; }\n/* '' */\n.icon-vimeo:before { content: '\\f27d'; }\n/* '' */\n.icon-instagram:before { content: '\\f31e'; }\n/* '' */\n.homepage{\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #E5DACD;\n    margin: 0;\n}\n.homepage-middle{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex-basis: 90%;\n    padding-bottom: 5%;\n    box-sizing: border-box;\n}\n.homepage-footer {\n    display: flex;\n    flex-basis: 10%;\n    justify-content: center;\n}\n.footer-links {\n    width: 12%;\n    display: flex;\n    justify-content: space-evenly;\n}\n.icon {\n    font-size: 1.2em;\n    opacity: 0.35;\n    transition: opacity 0.1s;\n}\n.icon:hover {\n    opacity: 1;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2ZvbnRlbGxvLmNzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlDQUF5QztFQUN6Qzs7OzswREFJZ0U7RUFDaEUsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBLGdHQUFnRztBQUNoRywyRkFBMkY7QUFDM0Y7Ozs7Ozs7Q0FPQztBQUVBO0VBQ0MsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVzs7RUFFWCxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjs7RUFFakIsZ0VBQWdFO0VBQ2hFLG9CQUFvQjtFQUNwQixvQkFBb0I7O0VBRXBCLDhDQUE4QztFQUM5QyxnQkFBZ0I7O0VBRWhCLGdFQUFnRTtFQUNoRSx5QkFBeUI7RUFDekIsaUJBQWlCOztFQUVqQiwwREFBMEQ7RUFDMUQscUJBQXFCOztFQUVyQiw2Q0FBNkM7RUFDN0MsbUNBQW1DO0VBQ25DLGtDQUFrQzs7RUFFbEMsNEJBQTRCO0VBQzVCLHVEQUF1RDtBQUN6RDtBQUVBLHVCQUF1QixnQkFBZ0IsRUFBRTtBQUFFLFFBQVE7QUFDbkQseUJBQXlCLGdCQUFnQixFQUFFO0FBQUUsUUFBUTtBQUNyRCxpQ0FBaUMsZ0JBQWdCLEVBQUU7QUFBRSxRQUFRO0FBQzdELHFCQUFxQixnQkFBZ0IsRUFBRTtBQUFFLFFBQVE7QUFDakQseUJBQXlCLGdCQUFnQixFQUFFO0FBQUUsUUFBUTtBQzNEckQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLFNBQVM7QUFDYjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdmb250ZWxsbyc7XG4gIHNyYzogdXJsKCcuLi9mb250L2ZvbnRlbGxvLmVvdD84MDczMTQ0NScpO1xuICBzcmM6IHVybCgnLi4vZm9udC9mb250ZWxsby5lb3Q/ODA3MzE0NDUjaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG4gICAgICAgdXJsKCcuLi9mb250L2ZvbnRlbGxvLndvZmYyPzgwNzMxNDQ1JykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgIHVybCgnLi4vZm9udC9mb250ZWxsby53b2ZmPzgwNzMxNDQ1JykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgdXJsKCcuLi9mb250L2ZvbnRlbGxvLnR0Zj84MDczMTQ0NScpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiAgICAgICB1cmwoJy4uL2ZvbnQvZm9udGVsbG8uc3ZnPzgwNzMxNDQ1I2ZvbnRlbGxvJykgZm9ybWF0KCdzdmcnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLyogQ2hyb21lIGhhY2s6IFNWRyBpcyByZW5kZXJlZCBtb3JlIHNtb290aCBpbiBXaW5kb3p6ZS4gMTAwJSBtYWdpYywgdW5jb21tZW50IGlmIHlvdSBuZWVkIGl0LiAqL1xuLyogTm90ZSwgdGhhdCB3aWxsIGJyZWFrIGhpbnRpbmchIEluIG90aGVyIE9TLWVzIGZvbnQgd2lsbCBiZSBub3QgYXMgc2hhcnAgYXMgaXQgY291bGQgYmUgKi9cbi8qXG5AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOjApIHtcbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdmb250ZWxsbyc7XG4gICAgc3JjOiB1cmwoJy4uL2ZvbnQvZm9udGVsbG8uc3ZnPzgwNzMxNDQ1I2ZvbnRlbGxvJykgZm9ybWF0KCdzdmcnKTtcbiAgfVxufVxuKi9cbiBcbiBbY2xhc3NePVwiaWNvbi1cIl06YmVmb3JlLCBbY2xhc3MqPVwiIGljb24tXCJdOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnRlbGxvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3BlYWs6IG5vbmU7XG4gXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICB3aWR0aDogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IC4yZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogb3BhY2l0eTogLjg7ICovXG4gXG4gIC8qIEZvciBzYWZldHkgLSByZXNldCBwYXJlbnQgc3R5bGVzLCB0aGF0IGNhbiBicmVhayBnbHlwaCBjb2RlcyovXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiBcbiAgLyogZml4IGJ1dHRvbnMgaGVpZ2h0LCBmb3IgdHdpdHRlciBib290c3RyYXAgKi9cbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiBcbiAgLyogQW5pbWF0aW9uIGNlbnRlciBjb21wZW5zYXRpb24gLSBtYXJnaW5zIHNob3VsZCBiZSBzeW1tZXRyaWMgKi9cbiAgLyogcmVtb3ZlIGlmIG5vdCBuZWVkZWQgKi9cbiAgbWFyZ2luLWxlZnQ6IC4yZW07XG4gXG4gIC8qIHlvdSBjYW4gYmUgbW9yZSBjb21mb3J0YWJsZSB3aXRoIGluY3JlYXNlZCBpY29ucyBzaXplICovXG4gIC8qIGZvbnQtc2l6ZTogMTIwJTsgKi9cbiBcbiAgLyogRm9udCBzbW9vdGhpbmcuIFRoYXQgd2FzIHRha2VuIGZyb20gVFdCUyAqL1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiBcbiAgLyogVW5jb21tZW50IGZvciAzRCBlZmZlY3QgKi9cbiAgLyogdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMTI3LCAxMjcsIDEyNywgMC4zKTsgKi9cbn1cbiBcbi5pY29uLXR3aXR0ZXI6YmVmb3JlIHsgY29udGVudDogJ1xcZjA5OSc7IH0gLyogJ++CmScgKi9cbi5pY29uLWNvcHlyaWdodDpiZWZvcmUgeyBjb250ZW50OiAnXFxmMWY5JzsgfSAvKiAn74e5JyAqL1xuLmljb24tZmFjZWJvb2stb2ZmaWNpYWw6YmVmb3JlIHsgY29udGVudDogJ1xcZjIzMCc7IH0gLyogJ++IsCcgKi9cbi5pY29uLXZpbWVvOmJlZm9yZSB7IGNvbnRlbnQ6ICdcXGYyN2QnOyB9IC8qICfvib0nICovXG4uaWNvbi1pbnN0YWdyYW06YmVmb3JlIHsgY29udGVudDogJ1xcZjMxZSc7IH0gLyogJ++MnicgKi8iLCJAaW1wb3J0IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9jc3MvZm9udGVsbG8uY3NzXCIpO1xuXG4uaG9tZXBhZ2V7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNURBQ0Q7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uaG9tZXBhZ2UtbWlkZGxle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtYmFzaXM6IDkwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmhvbWVwYWdlLWZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWJhc2lzOiAxMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb290ZXItbGlua3Mge1xuICAgIHdpZHRoOiAxMiU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgb3BhY2l0eTogMC4zNTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXM7XG59XG5cbi5pY29uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"homepage\">\n    <div class=\"homepage-middle\">\n        <p>\n            an <b>atelier</b> for <b>architectural design</b>\n        </p>\n        <app-navigator></app-navigator>\n    </div>\n    <div class=\"homepage-footer\">\n        <div class=\"footer-links\">\n            <i class=\"icon icon-facebook-official\"></i>\n            <i class=\"icon icon-twitter\"></i>\n            <i class=\"icon icon-instagram\"></i>\n            <i class=\"icon icon-vimeo\"></i>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/components/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/components/homepage/homepage.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigator',
            template: __webpack_require__(/*! ./../navigator/navigator.component.html */ "./src/app/components/navigator/navigator.component.html"),
            styles: [__webpack_require__(/*! ./../navigator/navigator.component.css */ "./src/app/components/navigator/navigator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/components/interior/interior.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/interior/interior.component.ts ***!
  \***********************************************************/
/*! exports provided: InteriorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteriorComponent", function() { return InteriorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sub_page_sub_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sub-page/sub-page.component */ "./src/app/components/sub-page/sub-page.component.ts");
/* harmony import */ var src_app_services_project_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/project-service.service */ "./src/app/services/project-service.service.ts");




var InteriorComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InteriorComponent, _super);
    function InteriorComponent(projectService) {
        var _this = _super.call(this) || this;
        _this.projectService = projectService;
        _this.title = 'INTERIOR DESIGN';
        _this.description = 'TAILOR THE SPACE HUMBLY TO CREATE A DESIGNATED MOOD AND \
        AMBIENT. CREATING A ONE OF A KIND SPACE WITH HONEST MATERIAL.';
        return _this;
    }
    InteriorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectSub = this.projectService.getContent('interior', 'project')
            .subscribe(function (val) {
            _this.projects = val;
            _this.contents = _this.projectService.generatePageArray('interior', _this.projects, _this.showcases);
        });
        this.showcaseSub = this.projectService.getContent('interior', 'showcase')
            .subscribe(function (val) {
            _this.showcases = val;
            _this.contents = _this.projectService.generatePageArray('interior', _this.projects, _this.showcases);
        });
        this.projectService.refreshData();
    };
    InteriorComponent.prototype.ngOnDestroy = function () {
        this.projectSub.unsubscribe();
        this.showcaseSub.unsubscribe();
    };
    InteriorComponent.prototype.isLastOddMainContent = function (index) {
        if (this.projects === undefined)
            return false;
        return (this.isMainContent(index) && index == this.projects.length);
    };
    InteriorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-interior',
            template: __webpack_require__(/*! ./../sub-page/sub-page.component.html */ "./src/app/components/sub-page/sub-page.component.html"),
            styles: [__webpack_require__(/*! ./../sub-page/sub-page.component.css */ "./src/app/components/sub-page/sub-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_project_service_service__WEBPACK_IMPORTED_MODULE_3__["ProjectServiceService"]])
    ], InteriorComponent);
    return InteriorComponent;
}(_sub_page_sub_page_component__WEBPACK_IMPORTED_MODULE_2__["SubPageComponent"]));



/***/ }),

/***/ "./src/app/components/main-page/main-page.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-page{\n    background-color: #ECE8E0;\n    display: flex;\n    flex-direction: column;\n    min-height: calc(100vh - 60px);\n}\n\n.content{\n    display: flex;\n}\n\n.content-main-design, .content-main-about{\n    align-self: flex-end;\n    width: 50%;\n    min-height: 400px;\n    padding-right: 80px;\n    box-sizing: border-box;\n}\n\n.content-main-contact{\n    width: 50%;\n    min-height: 400px;\n    padding-left: 80px;\n    box-sizing: border-box;\n}\n\n.content-navigator,\n.content-about,\n.content-contact {\n    min-height: 200px;\n    flex-grow: 1;\n}\n\n.contact {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    width: 40%;\n    text-align: right;\n}\n\n.content:nth-of-type(2n){\n    background-color: #E5DACD;\n}\n\n.content-main-contact > .main{\n    align-items: flex-end;\n}\n\n.content-main-contact > .main > .title{\n    text-align: right;\n    padding-right: 100px;\n}\n\n.content-main-contact > .main > .description{\n    text-align: right;\n    padding-left: 0;\n}\n\n.content-main-about > .main > .title {\n    font-weight: 300;\n}\n\n.main{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n.title{\n    font-size: 2em;\n    font-weight: 700;\n    text-shadow: -14px 14px 4px rgba(0, 0, 0, 0.2);\n}\n\n.description{\n    padding-left: 6%;\n    width: 70%;\n}\n\n.navigator{\n    display: flex;\n    flex-direction: row;\n    padding: 0 100px;\n}\n\n.nav-section{\n    display: flex;\n    flex-direction: column;\n    flex-basis: 33%;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    cursor: pointer;\n    margin: 50px;\n    text-decoration: none;\n    color: black;\n}\n\n.nav-title{\n    font-weight: bold;\n    letter-spacing: 6px;\n    font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTs7O0lBR0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tcGFnZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFOEUwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XG59XG5cbi5jb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250ZW50LW1haW4tZGVzaWduLCAuY29udGVudC1tYWluLWFib3V0e1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWluLWhlaWdodDogNDAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogODBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY29udGVudC1tYWluLWNvbnRhY3R7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNvbnRlbnQtbmF2aWdhdG9yLFxuLmNvbnRlbnQtYWJvdXQsXG4uY29udGVudC1jb250YWN0IHtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbi5jb250YWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jb250ZW50Om50aC1vZi10eXBlKDJuKXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVEQUNEO1xufVxuXG4uY29udGVudC1tYWluLWNvbnRhY3QgPiAubWFpbntcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5jb250ZW50LW1haW4tY29udGFjdCA+IC5tYWluID4gLnRpdGxle1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xufVxuXG4uY29udGVudC1tYWluLWNvbnRhY3QgPiAubWFpbiA+IC5kZXNjcmlwdGlvbntcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5jb250ZW50LW1haW4tYWJvdXQgPiAubWFpbiA+IC50aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLm1haW57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4udGl0bGV7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LXNoYWRvdzogLTE0cHggMTRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uZGVzY3JpcHRpb257XG4gICAgcGFkZGluZy1sZWZ0OiA2JTtcbiAgICB3aWR0aDogNzAlO1xufVxuXG4ubmF2aWdhdG9ye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nOiAwIDEwMHB4O1xufVxuXG4ubmF2LXNlY3Rpb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtYmFzaXM6IDMzJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiA1MHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5uYXYtdGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDZweDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/main-page/main-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='main-page'>\n\n    <div\n        class='content'\n        [ngClass]=\"[isDesignPage() ? 'content-main-design' : '',\n            isAboutPage() ? 'content-main-about' : '',\n            isContactPage() ? 'content-main-contact' : ''\n        ]\"\n        >\n        <div class='main'>\n            <div class='title' [innerHtml]=\"title\">\n\n            </div>\n            <div class='description'>\n                {{description}}\n            </div>\n        </div>\n    </div>\n\n    <div\n        class='content'\n        [ngClass]=\"[isDesignPage() ? 'content-navigator' : '',\n            isAboutPage() ? 'content-about' : '',\n            isContactPage() ? 'content-contact' : ''\n        ]\"\n    >\n        <div\n            *ngIf='isContactPage()'\n            class='contact'\n        >\n            <p>\n                an <b>atelier</b> for <b>architectural design</b>\n            </p>\n            <p>\n                A. Jakarta 11610\n                <br>\n                Indonesia\n                <br>\n                E. Contact@anatelier.design\n            </p>\n        </div>\n\n\n        <div\n            *ngIf='isDesignPage()'\n            class='navigator'\n        >\n            <a\n                class='nav-section'\n                routerLink=\"/architecture\"\n                >\n                <span class='nav-title'>architecture</span>\n                <span class='nav-desc'>our design range from the small to big scale. creating a new building typology</span>\n            </a>\n            <a\n                class='nav-section'\n                routerLink=\"/interior\"\n            >\n                <span class='nav-title'>interior design</span>\n                <span class='nav-desc'>interior design for every space, creating mood and ambiance to every corner of your space.</span>\n            </a>\n            <a class='nav-section'>\n                <span class='nav-title'>other design works</span>\n                <span class='nav-desc'>in order to complete the design, often custom design is required. we created our own special furniture, storage unit and prints to compliment your space perfectly</span>\n            </a>\n\n        </div>\n\n    </div>\n    <app-footer></app-footer>\n\n</div>"

/***/ }),

/***/ "./src/app/components/main-page/main-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.ts ***!
  \*************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(router) {
        var _this = this;
        this.router = router;
        this.url = '';
        this.title = 'Woa';
        this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.url = e.url;
            }
        });
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent.prototype.isDesignPage = function () {
        return (this.url === '/design-works') ? true : false;
    };
    MainPageComponent.prototype.isAboutPage = function () {
        return (this.url === '/about') ? true : false;
    };
    MainPageComponent.prototype.isContactPage = function () {
        return (this.url === '/contact') ? true : false;
    };
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/components/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/components/main-page/main-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/components/navigator/navigator.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/navigator/navigator.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-nav{\n    display: flex;\n    flex-direction: row;\n    border: solid 1px black;\n}\n\n.sub-nav{\n    display: flex;\n    flex-direction: row;\n    position: absolute;\n}\n\n.sub-main-nav{\n    max-height: 0;\n    margin-top: -1px;\n    overflow: hidden;\n    transition: none;\n}\n\n.sub-arch-nav,\n.sub-interior-nav {\n    max-width: 0;\n    overflow: hidden;\n    transition: none;\n    margin-left: -1px;\n    max-height: 35vh;\n    height: 0;\n}\n\n.sub-interior-nav{\n    margin-left: 0;\n}\n\n.nav-btn{\n    width: 172px;\n    min-height: 34px;\n    padding-left: 0px;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-decoration: none;\n    color: black;\n}\n\n.nav-btn.active,\n.nav-btn:hover {\n    cursor: pointer;\n    border: solid;\n    border-color: black;\n\n}\n\n.nav-btn.active:nth-of-type(1),\n.nav-btn:nth-of-type(1):hover{\n    padding-left: 1px;\n    border-width: 1px 2px 1px 1px;\n}\n\n.nav-btn.active:nth-of-type(2),\n.nav-btn:nth-of-type(2):hover{\n    border-width: 1px 2px;\n}\n\n.nav-btn.active:nth-of-type(3),\n.nav-btn:nth-of-type(3):hover{\n    padding-right: 1px;\n    border-width: 1px 1px 1px 2px;\n}\n\n.nav-sub-btn{\n    padding: 1px 10px;\n    width: 200px;\n    min-height: 30px;\n    display: flex;\n    box-sizing: border-box;\n    justify-content: center;\n    align-items: center;\n    background-color: #E5DACD;\n    text-decoration: none;\n    color: black;\n}\n\n.sub-main-nav > .nav-sub-btn{\n    border-left: solid 1px black;\n    border-right: solid 1px black;\n}\n\n.sub-main-nav > .nav-sub-btn:nth-child(1){\n    border-top: solid 1px black;\n}\n\n.sub-arch-nav > .nav-sub-btn,\n.sub-interior-nav > .nav-sub-btn {\n    width: 300px;\n    border-left: solid 1px black;\n    border-right: solid 1px black;\n}\n\n.sub-arch-nav > .nav-sub-btn:nth-last-child(1),\n.sub-interior-nav > .nav-sub-btn:nth-last-child(1) {\n    border-bottom: solid 1px black;\n}\n\n.nav-sub-btn:hover{\n    border-left: solid 1px black !important;\n    background-color: #aaaaaa;\n    cursor: pointer;\n}\n\n.sub-main-nav > .nav-sub-btn{\n    border-right: solid 1px black;\n    border-left: solid 1px black;\n}\n\n.sub-main-nav > .nav-sub-btn:nth-last-child(1){\n    border-bottom: solid 1px black;\n}\n\n.sub-main-nav.show{\n    max-height: 120px;\n    height: auto;\n    transition: max-height 0.3s ease-in-out;\n}\n\n.sub-arch-nav.show::-webkit-scrollbar,\n.sub-interior-nav.show::-webkit-scrollbar {\n    width: 0;\n}\n\n.sub-arch-nav.show,\n.sub-interior-nav.show {\n    height: auto;\n    max-width: 300px;\n    overflow-y: scroll;\n\n    scrollbar-width: none; /* Firefox */\n    -ms-overflow-style: none;  /* IE 10+ */\n\n    transition: max-width 0.3s ease-in-out;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0b3IvbmF2aWdhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjs7QUFFdkI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLDZCQUE2QjtBQUNqQzs7QUFFQTs7SUFFSSxxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUlBOztJQUVJLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDOztBQUdBOztJQUVJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBSUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHVDQUF1QztBQUMzQzs7QUFFQTs7SUFFSSxRQUFRO0FBQ1o7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7O0lBRWxCLHFCQUFxQixFQUFFLFlBQVk7SUFDbkMsd0JBQXdCLEdBQUcsV0FBVzs7SUFFdEMsc0NBQXNDO0FBQzFDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0b3IvbmF2aWdhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1uYXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xufVxuXG4uc3ViLW5hdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uc3ViLW1haW4tbmF2e1xuICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG59XG5cbi5zdWItYXJjaC1uYXYsXG4uc3ViLWludGVyaW9yLW5hdiB7XG4gICAgbWF4LXdpZHRoOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xuICAgIGhlaWdodDogMDtcbn1cblxuLnN1Yi1pbnRlcmlvci1uYXZ7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5uYXYtYnRue1xuICAgIHdpZHRoOiAxNzJweDtcbiAgICBtaW4taGVpZ2h0OiAzNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5uYXYtYnRuLmFjdGl2ZSxcbi5uYXYtYnRuOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuXG59XG5cbi5uYXYtYnRuLmFjdGl2ZTpudGgtb2YtdHlwZSgxKSxcbi5uYXYtYnRuOm50aC1vZi10eXBlKDEpOmhvdmVye1xuICAgIHBhZGRpbmctbGVmdDogMXB4O1xuICAgIGJvcmRlci13aWR0aDogMXB4IDJweCAxcHggMXB4O1xufVxuXG4ubmF2LWJ0bi5hY3RpdmU6bnRoLW9mLXR5cGUoMiksXG4ubmF2LWJ0bjpudGgtb2YtdHlwZSgyKTpob3ZlcntcbiAgICBib3JkZXItd2lkdGg6IDFweCAycHg7XG59XG5cbi5uYXYtYnRuLmFjdGl2ZTpudGgtb2YtdHlwZSgzKSxcbi5uYXYtYnRuOm50aC1vZi10eXBlKDMpOmhvdmVye1xuICAgIHBhZGRpbmctcmlnaHQ6IDFweDtcbiAgICBib3JkZXItd2lkdGg6IDFweCAxcHggMXB4IDJweDtcbn1cblxuXG4ubmF2LXN1Yi1idG57XG4gICAgcGFkZGluZzogMXB4IDEwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1REFDRDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uc3ViLW1haW4tbmF2ID4gLm5hdi1zdWItYnRue1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggYmxhY2s7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggYmxhY2s7XG59XG5cbi5zdWItbWFpbi1uYXYgPiAubmF2LXN1Yi1idG46bnRoLWNoaWxkKDEpe1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCBibGFjaztcbn1cblxuXG5cbi5zdWItYXJjaC1uYXYgPiAubmF2LXN1Yi1idG4sXG4uc3ViLWludGVyaW9yLW5hdiA+IC5uYXYtc3ViLWJ0biB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggYmxhY2s7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggYmxhY2s7XG59XG5cblxuLnN1Yi1hcmNoLW5hdiA+IC5uYXYtc3ViLWJ0bjpudGgtbGFzdC1jaGlsZCgxKSxcbi5zdWItaW50ZXJpb3ItbmF2ID4gLm5hdi1zdWItYnRuOm50aC1sYXN0LWNoaWxkKDEpIHtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhY2s7XG59XG5cbi5uYXYtc3ViLWJ0bjpob3ZlcntcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYWFhYTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWItbWFpbi1uYXYgPiAubmF2LXN1Yi1idG57XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggYmxhY2s7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCBibGFjaztcbn1cblxuLnN1Yi1tYWluLW5hdiA+IC5uYXYtc3ViLWJ0bjpudGgtbGFzdC1jaGlsZCgxKXtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhY2s7XG59XG5cblxuXG4uc3ViLW1haW4tbmF2LnNob3d7XG4gICAgbWF4LWhlaWdodDogMTIwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLnN1Yi1hcmNoLW5hdi5zaG93Ojotd2Via2l0LXNjcm9sbGJhcixcbi5zdWItaW50ZXJpb3ItbmF2LnNob3c6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMDtcbn1cblxuLnN1Yi1hcmNoLW5hdi5zaG93LFxuLnN1Yi1pbnRlcmlvci1uYXYuc2hvdyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgMTArICovXG5cbiAgICB0cmFuc2l0aW9uOiBtYXgtd2lkdGggMC4zcyBlYXNlLWluLW91dDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/navigator/navigator.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/navigator/navigator.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='navigator'>\n    <div class=\"main-nav\">\n        <a\n            class=\"nav-btn\"\n            [ngClass]=\"{'active': isMainNavActive('design-works')}\"\n            (mouseover)=\"mainNavHover()\"\n            (mouseout)=\"mainNavHover()\"\n            routerLink=\"/design-works\"\n            >\n            DESIGN WORKS\n        </a>\n        <a\n            class=\"nav-btn\"\n            [ngClass]=\"{'active': isMainNavActive('about')}\"\n            routerLink=\"/about\"\n            >\n            ABOUT\n        </a>\n        <a\n            class=\"nav-btn\"\n            [ngClass]=\"{'active': isMainNavActive('contact')}\"\n            routerLink=\"/contact\"\n        >\n            CONTACT\n        </a>\n    </div>\n\n    <div class=\"sub-nav\">\n        <div\n            class=\"sub-main-nav\"\n            [ngClass]=\"{'show': isSubNavVisible()}\"\n            (mouseover)=\"subNavHover()\"\n            (mouseout)=\"subNavHover()\"\n        >\n            <a\n                class=\"nav-sub-btn\"\n                (mouseover)=\"archNavHover()\"\n                (mouseout)=\"archNavHover()\"\n                routerLink=\"/architecture\"\n                >\n                ARCHITECTURE\n            </a>\n            <a\n                class=\"nav-sub-btn\"\n                (mouseover)=\"interiorNavHover()\"\n                (mouseout)=\"interiorNavHover()\"\n                routerLink=\"/interior\"\n            >\n                INTERIOR DESIGN\n            </a>\n            <a class=\"nav-sub-btn\">OTHER DESIGN WORKS</a>\n        </div>\n        <a\n            class=\"sub-arch-nav\"\n            [ngClass]=\"{'show': isArchNavVisible()}\"\n            (mouseover)=\"archNavHover()\"\n            (mouseout)=\"archNavHover()\"\n        >\n            <a\n                class='nav-sub-btn'\n                *ngFor='let architectProject of architectProjects'\n            >\n                {{architectProject.title}}\n            </a>\n\n\n            <!-- <a class=\"nav-sub-btn\">MOROTAI PEARL</a>\n            <a class=\"nav-sub-btn\">LAKE TOBA</a>\n            <a class=\"nav-sub-btn\">REVITALIZE INDO ALAM SARI</a>\n            <a class=\"nav-sub-btn\">SHIFTED HOUSE</a>\n            <a class=\"nav-sub-btn\">COFFEE HOURS</a>\n            <a class=\"nav-sub-btn\">LIGHT SOHO</a>\n            <a class=\"nav-sub-btn\">THE HILLS</a>\n            <a class=\"nav-sub-btn\">CIBUBUR TOWNHOUSE</a>\n            <a class=\"nav-sub-btn\">MOROTAI LIGHTHOUSE</a>\n            <a class=\"nav-sub-btn\">LAKE TOBA FINEST FISHMONGER</a> -->\n        </a>\n        <a\n            class=\"sub-interior-nav\"\n            [ngClass]=\"{'show': isInteriorNavVisible()}\"\n            (mouseover)=\"interiorNavHover()\"\n            (mouseout)=\"interiorNavHover()\"\n        >\n            <a\n                class='nav-sub-btn'\n                *ngFor='let interiorProject of interiorProjects'\n            >\n                {{interiorProject.title}}\n            </a>\n            <!-- <a class=\"nav-sub-btn\">PAKUBUWONO APARTMENT</a>\n            <a class=\"nav-sub-btn\">SENAYAN TOWNHOUSE</a>\n            <a class=\"nav-sub-btn\">SAUMATA APARTMENT</a>\n            <a class=\"nav-sub-btn\">7-15</a>\n            <a class=\"nav-sub-btn\">THE PEAK</a>\n            <a class=\"nav-sub-btn\">MADIUN RESIDENCE</a>\n            <a class=\"nav-sub-btn\">OASIS MANSION</a>\n            <a class=\"nav-sub-btn\">RANCAMAYA RESIDENCE</a>\n            <a class=\"nav-sub-btn\">KERAWANG RESIDENCE</a>\n            <a class=\"nav-sub-btn\">SAUMATA PENTHOUSE</a> -->\n        </a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/navigator/navigator.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/navigator/navigator.component.ts ***!
  \*************************************************************/
/*! exports provided: NavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorComponent", function() { return NavigatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_project_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/project-service.service */ "./src/app/services/project-service.service.ts");




var NavigatorComponent = /** @class */ (function () {
    function NavigatorComponent(router, projectService) {
        var _this = this;
        this.router = router;
        this.projectService = projectService;
        this.isMainNavHover = false;
        this.isSubNavHover = false;
        this.isArchNavHover = false;
        this.isInteriorNavHover = false;
        this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.url = e.url;
            }
        });
        this.ArchitectProjectSub = this.projectService.getContent('architecture', 'project')
            .subscribe(function (val) {
            _this.architectProjects = val;
        });
        this.InteriorProjectSub = this.projectService.getContent('interior', 'project')
            .subscribe(function (val) {
            _this.interiorProjects = val;
        });
    }
    NavigatorComponent.prototype.ngOnInit = function () {
    };
    NavigatorComponent.prototype.mainNavHover = function () {
        this.isMainNavHover = !this.isMainNavHover;
    };
    NavigatorComponent.prototype.subNavHover = function () {
        this.isSubNavHover = !this.isSubNavHover;
    };
    NavigatorComponent.prototype.archNavHover = function () {
        this.isArchNavHover = !this.isArchNavHover;
    };
    NavigatorComponent.prototype.interiorNavHover = function () {
        this.isInteriorNavHover = !this.isInteriorNavHover;
    };
    NavigatorComponent.prototype.isSubNavVisible = function () {
        if (this.isMainNavHover || this.isSubNavHover || this.isArchNavHover || this.isInteriorNavHover) {
            return true;
        }
        else {
            return false;
        }
    };
    NavigatorComponent.prototype.isArchNavVisible = function () {
        return this.isArchNavHover;
    };
    NavigatorComponent.prototype.isInteriorNavVisible = function () {
        return this.isInteriorNavHover;
    };
    NavigatorComponent.prototype.isMainNavActive = function (type) {
        if (this.url === '')
            return false;
        if (this.url === '/' + type) {
            return true;
        }
        return false;
    };
    NavigatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigator',
            template: __webpack_require__(/*! ./navigator.component.html */ "./src/app/components/navigator/navigator.component.html"),
            styles: [__webpack_require__(/*! ./navigator.component.css */ "./src/app/components/navigator/navigator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_project_service_service__WEBPACK_IMPORTED_MODULE_3__["ProjectServiceService"]])
    ], NavigatorComponent);
    return NavigatorComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/page/page.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page{\n    background-color: #ECE8E0;\n    height: 200%;\n}\n\n.header{\n    background-color: #E5DACD;\n    position: fixed;\n    height: 60px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    z-index: 3;\n}\n\n.logo{\n    box-sizing: border-box;\n    height: 36px;\n    padding: 0 10px;\n    font-size: 0.6em;\n    justify-content: flex-end;\n    display: flex;\n    flex-basis: 180px;\n    white-space: pre-wrap;\n    cursor: pointer;\n    text-decoration: none;\n    color: black;\n}\n\n.header-filler{\n    height: 60px;\n    width:100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlL3BhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFOEUwO1xuICAgIGhlaWdodDogMjAwJTtcbn1cblxuLmhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVEQUNEO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMztcbn1cblxuLmxvZ297XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMC42ZW07XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtYmFzaXM6IDE4MHB4O1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmhlYWRlci1maWxsZXJ7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOjEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/page/page.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/page/page.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='header'>\n    <a class='logo' routerLink=\"\">\n        an <b>atelier</b> for <b>architectural design</b>\n    </a>\n    <app-navigator></app-navigator>\n</div>\n<div class='header-filler'>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/page/page.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/page/page.component.ts ***!
  \***************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageComponent = /** @class */ (function () {
    function PageComponent() {
    }
    PageComponent.prototype.ngOnInit = function () {
    };
    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/components/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.css */ "./src/app/components/page/page.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigator',
            template: __webpack_require__(/*! ./../navigator/navigator.component.html */ "./src/app/components/navigator/navigator.component.html"),
            styles: [__webpack_require__(/*! ./../navigator/navigator.component.css */ "./src/app/components/navigator/navigator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/components/project/project.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/project/project.component.ts ***!
  \*********************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: "\n    <p>\n      project works!\n    </p>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/components/sub-page/sub-page.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/sub-page/sub-page.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n    font-family: ostrichFont;\n    src: url('OstrichSans-Black.otf');\n}\n\n\n.sub-page{\n    background-color: #ECE8E0;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    min-height: calc(100vh - 60px);\n}\n\n\n.content{\n    height: 530px;\n    width: 100%;\n    display: flex;\n}\n\n\n.content-title{\n    height: 370px;\n    background-color: #f0f0f0;\n    align-items: center;\n    justify-content: center;\n}\n\n\n.main{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    height: 70%;\n}\n\n\n.title{\n    font-size: 2em;\n    font-family: ostrichFont;\n}\n\n\n.content-showcase{\n    width: 100%;\n}\n\n\n.content-project{\n    width: 50%;\n    justify-content: flex-end;\n    text-align: right;\n}\n\n\n.content-project:nth-child(3n){\n    justify-content: flex-start;\n    text-align: left;\n}\n\n\n.content-footer{\n    width: 100%;\n    height: auto;\n}\n\n\n.content-project.show{\n    -webkit-animation-name: fade;\n            animation-name: fade;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n}\n\n\n.content-showcase.show{\n    -webkit-animation-name: fade;\n            animation-name: fade;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n}\n\n\n.content-last-odd{\n    margin: auto;\n}\n\n\n.filter{\n    position: absolute;\n    width: 50%;\n    height: 530px;\n}\n\n\n.filter-color{\n    background-color: #E5DACD;\n    opacity: 0.5;\n    transition: opacity 0.5s ease-in-out;\n}\n\n\n.filter-hoverable{\n    z-index: 2;\n    cursor: pointer;\n}\n\n\n.filter-hoverable:hover ~ .filter-color{\n    opacity: 0;\n}\n\n\n.desc{\n    z-index: 1;\n    display: flex;\n    box-sizing: border-box;\n    width: 50%;\n    padding: 5%;\n    flex-direction: column;\n}\n\n\n.desc-title{\n    font-weight: 700;\n    font-size: 1.2em;\n    line-height: 3;\n}\n\n\n@-webkit-keyframes fade-project{\n    from {opacity: 0;}\n    to {opacity: 0.4;}\n}\n\n\n@keyframes fade-project{\n    from {opacity: 0;}\n    to {opacity: 0.4;}\n}\n\n\n@-webkit-keyframes fade-showcase{\n    from {opacity: 0;}\n    to {opacity: 1;}\n}\n\n\n@keyframes fade-showcase{\n    from {opacity: 0;}\n    to {opacity: 1;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdWItcGFnZS9zdWItcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlDQUFzRDtBQUMxRDs7O0FBR0E7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7OztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0FBQzVCOzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsOEJBQXNCO1lBQXRCLHNCQUFzQjtBQUMxQjs7O0FBRUE7SUFDSSw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLDhCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7OztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7QUFDakI7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7OztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksVUFBVTtBQUNkOzs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxNQUFNLFVBQVUsQ0FBQztJQUNqQixJQUFJLFlBQVksQ0FBQztBQUNyQjs7O0FBSEE7SUFDSSxNQUFNLFVBQVUsQ0FBQztJQUNqQixJQUFJLFlBQVksQ0FBQztBQUNyQjs7O0FBRUE7SUFDSSxNQUFNLFVBQVUsQ0FBQztJQUNqQixJQUFJLFVBQVUsQ0FBQztBQUNuQjs7O0FBSEE7SUFDSSxNQUFNLFVBQVUsQ0FBQztJQUNqQixJQUFJLFVBQVUsQ0FBQztBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3ViLXBhZ2Uvc3ViLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBvc3RyaWNoRm9udDtcbiAgICBzcmM6IHVybCguLy4uLy4uLy4uL2Fzc2V0cy9mb250L09zdHJpY2hTYW5zLUJsYWNrLm90Zik7XG59XG5cblxuLnN1Yi1wYWdle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0U4RTA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XG59XG5cbi5jb250ZW50e1xuICAgIGhlaWdodDogNTMwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmNvbnRlbnQtdGl0bGV7XG4gICAgaGVpZ2h0OiAzNzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYWlue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGhlaWdodDogNzAlO1xufVxuXG4udGl0bGV7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC1mYW1pbHk6IG9zdHJpY2hGb250O1xufVxuXG4uY29udGVudC1zaG93Y2FzZXtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRlbnQtcHJvamVjdHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jb250ZW50LXByb2plY3Q6bnRoLWNoaWxkKDNuKXtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvbnRlbnQtZm9vdGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLmNvbnRlbnQtcHJvamVjdC5zaG93e1xuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG5cbi5jb250ZW50LXNob3djYXNlLnNob3d7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbn1cblxuLmNvbnRlbnQtbGFzdC1vZGR7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZmlsdGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogNTMwcHg7XG59XG5cbi5maWx0ZXItY29sb3J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1REFDRDtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uZmlsdGVyLWhvdmVyYWJsZXtcbiAgICB6LWluZGV4OiAyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpbHRlci1ob3ZlcmFibGU6aG92ZXIgfiAuZmlsdGVyLWNvbG9ye1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5kZXNje1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogNSU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmRlc2MtdGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGUtcHJvamVjdHtcbiAgICBmcm9tIHtvcGFjaXR5OiAwO31cbiAgICB0byB7b3BhY2l0eTogMC40O31cbn1cblxuQGtleWZyYW1lcyBmYWRlLXNob3djYXNle1xuICAgIGZyb20ge29wYWNpdHk6IDA7fVxuICAgIHRvIHtvcGFjaXR5OiAxO31cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/sub-page/sub-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/sub-page/sub-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='sub-page'>\n    <div class='content content-title'>\n        <div class='main'>\n            <div class='title'>\n                {{title}}\n            </div>\n            <div class='description'>\n                {{description}}\n            </div>\n        </div>\n    </div>\n\n    <div\n        class='content'\n        *ngFor='let content of contents; index as i'\n        [ngClass]=\"[isMainContent(i) ? 'content-project' : 'content-showcase', isLastOddMainContent(i) ? 'content-last-odd' : '']\"\n        [ngStyle]=\"isMainContent(i) ? getStyle(content, 'project') : getStyle(content, 'showcase')\"\n        [imgSrc]=\"isMainContent(i) ? content.mainImages[0].url : content.image\"\n        appDeferLoad\n    >\n        <div\n            class='filter filter-hoverable'\n            *ngIf='isMainContent(i)'\n        ></div>\n        <div\n            class='filter filter-color'\n            *ngIf='isMainContent(i)'\n        ></div>\n        <div\n            class='desc'\n            *ngIf='isMainContent(i)'\n        >\n            <span class='desc-title'>{{content.title}}</span>\n            <span class='desc-overall'>{{content.overall}}</span>\n        </div>\n    </div>\n\n    <app-footer class='content content-footer'></app-footer>\n</div>\n\n<!-- for loop i=0 i<1 i+2\n    item[i] ---\n    item[i+1] ---- -->\n"

/***/ }),

/***/ "./src/app/components/sub-page/sub-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/sub-page/sub-page.component.ts ***!
  \***********************************************************/
/*! exports provided: SubPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubPageComponent", function() { return SubPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SubPageComponent = /** @class */ (function () {
    function SubPageComponent() {
        this.title = '';
        this.description = '';
    }
    SubPageComponent.prototype.ngOnInit = function () {
    };
    SubPageComponent.prototype.isMainContent = function (index) {
        index += 1;
        return (index % 3 != 0 || index == 0);
    };
    SubPageComponent.prototype.getStyle = function (content, type) {
        if (content === undefined)
            return;
        if (type === 'project') {
            return {
                'background-size': 'cover',
                'background-position': 'center'
            };
        }
        else {
            return {
                'background-size': 'contain',
                'background-repeat': 'no-repeat',
                'background-position': 'center'
            };
        }
    };
    SubPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sub-page',
            template: __webpack_require__(/*! ./sub-page.component.html */ "./src/app/components/sub-page/sub-page.component.html"),
            styles: [__webpack_require__(/*! ./sub-page.component.css */ "./src/app/components/sub-page/sub-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SubPageComponent);
    return SubPageComponent;
}());



/***/ }),

/***/ "./src/app/directives/defer-load.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/directives/defer-load.directive.ts ***!
  \****************************************************/
/*! exports provided: DeferLoadDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferLoadDirective", function() { return DeferLoadDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var DeferLoadDirective = /** @class */ (function () {
    function DeferLoadDirective(el, sanitizer, renderer) {
        this.el = el;
        this.sanitizer = sanitizer;
        this.renderer = renderer;
        this.srcAttr = null;
        this.placeholderImage = '/assets/data/1000-1000.png';
    }
    DeferLoadDirective.prototype.ngAfterViewInit = function () {
        // this.srcAttr = this.sanitizer.bypassSecurityTrustStyle('url("' +  this.placeholderImage + '")');
        this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
    };
    DeferLoadDirective.prototype.canLazyLoad = function () {
        return window && 'IntersectionObserver' in window;
    };
    DeferLoadDirective.prototype.lazyLoadImage = function () {
        var _this = this;
        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (_a) {
                var isIntersecting = _a.isIntersecting;
                if (isIntersecting) {
                    _this.loadImage();
                    obs.unobserve(_this.el.nativeElement);
                }
            });
        });
        obs.observe(this.el.nativeElement);
    };
    DeferLoadDirective.prototype.loadImage = function () {
        this.srcAttr = this.sanitizer.bypassSecurityTrustStyle('url("' + this.imgSrc + '")');
        this.renderer.addClass(this.el.nativeElement, 'show');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.backgroundImage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DeferLoadDirective.prototype, "srcAttr", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DeferLoadDirective.prototype, "imgSrc", void 0);
    DeferLoadDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDeferLoad]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], DeferLoadDirective);
    return DeferLoadDirective;
}());



/***/ }),

/***/ "./src/app/services/api-services.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/api-services.service.ts ***!
  \**************************************************/
/*! exports provided: ApiServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServicesService", function() { return ApiServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiServicesService = /** @class */ (function () {
    function ApiServicesService(http) {
        this.http = http;
        this.url = 'assets/data/';
    }
    ApiServicesService.prototype.getConfig = function () {
        return this.http.get(this.url);
    };
    ApiServicesService.prototype.getProjects = function (type) {
        if (type === 'architecture') {
            return this.http.get(this.url + 'architecture-project.json').toPromise();
        }
        else {
            return this.http.get(this.url + 'interior-project.json').toPromise();
        }
    };
    ApiServicesService.prototype.getShowcases = function (type) {
        if (type === 'architecture') {
            return this.http.get(this.url + 'architecture-showcases.json').toPromise();
        }
        else {
            return this.http.get(this.url + 'interior-showcases.json').toPromise();
        }
    };
    ApiServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiServicesService);
    return ApiServicesService;
}());



/***/ }),

/***/ "./src/app/services/project-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/project-service.service.ts ***!
  \*****************************************************/
/*! exports provided: ProjectServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectServiceService", function() { return ProjectServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-services.service */ "./src/app/services/api-services.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var ProjectServiceService = /** @class */ (function () {
    function ProjectServiceService(apiServices) {
        var _this = this;
        this.apiServices = apiServices;
        this.architectureProjectSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.architectureShowcaseSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.interiorProjectSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.interiorShowcaseSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // Set promises to load all projects and showcases json
        var promises = [];
        promises.push(this.apiServices.getProjects('architecture'));
        promises.push(this.apiServices.getProjects('interior'));
        promises.push(this.apiServices.getShowcases('architecture'));
        promises.push(this.apiServices.getShowcases('interior'));
        Promise.all(promises)
            .then(function (data) {
            _this.architectureProjects = _this.jsonToProjects(data[0]);
            _this.interiorProjects = _this.jsonToProjects(data[1]);
            _this.architectureShowcases = _this.jsonToShowcase(data[2]);
            _this.interiorShowcases = _this.jsonToShowcase(data[3]);
        })
            .then(function () {
            _this.refreshData();
        })
            .catch(function (e) {
            console.log(e);
        });
    }
    ProjectServiceService.prototype.refreshData = function () {
        this.architectureProjectSubject.next(this.architectureProjects);
        this.architectureShowcaseSubject.next(this.architectureShowcases);
        this.interiorProjectSubject.next(this.interiorProjects);
        this.interiorShowcaseSubject.next(this.interiorShowcases);
    };
    ProjectServiceService.prototype.getContent = function (page, type) {
        if (page === 'architecture') {
            if (type === 'project')
                return this.architectureProjectSubject.asObservable();
            else
                return this.architectureShowcaseSubject.asObservable();
        }
        else {
            if (type === 'project')
                return this.interiorProjectSubject.asObservable();
            else
                return this.interiorShowcaseSubject.asObservable();
        }
    };
    ProjectServiceService.prototype.jsonToShowcase = function (data) {
        var showcases = [];
        data.forEach(function (value) {
            showcases.push({
                'type': value.type,
                'image': value.url
            });
        });
        return showcases;
    };
    ProjectServiceService.prototype.jsonToProjects = function (data) {
        var projects = [];
        data.forEach(function (value) {
            projects.push({
                'id': value.id,
                'title': value.title,
                'description': value.description,
                'overall': value.overall,
                'mainImages': value.main_image,
                'additionalImages': value.additional_image
            });
        });
        return projects;
    };
    ProjectServiceService.prototype.generatePageArray = function (type, main, secondary) {
        var array = [];
        if (main === undefined || secondary === undefined) {
            return;
        }
        // projects
        // if projects are odd => 2main 1sec 2main 1sec 1main
        //
        // For architecture and interior sub main page
        if (type === 'architecture' || type === 'interior') {
            for (var i = 0, j = 0; i < main.length; i++) {
                // Add secondary element for every 2 main element
                if (i % 2 == 0 && i != 0) {
                    console.log("adding showcase " + j);
                    array.push(secondary[j]);
                    j++;
                }
                // Add main element if it's defined
                if (main[i] != undefined) {
                    console.log("adding projects " + i);
                    array.push(main[i]);
                }
                //
                if (i == main.length - 1 && main.length % 2 == 0) {
                    console.log("adding showcase " + j);
                    array.push(secondary[j]);
                    j++;
                }
            }
        }
        return array;
    };
    ProjectServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_services_service__WEBPACK_IMPORTED_MODULE_2__["ApiServicesService"]])
    ], ProjectServiceService);
    return ProjectServiceService;
}());



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
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/keanu/Documents/anatelier/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map