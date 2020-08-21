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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\n\n\n\n\n<div class=\"logo\">\n\n</div>\n<div class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top position-relative\">\n\n  <button (click)=\"landingpage()\">Home</button><br>\n  <button (click)=\"placeAppointment()\">Place Appointment</button><br>\n  <button (click)=\"viewAppointment()\">View Appointment</button><br>\n  <button (click)=\"contactUspage()\">Contact Us</button>\n\n\n</div>\n\n\n<div class=\"sidebar bg-dark\">\n  <button (click)=\"landingpage()\">Home</button><br>\n  <button (click)=\"placeAppointment()\">Place Appointment</button><br>\n  <button (click)=\"viewAppointment()\">View Appointment</button><br>\n  <button (click)=\"contactUspage()\">Contact Us</button>\n</div>\n\n\n<!--div class=\"sidebar\">\n  <button (click)=\"landingpage()\">Home</button><br>\n  <button (click)=\"placeAppointment()\">Place Appointment</button><br>\n  <button (click)=\"viewAppointment()\">View Appointment</button><br>\n  <button (click)=\"contactUspage()\">Contact Us</button>\n\n</div-->\n\n\n\n\n\n\n<div class=\"content\">\n<router-outlet></router-outlet>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n    <label>Contact-us</label>\n    <div class=\"form-group\">\n        <label for=\"exampleInputfirstname\">First Name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"firstname\" placeholder=\"First Name\">\n        <small class=\"form-text text-muted\"\n            *ngIf=\"contactForm.controls.firstname.touched && contactForm.controls.firstname.errors?.required\">\n            Please enter first name.!\n        </small>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"exampleInputlastname\">Last Name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"lastname\" placeholder=\"Last Name\">\n        <small class=\"form-text text-muted\"\n            *ngIf=\"contactForm.controls.lastname.touched && contactForm.controls.lastname.errors?.required\">\n            Please enter last name.!\n        </small>\n    </div>\n\n\n    <div class=\"form-group\">\n        <label for=\"exampleInputphonenumber\">Phone Number</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"phonenumber\" placeholder=\"Phone Number\">\n        <small class=\"form-text text-muted\"\n            *ngIf=\"contactForm.controls.phonenumber.touched && contactForm.controls.phonenumber.errors?.required\">\n            Please enter phone number.!\n        </small>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"exampleInputemail\">Email</label>\n        <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Eamil\">\n        <small class=\"form-text text-muted\"\n            *ngIf=\"contactForm.controls.email.touched && contactForm.controls.email.errors?.required\">\n            Please enter email.!\n        </small>\n        <small class=\"form-text text-muted\"\n            *ngIf=\"contactForm.controls.email.touched && contactForm.controls.email.errors?.email\">\n            Enter the valid email .!\n        </small>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"exampleInputmessage\">Message</label>\n        <textarea type=\"text\" class=\"form-control\" formControlName=\"message\" placeholder=\"Message\"></textarea>\n        <small class=\"form-text text-muted\"\n            *ngIf=\"contactForm.controls.message.touched && contactForm.controls.message.errors?.required\">\n            Please enter message.!\n        </small>\n\n    </div>\n    <button type=\"submit\" >Submit</button>\n\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"introtext\">\n    <h1>Intro text</h1>\n    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h3>\n</div>\n<div>\n    <button (click)=\"navpage()\">Apply For Trainer</button>\n</div> \n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form [formGroup]=\"fitnessForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n    <label>fitness-us</label>\n\n\n<div class=\"form-row\">\n\n<div class=\"col\">\n\n\n    <div class=\"form-group\">\n        <label for=\"exampleInputfirstname\">First Name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"firstname\" placeholder=\"First Name\">\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.firstname.touched && fitnessForm.controls.firstname.errors?.required\">\n            Please enter first name.!\n        </small>\n    </div>\n\n</div>\n\n\n<div class=\"col\">\n\n    <div class=\"form-group\">\n        <label for=\"exampleInputlastname\">Last Name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"lastname\" placeholder=\"Last Name\">\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.lastname.touched && fitnessForm.controls.lastname.errors?.required\">\n            Please enter last name.!\n        </small>\n    </div>\n\n</div> \n\n\n</div> <!--form row-->\n\n<div class=\"form-row\">\n\n    <div class=\"col\">\n    <div class=\"form-group\">\n        <label for=\"exampleInputage\">Age</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"age\" placeholder=\"Age\">\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.age.touched && fitnessForm.controls.age.errors?.required\">\n            Please enter Age.!\n        </small>\n    </div>\n    </div>\n\n    <div class=\"col\">\n    <div class=\"form-group\">\n        <label for=\"exampleInputphonenumber\">Phone Number</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"phonenumber\" placeholder=\"Phone Number\">\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.phonenumber.touched && fitnessForm.controls.phonenumber.errors?.required\">\n            Please enter phone number.!\n        </small>\n    </div>\n    </div>\n</div> <!--form row-->\n\n\n<div class=\"form-row\">\n    <div class=\"col\">\n    <div class=\"form-group\">\n        <label for=\"exampleInputemail\">Email</label>\n        <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\">\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.email.touched && fitnessForm.controls.email.errors?.required\">\n            Please enter email.!\n        </small>\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.email.touched && fitnessForm.controls.email.errors?.email\">\n            Enter the valid email .!\n        </small>\n    </div>\n    </div>\n\n    <div class=\"col\">\n    <div class=\"form-group\">\n        <label for=\"exampleInputstreetaddress\">Street Address</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"streetaddress\" placeholder=\"Street Address\">\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.streetaddress.touched && fitnessForm.controls.streetaddress.errors?.required\">\n            Please enter street address.!\n        </small>\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.streetaddress.touched && fitnessForm.controls.streetaddress.errors?.streetaddress\">\n            Enter the valid street address .!\n        </small>\n    </div>\n    </div>\n</div> <!--form row-->\n\n<div class=\"form-row\">\n    <div class=\"col\">\n    <div class=\"form-group\">\n        <label for=\"exampleInputcity\">City</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"city\" placeholder=\"Street Address\">\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.city.touched && fitnessForm.controls.city.errors?.required\">\n            Please enter city .!\n        </small>\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.city.touched && fitnessForm.controls.city.errors?.city\">\n            Enter the valid city .!\n        </small>\n    </div>\n    </div>\n\n    <div class=\"col\">\n    <div class=\"form-group\">\n        <label for=\"exampleInputstate\">State</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"state\" placeholder=\"State\">\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.state.touched && fitnessForm.controls.state.errors?.required\">\n            Please enter state .!\n        </small>\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.state.touched && fitnessForm.controls.state.errors?.state\">\n            Enter the valid state .!\n        </small>\n    </div>\n    </div>\n</div> <!--form row-->\n\n    <div class=\"form-row\">\n    <div class=\"col\">\n    <div class=\"form-group\">\n        <label for=\"exampleInputcountry\">Country</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"country\" placeholder=\"Country\">\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.country.touched && fitnessForm.controls.country.errors?.required\">\n            Please enter country .!\n        </small>\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.country.touched && fitnessForm.controls.country.errors?.country\">\n            Enter the valid country .!\n        </small>\n    </div>\n    </div>\n\n    <div class=\"col\">\n    <div class=\"form-group\">\n        <label for=\"exampleInputpincode\">Pin Code</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"pincode\" placeholder=\"Pin Code\">\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.pincode.touched && fitnessForm.controls.pincode.errors?.required\">\n            Please enter pincode .!\n        </small>\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.pincode.touched && fitnessForm.controls.pincode.errors?.pincode\">\n            Enter the valid pincode .!\n        </small>\n    </div>\n    </div>\n</div> <!--form row-->\n   \n    <div class=\"form-row\">\n    <div class=\"col\">\n    <div class=\"form-group\">\n        <label for=\"exampleInputtrainerpreference\">Trainer Preference</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"trainerpreference\" placeholder=\"Trainer Preference\">\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.trainerpreference.touched && fitnessForm.controls.trainerpreference.errors?.required\">\n            Please enter Trainer Preference .!\n        </small>\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.trainerpreference.touched && fitnessForm.controls.trainerpreference.errors?.trainerpreference\">\n            Enter the valid Trainer Preference .!\n        </small>\n    </div>\n    </div>\n\n    <div class=\"col\">\n    <div class=\"form-group\">\n        <label for=\"exampleInputinr\">INR</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"inr\" placeholder=\"INR\">\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.inr.touched && fitnessForm.controls.inr.errors?.required\">\n            Please enter INR .!\n        </small>\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.inr.touched && fitnessForm.controls.inr.errors?.inr\">\n            Enter the valid INR .!\n        </small>\n    </div>\n    </div>\n</div> <!--form row-->\n\n    <div class=\"form-row\">\n    <div class=\"col\">\n    <div class=\"form-group\">\n        <label for=\"exampleInputpaisa\">Paisa</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"paisa\" placeholder=\"Paisa\">\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.paisa.touched && fitnessForm.controls.paisa.errors?.required\">\n            Please enter Paisa .!\n        </small>\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.paisa.touched && fitnessForm.controls.paisa.errors?.paisa\">\n            Enter the valid paisa .!\n        </small>\n    </div>\n    </div>\n\n    <div class=\"col\">\n    <div class=\"form-group\">\n        <label for=\"exampleInputphysiotherapist\">Physiotherapist</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"physiotherapist\" placeholder=\"Physiotherapist\">\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.physiotherapist.touched && fitnessForm.controls.physiotherapist.errors?.required\">\n            Please enter Physiotherapist .!\n        </small>\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.physiotherapist.touched && fitnessForm.controls.physiotherapist.errors?.physiotherapist\">\n            Enter the valid Physiotherapist .!\n        </small>\n    </div>\n    </div>\n</div> <!--form row-->\n    <div class=\"form-group\">\n        <label for=\"exampleInputpackages\">Packages</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"packages\" placeholder=\"Packages\">\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.packages.touched && fitnessForm.controls.packages.errors?.required\">\n            Please enter Packages .!\n        </small>\n        <small class=\"form-text text-muted\"\n            *ngIf=\"fitnessForm.controls.packages.touched && fitnessForm.controls.packages.errors?.packages\">\n            Enter the valid Packages .!\n        </small>\n    </div>\n   \n\n\n\n    <button type=\"submit\" >Submit</button>\n\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-appointment/view-appointment.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-appointment/view-appointment.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h1>Appoinments</h1>\n    <table id=\"customers\" border:1px>\n      <thead>\n        <tr>\n          <th class=\"h1\">Sl NO</th>\n          <th class=\"h2\">Name</th>\n          <th class=\"h3\">Address</th>\n          <th class=\"h4\">City</th>\n          <th class=\"h5\">Package</th>\n          <th class=\"h6\">Trainer Preference</th>\n          <th class=\"h7\">Phone</th>\n          <td><h4>Edit</h4></td>\n          <td><h4>Delete</h4></td>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let appoinment of appointments\">\n          <td>{{ appoinment.id }}</td>\n          <td>{{ appoinment.firstname + appoinment.lastname }}</td>\n          <td>{{ appoinment.streetaddress + \" \" + appoinment.state }}</td>\n          <td>{{ appoinment.city }}</td>\n          <td>{{ appoinment.Package }}</td>\n          <td>{{ appoinment.trainerpreference }}</td>\n          <td>{{ appoinment.phonenumber }}</td>\n          <td>\n            <!--button type=\"button\" [routerLink]=\"['/crud/update/', product.id]\"-->\n            <button type=\"button\">Update</button>\n          </td>\n          <td>\n            <button type=\"button\" (click)=\"deleteAppoinment(appoinment.id)\">\n              Remove\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var UserService_1;




const httpOptions = {
    headers: new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ "Content-Type": "application/json" }),
};
let UserService = UserService_1 = class UserService {
    constructor(http) {
        this.http = http;
    }
    postfitnessdata(data) {
        return this.http
            .post(UserService_1.BaseUrl + "allfriends", data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.json()));
    }
    getfitnessdata() {
        return this.http
            .get(UserService_1.BaseUrl + "allfriends", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.json()));
    }
    postContactUsData(data) {
        return this.http
            .post(UserService_1.BaseUrl + "contactUs", data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.json()));
    }
    deleteAppointment(id) {
        return this.http
            .delete(UserService_1.BaseUrl + "allfriends/" + id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.json()));
    }
};
UserService.BaseUrl = "http://localhost:6565/";
UserService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
UserService = UserService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
], UserService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-appointment/view-appointment.component */ "./src/app/view-appointment/view-appointment.component.ts");
/* harmony import */ var _place_fitness_trainer_appointment_place_fitness_trainer_appointment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./place-fitness-trainer-appointment/place-fitness-trainer-appointment.component */ "./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.ts");







const routes = [
    { path: "landing-page", component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"] },
    { path: "place-fitness-trainer-appointment", component: _place_fitness_trainer_appointment_place_fitness_trainer_appointment_component__WEBPACK_IMPORTED_MODULE_6__["PlaceFitnessTrainerAppointmentComponent"] },
    { path: "view-appointment", component: _view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_5__["ViewAppointmentComponent"] },
    { path: "contact-us", component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsComponent"] },
    { path: "**", redirectTo: "landing-page" }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidebar {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 200px;\r\n    position: fixed;\r\n    height: 100%;\r\n    overflow: auto;\r\n  }\r\n  \r\n  /* Sidebar links */\r\n  \r\n  .sidebar a {\r\n    display: block;\r\n    color: black;\r\n    padding: 16px;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  /* Active/current link */\r\n  \r\n  .sidebar a.active {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n  \r\n  div.content {\r\n    margin-left: 200px;\r\n    padding: 1px 16px;\r\n    height: 1000px;\r\n  }\r\n  \r\n  /* On screens that are less than 700px wide, make the sidebar into a topbar */\r\n  \r\n  @media screen and (max-width: 700px) {\r\n    .sidebar {\r\n      width: 100%;\r\n      height: auto;\r\n      position: relative;\r\n    }\r\n    .sidebar a {float: left;}\r\n    div.content {margin-left: 0;}\r\n  }\r\n  \r\n  /* On screens that are less than 400px, display the bar vertically, instead of horizontally */\r\n  \r\n  @media screen and (max-width: 400px) {\r\n    .sidebar a {\r\n      text-align: center;\r\n      float: none;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7RUFDaEI7O0VBRUEsa0JBQWtCOztFQUNsQjtJQUNFLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtFQUN2Qjs7RUFFQSx3QkFBd0I7O0VBQ3hCO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFFQSw2RUFBNkU7O0VBQzdFO0lBQ0U7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtJQUNwQjtJQUNBLFlBQVksV0FBVyxDQUFDO0lBQ3hCLGFBQWEsY0FBYyxDQUFDO0VBQzlCOztFQUVBLDZGQUE2Rjs7RUFDN0Y7SUFDRTtNQUNFLGtCQUFrQjtNQUNsQixXQUFXO0lBQ2I7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAvKiBTaWRlYmFyIGxpbmtzICovXHJcbiAgLnNpZGViYXIgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFjdGl2ZS9jdXJyZW50IGxpbmsgKi9cclxuICAuc2lkZWJhciBhLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgZGl2LmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogMXB4IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDEwMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogT24gc2NyZWVucyB0aGF0IGFyZSBsZXNzIHRoYW4gNzAwcHggd2lkZSwgbWFrZSB0aGUgc2lkZWJhciBpbnRvIGEgdG9wYmFyICovXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLnNpZGViYXIgYSB7ZmxvYXQ6IGxlZnQ7fVxyXG4gICAgZGl2LmNvbnRlbnQge21hcmdpbi1sZWZ0OiAwO31cclxuICB9XHJcbiAgXHJcbiAgLyogT24gc2NyZWVucyB0aGF0IGFyZSBsZXNzIHRoYW4gNDAwcHgsIGRpc3BsYXkgdGhlIGJhciB2ZXJ0aWNhbGx5LCBpbnN0ZWFkIG9mIGhvcml6b250YWxseSAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAuc2lkZWJhciBhIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICB9Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'angularSPA';
    }
    landingpage() {
        this.router.navigateByUrl("landing-page");
    }
    placeAppointment() {
        this.router.navigateByUrl("place-fitness-trainer-appointment");
    }
    viewAppointment() {
        this.router.navigateByUrl("view-appointment");
    }
    contactUspage() {
        this.router.navigateByUrl("contact-us");
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _place_fitness_trainer_appointment_place_fitness_trainer_appointment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./place-fitness-trainer-appointment/place-fitness-trainer-appointment.component */ "./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.ts");
/* harmony import */ var _view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-appointment/view-appointment.component */ "./src/app/view-appointment/view-appointment.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"],
            _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"],
            _place_fitness_trainer_appointment_place_fitness_trainer_appointment_component__WEBPACK_IMPORTED_MODULE_9__["PlaceFitnessTrainerAppointmentComponent"],
            _view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_10__["ViewAppointmentComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"]
        ],
        exports: [_view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_10__["ViewAppointmentComponent"],
            _place_fitness_trainer_appointment_place_fitness_trainer_appointment_component__WEBPACK_IMPORTED_MODULE_9__["PlaceFitnessTrainerAppointmentComponent"],
            _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"],
            _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: Contact, ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



class Contact {
    constructor(firstname, lastname, phonenumber, email, message) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phonenumber = phonenumber;
        this.email = email;
        this.message = message;
    }
}
let ContactUsComponent = class ContactUsComponent {
    constructor(fb) {
        this.fb = fb;
        this.contactdata = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.obj = {};
    }
    ngOnInit() {
        this.contactForm = this.fb.group({
            firstname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phonenumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[^ @]*@[^ @]*")]],
            message: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    onSubmit() {
        this.obj = Object.assign({}, this.contactForm.value, this.obj);
        this.contactForm.value;
        console.log("LOG: LoginComponent -> onSubmit -> this.contactForm.value", this.contactForm.value);
        if (this.contactForm.valid) {
            this.contactdata.emit(new Contact(this.contactForm.value.firstname, this.contactForm.value.lastname, this.contactForm.value.phonenumber, this.contactForm.value.email, this.contactForm.value.message));
        }
    }
};
ContactUsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ContactUsComponent.prototype, "contactdata", void 0);
ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], ContactUsComponent);



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LandingPageComponent = class LandingPageComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navpage() {
        this.router.navigateByUrl("place-fitness-trainer-appointment");
    }
};
LandingPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LandingPageComponent);



/***/ }),

/***/ "./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: Fitness, PlaceFitnessTrainerAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fitness", function() { return Fitness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceFitnessTrainerAppointmentComponent", function() { return PlaceFitnessTrainerAppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");





class Fitness {
    constructor(inr, paisa, streetaddress, city, state, country, pincode, phonenumber, email, firstname, lastname, age, trainerpreference, physiotherapist, packages) {
        this.inr = inr;
        this.paisa = paisa;
        this.streetaddress = streetaddress;
        this.city = city;
        this.state = state;
        this.country = country;
        this.pincode = pincode;
        this.phonenumber = phonenumber;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.trainerpreference = trainerpreference;
        this.physiotherapist = physiotherapist;
        this.packages = packages;
    }
}
let PlaceFitnessTrainerAppointmentComponent = class PlaceFitnessTrainerAppointmentComponent {
    constructor(formBuilder, router, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
        this.fitnessForm = this.formBuilder.group({
            firstname: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            age: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[^ @]*@[^ @]*")]],
            phonenumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            streetaddress: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            country: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pincode: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6)],
            ],
            trainerpreference: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            physiotherapist: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            packages: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            paisa: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            inr: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    setAmount(e) {
        console.log(e.target.value);
        this.fitnessForm.get("inr").setValue(e.target.value);
        this.fitnessForm.get("paisa").setValue("50");
    }
    onSubmit() {
        console.log(this.fitnessForm.value);
        this.userService
            .postfitnessdata(this.fitnessForm.value)
            .subscribe((response) => {
            console.log(response);
        });
        this.router.navigateByUrl("view-appointment");
    }
};
PlaceFitnessTrainerAppointmentComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
PlaceFitnessTrainerAppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-place-fitness-trainer-appointment",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./place-fitness-trainer-appointment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
], PlaceFitnessTrainerAppointmentComponent);



/***/ }),

/***/ "./src/app/view-appointment/view-appointment.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/view-appointment/view-appointment.component.ts ***!
  \****************************************************************/
/*! exports provided: ViewAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAppointmentComponent", function() { return ViewAppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ViewAppointmentComponent = class ViewAppointmentComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        this.getfitness();
    }
    getfitness() {
        this.userService.getfitnessdata().subscribe((data) => {
            //console.log(data);
            this.appointments = data;
        });
    }
    deleteAppoinment(id) {
        let choice = confirm("Are you sure you want to delete");
        if (choice == true) {
            this.userService.deleteAppointment(id).subscribe(() => {
                this.ngOnInit();
            }, (err) => console.log(err));
        }
        else {
            console.log("no Action");
        }
    }
};
ViewAppointmentComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ViewAppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-view-appointment",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-appointment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-appointment/view-appointment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view.appointment.component.css */ "./src/app/view-appointment/view.appointment.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ViewAppointmentComponent);



/***/ }),

/***/ "./src/app/view-appointment/view.appointment.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/view-appointment/view.appointment.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#customers {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n  \r\n  #customers td,\r\n  #customers th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n  \r\n  #customers tr:nth-child(even) {\r\n    background-color: #f2f2f2;\r\n  }\r\n  \r\n  #customers tr:hover {\r\n    background-color: #ddd;\r\n  }\r\n  \r\n  #customers th {\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    text-align: left;\r\n    background-color: black;\r\n    color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1hcHBvaW50bWVudC92aWV3LmFwcG9pbnRtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5REFBeUQ7SUFDekQseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjs7RUFFQTs7SUFFRSxzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL3ZpZXctYXBwb2ludG1lbnQvdmlldy5hcHBvaW50bWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2N1c3RvbWVycyB7XHJcbiAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgI2N1c3RvbWVycyB0ZCxcclxuICAjY3VzdG9tZXJzIHRoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjdXN0b21lcnMgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgfVxyXG4gIFxyXG4gICNjdXN0b21lcnMgdHI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICB9XHJcbiAgXHJcbiAgI2N1c3RvbWVycyB0aCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\angular-fsd-fitness-jest-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map