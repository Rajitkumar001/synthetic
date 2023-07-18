"use strict";
(self["webpackChunksynthetic_data_generator"] = self["webpackChunksynthetic_data_generator"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _synthetic_data_generator_synthetic_data_generator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./synthetic-data-generator/synthetic-data-generator.component */ 7585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: 'synthetic-data-generator',
  component: _synthetic_data_generator_synthetic_data_generator_component__WEBPACK_IMPORTED_MODULE_0__.SyntheticDataGeneratorComponent
}, {
  path: '',
  redirectTo: 'synthetic-data-generator',
  pathMatch: 'full'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/loader.service */ 7610);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/header/header.component */ 1074);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);






function AppComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-progress-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class AppComponent {
  constructor(loaderService, changeDetector) {
    this.loaderService = loaderService;
    this.changeDetector = changeDetector;
    this.isLoading = this.loaderService.isLoading;
  }
  ngOnInit() {
    this.changeDetector.detectChanges();
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 6,
  vars: 3,
  consts: [[1, "synthetic-data-generator"], ["class", "overlay", 4, "ngIf"], [1, "sdg-container"], [1, "overlay"], ["color", "accent", "mode", "indeterminate", 1, "spinner"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx.isLoading));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__.MatProgressSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
  styles: [".synthetic-data-generator[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(74, 74, 74, 0.8);\n  z-index: 99999;\n}\n.synthetic-data-generator[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.synthetic-data-generator[_ngcontent-%COMP%]   .sdg-container[_ngcontent-%COMP%] {\n  margin: 10px;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vMm5kJTIwSXRlcmF0aW9uL3N5bnRoZXRpYy1kYXRhLWdlbmVyYXRvci9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHVDQUFBO0VBQ0EsY0FBQTtBQ0RSO0FER1E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNEWjtBREtJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNIUiIsInNvdXJjZXNDb250ZW50IjpbIi5zeW50aGV0aWMtZGF0YS1nZW5lcmF0b3Ige1xyXG5cclxuICAgIC5vdmVybGF5IHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzQsIDc0LCA3NCwgMC44KTtcclxuICAgICAgICB6LWluZGV4OiA5OTk5OTtcclxuXHJcbiAgICAgICAgLnNwaW5uZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2RnLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxufSIsIi5zeW50aGV0aWMtZGF0YS1nZW5lcmF0b3IgLm92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzQsIDc0LCA3NCwgMC44KTtcbiAgei1pbmRleDogOTk5OTk7XG59XG4uc3ludGhldGljLWRhdGEtZ2VuZXJhdG9yIC5vdmVybGF5IC5zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5zeW50aGV0aWMtZGF0YS1nZW5lcmF0b3IgLnNkZy1jb250YWluZXIge1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 6208);
/* harmony import */ var _synthetic_data_generator_synthetic_data_generator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./synthetic-data-generator/synthetic-data-generator.component */ 7585);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);









class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__.HashLocationStrategy
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _synthetic_data_generator_synthetic_data_generator_component__WEBPACK_IMPORTED_MODULE_3__.SyntheticDataGeneratorComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 7610:
/*!*******************************************!*\
  !*** ./src/app/service/loader.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderService: () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class LoaderService {
  constructor() {
    this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  show() {
    this.isLoading.next(true);
  }
  hide() {
    this.isLoading.next(false);
  }
}
LoaderService.ɵfac = function LoaderService_Factory(t) {
  return new (t || LoaderService)();
};
LoaderService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: LoaderService,
  factory: LoaderService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6196:
/*!*************************************************************!*\
  !*** ./src/app/service/synthetic-data-generator.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SyntheticDataGeneratorService: () => (/* binding */ SyntheticDataGeneratorService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class SyntheticDataGeneratorService {
  constructor(http) {
    this.http = http;
    this.syntheticDataUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '/synthetic-data-generator/api/v1';
  }
  getVehicleData(payload) {
    return this.http.get(this.syntheticDataUrl + `/vehicle/${payload}`);
  }
  getCustomerData(payload) {
    return this.http.get(this.syntheticDataUrl + `/customer/${payload}`);
  }
}
SyntheticDataGeneratorService.ɵfac = function SyntheticDataGeneratorService_Factory(t) {
  return new (t || SyntheticDataGeneratorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
SyntheticDataGeneratorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SyntheticDataGeneratorService,
  factory: SyntheticDataGeneratorService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1074:
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class HeaderComponent {
  constructor() {
    this.imgUrl = 'http://10.197.192.76:8085/header-logo.svg';
  }
  ngOnInit() {}
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)();
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 7,
  vars: 1,
  consts: [[1, "header-container"], [1, "header"], [1, "navbar", "navbar-expand-md", "header-nav"], [1, "navbar-brand"], ["alt", "logo", 1, "company-logo-header", 3, "src"], [1, "collapse", "navbar-collapse", "justify-content-start"], [1, "navbar-bar"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "nav", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    }
  },
  styles: [".header-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  line-height: 55px;\n}\n.header-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%] {\n  background: #e20074;\n  padding: 0 1rem 0 1rem !important;\n}\n.header-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  margin: 0;\n  cursor: pointer;\n}\n.header-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .company-logo-header[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.header-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-bar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8ybmQlMjBJdGVyYXRpb24vc3ludGhldGljLWRhdGEtZ2VuZXJhdG9yL3NyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxpQkFBQTtBQ0FOO0FERU07RUFDRSxtQkFBQTtFQUNBLGlDQUFBO0FDQVI7QURFUTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FDQVY7QURFVTtFQUNFLFlBQUE7QUNBWjtBRE1ZO0VBQ0UsV0FBQTtBQ0pkIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1jb250YWluZXIge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xyXG4gIFxyXG4gICAgICAuaGVhZGVyLW5hdiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2UyMDA3NDtcclxuICAgICAgICBwYWRkaW5nOiAwIDFyZW0gMCAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgICAgICAgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgXHJcbiAgICAgICAgICAuY29tcGFueS1sb2dvLWhlYWRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICAgICAgICAubmF2YmFyLWJhciB7XHJcbiAgICAgICAgICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgIiwiLmhlYWRlci1jb250YWluZXIgLmhlYWRlciB7XG4gIGxpbmUtaGVpZ2h0OiA1NXB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLmhlYWRlciAuaGVhZGVyLW5hdiB7XG4gIGJhY2tncm91bmQ6ICNlMjAwNzQ7XG4gIHBhZGRpbmc6IDAgMXJlbSAwIDFyZW0gIWltcG9ydGFudDtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5oZWFkZXIgLmhlYWRlci1uYXYgLm5hdmJhci1icmFuZCB7XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhlYWRlci1jb250YWluZXIgLmhlYWRlciAuaGVhZGVyLW5hdiAubmF2YmFyLWJyYW5kIC5jb21wYW55LWxvZ28taGVhZGVyIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLmhlYWRlciAuaGVhZGVyLW5hdiAubmF2YmFyLWNvbGxhcHNlIC5uYXZiYXItYmFyIC5uYXYtbGluayB7XG4gIGNvbG9yOiAjZmZmO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6208:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 1074);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);













class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSortModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDividerModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSortModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDividerModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSortModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDividerModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule],
    exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSortModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDividerModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 7585:
/*!********************************************************************************!*\
  !*** ./src/app/synthetic-data-generator/synthetic-data-generator.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SyntheticDataGeneratorComponent: () => (/* binding */ SyntheticDataGeneratorComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _service_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/loader.service */ 7610);
/* harmony import */ var _service_synthetic_data_generator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/synthetic-data-generator.service */ 6196);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 6515);
















const _c0 = ["commonDataDialog"];
function SyntheticDataGeneratorComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SyntheticDataGeneratorComponent_ng_container_9_Template_li_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const i_r8 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.manageAction(i_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const pageTab_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", i_r8 === ctx_r0.pageTabIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](pageTab_r7);
  }
}
function SyntheticDataGeneratorComponent_legend_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "legend", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Generate For Vehicle Data");
  }
}
function SyntheticDataGeneratorComponent_legend_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "legend", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Generate For Customer Data");
  }
}
function SyntheticDataGeneratorComponent_ng_container_29_div_1_ng_container_8_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columnList_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r18.textFormator(columnList_r17), " ");
  }
}
function SyntheticDataGeneratorComponent_ng_container_29_div_1_ng_container_8_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const columnList_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r21[columnList_r17], " ");
  }
}
function SyntheticDataGeneratorComponent_ng_container_29_div_1_ng_container_8_td_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SyntheticDataGeneratorComponent_ng_container_29_div_1_ng_container_8_td_3_ng_container_2_Template_mat_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      const row_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const columnList_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r26.openDialog(row_r21[columnList_r17], columnList_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function SyntheticDataGeneratorComponent_ng_container_29_div_1_ng_container_8_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SyntheticDataGeneratorComponent_ng_container_29_div_1_ng_container_8_td_3_ng_container_1_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SyntheticDataGeneratorComponent_ng_container_29_div_1_ng_container_8_td_3_ng_container_2_Template, 3, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columnList_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(columnList_r17.includes("color") || columnList_r17.includes("serviceHistory") || columnList_r17.includes("ownershipHistory") || columnList_r17.includes("warrantyInformation")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", columnList_r17.includes("color") || columnList_r17.includes("serviceHistory") || columnList_r17.includes("ownershipHistory") || columnList_r17.includes("warrantyInformation"));
  }
}
function SyntheticDataGeneratorComponent_ng_container_29_div_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0)(1, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SyntheticDataGeneratorComponent_ng_container_29_div_1_ng_container_8_th_2_Template, 2, 1, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SyntheticDataGeneratorComponent_ng_container_29_div_1_ng_container_8_td_3_Template, 3, 2, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const columnList_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("matColumnDef", columnList_r17);
  }
}
function SyntheticDataGeneratorComponent_ng_container_29_div_1_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 43);
  }
}
function SyntheticDataGeneratorComponent_ng_container_29_div_1_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 44);
  }
}
function SyntheticDataGeneratorComponent_ng_container_29_div_1_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 45)(1, "td", 46)(2, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("No data matching the filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](": ", _r12.value, "");
  }
}
const _c1 = function () {
  return [10, 20, 30, 40, 50];
};
function SyntheticDataGeneratorComponent_ng_container_29_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27)(1, "mat-form-field", 28)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function SyntheticDataGeneratorComponent_ng_container_29_div_1_Template_input_keyup_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r32.applyFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 31)(7, "table", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SyntheticDataGeneratorComponent_ng_container_29_div_1_ng_container_8_Template, 4, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SyntheticDataGeneratorComponent_ng_container_29_div_1_tr_9_Template, 1, 0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SyntheticDataGeneratorComponent_ng_container_29_div_1_tr_10_Template, 1, 0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SyntheticDataGeneratorComponent_ng_container_29_div_1_tr_11_Template, 5, 2, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "mat-paginator", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Search vehicle data");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r11.vehicleDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r11.fecthObjectKeys(ctx_r11.vehicleDataSource.filteredData[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r11.fecthObjectKeys(ctx_r11.vehicleDataSource.filteredData[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r11.fecthObjectKeys(ctx_r11.vehicleDataSource.filteredData[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("d-none", 10 >= (ctx_r11.vehicleDataSource == null ? null : ctx_r11.vehicleDataSource.filteredData == null ? null : ctx_r11.vehicleDataSource.filteredData.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c1));
  }
}
function SyntheticDataGeneratorComponent_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SyntheticDataGeneratorComponent_ng_container_29_div_1_Template, 14, 9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.showVehicleData);
  }
}
function SyntheticDataGeneratorComponent_ng_container_30_div_1_ng_container_8_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columnList_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r41.textFormator(columnList_r40), " ");
  }
}
function SyntheticDataGeneratorComponent_ng_container_30_div_1_ng_container_8_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const columnList_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r44[columnList_r40], " ");
  }
}
function SyntheticDataGeneratorComponent_ng_container_30_div_1_ng_container_8_td_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SyntheticDataGeneratorComponent_ng_container_30_div_1_ng_container_8_td_3_ng_container_2_Template_mat_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
      const row_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const columnList_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r49.openDialog(row_r44[columnList_r40], columnList_r40));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function SyntheticDataGeneratorComponent_ng_container_30_div_1_ng_container_8_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SyntheticDataGeneratorComponent_ng_container_30_div_1_ng_container_8_td_3_ng_container_1_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SyntheticDataGeneratorComponent_ng_container_30_div_1_ng_container_8_td_3_ng_container_2_Template, 3, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columnList_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !columnList_r40.includes("address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", columnList_r40.includes("address"));
  }
}
function SyntheticDataGeneratorComponent_ng_container_30_div_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0)(1, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SyntheticDataGeneratorComponent_ng_container_30_div_1_ng_container_8_th_2_Template, 2, 1, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SyntheticDataGeneratorComponent_ng_container_30_div_1_ng_container_8_td_3_Template, 3, 2, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const columnList_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("matColumnDef", columnList_r40);
  }
}
function SyntheticDataGeneratorComponent_ng_container_30_div_1_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 43);
  }
}
function SyntheticDataGeneratorComponent_ng_container_30_div_1_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 44);
  }
}
function SyntheticDataGeneratorComponent_ng_container_30_div_1_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 45)(1, "td", 46)(2, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("No data matching the filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](": ", _r35.value, "");
  }
}
function SyntheticDataGeneratorComponent_ng_container_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27)(1, "mat-form-field", 28)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 48, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function SyntheticDataGeneratorComponent_ng_container_30_div_1_Template_input_keyup_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r55.applyFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 31)(7, "table", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SyntheticDataGeneratorComponent_ng_container_30_div_1_ng_container_8_Template, 4, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SyntheticDataGeneratorComponent_ng_container_30_div_1_tr_9_Template, 1, 0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SyntheticDataGeneratorComponent_ng_container_30_div_1_tr_10_Template, 1, 0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SyntheticDataGeneratorComponent_ng_container_30_div_1_tr_11_Template, 5, 2, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "mat-paginator", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Search customer data");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r34.customerDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r34.fecthObjectKeys(ctx_r34.customerDataSource.filteredData[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r34.fecthObjectKeys(ctx_r34.customerDataSource.filteredData[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r34.fecthObjectKeys(ctx_r34.customerDataSource.filteredData[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("d-none", 10 >= (ctx_r34.customerDataSource == null ? null : ctx_r34.customerDataSource.filteredData == null ? null : ctx_r34.customerDataSource.filteredData.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c1));
  }
}
function SyntheticDataGeneratorComponent_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SyntheticDataGeneratorComponent_ng_container_30_div_1_Template, 14, 9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.showCustomerData);
  }
}
function SyntheticDataGeneratorComponent_ng_template_31_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const commonKey_r63 = ctx.$implicit;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r62.textFormator(commonKey_r63), " ");
  }
}
function SyntheticDataGeneratorComponent_ng_template_31_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SyntheticDataGeneratorComponent_ng_template_31_ng_container_9_ng_container_1_Template, 3, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r58.fecthObjectKeys(ctx_r58.commonData));
  }
}
function SyntheticDataGeneratorComponent_ng_template_31_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const commonKey_r65 = ctx.$implicit;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r64.textFormator(commonKey_r65), " ");
  }
}
function SyntheticDataGeneratorComponent_ng_template_31_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SyntheticDataGeneratorComponent_ng_template_31_ng_container_10_ng_container_1_Template, 3, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r59.fecthObjectKeys(ctx_r59.commonData[0]));
  }
}
function SyntheticDataGeneratorComponent_ng_template_31_ng_container_12_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const commonKey_r67 = ctx.$implicit;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r66.commonData[commonKey_r67]);
  }
}
function SyntheticDataGeneratorComponent_ng_template_31_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SyntheticDataGeneratorComponent_ng_template_31_ng_container_12_ng_container_2_Template, 3, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r60.fecthObjectKeys(ctx_r60.commonData));
  }
}
function SyntheticDataGeneratorComponent_ng_template_31_ng_container_13_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const commonKey_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const common_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", common_r69[commonKey_r71], "");
  }
}
function SyntheticDataGeneratorComponent_ng_template_31_ng_container_13_ng_container_1_ng_container_2_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 58)(2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const addressCode_r77 = ctx.$implicit;
    const common_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r76.textFormator(addressCode_r77) + ":", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", common_r69.address[addressCode_r77], " ");
  }
}
function SyntheticDataGeneratorComponent_ng_template_31_ng_container_13_ng_container_1_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SyntheticDataGeneratorComponent_ng_template_31_ng_container_13_ng_container_1_ng_container_2_ng_container_2_ng_container_2_Template, 5, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const common_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r73.fecthObjectKeys(common_r69["address"]));
  }
}
function SyntheticDataGeneratorComponent_ng_template_31_ng_container_13_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SyntheticDataGeneratorComponent_ng_template_31_ng_container_13_ng_container_1_ng_container_2_ng_container_1_Template, 3, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SyntheticDataGeneratorComponent_ng_template_31_ng_container_13_ng_container_1_ng_container_2_ng_container_2_Template, 3, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const commonKey_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(commonKey_r71 === "address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", commonKey_r71 === "address");
  }
}
function SyntheticDataGeneratorComponent_ng_template_31_ng_container_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SyntheticDataGeneratorComponent_ng_template_31_ng_container_13_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const common_r69 = ctx.$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r68.fecthObjectKeys(common_r69));
  }
}
function SyntheticDataGeneratorComponent_ng_template_31_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SyntheticDataGeneratorComponent_ng_template_31_ng_container_13_ng_container_1_Template, 3, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r61.commonData);
  }
}
function SyntheticDataGeneratorComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49)(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 51)(4, "div", 52)(5, "div", 53)(6, "table", 54)(7, "thead")(8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SyntheticDataGeneratorComponent_ng_template_31_ng_container_9_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SyntheticDataGeneratorComponent_ng_template_31_ng_container_10_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, SyntheticDataGeneratorComponent_ng_template_31_ng_container_12_Template, 3, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, SyntheticDataGeneratorComponent_ng_template_31_ng_container_13_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 55)(15, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r6.commonDialogTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r6.checkType(ctx_r6.commonData));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.checkType(ctx_r6.commonData));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r6.checkType(ctx_r6.commonData));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.checkType(ctx_r6.commonData));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Close");
  }
}
class SyntheticDataGeneratorComponent {
  constructor(fb, dialog, loaderService, changeDetector, syntheticDataService) {
    this.fb = fb;
    this.dialog = dialog;
    this.loaderService = loaderService;
    this.changeDetector = changeDetector;
    this.syntheticDataService = syntheticDataService;
    this.pageTabList = ["Vehicle Data", "Customer Data"];
    this.pageTabIndex = 0;
    this.showVehicleData = false;
    this.showCustomerData = false;
    this.commonData = {};
    this.commonDialogTitle = "";
  }
  ngOnInit() {
    this.clearForm();
  }
  initializeForm() {
    this.searchForm = this.fb.group({
      searchByNumber: [""]
    });
  }
  fetchSyntheticData(payload) {
    this.loaderService.show();
    if (this.pageTabIndex === 0) {
      this.fetchVehicleData(payload);
    } else if (this.pageTabIndex === 1) {
      this.fetchCustomerData(payload);
    }
  }
  fetchVehicleData(data) {
    this.loaderService.show();
    this.showVehicleData = false;
    this.vehicleDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource([]);
    this.syntheticDataService.getVehicleData(data.searchByNumber).subscribe(response => {
      if (response && response.length) {
        this.constructDataSource(response);
      } else {
        this.loaderService.hide();
        this.showVehicleData = false;
      }
    }, error => {
      this.loaderService.hide();
      this.showVehicleData = false;
    });
  }
  fetchCustomerData(data) {
    this.loaderService.show();
    this.showCustomerData = false;
    this.customerDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource([]);
    this.syntheticDataService.getCustomerData(data.searchByNumber).subscribe(response => {
      if (response && response.length) {
        this.constructDataSource(response);
      } else {
        this.loaderService.hide();
        this.showCustomerData = false;
      }
    }, error => {
      this.loaderService.hide();
      this.showCustomerData = false;
    });
  }
  constructDataSource(data) {
    if (this.pageTabIndex === 0) {
      this.showVehicleData = true;
      data.forEach(item => {
        item['price'] = '€' + item['price'];
        item['odometerReading'] = item['odometerReading'] + ' miles';
      });
      this.vehicleDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(data);
      this.changeDetector.detectChanges();
      this.vehicleDataSource.paginator = this.paginator;
      this.vehicleDataSource.sort = this.sort;
    } else if (this.pageTabIndex === 1) {
      this.showCustomerData = true;
      this.customerDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(data);
      this.changeDetector.detectChanges();
      this.customerDataSource.paginator = this.paginator;
      this.customerDataSource.sort = this.sort;
    }
    this.loaderService.hide();
  }
  isFormValid() {
    return !this.searchForm.controls["searchByNumber"].value;
  }
  clearForm() {
    this.initializeForm();
    this.showVehicleData = false;
    this.showCustomerData = false;
    this.vehicleDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource([]);
    this.customerDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource([]);
  }
  manageAction(key) {
    this.clearForm();
    this.pageTabIndex = key;
  }
  openDialog(data, title) {
    this.commonDialogTitle = this.textFormator(title);
    this.commonData = {};
    if (data) {
      this.commonData = data;
    }
    this.dialog.open(this.commonDataDialog, {
      panelClass: "common-dialog"
    });
  }
  fecthObjectKeys(objectData) {
    if (objectData !== undefined) {
      return Object.keys(objectData);
    }
  }
  textFormator(text) {
    return text.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
      return str.toUpperCase();
    });
  }
  checkType(data) {
    return Array.isArray(data);
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    if (this.pageTabIndex === 0) {
      this.vehicleDataSource.filter = filterValue.trim().toLowerCase();
      if (this.vehicleDataSource.paginator) {
        this.vehicleDataSource.paginator.firstPage();
      }
    } else if (this.pageTabIndex === 1) {
      this.customerDataSource.filter = filterValue.trim().toLowerCase();
      if (this.customerDataSource.paginator) {
        this.customerDataSource.paginator.firstPage();
      }
    }
    this.changeDetector.detectChanges();
  }
  allowNumber(e) {
    const charCode = e.which ? e.which : e.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }
}
SyntheticDataGeneratorComponent.ɵfac = function SyntheticDataGeneratorComponent_Factory(t) {
  return new (t || SyntheticDataGeneratorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_synthetic_data_generator_service__WEBPACK_IMPORTED_MODULE_1__.SyntheticDataGeneratorService));
};
SyntheticDataGeneratorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SyntheticDataGeneratorComponent,
  selectors: [["app-synthetic-data-generator"]],
  viewQuery: function SyntheticDataGeneratorComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.commonDataDialog = _t.first);
    }
  },
  decls: 33,
  vars: 11,
  consts: [[1, "dashboard-container"], [1, "page-layout"], [1, "page-header"], [1, "page-title"], [1, "page-divider"], [1, "page-content"], [1, "panel-tab"], [1, "nav"], [4, "ngFor", "ngForOf"], [1, "panel-tab-content"], [1, "search-panel"], [1, "field-set"], ["class", "legend", 4, "ngIf"], [1, "field-set-content"], [3, "formGroup"], [1, "row"], [1, "col-md-2"], [1, "form-group", "form-outline", "mb-3"], ["type", "text", "maxlength", "4", "placeholder", "Search by number", "formControlName", "searchByNumber", 1, "form-control", "control-input", 3, "keypress"], [1, "col-md-4"], [1, "btn", "btn-primary", "action-button", 3, "disabled", "click"], [4, "ngIf"], ["commonDataDialog", ""], [1, "nav-item", 3, "click"], [1, "nav-link"], [1, "legend"], ["class", "table-content", 4, "ngIf"], [1, "table-content"], [1, "search-table-data"], ["matInput", "", "placeholder", "Search vehicle data", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row no-data-row", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "action-icon", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row", "no-data-row"], ["colspan", "4", 1, "mat-cell"], [1, "no-data-cell"], ["matInput", "", "placeholder", "Search customer data", 3, "keyup"], [1, "common-modal"], [1, "modal-head"], [1, "modal-cont"], [1, "common-content"], [1, "data-list-container"], [1, "table", "table-bordered"], [1, "modal-foot"], ["mat-dialog-close", "", 1, "btn", "btn-primary", "action-button"], [1, "table-th"], [1, "address"], [1, "address-title"]],
  template: function SyntheticDataGeneratorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "mat-divider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SyntheticDataGeneratorComponent_ng_container_9_Template, 4, 3, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10)(13, "fieldset", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, SyntheticDataGeneratorComponent_legend_14_Template, 2, 1, "legend", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, SyntheticDataGeneratorComponent_legend_15_Template, 2, 1, "legend", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13)(17, "form", 14)(18, "div", 15)(19, "div", 16)(20, "div", 17)(21, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function SyntheticDataGeneratorComponent_Template_input_keypress_21_listener($event) {
        return ctx.allowNumber($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 19)(23, "div", 17)(24, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SyntheticDataGeneratorComponent_Template_button_click_24_listener() {
        return ctx.fetchSyntheticData(ctx.searchForm.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SyntheticDataGeneratorComponent_Template_button_click_27_listener() {
        return ctx.clearForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, SyntheticDataGeneratorComponent_ng_container_29_Template, 3, 1, "ng-container", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, SyntheticDataGeneratorComponent_ng_container_30_Template, 3, 1, "ng-container", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, SyntheticDataGeneratorComponent_ng_template_31_Template, 17, 6, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", "Synthetic Data Generator", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.pageTabList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.pageTabIndex === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.pageTabIndex === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.searchForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isFormValid());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Generate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isFormValid());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Reset");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.pageTabIndex === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.pageTabIndex === 1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSortHeader, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDivider, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
  styles: [".dashboard-container[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  border: 1px solid #d2d2d2;\n  background: #fff;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #e20074;\n  padding: 8px 0;\n  font-size: 16px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-divider[_ngcontent-%COMP%] {\n  border-top-color: #eee;\n  border-top-width: 15px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: 1px solid #d2d2d2;\n  background: #fff;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .panel-tab[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #eee;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .panel-tab[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .panel-tab[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  color: #000;\n  font-weight: 500;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .panel-tab[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #e20074;\n  color: #e20074;\n  font-weight: 500;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .panel-tab-content[_ngcontent-%COMP%]   .search-panel[_ngcontent-%COMP%] {\n  padding: 5px 0;\n  margin: 15px 0;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .panel-tab-content[_ngcontent-%COMP%]   .search-panel[_ngcontent-%COMP%]   .field-set[_ngcontent-%COMP%] {\n  border: 1px solid #d2d2d2;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .panel-tab-content[_ngcontent-%COMP%]   .search-panel[_ngcontent-%COMP%]   .field-set[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%] {\n  position: relative;\n  top: -12px;\n  left: 20px;\n  width: auto;\n  margin: 0;\n  padding: 0 10px;\n  color: #e20074;\n  font-weight: 500;\n  font-size: 16px;\n  background-color: #fff;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .panel-tab-content[_ngcontent-%COMP%]   .search-panel[_ngcontent-%COMP%]   .field-set[_ngcontent-%COMP%]   .field-set-content[_ngcontent-%COMP%] {\n  padding: 0 5px;\n  margin: 0 15px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .panel-tab-content[_ngcontent-%COMP%]   .search-panel[_ngcontent-%COMP%]   .field-set[_ngcontent-%COMP%]   .field-set-content[_ngcontent-%COMP%]   .form-outline[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .panel-tab-content[_ngcontent-%COMP%]   .search-panel[_ngcontent-%COMP%]   .field-set[_ngcontent-%COMP%]   .field-set-content[_ngcontent-%COMP%]   .form-outline[_ngcontent-%COMP%]   .control-input[_ngcontent-%COMP%] {\n  font-size: 14px;\n  height: 40px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .panel-tab-content[_ngcontent-%COMP%]   .search-panel[_ngcontent-%COMP%]   .field-set[_ngcontent-%COMP%]   .field-set-content[_ngcontent-%COMP%]   .form-outline[_ngcontent-%COMP%]   .control-input[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  border: 1.5px solid #e20074;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .panel-tab-content[_ngcontent-%COMP%]   .search-panel[_ngcontent-%COMP%]   .field-set[_ngcontent-%COMP%]   .field-set-content[_ngcontent-%COMP%]   .form-outline[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0 !important;\n  width: 30%;\n  background: #e20074;\n  border: none;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .panel-tab-content[_ngcontent-%COMP%]   .table-content[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .panel-tab-content[_ngcontent-%COMP%]   .table-content[_ngcontent-%COMP%]   .search-table-data[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .panel-tab-content[_ngcontent-%COMP%]   .table-content[_ngcontent-%COMP%]     .mat-elevation-z8 {\n  overflow: auto;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .panel-tab-content[_ngcontent-%COMP%]   .table-content[_ngcontent-%COMP%]     .mat-elevation-z8 .mat-sort-header-content {\n  color: #e20074 !important;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .panel-tab-content[_ngcontent-%COMP%]   .table-content[_ngcontent-%COMP%]     .mat-elevation-z8 .no-data-row {\n  position: relative;\n  top: -27px;\n  text-align: center;\n  line-height: 10;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .panel-tab-content[_ngcontent-%COMP%]   .table-content[_ngcontent-%COMP%]     .mat-elevation-z8 .no-data-row .no-data-cell {\n  color: #e20074;\n  font-weight: 500;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .panel-tab-content[_ngcontent-%COMP%]   .table-content[_ngcontent-%COMP%]     .mat-elevation-z8 .action-icon {\n  cursor: pointer;\n  color: #e20074;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .panel-tab-content[_ngcontent-%COMP%]   .table-content[_ngcontent-%COMP%]     .mat-elevation-z8::-webkit-scrollbar {\n  height: 6px;\n  width: 6px;\n  background: #d2d2d2;\n}\n.dashboard-container[_ngcontent-%COMP%]   .page-layout[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .panel-tab-content[_ngcontent-%COMP%]   .table-content[_ngcontent-%COMP%]     .mat-elevation-z8::-webkit-scrollbar-thumb:horizontal {\n  background-color: #e20074;\n  border-radius: 10px;\n}\n\n  .common-dialog {\n  width: 40% !important;\n  max-width: unset !important;\n  height: auto;\n}\n  .common-dialog .common-modal .modal-head {\n  background: #e20074;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 500;\n  padding: 10px;\n}\n  .common-dialog .common-modal .modal-cont {\n  margin: 0 10px;\n  padding: 10px 0;\n}\n  .common-dialog .common-modal .modal-cont .common-content .data-list-container .table-bordered .table-th {\n  color: #e20074;\n  font-weight: 500;\n}\n  .common-dialog .common-modal .modal-cont .common-content .data-list-container .table-bordered .address .address-title {\n  color: #e20074;\n  margin-right: 10px;\n}\n  .common-dialog .common-modal .modal-cont .common-content .data-list-container .table-bordered .action-icon {\n  color: green;\n  font-weight: bold;\n}\n  .common-dialog .common-modal .modal-cont .common-content .modal-foot {\n  text-align: right;\n}\n  .common-dialog .common-modal .modal-cont .common-content .modal-foot .action-button {\n  background: #e20074;\n  display: unset;\n  border: unset;\n  min-width: 40px;\n  height: 35px;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3ludGhldGljLWRhdGEtZ2VuZXJhdG9yL3N5bnRoZXRpYy1kYXRhLWdlbmVyYXRvci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLzJuZCUyMEl0ZXJhdGlvbi9zeW50aGV0aWMtZGF0YS1nZW5lcmF0b3Ivc3JjL2FwcC9zeW50aGV0aWMtZGF0YS1nZW5lcmF0b3Ivc3ludGhldGljLWRhdGEtZ2VuZXJhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKO0FERVE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0FaO0FERVk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0FoQjtBRElRO0VBQ0ksc0JBQUE7RUFDQSxzQkFBQTtBQ0ZaO0FES1E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNIWjtBRE1nQjtFQUNJLDZCQUFBO0FDSnBCO0FETW9CO0VBQ0ksZUFBQTtBQ0p4QjtBRE13QjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDSjVCO0FET3dCO0VBQ0ksZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNMNUI7QURhZ0I7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQ1hwQjtBRGFvQjtFQUNJLHlCQUFBO0FDWHhCO0FEYXdCO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ1g1QjtBRGN3QjtFQUNJLGNBQUE7RUFDQSxjQUFBO0FDWjVCO0FEZWdDO0VBQ0ksd0JBQUE7QUNicEM7QURnQmdDO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNkcEM7QURpQmdDO0VBQ0ksZ0JBQUE7RUFDQSwyQkFBQTtBQ2ZwQztBRGtCZ0M7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ2hCcEM7QUR1QmdCO0VBQ0ksaUJBQUE7QUNyQnBCO0FEdUJvQjtFQUNJLGdCQUFBO0FDckJ4QjtBRHdCb0I7RUFDSSxjQUFBO0FDdEJ4QjtBRHdCd0I7RUFDSSx5QkFBQTtBQ3RCNUI7QUR5QndCO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDdkI1QjtBRHlCNEI7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUN2QmhDO0FEMkJ3QjtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDekI1QjtBRDRCd0I7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDMUI1QjtBRDZCd0I7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FDM0I1Qjs7QURxQ0E7RUFDSSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQ2xDSjtBRHFDUTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNuQ1o7QURzQ1E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ3BDWjtBRHlDd0I7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUN2QzVCO0FEMkM0QjtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ3pDaEM7QUQ2Q3dCO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDM0M1QjtBRGdEZ0I7RUFDSSxpQkFBQTtBQzlDcEI7QURnRG9CO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUM5Q3hCIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5wYWdlLWxheW91dCB7XHJcbiAgICAgICAgLnBhZ2UtaGVhZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuICAgICAgICAgICAgLnBhZ2UtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZTIwMDc0O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wYWdlLWRpdmlkZXIge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLXdpZHRoOiAxNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBhZ2UtY29udGVudCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHJcbiAgICAgICAgICAgIC5wYW5lbC10YWIge1xyXG4gICAgICAgICAgICAgICAgLm5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNlMjAwNzQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2UyMDA3NDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wYW5lbC10YWItY29udGVudCB7XHJcblxyXG4gICAgICAgICAgICAgICAgLnNlYXJjaC1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5maWVsZC1zZXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmxlZ2VuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlMjAwNzQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpZWxkLXNldC1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tb3V0bGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRyb2wtaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250cm9sLWlucHV0OmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTIwMDc0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFjdGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTIwMDc0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC50YWJsZS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlYXJjaC10YWJsZS1kYXRhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDo6bmctZGVlcCAubWF0LWVsZXZhdGlvbi16OCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1zb3J0LWhlYWRlci1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTIwMDc0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5uby1kYXRhLXJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0yN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uby1kYXRhLWNlbGwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTIwMDc0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hY3Rpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2UyMDA3NDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2QyZDJkMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG9yaXpvbnRhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIwMDc0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAuY29tbW9uLWRpYWxvZyB7XHJcbiAgICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgLmNvbW1vbi1tb2RhbCB7XHJcbiAgICAgICAgLm1vZGFsLWhlYWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTIwMDc0O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1vZGFsLWNvbnQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG5cclxuICAgICAgICAgICAgLmNvbW1vbi1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIC5kYXRhLWxpc3QtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAudGFibGUtYm9yZGVyZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGFibGUtdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlMjAwNzQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkcmVzcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkcmVzcy10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlMjAwNzQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWN0aW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1vZGFsLWZvb3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYWN0aW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlMjAwNzQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuZGFzaGJvYXJkLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5kYXNoYm9hcmQtY29udGFpbmVyIC5wYWdlLWxheW91dCAucGFnZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uZGFzaGJvYXJkLWNvbnRhaW5lciAucGFnZS1sYXlvdXQgLnBhZ2UtaGVhZGVyIC5wYWdlLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNlMjAwNzQ7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uZGFzaGJvYXJkLWNvbnRhaW5lciAucGFnZS1sYXlvdXQgLnBhZ2UtZGl2aWRlciB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNlZWU7XG4gIGJvcmRlci10b3Atd2lkdGg6IDE1cHg7XG59XG4uZGFzaGJvYXJkLWNvbnRhaW5lciAucGFnZS1sYXlvdXQgLnBhZ2UtY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5kYXNoYm9hcmQtY29udGFpbmVyIC5wYWdlLWxheW91dCAucGFnZS1jb250ZW50IC5wYW5lbC10YWIgLm5hdiB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWVlO1xufVxuLmRhc2hib2FyZC1jb250YWluZXIgLnBhZ2UtbGF5b3V0IC5wYWdlLWNvbnRlbnQgLnBhbmVsLXRhYiAubmF2IC5uYXYtaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kYXNoYm9hcmQtY29udGFpbmVyIC5wYWdlLWxheW91dCAucGFnZS1jb250ZW50IC5wYW5lbC10YWIgLm5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5kYXNoYm9hcmQtY29udGFpbmVyIC5wYWdlLWxheW91dCAucGFnZS1jb250ZW50IC5wYW5lbC10YWIgLm5hdiAubmF2LWl0ZW0gLmFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZTIwMDc0O1xuICBjb2xvcjogI2UyMDA3NDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5kYXNoYm9hcmQtY29udGFpbmVyIC5wYWdlLWxheW91dCAucGFnZS1jb250ZW50IC5wYW5lbC10YWItY29udGVudCAuc2VhcmNoLXBhbmVsIHtcbiAgcGFkZGluZzogNXB4IDA7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuLmRhc2hib2FyZC1jb250YWluZXIgLnBhZ2UtbGF5b3V0IC5wYWdlLWNvbnRlbnQgLnBhbmVsLXRhYi1jb250ZW50IC5zZWFyY2gtcGFuZWwgLmZpZWxkLXNldCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XG59XG4uZGFzaGJvYXJkLWNvbnRhaW5lciAucGFnZS1sYXlvdXQgLnBhZ2UtY29udGVudCAucGFuZWwtdGFiLWNvbnRlbnQgLnNlYXJjaC1wYW5lbCAuZmllbGQtc2V0IC5sZWdlbmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEycHg7XG4gIGxlZnQ6IDIwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgY29sb3I6ICNlMjAwNzQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5kYXNoYm9hcmQtY29udGFpbmVyIC5wYWdlLWxheW91dCAucGFnZS1jb250ZW50IC5wYW5lbC10YWItY29udGVudCAuc2VhcmNoLXBhbmVsIC5maWVsZC1zZXQgLmZpZWxkLXNldC1jb250ZW50IHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG1hcmdpbjogMCAxNXB4O1xufVxuLmRhc2hib2FyZC1jb250YWluZXIgLnBhZ2UtbGF5b3V0IC5wYWdlLWNvbnRlbnQgLnBhbmVsLXRhYi1jb250ZW50IC5zZWFyY2gtcGFuZWwgLmZpZWxkLXNldCAuZmllbGQtc2V0LWNvbnRlbnQgLmZvcm0tb3V0bGluZSBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG4uZGFzaGJvYXJkLWNvbnRhaW5lciAucGFnZS1sYXlvdXQgLnBhZ2UtY29udGVudCAucGFuZWwtdGFiLWNvbnRlbnQgLnNlYXJjaC1wYW5lbCAuZmllbGQtc2V0IC5maWVsZC1zZXQtY29udGVudCAuZm9ybS1vdXRsaW5lIC5jb250cm9sLWlucHV0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4uZGFzaGJvYXJkLWNvbnRhaW5lciAucGFnZS1sYXlvdXQgLnBhZ2UtY29udGVudCAucGFuZWwtdGFiLWNvbnRlbnQgLnNlYXJjaC1wYW5lbCAuZmllbGQtc2V0IC5maWVsZC1zZXQtY29udGVudCAuZm9ybS1vdXRsaW5lIC5jb250cm9sLWlucHV0OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTIwMDc0O1xufVxuLmRhc2hib2FyZC1jb250YWluZXIgLnBhZ2UtbGF5b3V0IC5wYWdlLWNvbnRlbnQgLnBhbmVsLXRhYi1jb250ZW50IC5zZWFyY2gtcGFuZWwgLmZpZWxkLXNldCAuZmllbGQtc2V0LWNvbnRlbnQgLmZvcm0tb3V0bGluZSAuYWN0aW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAzMCU7XG4gIGJhY2tncm91bmQ6ICNlMjAwNzQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kYXNoYm9hcmQtY29udGFpbmVyIC5wYWdlLWxheW91dCAucGFnZS1jb250ZW50IC5wYW5lbC10YWItY29udGVudCAudGFibGUtY29udGVudCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmRhc2hib2FyZC1jb250YWluZXIgLnBhZ2UtbGF5b3V0IC5wYWdlLWNvbnRlbnQgLnBhbmVsLXRhYi1jb250ZW50IC50YWJsZS1jb250ZW50IC5zZWFyY2gtdGFibGUtZGF0YSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uZGFzaGJvYXJkLWNvbnRhaW5lciAucGFnZS1sYXlvdXQgLnBhZ2UtY29udGVudCAucGFuZWwtdGFiLWNvbnRlbnQgLnRhYmxlLWNvbnRlbnQgOjpuZy1kZWVwIC5tYXQtZWxldmF0aW9uLXo4IHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uZGFzaGJvYXJkLWNvbnRhaW5lciAucGFnZS1sYXlvdXQgLnBhZ2UtY29udGVudCAucGFuZWwtdGFiLWNvbnRlbnQgLnRhYmxlLWNvbnRlbnQgOjpuZy1kZWVwIC5tYXQtZWxldmF0aW9uLXo4IC5tYXQtc29ydC1oZWFkZXItY29udGVudCB7XG4gIGNvbG9yOiAjZTIwMDc0ICFpbXBvcnRhbnQ7XG59XG4uZGFzaGJvYXJkLWNvbnRhaW5lciAucGFnZS1sYXlvdXQgLnBhZ2UtY29udGVudCAucGFuZWwtdGFiLWNvbnRlbnQgLnRhYmxlLWNvbnRlbnQgOjpuZy1kZWVwIC5tYXQtZWxldmF0aW9uLXo4IC5uby1kYXRhLXJvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTA7XG59XG4uZGFzaGJvYXJkLWNvbnRhaW5lciAucGFnZS1sYXlvdXQgLnBhZ2UtY29udGVudCAucGFuZWwtdGFiLWNvbnRlbnQgLnRhYmxlLWNvbnRlbnQgOjpuZy1kZWVwIC5tYXQtZWxldmF0aW9uLXo4IC5uby1kYXRhLXJvdyAubm8tZGF0YS1jZWxsIHtcbiAgY29sb3I6ICNlMjAwNzQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZGFzaGJvYXJkLWNvbnRhaW5lciAucGFnZS1sYXlvdXQgLnBhZ2UtY29udGVudCAucGFuZWwtdGFiLWNvbnRlbnQgLnRhYmxlLWNvbnRlbnQgOjpuZy1kZWVwIC5tYXQtZWxldmF0aW9uLXo4IC5hY3Rpb24taWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNlMjAwNzQ7XG59XG4uZGFzaGJvYXJkLWNvbnRhaW5lciAucGFnZS1sYXlvdXQgLnBhZ2UtY29udGVudCAucGFuZWwtdGFiLWNvbnRlbnQgLnRhYmxlLWNvbnRlbnQgOjpuZy1kZWVwIC5tYXQtZWxldmF0aW9uLXo4Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGhlaWdodDogNnB4O1xuICB3aWR0aDogNnB4O1xuICBiYWNrZ3JvdW5kOiAjZDJkMmQyO1xufVxuLmRhc2hib2FyZC1jb250YWluZXIgLnBhZ2UtbGF5b3V0IC5wYWdlLWNvbnRlbnQgLnBhbmVsLXRhYi1jb250ZW50IC50YWJsZS1jb250ZW50IDo6bmctZGVlcCAubWF0LWVsZXZhdGlvbi16ODo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG9yaXpvbnRhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMjAwNzQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbjo6bmctZGVlcCAuY29tbW9uLWRpYWxvZyB7XG4gIHdpZHRoOiA0MCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG87XG59XG46Om5nLWRlZXAgLmNvbW1vbi1kaWFsb2cgLmNvbW1vbi1tb2RhbCAubW9kYWwtaGVhZCB7XG4gIGJhY2tncm91bmQ6ICNlMjAwNzQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG46Om5nLWRlZXAgLmNvbW1vbi1kaWFsb2cgLmNvbW1vbi1tb2RhbCAubW9kYWwtY29udCB7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG46Om5nLWRlZXAgLmNvbW1vbi1kaWFsb2cgLmNvbW1vbi1tb2RhbCAubW9kYWwtY29udCAuY29tbW9uLWNvbnRlbnQgLmRhdGEtbGlzdC1jb250YWluZXIgLnRhYmxlLWJvcmRlcmVkIC50YWJsZS10aCB7XG4gIGNvbG9yOiAjZTIwMDc0O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuOjpuZy1kZWVwIC5jb21tb24tZGlhbG9nIC5jb21tb24tbW9kYWwgLm1vZGFsLWNvbnQgLmNvbW1vbi1jb250ZW50IC5kYXRhLWxpc3QtY29udGFpbmVyIC50YWJsZS1ib3JkZXJlZCAuYWRkcmVzcyAuYWRkcmVzcy10aXRsZSB7XG4gIGNvbG9yOiAjZTIwMDc0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG46Om5nLWRlZXAgLmNvbW1vbi1kaWFsb2cgLmNvbW1vbi1tb2RhbCAubW9kYWwtY29udCAuY29tbW9uLWNvbnRlbnQgLmRhdGEtbGlzdC1jb250YWluZXIgLnRhYmxlLWJvcmRlcmVkIC5hY3Rpb24taWNvbiB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG46Om5nLWRlZXAgLmNvbW1vbi1kaWFsb2cgLmNvbW1vbi1tb2RhbCAubW9kYWwtY29udCAuY29tbW9uLWNvbnRlbnQgLm1vZGFsLWZvb3Qge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbjo6bmctZGVlcCAuY29tbW9uLWRpYWxvZyAuY29tbW9uLW1vZGFsIC5tb2RhbC1jb250IC5jb21tb24tY29udGVudCAubW9kYWwtZm9vdCAuYWN0aW9uLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNlMjAwNzQ7XG4gIGRpc3BsYXk6IHVuc2V0O1xuICBib3JkZXI6IHVuc2V0O1xuICBtaW4td2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  apiUrl: 'http://10.197.192.76:8083'
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map