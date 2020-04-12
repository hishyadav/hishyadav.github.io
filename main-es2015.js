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
/* harmony import */ var src_service_SharedService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/service/SharedService */ "./src/service/SharedService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _contact_developer_contact_developer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-developer/contact-developer.component */ "./src/app/contact-developer/contact-developer.component.ts");
/* harmony import */ var _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./under-construction/under-construction.component */ "./src/app/under-construction/under-construction.component.ts");
/* harmony import */ var _other_servies_other_servies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./other-servies/other-servies.component */ "./src/app/other-servies/other-servies.component.ts");








function AppComponent_app_main_page_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-page");
} }
function AppComponent_app_contact_developer_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-contact-developer");
} }
function AppComponent_app_under_construction_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-under-construction");
} }
function AppComponent_app_other_servies_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-other-servies");
} }
class AppComponent {
    constructor(objSharedService) {
        this.objSharedService = objSharedService;
        this.title = 'MyWorld';
    }
    openMainPage() {
        this.objSharedService._showAdminSettigs = false;
        this.objSharedService._showLoginSettigs = false;
        this.objSharedService._showTimeline = false;
        this.objSharedService._IsContactDev = false;
        this.objSharedService._showLoginForm = false;
        this.objSharedService._IsOtherServices = false;
        this.objSharedService._IsUnderConstuction = false;
        this.objSharedService._showServices = false;
        this.objSharedService._sendMail = false;
        this.objSharedService._IsMainPage = true;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_service_SharedService__WEBPACK_IMPORTED_MODULE_1__["SharedService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 17, vars: 4, consts: [[1, "toolbar"], [2, "float", "left"], [1, "logo-span"], ["src", "./assets/img/Marshmallow.jpg", 1, "logo-img", 3, "click"], [1, "logo-name"], [2, "float", "right"], [1, "logo-welcome"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_img_click_4_listener() { return ctx.openMainPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hitesh Yadav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Welcome Buddy !!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_app_main_page_13_Template, 1, 0, "app-main-page", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_app_contact_developer_14_Template, 1, 0, "app-contact-developer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_app_under_construction_15_Template, 1, 0, "app-under-construction", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_app_other_servies_16_Template, 1, 0, "app-other-servies", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objSharedService._IsMainPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objSharedService._IsContactDev);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objSharedService._IsUnderConstuction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objSharedService._IsOtherServices);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"], _contact_developer_contact_developer_component__WEBPACK_IMPORTED_MODULE_4__["ContactDeveloperComponent"], _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_5__["UnderConstructionComponent"], _other_servies_other_servies_component__WEBPACK_IMPORTED_MODULE_6__["OtherServiesComponent"]], styles: [".toolbar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 50px;\r\n    align-items: center;\r\n    background-color: black; \r\n    color: white;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; \r\n}\r\n\r\n.logo-span[_ngcontent-%COMP%] {\r\n  float: left;\r\n  \r\n}\r\n\r\n.logo-img[_ngcontent-%COMP%] {\r\n  width: 51px;\r\n  margin-top: 2px;\r\n  cursor: pointer;\r\n}\r\n\r\n.logo-name[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  margin-top: 10px;\r\n  float: left;\r\n  \r\n  cursor: no-drop;\r\n}\r\n\r\n.logo-welcome[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  margin-top: 10px;\r\n  float: right;\r\n  cursor: no-drop;\r\n}\r\n\r\n@media screen and (max-width: 767px) {   \r\n  .logo-welcome[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px) { \r\n  .logo-welcome[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    margin-top: 10px;\r\n    float: right;\r\n    cursor: no-drop;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUIsRUFBRSxZQUFZO0lBQ3JDLFlBQVk7SUFDWixzRUFBc0U7QUFDMUU7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IC8qICMxOTc2ZDIgKi9cclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7IFxyXG59XHJcblxyXG4ubG9nby1zcGFuIHtcclxuICBmbG9hdDogbGVmdDtcclxuICAvKiBtYXJnaW4tbGVmdDogMiU7ICovXHJcbn1cclxuXHJcbi5sb2dvLWltZyB7XHJcbiAgd2lkdGg6IDUxcHg7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxvZ28tbmFtZSB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgLyogY3Vyc29yOiBkZWZhdWx0OyAqL1xyXG4gIGN1cnNvcjogbm8tZHJvcDtcclxufVxyXG5cclxuLmxvZ28td2VsY29tZSB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGN1cnNvcjogbm8tZHJvcDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHsgICBcclxuICAubG9nby13ZWxjb21lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgeyBcclxuICAubG9nby13ZWxjb21lIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjdXJzb3I6IG5vLWRyb3A7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: src_service_SharedService__WEBPACK_IMPORTED_MODULE_1__["SharedService"] }]; }, null); })();


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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _contact_developer_contact_developer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-developer/contact-developer.component */ "./src/app/contact-developer/contact-developer.component.ts");
/* harmony import */ var _service_SharedService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/SharedService */ "./src/service/SharedService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/__ivy_ngcc__/fesm2015/ng2-tooltip-directive.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./under-construction/under-construction.component */ "./src/app/under-construction/under-construction.component.ts");
/* harmony import */ var _other_servies_other_servies_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./other-servies/other-servies.component */ "./src/app/other-servies/other-servies.component.ts");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../service/http.service */ "./src/service/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_service_SharedService__WEBPACK_IMPORTED_MODULE_5__["SharedService"], _service_http_service__WEBPACK_IMPORTED_MODULE_17__["HttpService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"],
        _contact_developer_contact_developer_component__WEBPACK_IMPORTED_MODULE_4__["ContactDeveloperComponent"],
        _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_15__["UnderConstructionComponent"],
        _other_servies_other_servies_component__WEBPACK_IMPORTED_MODULE_16__["OtherServiesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"],
                    _contact_developer_contact_developer_component__WEBPACK_IMPORTED_MODULE_4__["ContactDeveloperComponent"],
                    _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_15__["UnderConstructionComponent"],
                    _other_servies_other_servies_component__WEBPACK_IMPORTED_MODULE_16__["OtherServiesComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"]
                ],
                providers: [_service_SharedService__WEBPACK_IMPORTED_MODULE_5__["SharedService"], _service_http_service__WEBPACK_IMPORTED_MODULE_17__["HttpService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/contact-developer/contact-developer.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/contact-developer/contact-developer.component.ts ***!
  \******************************************************************/
/*! exports provided: ContactDeveloperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDeveloperComponent", function() { return ContactDeveloperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_service_SharedService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/service/SharedService */ "./src/service/SharedService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/__ivy_ngcc__/fesm2015/ng2-tooltip-directive.js");





function ContactDeveloperComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactDeveloperComponent_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.returnHome(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactDeveloperComponent_div_0_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.openFacebook(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactDeveloperComponent_div_0_Template_span_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.openInstagram(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactDeveloperComponent_div_0_Template_span_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.sendMail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactDeveloperComponent_div_0_Template_span_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.openTikTok(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactDeveloperComponent_div_0_Template_div_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.openDreamWeb(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "One Dream Baby !!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContactDeveloperComponent {
    constructor(objSharedService) {
        this.objSharedService = objSharedService;
    }
    ngOnInit() {
    }
    openTikTok() {
        var url = "http://www.tiktok.com/@hishyadav";
        window.open(url, '_blank');
    }
    openInstagram() {
        var url = "http://www.instagram.com/hishyadav";
        window.open(url, '_blank');
    }
    openInstagramProfile() {
        var url = "http://www.instadp.com/fullsize/hishyadav";
        window.open(url, '_blank');
    }
    openFacebook() {
        var url = "https://www.facebook.com/hishyadav1997";
        window.open(url, '_blank');
    }
    sendMail() {
        var url = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=hitesh.yadav.0408@gmail.com&su=Website-Reply&body=&tf=1";
        window.open(url, '_blank');
    }
    openDreamWeb() {
        var url = "https://www.lamborghini.com/en-en";
        window.open(url, '_blank');
    }
    returnHome() {
        this.objSharedService._IsMainPage = true;
        this.objSharedService._IsContactDev = false;
        this.objSharedService._showAdminSettigs = false;
        this.objSharedService._showLoginSettigs = false;
        this.objSharedService._showTimeline = false;
        this.objSharedService._IsUnderConstuction = false;
    }
}
ContactDeveloperComponent.ɵfac = function ContactDeveloperComponent_Factory(t) { return new (t || ContactDeveloperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_service_SharedService__WEBPACK_IMPORTED_MODULE_1__["SharedService"])); };
ContactDeveloperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactDeveloperComponent, selectors: [["app-contact-developer"]], decls: 1, vars: 1, consts: [["class", "back-image", 4, "ngIf"], [1, "back-image"], [1, "returnHome", 3, "click"], ["src", "./assets/img/back-icon.png", "tooltip", "Back to Home", 1, "logo"], [1, "back-icon"], [1, "dev-connect-btn", 3, "click"], ["src", "./assets/img/facebook.png", 1, "logo"], ["src", "./assets/img/instagram-logo.png", 1, "logo"], ["src", "./assets/img/gmail.png", 1, "logo"], ["src", "./assets/img/tik-tok-logo.png", 1, "logo"], [1, "dream", 3, "click"]], template: function ContactDeveloperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContactDeveloperComponent_div_0_Template, 17, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objSharedService._IsContactDev);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"]], styles: [".dev-connect-btn[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.returnHome[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    float: right;\r\n    margin-top: 1%;\r\n    margin-right: 1%;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n}\r\n\r\n@media screen and (max-width: 767px) {   \r\n    .back-image[_ngcontent-%COMP%]{\r\n        height: 16em;\r\n        background-size: cover;\r\n        background-image: url('/assets/img/lamborghini.jpg');\r\n        background-position: 50% 50%;\r\n        margin-top: 13%;\r\n        width: -webkit-fill-available;\r\n        position: fixed;\r\n        top: 3px;\r\n        left: 0;\r\n    } \r\n}\r\n\r\n@media screen and (min-width: 768px) {      \r\n    .back-image[_ngcontent-%COMP%]{\r\n        height:50em; \r\n        background-size:cover;\r\n        background-image:url('/assets/img/lamborghini.jpg');\r\n        background-position:50% 50%;\r\n        margin-top: 3%;\r\n        width: -webkit-fill-available;\r\n        position: fixed;\r\n        top: 4px;\r\n        left: 0;\r\n    } \r\n}\r\n\r\n@media screen and (max-width: 767px) {   \r\n    .back-icon[_ngcontent-%COMP%]{\r\n        position: absolute;\r\n        padding: 12px 16px;\r\n        margin-top: 100%;\r\n        margin-left: 25%;\r\n        background-color: black;\r\n        border-radius: 4px;\r\n    } \r\n}\r\n\r\n@media screen and (min-width: 768px) {      \r\n    .back-icon[_ngcontent-%COMP%]{\r\n        position: absolute;\r\n        padding: 12px 16px;\r\n        margin-top: 10%;\r\n        margin-left: 42%;\r\n        background-color: black;\r\n        border-radius: 4px;\r\n    } \r\n}\r\n\r\n@media screen and (max-width: 767px) {   \r\n    .dream[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        padding: 12px 16px;\r\n        background: black;\r\n        color: #fff;\r\n        border-radius: 4px;\r\n        cursor: pointer;\r\n        margin-top: 75%;\r\n        margin-left: 30%;\r\n        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; \r\n    } \r\n}\r\n\r\n@media screen and (min-width: 768px) {      \r\n    .dream[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        padding: 12px 16px;\r\n        background: black;\r\n        color: #fff;\r\n        border-radius: 4px;\r\n        cursor: pointer;\r\n        margin-top: 18%;\r\n        margin-left: 43%;\r\n        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; \r\n    } \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1kZXZlbG9wZXIvY29udGFjdC1kZXZlbG9wZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztHQVVHOztBQUVIO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7Ozs7OztHQU9HOztBQUVIOzs7Ozs7Ozs7O0dBVUc7O0FBRUg7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsd0JBQWdCO0lBQWhCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixvREFBb0Q7UUFDcEQsNEJBQTRCO1FBQzVCLGVBQWU7UUFDZiw2QkFBNkI7UUFDN0IsZUFBZTtRQUNmLFFBQVE7UUFDUixPQUFPO0lBQ1g7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLHFCQUFxQjtRQUNyQixtREFBbUQ7UUFDbkQsMkJBQTJCO1FBQzNCLGNBQWM7UUFDZCw2QkFBNkI7UUFDN0IsZUFBZTtRQUNmLFFBQVE7UUFDUixPQUFPO0lBQ1g7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2QixrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2QixrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixzRUFBc0U7SUFDMUU7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixzRUFBc0U7SUFDMUU7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtZGV2ZWxvcGVyL2NvbnRhY3QtZGV2ZWxvcGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuYmFjay1pbWFnZXtcclxuICAgIGhlaWdodDo1MGVtOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcvYXNzZXRzL2ltZy9sYW1ib3JnaGluaS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246NTAlIDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDRweDtcclxuICAgIGxlZnQ6IDA7XHJcbn0gKi9cclxuXHJcbi5kZXYtY29ubmVjdC1idG4ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICB3aWR0aDogMzVweDtcclxufVxyXG5cclxuLyogLmJhY2staWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufSAqL1xyXG5cclxuLyogLmRyZWFtIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxOCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDMlO1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjsgXHJcbn0gKi9cclxuXHJcbi5yZXR1cm5Ib21le1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHsgICBcclxuICAgIC5iYWNrLWltYWdle1xyXG4gICAgICAgIGhlaWdodDogMTZlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvbGFtYm9yZ2hpbmkuanBnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMyU7XHJcbiAgICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9IFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgeyAgICAgIFxyXG4gICAgLmJhY2staW1hZ2V7XHJcbiAgICAgICAgaGVpZ2h0OjUwZW07IFxyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnL2Fzc2V0cy9pbWcvbGFtYm9yZ2hpbmkuanBnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjo1MCUgNTAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfSBcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHsgICBcclxuICAgIC5iYWNrLWljb257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfSBcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHsgICAgICBcclxuICAgIC5iYWNrLWljb257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQyJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9IFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkgeyAgIFxyXG4gICAgLmRyZWFtIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNzUlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjsgXHJcbiAgICB9IFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgeyAgICAgIFxyXG4gICAgLmRyZWFtIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTglO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MyU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjsgXHJcbiAgICB9IFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactDeveloperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-developer',
                templateUrl: './contact-developer.component.html',
                styleUrls: ['./contact-developer.component.css']
            }]
    }], function () { return [{ type: src_service_SharedService__WEBPACK_IMPORTED_MODULE_1__["SharedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_SharedService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/SharedService */ "./src/service/SharedService.ts");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/__ivy_ngcc__/fesm2015/ng2-tooltip-directive.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











function MainPageComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please Login to continue !!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_17_Template_img_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.adminLoginScreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainPageComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainPageComponent_div_18_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.userName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainPageComponent_div_18_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-actions", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_18_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.adminLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("floatLabel", "never");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r13.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("floatLabel", "never");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r13.password);
} }
function MainPageComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_19_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.openTikTok(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0TikTok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_19_Template_span_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.openInstagram(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A0Instagram");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_19_Template_span_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.openInstagramProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00A0View Instagram Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainPageComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 15 March 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hitesh Yadav started building Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "7 April 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Version 1.0 is completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "12 April 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Version 1.0 is deployed on Server");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MainPageComponent {
    constructor(objSharedService) {
        this.objSharedService = objSharedService;
        this.userName = "";
        this.password = "";
    }
    ngOnInit() {
    }
    getDevDetails() {
        this.closeNav();
        this.objSharedService._showAdminSettigs = false;
        this.objSharedService._showTimeline = false;
        // window.alert("Call Hitesh Yadav");
        this.objSharedService._IsContactDev = true;
        this.objSharedService._showLoginForm = false;
        this.objSharedService._IsUnderConstuction = false;
        this.objSharedService._IsMainPage = false;
    }
    openTikTok() {
        var userName = atob("QGFuX2FyY3RvcGhpbGU=");
        var url = "http://www.tiktok.com/" + userName;
        ;
        window.open(url, '_blank');
    }
    openInstagram() {
        var userName = atob("YW5fYXJjdG9waGlsZQ==");
        var url = "http://www.instagram.com/" + userName;
        ;
        window.open(url, '_blank');
    }
    openInstagramProfile() {
        var userName = atob("YW5fYXJjdG9waGlsZQ==");
        var url = "http://www.instadp.com/fullsize/" + userName;
        window.open(url, '_blank');
    }
    getAdminDetails() {
        this.objSharedService._showLoginSettigs = true;
        this.objSharedService._showAdminSettigs = false;
        this.objSharedService._showTimeline = false;
        this.objSharedService._showLoginForm = false;
        this.objSharedService._IsUnderConstuction = false;
        this.closeNav();
    }
    sendMail() {
        var url = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=hitesh.yadav.0408@gmail.com&su=Website-Reply&body=&tf=1";
        window.open(url, '_blank');
        this.closeNav();
    }
    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        this.objSharedService._showAdminSettigs = false;
        this.objSharedService._showLoginSettigs = false;
        this.objSharedService._showTimeline = false;
        this.objSharedService._showLoginForm = false;
        this.objSharedService._IsUnderConstuction = false;
    }
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        this.objSharedService._showAdminSettigs = false;
    }
    // darkMode(){
    //   var element = document.body;
    //   element.classList.toggle("dark-mode");
    // }
    adminLoginScreen() {
        // window.alert("Access Granted !!");
        // this.objSharedService._showAdminSettigs=true;
        this.objSharedService._showLoginSettigs = false;
        this.objSharedService._showTimeline = false;
        this.objSharedService._showLoginForm = true;
        this.objSharedService._IsUnderConstuction = false;
    }
    openTimeline() {
        this.objSharedService._showTimeline = true;
        this.objSharedService._showAdminSettigs = false;
        this.objSharedService._showLoginSettigs = false;
        this.objSharedService._showLoginForm = false;
        this.objSharedService._IsUnderConstuction = false;
        this.closeNav();
    }
    returnHome() {
        this.objSharedService._IsMainPage = true;
        this.objSharedService._IsContactDev = false;
        this.objSharedService._showAdminSettigs = false;
        this.objSharedService._showLoginSettigs = false;
        this.objSharedService._showTimeline = false;
        this.objSharedService._showLoginForm = false;
        this.objSharedService._IsUnderConstuction = false;
        this.objSharedService._IsOtherServices = false;
        this.objSharedService._showServices = false;
        this.objSharedService._sendMail = false;
    }
    adminLogin() {
        if (this.userName == "" || this.password == "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: 'Please Enter Details',
                icon: 'warning'
                // confirmButtonText: 'Log In Again',
                // cancelButtonText: 'Logout'
            });
        }
        else {
            if (this.userName === atob("aGl0ZXNoWQ==") && this.password === atob("TU9NT1M=")) {
                // window.alert("Access Granted !!");
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: 'Access Granted :)',
                    icon: 'success'
                });
                this.objSharedService._showAdminSettigs = true;
                this.objSharedService._showLoginForm = false;
            }
            else if (this.userName === "hitesh" && this.password === "yadav") {
                // window.alert("Access Granted !!");
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: 'Access Granted :)',
                    icon: 'success'
                });
                this.objSharedService._IsUnderConstuction = true;
                this.objSharedService._showAdminSettigs = false;
                this.objSharedService._showLoginForm = false;
                this.objSharedService._IsMainPage = false;
                this.objSharedService._IsContactDev = false;
            }
            else {
                // window.alert("Access Denied !!");
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: 'Access Denied :(',
                    text: 'You are not authorised to see this , Please contact Admin !!',
                    icon: 'error'
                });
                this.objSharedService._showLoginForm = false;
            }
            this.userName = "";
            this.password = "";
        }
    }
    openServies() {
        this.objSharedService._IsOtherServices = true;
        this.objSharedService._showServices = true;
        this.objSharedService._IsUnderConstuction = false;
        this.objSharedService._IsMainPage = false;
        this.objSharedService._IsContactDev = false;
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_SharedService__WEBPACK_IMPORTED_MODULE_2__["SharedService"])); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 21, vars: 4, consts: [[1, "back-image"], [1, "returnHome", 3, "click"], ["src", "./assets/img/back-icon.png", "tooltip", "Back to Home", 1, "logo-back-icon"], ["id", "mySidenav", 1, "sidenav"], [1, "closebtn", 2, "cursor", "pointer", 3, "click"], [2, "cursor", "pointer", 3, "click"], ["src", "./assets/img/developer-icon.png", 1, "logo"], ["src", "./assets/img/contact.png", 1, "logo"], ["src", "./assets/img/timeline.png", 1, "logo"], [2, "font-size", "30px", "cursor", "pointer", "margin-left", "5px", 3, "click"], ["class", "login", 4, "ngIf"], ["class", "loginForm", 4, "ngIf"], ["style", "margin-top: 10%;", 4, "ngIf"], ["class", "timeline", 4, "ngIf"], [1, "login"], ["src", "./assets/img/login.png", 1, "login-img", 3, "click"], [1, "loginForm"], [2, "margin-left", "18%"], [3, "floatLabel"], ["matInput", "", "placeholder", "UserName", "type", "text", "name", "text", "maxlength", "8", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Password", "type", "password", "name", "password", "maxlength", "8", "required", "", 3, "ngModel", "ngModelChange"], [1, "loginButtonDiv"], ["mat-raised-button", "", 1, "loginButton", 3, "click"], [2, "margin-top", "10%"], [1, "hidden-btn", 2, "margin-left", "30.3%", 3, "click"], ["src", "./assets/img/tik-tok-logo.png", 1, "logo_tiktok"], [2, "float", "left"], [1, "hidden-btn", 2, "margin-left", "30%", 3, "click"], ["src", "./assets/img/instagram-logo.png", 1, "logo"], ["src", "./assets/img/insta-dp.png", 1, "logo"], [1, "timeline"], [1, "container", "left"], [1, "content"], [1, "container", "right"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_div_click_1_listener() { return ctx.returnHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_a_click_4_listener() { return ctx.closeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_a_click_6_listener() { return ctx.getAdminDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0Admin Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_a_click_9_listener() { return ctx.getDevDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A0Contact Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_a_click_12_listener() { return ctx.openTimeline(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00A0Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_span_click_15_listener() { return ctx.openNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u2630");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MainPageComponent_div_17_Template, 6, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MainPageComponent_div_18_Template, 11, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MainPageComponent_div_19_Template, 18, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MainPageComponent_div_20_Template, 19, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objSharedService._showLoginSettigs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objSharedService._showLoginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objSharedService._showAdminSettigs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objSharedService._showTimeline);
    } }, directives: [ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: [".contact-btn[_ngcontent-%COMP%] {\r\n    \r\n    padding: 6px 12px;\r\n    background: black;\r\n    color: #fff;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    margin-top: 5%;\r\n}\r\n \r\n .admin-btn[_ngcontent-%COMP%] {\r\n    \r\n    padding: 6px 12px;\r\n    background: black;\r\n    color: #fff;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    margin-top: 5%;\r\n}\r\n \r\n .hidden-btn[_ngcontent-%COMP%] {\r\n    \r\n    padding: 12px 16px;\r\n    background: black;\r\n    color: #fff;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    \r\n    \r\n}\r\n \r\n .logo[_ngcontent-%COMP%] {\r\n    width: 25px;\r\n}\r\n \r\n .logo_tiktok[_ngcontent-%COMP%] {\r\n   width: 19px;\r\n}\r\n \r\n \r\n \r\n @media screen and (max-width: 699px) {   \r\n  .back-image[_ngcontent-%COMP%]{\r\n   height:48em; \r\n   background-size:contain;\r\n   background-image:url('/assets/img/marshmallow-background-small.jpg');\r\n   \r\n   background-position:50% 50%;\r\n   margin-top: 12%;\r\n   width: -webkit-fill-available;\r\n   position: fixed;\r\n   top: 3px;\r\n   left: 0;\r\n  } \r\n}\r\n \r\n @media screen and (min-width: 700px) {      \r\n  .back-image[_ngcontent-%COMP%]{     \r\n    height:50em; \r\n    background-size:cover;\r\n    background-image:url('/assets/img/marshmallow-background.jpg');\r\n    background-position:50% 50%;\r\n    margin-top: 3%;\r\n    width: -webkit-fill-available;\r\n    position: fixed;\r\n    top: 4px;\r\n    left: 0;\r\n  } \r\n}\r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n .sidenav[_ngcontent-%COMP%] {\r\n  height: 100%; \r\n  width: 0; \r\n  position: fixed; \r\n  z-index: 1; \r\n  top: 0; \r\n  left: 0;\r\n  background-color: #111; \r\n  overflow-x: hidden; \r\n  padding-top: 60px; \r\n  transition: 0.5s; \r\n}\r\n \r\n \r\n \r\n .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  padding: 8px 8px 8px 32px;\r\n  text-decoration: none;\r\n  font-size: 22px;\r\n  color: #818181;\r\n  display: block;\r\n  transition: 0.3s;\r\n}\r\n \r\n \r\n \r\n .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #f1f1f1;\r\n}\r\n \r\n \r\n \r\n .sidenav[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\r\n}\r\n \r\n \r\n \r\n #main[_ngcontent-%COMP%] {\r\n  transition: margin-left .5s;\r\n  padding: 20px;\r\n}\r\n \r\n \r\n \r\n @media screen and (max-height: 450px) {\r\n  .sidenav[_ngcontent-%COMP%] {padding-top: 15px;}\r\n  .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {font-size: 18px;}\r\n}\r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n @media screen and (max-width: 699px) {   \r\n  .login[_ngcontent-%COMP%] {\r\n    margin-top: 5%;\r\n    margin-left: 19%;\r\n    font-size: 20px;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; \r\n  } \r\n\r\n  .login-img[_ngcontent-%COMP%]{\r\n    width: 45px;\r\n    margin-left: 30%;\r\n    cursor: pointer;\r\n  }\r\n}\r\n \r\n @media screen and (min-width: 700px) {      \r\n  .login[_ngcontent-%COMP%] {\r\n    margin-top: 10%;\r\n    margin-left: 40%;\r\n    font-size: 20px;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; \r\n  } \r\n\r\n  .login-img[_ngcontent-%COMP%]{\r\n    width: 45px;\r\n    margin-left: 10%;\r\n    cursor: pointer;\r\n  }\r\n}\r\n \r\n \r\n \r\n *[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n \r\n body[_ngcontent-%COMP%] {\r\n  background-color: #474e5d;\r\n  font-family: Helvetica, sans-serif;\r\n}\r\n \r\n \r\n \r\n .timeline[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n}\r\n \r\n \r\n \r\n .timeline[_ngcontent-%COMP%]::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 6px;\r\n  background-color: white;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 50%;\r\n  margin-left: -3px;\r\n}\r\n \r\n \r\n \r\n .container[_ngcontent-%COMP%] {\r\n  padding: 10px 40px;\r\n  position: relative;\r\n  background-color: inherit;\r\n  width: 50%;\r\n}\r\n \r\n \r\n \r\n .container[_ngcontent-%COMP%]::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 25px;\r\n  height: 25px;\r\n  right: -17px;\r\n  background-color: white;\r\n  border: 4px solid #FF9F55;\r\n  top: 15px;\r\n  border-radius: 50%;\r\n  z-index: 1;\r\n}\r\n \r\n \r\n \r\n .left[_ngcontent-%COMP%] {\r\n  left: 0;\r\n}\r\n \r\n \r\n \r\n .right[_ngcontent-%COMP%] {\r\n  left: 50%;\r\n}\r\n \r\n \r\n \r\n .left[_ngcontent-%COMP%]::before {\r\n  content: \" \";\r\n  height: 0;\r\n  position: absolute;\r\n  top: 22px;\r\n  width: 0;\r\n  z-index: 1;\r\n  right: 30px;\r\n  border: medium solid white;\r\n  border-width: 10px 0 10px 10px;\r\n  border-color: transparent transparent transparent white;\r\n}\r\n \r\n \r\n \r\n .right[_ngcontent-%COMP%]::before {\r\n  content: \" \";\r\n  height: 0;\r\n  position: absolute;\r\n  top: 22px;\r\n  width: 0;\r\n  z-index: 1;\r\n  left: 30px;\r\n  border: medium solid white;\r\n  border-width: 10px 10px 10px 0;\r\n  border-color: transparent white transparent transparent;\r\n}\r\n \r\n \r\n \r\n .right[_ngcontent-%COMP%]::after {\r\n  left: -16px;\r\n}\r\n \r\n \r\n \r\n .content[_ngcontent-%COMP%] {\r\n  padding: 20px 30px;\r\n  background-color: white;\r\n  position: relative;\r\n  border-radius: 6px;\r\n}\r\n \r\n \r\n \r\n @media screen and (max-width: 600px) {\r\n  \r\n  .timeline[_ngcontent-%COMP%]::after {\r\n  left: 31px;\r\n  }\r\n  \r\n  \r\n  .container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding-left: 70px;\r\n  padding-right: 25px;\r\n  }\r\n  \r\n  \r\n  .container[_ngcontent-%COMP%]::before {\r\n  left: 60px;\r\n  border: medium solid white;\r\n  border-width: 10px 10px 10px 0;\r\n  border-color: transparent white transparent transparent;\r\n  }\r\n\r\n  \r\n  .left[_ngcontent-%COMP%]::after, .right[_ngcontent-%COMP%]::after {\r\n  left: 15px;\r\n  }\r\n  \r\n  \r\n  .right[_ngcontent-%COMP%] {\r\n  left: 0%;\r\n  }\r\n}\r\n \r\n \r\n \r\n .returnHome[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n  float: right;\r\n  margin-top: 1%;\r\n  margin-right: 1%;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n}\r\n \r\n .logo-back-icon[_ngcontent-%COMP%] {\r\n  width: 35px;\r\n}\r\n \r\n .loginForm[_ngcontent-%COMP%] {\r\n  width: 31%;\r\n  margin-top: 10%;\r\n  margin-left: 30%;\r\n  font-size: 22px;\r\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; \r\n}\r\n \r\n .loginButtonDiv[_ngcontent-%COMP%] {\r\n  margin-left: 30%;\r\n  margin-top: 5%;\r\n}\r\n \r\n .loginButton[_ngcontent-%COMP%] {\r\n  background-color:black;\r\n  color:white;\r\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; \r\n  font-size: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7Q0FFQztJQUNHLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0NBRUM7SUFDRyx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsc0JBQXNCO0FBQzFCOztDQUVDO0lBQ0csV0FBVztBQUNmOztDQUVFO0dBQ0MsV0FBVztBQUNkOztDQUVDOzs7Ozs7Ozs7O0dBVUU7O0NBRUg7RUFDRTtHQUNDLFdBQVc7R0FDWCx1QkFBdUI7R0FDdkIsb0VBQW9FO0dBQ3BFLG1IQUFtSDtHQUNuSCwyQkFBMkI7R0FDM0IsZUFBZTtHQUNmLDZCQUE2QjtHQUM3QixlQUFlO0dBQ2YsUUFBUTtHQUNSLE9BQU87RUFDUjtBQUNGOztDQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLDhEQUE4RDtJQUM5RCwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsUUFBUTtJQUNSLE9BQU87RUFDVDtBQUNGOztDQUVBLDJCQUEyQjs7Q0FDMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXlERzs7Q0FDSix5QkFBeUI7O0NBRXpCLDZDQUE2Qzs7Q0FDN0M7RUFDRSxZQUFZLEVBQUUscUJBQXFCO0VBQ25DLFFBQVEsRUFBRSwwQ0FBMEM7RUFDcEQsZUFBZSxFQUFFLGtCQUFrQjtFQUNuQyxVQUFVLEVBQUUsZ0JBQWdCO0VBQzVCLE1BQU0sRUFBRSxvQkFBb0I7RUFDNUIsT0FBTztFQUNQLHNCQUFzQixFQUFFLFNBQVM7RUFDakMsa0JBQWtCLEVBQUUsOEJBQThCO0VBQ2xELGlCQUFpQixFQUFFLG9DQUFvQztFQUN2RCxnQkFBZ0IsRUFBRSx5REFBeUQ7QUFDN0U7O0NBRUEsOEJBQThCOztDQUM5QjtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztDQUVBLDZEQUE2RDs7Q0FDN0Q7RUFDRSxjQUFjO0FBQ2hCOztDQUVBLDJEQUEyRDs7Q0FDM0Q7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztDQUVBLHNIQUFzSDs7Q0FDdEg7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtBQUNmOztDQUVBLGdJQUFnSTs7Q0FDaEk7RUFDRSxVQUFVLGlCQUFpQixDQUFDO0VBQzVCLFlBQVksZUFBZSxDQUFDO0FBQzlCOztDQUNBLDJDQUEyQzs7Q0FFM0MsNkJBQTZCOztDQUM3Qjs7Ozs7Ozs7OztHQVVHOztDQUNILDJCQUEyQjs7Q0FFM0I7Ozs7O0dBS0c7O0NBRUg7Ozs7R0FJRzs7Q0FFSDtFQUNFO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysc0VBQXNFO0VBQ3hFOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCO0FBQ0Y7O0NBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNFQUFzRTtFQUN4RTs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtBQUNGOztDQUdBLDRCQUE0Qjs7Q0FDNUI7RUFDRSxzQkFBc0I7QUFDeEI7O0NBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0NBQWtDO0FBQ3BDOztDQUVBLDZDQUE2Qzs7Q0FDN0M7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0NBRUEsNkNBQTZDOztDQUM3QztFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixNQUFNO0VBQ04sU0FBUztFQUNULFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0NBRUEsNkJBQTZCOztDQUM3QjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjs7Q0FFQSxnQ0FBZ0M7O0NBQ2hDO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztDQUVBLG9DQUFvQzs7Q0FDcEM7RUFDRSxPQUFPO0FBQ1Q7O0NBRUEscUNBQXFDOztDQUNyQztFQUNFLFNBQVM7QUFDWDs7Q0FFQSxzREFBc0Q7O0NBQ3REO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBQ1YsV0FBVztFQUNYLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsdURBQXVEO0FBQ3pEOztDQUVBLHNEQUFzRDs7Q0FDdEQ7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVU7RUFDVixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5Qix1REFBdUQ7QUFDekQ7O0NBRUEsb0RBQW9EOztDQUNwRDtFQUNFLFdBQVc7QUFDYjs7Q0FFQSx1QkFBdUI7O0NBQ3ZCO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztDQUVBLHdFQUF3RTs7Q0FDeEU7RUFDRSxtQ0FBbUM7RUFDbkM7RUFDQSxVQUFVO0VBQ1Y7O0VBRUEsMEJBQTBCO0VBQzFCO0VBQ0EsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkI7O0VBRUEscURBQXFEO0VBQ3JEO0VBQ0EsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsdURBQXVEO0VBQ3ZEOztFQUVBLCtDQUErQztFQUMvQztFQUNBLFVBQVU7RUFDVjs7RUFFQSx3REFBd0Q7RUFDeEQ7RUFDQSxRQUFRO0VBQ1I7QUFDRjs7Q0FDQSwwQkFBMEI7O0NBRTFCO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHdCQUFnQjtFQUFoQixnQkFBZ0I7QUFDbEI7O0NBRUE7RUFDRSxXQUFXO0FBQ2I7O0NBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysc0VBQXNFO0FBQ3hFOztDQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0NBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHNFQUFzRTtFQUN0RSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtYnRuIHtcclxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbiBcclxuIC5hZG1pbi1idG4ge1xyXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbiAuaGlkZGVuLWJ0biB7XHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLyogbWFyZ2luLXRvcDogNyU7ICovXHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMzAlOyAqL1xyXG59XHJcblxyXG4gLmxvZ28ge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbn1cclxuXHJcbiAgLmxvZ29fdGlrdG9rIHtcclxuICAgd2lkdGg6IDE5cHg7XHJcbn1cclxuXHJcbiAvKiAuYmFjay1pbWFnZXtcclxuICAgaGVpZ2h0OjUwZW07IFxyXG4gICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcvYXNzZXRzL2ltZy9tYXJzaG1hbGxvdy1iYWNrZ3JvdW5kLmpwZycpO1xyXG4gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJSA1MCU7XHJcbiAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICB0b3A6IDRweDtcclxuICAgbGVmdDogMDtcclxufSAqL1xyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjk5cHgpIHsgICBcclxuICAuYmFjay1pbWFnZXtcclxuICAgaGVpZ2h0OjQ4ZW07IFxyXG4gICBiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtcclxuICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy9hc3NldHMvaW1nL21hcnNobWFsbG93LWJhY2tncm91bmQtc21hbGwuanBnJyk7XHJcbiAgIC8qIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcvYXNzZXRzL2ltZy9tYXJzaG1hbGxvdy1iYWNrZ3JvdW5kLmpwZycpLCB1cmwoJy9hc3NldHMvaW1nL21hcnNobWFsbG93LWJhY2tncm91bmQuanBnJyk7ICovXHJcbiAgIGJhY2tncm91bmQtcG9zaXRpb246NTAlIDUwJTtcclxuICAgbWFyZ2luLXRvcDogMTIlO1xyXG4gICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICB0b3A6IDNweDtcclxuICAgbGVmdDogMDtcclxuICB9IFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkgeyAgICAgIFxyXG4gIC5iYWNrLWltYWdleyAgICAgXHJcbiAgICBoZWlnaHQ6NTBlbTsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnL2Fzc2V0cy9pbWcvbWFyc2htYWxsb3ctYmFja2dyb3VuZC5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246NTAlIDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDRweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfSBcclxufVxyXG5cclxuLyogU2xpZGVyIGNzcyBzdGFydHMgaGVyZSAqL1xyXG4gLyogLnN3aXRjaCB7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICB3aWR0aDogNjBweDtcclxuICAgaGVpZ2h0OiAzNHB4O1xyXG59XHJcbiBcclxuIC5zd2l0Y2ggaW5wdXQgeyBcclxuICAgb3BhY2l0eTogMDtcclxuICAgd2lkdGg6IDA7XHJcbiAgIGhlaWdodDogMDtcclxufVxyXG4gXHJcbiAuc2xpZGVyIHtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgIHRvcDogMDtcclxuICAgbGVmdDogMDtcclxuICAgcmlnaHQ6IDA7XHJcbiAgIGJvdHRvbTogMDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgIHRyYW5zaXRpb246IC40cztcclxufVxyXG4gXHJcbiAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgY29udGVudDogXCJcIjtcclxuICAgaGVpZ2h0OiAyNnB4O1xyXG4gICB3aWR0aDogMjZweDtcclxuICAgbGVmdDogNHB4O1xyXG4gICBib3R0b206IDRweDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuIFxyXG4gaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG59XHJcbiBcclxuIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcclxufVxyXG4gXHJcbiBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG59XHJcbiBcclxuIC5zbGlkZXIucm91bmQge1xyXG4gICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG59XHJcbiBcclxuIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59ICAqL1xyXG4vKiBTbGlkZXIgY3NzIGVuZHMgaGVyZSAqL1xyXG5cclxuLyogVGhlIHNpZGUgbmF2aWdhdGlvbiBtZW51IGNzcyBzdGFydHMgaGVyZSAqL1xyXG4uc2lkZW5hdiB7XHJcbiAgaGVpZ2h0OiAxMDAlOyAvKiAxMDAlIEZ1bGwtaGVpZ2h0ICovXHJcbiAgd2lkdGg6IDA7IC8qIDAgd2lkdGggLSBjaGFuZ2UgdGhpcyB3aXRoIEphdmFTY3JpcHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxOyAvKiBTdGF5IG9uIHRvcCAqL1xyXG4gIHRvcDogMDsgLyogU3RheSBhdCB0aGUgdG9wICovXHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExOyAvKiBCbGFjayovXHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXHJcbiAgcGFkZGluZy10b3A6IDYwcHg7IC8qIFBsYWNlIGNvbnRlbnQgNjBweCBmcm9tIHRoZSB0b3AgKi9cclxuICB0cmFuc2l0aW9uOiAwLjVzOyAvKiAwLjUgc2Vjb25kIHRyYW5zaXRpb24gZWZmZWN0IHRvIHNsaWRlIGluIHRoZSBzaWRlbmF2ICovXHJcbn1cclxuXHJcbi8qIFRoZSBuYXZpZ2F0aW9uIG1lbnUgbGlua3MgKi9cclxuLnNpZGVuYXYgYSB7XHJcbiAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiAjODE4MTgxO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi8qIFdoZW4gbW91c2Ugb3ZlciB0aGUgbmF2aWdhdGlvbiBsaW5rcywgY2hhbmdlIHRoZWlyIGNvbG9yICovXHJcbi5zaWRlbmF2IGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4vKiBQb3NpdGlvbiBhbmQgc3R5bGUgdGhlIGNsb3NlIGJ1dHRvbiAodG9wIHJpZ2h0IGNvcm5lcikgKi9cclxuLnNpZGVuYXYgLmNsb3NlYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLyogU3R5bGUgcGFnZSBjb250ZW50IC0gdXNlIHRoaXMgaWYgeW91IHdhbnQgdG8gcHVzaCB0aGUgcGFnZSBjb250ZW50IHRvIHRoZSByaWdodCB3aGVuIHlvdSBvcGVuIHRoZSBzaWRlIG5hdmlnYXRpb24gKi9cclxuI21haW4ge1xyXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IC41cztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4vKiBPbiBzbWFsbGVyIHNjcmVlbnMsIHdoZXJlIGhlaWdodCBpcyBsZXNzIHRoYW4gNDUwcHgsIGNoYW5nZSB0aGUgc3R5bGUgb2YgdGhlIHNpZGVuYXYgKGxlc3MgcGFkZGluZyBhbmQgYSBzbWFsbGVyIGZvbnQgc2l6ZSkgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgLnNpZGVuYXYge3BhZGRpbmctdG9wOiAxNXB4O31cclxuICAuc2lkZW5hdiBhIHtmb250LXNpemU6IDE4cHg7fVxyXG59XHJcbi8qIFRoZSBzaWRlIG5hdmlnYXRpb24gbWVudSBjc3MgZW5kcyBoZXJlICovXHJcblxyXG4vKiBEYXJrIE1vZGUgY3NzIHN0YXJ0cyBoZXJlKi9cclxuLyogYm9keSB7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4uZGFyay1tb2RlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbn0gKi9cclxuLyogRGFyayBNb2RlIGNzcyBlbmRzIGhlcmUqL1xyXG5cclxuLyogLmxvZ2luIHtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjsgXHJcbn0gKi9cclxuXHJcbi8qIC5sb2dpbi1pbWd7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0gKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY5OXB4KSB7ICAgXHJcbiAgLmxvZ2luIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE5JTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7IFxyXG4gIH0gXHJcblxyXG4gIC5sb2dpbi1pbWd7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkgeyAgICAgIFxyXG4gIC5sb2dpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjsgXHJcbiAgfSBcclxuXHJcbiAgLmxvZ2luLWltZ3tcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKiBUaW1lbGluZSBjc3Mgc3RhcnRzIGhlcmUqL1xyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0ZTVkO1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cclxuLnRpbWVsaW5lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cclxuLnRpbWVsaW5lOjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XHJcbn1cclxuXHJcbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLyogVGhlIGNpcmNsZXMgb24gdGhlIHRpbWVsaW5lICovXHJcbi5jb250YWluZXI6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHJpZ2h0OiAtMTdweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDRweCBzb2xpZCAjRkY5RjU1O1xyXG4gIHRvcDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xyXG4ubGVmdCB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgcmlnaHQgKi9cclxuLnJpZ2h0IHtcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi8qIEFkZCBhcnJvd3MgdG8gdGhlIGxlZnQgY29udGFpbmVyIChwb2ludGluZyByaWdodCkgKi9cclxuLmxlZnQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIycHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgei1pbmRleDogMTtcclxuICByaWdodDogMzBweDtcclxuICBib3JkZXI6IG1lZGl1bSBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItd2lkdGg6IDEwcHggMCAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB3aGl0ZTtcclxufVxyXG5cclxuLyogQWRkIGFycm93cyB0byB0aGUgcmlnaHQgY29udGFpbmVyIChwb2ludGluZyBsZWZ0KSAqL1xyXG4ucmlnaHQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIycHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgei1pbmRleDogMTtcclxuICBsZWZ0OiAzMHB4O1xyXG4gIGJvcmRlcjogbWVkaXVtIHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci13aWR0aDogMTBweCAxMHB4IDEwcHggMDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHdoaXRlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4vKiBGaXggdGhlIGNpcmNsZSBmb3IgY29udGFpbmVycyBvbiB0aGUgcmlnaHQgc2lkZSAqL1xyXG4ucmlnaHQ6OmFmdGVyIHtcclxuICBsZWZ0OiAtMTZweDtcclxufVxyXG5cclxuLyogVGhlIGFjdHVhbCBjb250ZW50ICovXHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLyogTWVkaWEgcXVlcmllcyAtIFJlc3BvbnNpdmUgdGltZWxpbmUgb24gc2NyZWVucyBsZXNzIHRoYW4gNjAwcHggd2lkZSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xyXG4gIC50aW1lbGluZTo6YWZ0ZXIge1xyXG4gIGxlZnQ6IDMxcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZ1bGwtd2lkdGggY29udGFpbmVycyAqL1xyXG4gIC5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogNzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gIH1cclxuICBcclxuICAvKiBNYWtlIHN1cmUgdGhhdCBhbGwgYXJyb3dzIGFyZSBwb2ludGluZyBsZWZ0d2FyZHMgKi9cclxuICAuY29udGFpbmVyOjpiZWZvcmUge1xyXG4gIGxlZnQ6IDYwcHg7XHJcbiAgYm9yZGVyOiBtZWRpdW0gc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMTBweCAwO1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgd2hpdGUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAvKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cclxuICAubGVmdDo6YWZ0ZXIsIC5yaWdodDo6YWZ0ZXIge1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE1ha2UgYWxsIHJpZ2h0IGNvbnRhaW5lcnMgYmVoYXZlIGxpa2UgdGhlIGxlZnQgb25lcyAqL1xyXG4gIC5yaWdodCB7XHJcbiAgbGVmdDogMCU7XHJcbiAgfVxyXG59XHJcbi8qIFRpbWVsaW5lIGNzcyBlbmRzIGhlcmUqL1xyXG5cclxuLnJldHVybkhvbWV7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxuICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbn1cclxuXHJcbi5sb2dvLWJhY2staWNvbiB7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbn1cclxuXHJcbi5sb2dpbkZvcm0ge1xyXG4gIHdpZHRoOiAzMSU7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7IFxyXG59XHJcblxyXG4ubG9naW5CdXR0b25EaXYge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5sb2dpbkJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmOyBcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.css']
            }]
    }], function () { return [{ type: _service_SharedService__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/other-servies/other-servies.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/other-servies/other-servies.component.ts ***!
  \**********************************************************/
/*! exports provided: OtherServiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherServiesComponent", function() { return OtherServiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_service_SharedService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/service/SharedService */ "./src/service/SharedService.ts");
/* harmony import */ var src_service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/service/http.service */ "./src/service/http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/__ivy_ngcc__/fesm2015/ng2-tooltip-directive.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








function OtherServiesComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherServiesComponent_div_0_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.returnHome(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherServiesComponent_div_0_div_1_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.sendMail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Send Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OtherServiesComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherServiesComponent_div_0_div_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.returnServices(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Hitesh Yadav\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Mail Service ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Hitesh Yadav Mail Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Gurgaon,India");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " +91 9467763740");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " test@hishyadav.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Please Enter Details to Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OtherServiesComponent_div_0_div_2_Template_input_ngModelChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OtherServiesComponent_div_0_div_2_Template_input_ngModelChange_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.company = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OtherServiesComponent_div_0_div_2_Template_input_ngModelChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OtherServiesComponent_div_0_div_2_Template_input_ngModelChange_44_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "textarea", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OtherServiesComponent_div_0_div_2_Template_textarea_ngModelChange_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.message = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherServiesComponent_div_0_div_2_Template_button_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.submitDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r31.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r31.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r31.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r31.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r31.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r31.buttionText);
} }
function OtherServiesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OtherServiesComponent_div_0_div_1_Template, 9, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OtherServiesComponent_div_0_div_2_Template, 54, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.objSharedService._showServices);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.objSharedService._sendMail);
} }
class OtherServiesComponent {
    constructor(objSharedService, http) {
        this.objSharedService = objSharedService;
        this.http = http;
        this.loading = false;
        this.buttionText = "Submit";
    }
    ngOnInit() {
    }
    submitDetails() {
        this.loading = true;
        this.buttionText = "Submiting...";
        let user = {
            name: this.name,
            company: this.company,
            email: this.email,
            phone: this.phone,
            message: this.message
        };
        // console.log("User Detail::",user);
        this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(data => {
            let res = data;
            // console.log(
            //   `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
            // );
        }, err => {
            console.log(err);
            this.loading = false;
            this.buttionText = "Submit";
        }, () => {
            this.loading = false;
            this.buttionText = "Submit";
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: `Email Sent to ${this.name} :)`,
                icon: 'success'
            });
            this.name = "";
            this.company = "";
            this.email = "";
            this.phone = "";
            this.message = "";
        });
    }
    returnHome() {
        this.objSharedService._IsMainPage = true;
        this.objSharedService._IsContactDev = false;
        this.objSharedService._showAdminSettigs = false;
        this.objSharedService._showLoginSettigs = false;
        this.objSharedService._showTimeline = false;
        this.objSharedService._showLoginForm = false;
        this.objSharedService._IsUnderConstuction = false;
        this.objSharedService._IsOtherServices = false;
        this.objSharedService._showServices = false;
        this.objSharedService._sendMail = false;
    }
    sendMail() {
        this.objSharedService._sendMail = true;
        this.objSharedService._showServices = false;
    }
    returnServices() {
        this.objSharedService._sendMail = false;
        this.objSharedService._showServices = true;
    }
}
OtherServiesComponent.ɵfac = function OtherServiesComponent_Factory(t) { return new (t || OtherServiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_service_SharedService__WEBPACK_IMPORTED_MODULE_2__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
OtherServiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OtherServiesComponent, selectors: [["app-other-servies"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "back-mainDiv", 4, "ngIf"], ["class", "body", 4, "ngIf"], [1, "back-mainDiv"], [1, "returnHome", 3, "click"], ["src", "./assets/img/back-icon.png", "tooltip", "Back to Home", 1, "logo-back-icon"], [1, "contact-btn", 3, "click"], ["src", "./assets/img/gmail.png", 1, "logo"], [1, "body"], ["src", "./assets/img/left-arrow.png", "tooltip", "Back to Services", 1, "logo-back-icon"], ["href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", "rel", "stylesheet", "integrity", "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css"], [1, "container"], [1, "hitesh"], [1, "brand", 2, "display", "flex", "justify-content", "center"], [1, "wrapper", "animated", "bounceInLeft"], [1, "company-info"], [1, "fa", "fa-road"], [1, "fa", "fa-phone"], [1, "fa", "fa-envelope"], [1, "contact"], ["type", "text", "name", "name", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "company", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "phone", 3, "ngModel", "ngModelChange"], [1, "full"], ["name", "message", "rows", "5", 3, "ngModel", "ngModelChange"], ["type", "submit", 3, "click"]], template: function OtherServiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OtherServiesComponent_div_0_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objSharedService._IsOtherServices);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_5__["TooltipDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["*[_ngcontent-%COMP%]{\r\n    box-sizing: border-box;\r\n}\r\n  \r\n.body[_ngcontent-%COMP%]{\r\n    background:#92bde7;\r\n    color:#485e74;\r\n    line-height:1.6;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    height:55em; \r\n    margin-top: 11%;\r\n    width: -webkit-fill-available;\r\n    position: absolute;\r\n    top: 4px;\r\n    left: 0;\r\n}\r\n  \r\n.container[_ngcontent-%COMP%]{\r\n    max-width:1170px;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    padding:1em;\r\n}\r\n  \r\nh3[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n  \r\nul[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    padding:0;\r\n}\r\n  \r\n.brand[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n  \r\n.brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    color:#fff;\r\n}\r\n  \r\n.wrapper[_ngcontent-%COMP%]{\r\n    box-shadow: 0 0 20px 0 rgba(72,94,116,0.7);\r\n}\r\n  \r\n.wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]{\r\n    padding: 1em;\r\n}\r\n  \r\n.company-info[_ngcontent-%COMP%]{\r\n    background:#c9e6ff;\r\n}\r\n  \r\n.company-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .company-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin:0 0 1rem 0;\r\n}\r\n  \r\n.contact[_ngcontent-%COMP%]{\r\n    background:#f9feff;\r\n}\r\n  \r\n\r\n  \r\n.contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-gap:20px;\r\n}\r\n  \r\n.contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    display:block;\r\n}\r\n  \r\n.contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin:0;\r\n}\r\n  \r\n.contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .full[_ngcontent-%COMP%]{\r\n    grid-column: 1 / 3;\r\n}\r\n  \r\n.contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    padding:1em;\r\n    border:1px solid #c9e6ff;\r\n}\r\n  \r\n.contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background:#c9e6ff;\r\n    border:0;\r\n    text-transform: uppercase;\r\n}\r\n  \r\n.contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\r\n    background:#92bde7;\r\n    color:#fff;\r\n    outline:0;\r\n    transition: background-color 2s ease-out;\r\n}\r\n  \r\n\r\n  \r\n@media(min-width:700px){\r\n  .wrapper[_ngcontent-%COMP%]{\r\n      display: grid;\r\n      grid-template-columns: 1fr 2fr;\r\n  }\r\n  \r\n  .wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]{\r\n      padding:2em;\r\n  }\r\n  \r\n  .company-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .company-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .brand[_ngcontent-%COMP%]{\r\n      text-align: left;\r\n  }\r\n\r\n  .body[_ngcontent-%COMP%]{\r\n    background:#92bde7;\r\n    color:#485e74;\r\n    line-height:1.6;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    height:50em; \r\n    margin-top: 3%;\r\n    width: -webkit-fill-available;\r\n    position: fixed;\r\n    top: 4px;\r\n    left: 0;\r\n  }\r\n}\r\n  \r\n.dinamic[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-gap: 2em;\r\n}\r\n  \r\n.returnHome[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    float: right;\r\n    margin-top: 1%;\r\n    margin-right: 1%;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n}\r\n  \r\n.logo-back-icon[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n}\r\n  \r\n@media screen and (max-width: 699px) {   \r\n    .contact-btn[_ngcontent-%COMP%] {\r\n        \r\n        padding: 12px 12px;\r\n        background: black;\r\n        color: #fff;\r\n        border-radius: 4px;\r\n        cursor: pointer;\r\n        margin-top: 5%;\r\n        width: 55%;\r\n        height: 22%;\r\n        margin-left: 22%;\r\n        font-size: 25px;\r\n        text-align: center;\r\n    }\r\n}\r\n  \r\n@media screen and (min-width: 700px) {      \r\n    .contact-btn[_ngcontent-%COMP%] {\r\n        \r\n        padding: 12px 12px;\r\n        background: black;\r\n        color: #fff;\r\n        border-radius: 4px;\r\n        cursor: pointer;\r\n        margin-top: 5%;\r\n        width: 15%;\r\n        height: 22%;\r\n        margin-left: 25%;\r\n        font-size: 25px;\r\n        text-align: center;\r\n    }\r\n}\r\n  \r\n.logo[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n}\r\n  \r\nh1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    cursor: no-drop;\r\n}\r\n  \r\n@media screen and (max-width: 699px) {   \r\n    .back-mainDiv[_ngcontent-%COMP%]{\r\n        background-color: gray;\r\n        height: 110ex;\r\n        margin-top: 11%;\r\n        width: -webkit-fill-available;\r\n        position: fixed;\r\n        top: 5px;\r\n        left: 0;\r\n    }\r\n}\r\n  \r\n@media screen and (min-width: 700px) {      \r\n    .back-mainDiv[_ngcontent-%COMP%]{\r\n        background-color: gray;\r\n        height:50em; \r\n        margin-top: 3%;\r\n        width: -webkit-fill-available;\r\n        position: fixed;\r\n        top: 4px;\r\n        left: 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3RoZXItc2Vydmllcy9vdGhlci1zZXJ2aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZiw0REFBNEQ7SUFDNUQsV0FBVztJQUNYLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUEsZ0JBQWdCOztBQUNoQjtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1Qsd0NBQXdDO0FBQzVDOztBQUVBLGtCQUFrQjs7QUFDbEI7RUFDRTtNQUNJLGFBQWE7TUFDYiw4QkFBOEI7RUFDbEM7O0VBRUE7TUFDSSxXQUFXO0VBQ2Y7O0VBRUE7TUFDSSxnQkFBZ0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZiw0REFBNEQ7SUFDNUQsV0FBVztJQUNYLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLFFBQVE7SUFDUixPQUFPO0VBQ1Q7QUFDRjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7UUFDeEIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixjQUFjO1FBQ2QsVUFBVTtRQUNWLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7UUFDeEIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixjQUFjO1FBQ2QsVUFBVTtRQUNWLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDREQUE0RDtJQUM1RCxlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsYUFBYTtRQUNiLGVBQWU7UUFDZiw2QkFBNkI7UUFDN0IsZUFBZTtRQUNmLFFBQVE7UUFDUixPQUFPO0lBQ1g7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCxjQUFjO1FBQ2QsNkJBQTZCO1FBQzdCLGVBQWU7UUFDZixRQUFRO1FBQ1IsT0FBTztJQUNYO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9vdGhlci1zZXJ2aWVzL290aGVyLXNlcnZpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbiAgXHJcbi5ib2R5e1xyXG4gICAgYmFja2dyb3VuZDojOTJiZGU3O1xyXG4gICAgY29sb3I6IzQ4NWU3NDtcclxuICAgIGxpbmUtaGVpZ2h0OjEuNjtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGhlaWdodDo1NWVtOyBcclxuICAgIG1hcmdpbi10b3A6IDExJTtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcbiAgXHJcbi5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6MTE3MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gICAgcGFkZGluZzoxZW07XHJcbn1cclxuXHJcbmgze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiAgXHJcbnVse1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6MDtcclxufVxyXG4gIFxyXG4uYnJhbmR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuICBcclxuLmJyYW5kIHNwYW57XHJcbiAgICBjb2xvcjojZmZmO1xyXG59XHJcbiAgXHJcbi53cmFwcGVye1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDcyLDk0LDExNiwwLjcpO1xyXG59XHJcbiAgXHJcbi53cmFwcGVyID4gKntcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG4gIFxyXG4uY29tcGFueS1pbmZve1xyXG4gICAgYmFja2dyb3VuZDojYzllNmZmO1xyXG59XHJcbiBcclxuLmNvbXBhbnktaW5mbyBoMywgLmNvbXBhbnktaW5mbyB1bHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjowIDAgMXJlbSAwO1xyXG59XHJcbiAgXHJcbi5jb250YWN0e1xyXG4gICAgYmFja2dyb3VuZDojZjlmZWZmO1xyXG59XHJcbiAgXHJcbi8qIEZPUk0gU1RZTEVTICovXHJcbi5jb250YWN0IGZvcm17XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgZ3JpZC1nYXA6MjBweDtcclxufVxyXG4gIFxyXG4uY29udGFjdCBmb3JtIGxhYmVse1xyXG4gICAgZGlzcGxheTpibG9jaztcclxufVxyXG4gIFxyXG4uY29udGFjdCBmb3JtIHB7XHJcbiAgICBtYXJnaW46MDtcclxufVxyXG4gIFxyXG4uY29udGFjdCBmb3JtIC5mdWxse1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xyXG59XHJcbiAgXHJcbi5jb250YWN0IGZvcm0gYnV0dG9uLCAuY29udGFjdCBmb3JtIGlucHV0LCAuY29udGFjdCBmb3JtIHRleHRhcmVhe1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHBhZGRpbmc6MWVtO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjYzllNmZmO1xyXG59XHJcbiAgXHJcbi5jb250YWN0IGZvcm0gYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDojYzllNmZmO1xyXG4gICAgYm9yZGVyOjA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiAgXHJcbi5jb250YWN0IGZvcm0gYnV0dG9uOmhvdmVyLC5jb250YWN0IGZvcm0gYnV0dG9uOmZvY3Vze1xyXG4gICAgYmFja2dyb3VuZDojOTJiZGU3O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIG91dGxpbmU6MDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMnMgZWFzZS1vdXQ7XHJcbn1cclxuICBcclxuLyogTEFSR0UgU0NSRUVOUyAqL1xyXG5AbWVkaWEobWluLXdpZHRoOjcwMHB4KXtcclxuICAud3JhcHBlcntcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xyXG4gIH1cclxuICBcclxuICAud3JhcHBlciA+ICp7XHJcbiAgICAgIHBhZGRpbmc6MmVtO1xyXG4gIH1cclxuICBcclxuICAuY29tcGFueS1pbmZvIGgzLCAuY29tcGFueS1pbmZvIHVsLCAuYnJhbmR7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAuYm9keXtcclxuICAgIGJhY2tncm91bmQ6IzkyYmRlNztcclxuICAgIGNvbG9yOiM0ODVlNzQ7XHJcbiAgICBsaW5lLWhlaWdodDoxLjY7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6NTBlbTsgXHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmRpbmFtaWN7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGdyaWQtZ2FwOiAyZW07XHJcbn1cclxuXHJcbi5yZXR1cm5Ib21le1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxufVxyXG4gIFxyXG4ubG9nby1iYWNrLWljb24ge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY5OXB4KSB7ICAgXHJcbiAgICAuY29udGFjdC1idG4ge1xyXG4gICAgICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICB3aWR0aDogNTUlO1xyXG4gICAgICAgIGhlaWdodDogMjIlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMiU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG4gICAgICBcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHsgICAgICBcclxuICAgIC5jb250YWN0LWJ0biB7XHJcbiAgICAgICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMTJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMiU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG5oMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGN1cnNvcjogbm8tZHJvcDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjk5cHgpIHsgICBcclxuICAgIC5iYWNrLW1haW5EaXZ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgICBoZWlnaHQ6IDExMGV4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDExJTtcclxuICAgICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxufVxyXG4gIFxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkgeyAgICAgIFxyXG4gICAgLmJhY2stbWFpbkRpdntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgICAgIGhlaWdodDo1MGVtOyBcclxuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiA0cHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxufVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtherServiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-other-servies',
                templateUrl: './other-servies.component.html',
                styleUrls: ['./other-servies.component.css']
            }]
    }], function () { return [{ type: src_service_SharedService__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }, { type: src_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/under-construction/under-construction.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/under-construction/under-construction.component.ts ***!
  \********************************************************************/
/*! exports provided: UnderConstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderConstructionComponent", function() { return UnderConstructionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_service_SharedService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/service/SharedService */ "./src/service/SharedService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/__ivy_ngcc__/fesm2015/ng2-tooltip-directive.js");





function UnderConstructionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnderConstructionComponent_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.returnHome(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sorry, Under Development !! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UnderConstructionComponent {
    constructor(objSharedService) {
        this.objSharedService = objSharedService;
    }
    ngOnInit() {
    }
    returnHome() {
        this.objSharedService._IsMainPage = true;
        this.objSharedService._IsContactDev = false;
        this.objSharedService._showAdminSettigs = false;
        this.objSharedService._showLoginSettigs = false;
        this.objSharedService._showTimeline = false;
        this.objSharedService._IsUnderConstuction = false;
    }
}
UnderConstructionComponent.ɵfac = function UnderConstructionComponent_Factory(t) { return new (t || UnderConstructionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_service_SharedService__WEBPACK_IMPORTED_MODULE_1__["SharedService"])); };
UnderConstructionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnderConstructionComponent, selectors: [["app-under-construction"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "returnHome", 3, "click"], ["src", "./assets/img/back-icon.png", "tooltip", "Back to Home", 1, "logo"], [1, "underCons"], ["src", "./assets/img/programmer.png", 1, "constuction-logo"]], template: function UnderConstructionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UnderConstructionComponent_div_0_Template, 7, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objSharedService._IsUnderConstuction);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"]], styles: [".returnHome[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    float: right;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n}\r\n   \r\n.logo[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n}\r\n   \r\n@media screen and (max-width: 767px) {   \r\n    .underCons[_ngcontent-%COMP%] {\r\n        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; \r\n        font-size: 30px;\r\n        margin-top: 20%;\r\n        text-align: center;\r\n    }\r\n}\r\n   \r\n@media screen and (min-width: 768px) {      \r\n    .underCons[_ngcontent-%COMP%] {\r\n        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; \r\n        font-size: 30px;\r\n        margin-top: 4%;\r\n        text-align: center;\r\n    } \r\n}\r\n   \r\n@media screen and (max-width: 767px) {   \r\n    .constuction-logo[_ngcontent-%COMP%] {\r\n        width: 20%;\r\n        margin-top: 5%;\r\n    } \r\n}\r\n   \r\n@media screen and (min-width: 768px) {      \r\n    .constuction-logo[_ngcontent-%COMP%] {\r\n        width: 10%;\r\n        margin-top: 5%;\r\n    } \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5kZXItY29uc3RydWN0aW9uL3VuZGVyLWNvbnN0cnVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRzs7QUFFSDs7Ozs7R0FLRzs7QUFFSDtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osd0JBQWdCO0lBQWhCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJO1FBQ0ksc0VBQXNFO1FBQ3RFLGVBQWU7UUFDZixlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNFQUFzRTtRQUN0RSxlQUFlO1FBQ2YsY0FBYztRQUNkLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdW5kZXItY29uc3RydWN0aW9uL3VuZGVyLWNvbnN0cnVjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmNvbnN0dWN0aW9uLWxvZ28ge1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59ICovXHJcbiAgIFxyXG4vKiAudW5kZXJDb25zIHtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7IFxyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0gKi9cclxuXHJcbi5yZXR1cm5Ib21le1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7ICAgXHJcbiAgICAudW5kZXJDb25zIHtcclxuICAgICAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmOyBcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHsgICAgICBcclxuICAgIC51bmRlckNvbnMge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7IFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9IFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkgeyAgIFxyXG4gICAgLmNvbnN0dWN0aW9uLWxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICB9IFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgeyAgICAgIFxyXG4gICAgLmNvbnN0dWN0aW9uLWxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICB9IFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnderConstructionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-under-construction',
                templateUrl: './under-construction.component.html',
                styleUrls: ['./under-construction.component.css']
            }]
    }], function () { return [{ type: src_service_SharedService__WEBPACK_IMPORTED_MODULE_1__["SharedService"] }]; }, null); })();


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

/***/ "./src/service/SharedService.ts":
/*!**************************************!*\
  !*** ./src/service/SharedService.ts ***!
  \**************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SharedService {
    constructor() {
        // Page-Onload
        this._IsMainPage = true;
        this._IsContactDev = false;
        this._IsUnderConstuction = false;
        this._IsOtherServices = false;
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(); };
SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/service/http.service.ts":
/*!*************************************!*\
  !*** ./src/service/http.service.ts ***!
  \*************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class HttpService {
    constructor(http) {
        this.http = http;
    }
    httpGet(url) {
        return this.http.get(url);
    }
    httpPost(url, {}) {
        return this.http.post(url, { name: "Hitesh Yadav" });
    }
    sendEmail(url, data) {
        return this.http.post(url, data);
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Surrender\My_Project\MyWorld\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map