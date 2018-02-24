webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class='container'>\n   \n  <div class='row'>\n      <flash-messages></flash-messages>\n      <router-outlet></router-outlet>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__apply_leave_apply_leave_component__ = __webpack_require__("../../../../../src/app/apply-leave/apply-leave.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__approve_leave_approve_leave_component__ = __webpack_require__("../../../../../src/app/approve-leave/approve-leave.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages_module_flash_messages_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages_module_module__ = __webpack_require__("../../../../angular2-flash-messages/module/module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages_module_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages_module_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_leaves_service__ = __webpack_require__("../../../../../src/app/services/leaves.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth.guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routesArray = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
    { path: 'apply-leave', component: __WEBPACK_IMPORTED_MODULE_8__apply_leave_apply_leave_component__["a" /* ApplyLeaveComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'approve-leave', component: __WEBPACK_IMPORTED_MODULE_9__approve_leave_approve_leave_component__["a" /* ApproveLeaveComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__["a" /* AuthGuardService */]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__apply_leave_apply_leave_component__["a" /* ApplyLeaveComponent */],
                __WEBPACK_IMPORTED_MODULE_9__approve_leave_approve_leave_component__["a" /* ApproveLeaveComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routesArray),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages_module_module__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_16__angular_http__["HttpModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__services_leaves_service__["a" /* LeavesService */], __WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__["a" /* AuthGuardService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/apply-leave/apply-leave.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/apply-leave/apply-leave.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n  <div class='col-12 col-md-12'>\n    <form class='form-inline'>\n      <label>From:</label>\n      <input type='date' class='form-control' [(ngModel)]='from' name=\"from\">\n      <label>To:</label>\n      <input type='date' class='form-control' [(ngModel)]='to' name=\"to\" (change)='validateDate()'>\n      <button type='button' class='btn btn-success' (click)='applyLeave()'>Submit</button>\n      <!--label>Sort By:</label>\n  <select (change)='sortByDate(leavesArray,sortdate.value)' #sortdate [(ngModel)]='sortDate' name='sort'>\n    <option>From Date: low to high</option>\n    <option>From Date: high to low</option>\n    <option>To Date: low to high</option>\n    <option>To Date: high to low</option>\n  </select>\n  <label>Filter By:</label>\n  <select #filterOption [(ngModel)]='filterBy' name='filterby' (change)='fillFilterArray(filterOption.value)'>\n    <option>Name</option>\n    <option>Role</option>\n    <option>Team</option>\n    <option>Status</option>\n    <option>From</option>\n    <option>To</option>\n  </select>\n  <select #filter>\n    <option *ngFor ='let filter of filterArray'>{{filterOption.value.toLowerCase()}}{{filter[filterOption.value.toLowerCase()]}}</option>\n  </select> \n  <button type='button' class='btn btn-success' (click)='filterValueBy(filterOption.value,filter.value)'>Filter</button> \n  <button type='button' class='btn btn-default' (click)='removeFilter()'>Clear</button-->\n\n    </form>\n  </div>\n</div>\n<br/>\n<div class='row'>\n  <div class='col-12 col-md-12'>\n    <table class='table table-striped' (load)=\"showLeaves()\">\n      <tr>\n        <th>SNo.</th>\n        <th>Name</th>\n        <th>Team</th>\n        <th>Role</th>\n        <th>From</th>\n        <th>To</th>\n        <th>Status</th>\n      </tr>\n      <tr *ngFor='let leave of leavesArray;let i=index'>\n        <td>{{i+1}}</td>\n        <td>{{leave.name}}</td>\n        <td>{{leave.team}}</td>\n        <td>{{leave.role}}</td>\n        <td>{{leave.from}}</td>\n        <td>{{leave.to}}</td>\n        <td>{{leave.status}}</td>\n      </tr>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/apply-leave/apply-leave.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyLeaveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_leaves_service__ = __webpack_require__("../../../../../src/app/services/leaves.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module_flash_messages_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApplyLeaveComponent = /** @class */ (function () {
    function ApplyLeaveComponent(leaves, flash) {
        this.leaves = leaves;
        this.flash = flash;
        this.leavesArray = [];
        this.filterArray = [];
    }
    ApplyLeaveComponent.prototype.ngOnInit = function () {
        this.showLeaves();
    };
    ApplyLeaveComponent.prototype.formatDate = function (date) {
        var arr = date.split('-');
        return (arr[2] + '-' + arr[1] + '-' + arr[0]);
    };
    ApplyLeaveComponent.prototype.validateDate = function () {
        if (this.from > this.to) {
            this.flash.show('From date must be less than To date', { cssClass: 'alert-danger', timeout: 3000 });
            return;
        }
    };
    ApplyLeaveComponent.prototype.applyLeave = function () {
        var _this = this;
        var userDetails = localStorage.getItem('user');
        //userDetails = JSON.parse(userDetails)
        //console.log('User Details',JSON.parse(userDetails).name);
        var leave = {
            name: JSON.parse(userDetails).name,
            team: JSON.parse(userDetails).team,
            role: JSON.parse(userDetails).role,
            from: this.formatDate(this.from),
            to: this.formatDate(this.to),
            status: 'Pending'
        };
        this.leaves.applyLeave(leave).subscribe(function (data) {
            console.log(data);
            _this.leavesArray.push(leave);
        });
    };
    ApplyLeaveComponent.prototype.showLeaves = function () {
        var _this = this;
        console.log('Show Leaves Called!!!');
        this.leaves.showLeaves().subscribe(function (data) {
            //console.log('TYpe of data:',typeof data)
            console.log('Leaves data:', data);
            _this.leavesArray = data;
        });
    };
    ApplyLeaveComponent.prototype.sortInAscending = function (arr, option) {
        if (option === 'to') {
            arr.sort(function (a, b) {
                if (a.to < b.to) {
                    return -1;
                }
                else {
                    return +1;
                }
            });
        }
        else {
            arr.sort(function (a, b) {
                if (a.from < b.from) {
                    return -1;
                }
                else {
                    return +1;
                }
            });
        }
    };
    ApplyLeaveComponent.prototype.sortInDescending = function (arr, option) {
        if (option === 'to') {
            arr.sort(function (a, b) {
                if (a.to > b.to) {
                    return -1;
                }
                else {
                    return +1;
                }
            });
        }
        else {
            arr.sort(function (a, b) {
                if (a.from > b.from) {
                    return -1;
                }
                else {
                    return +1;
                }
            });
        }
    };
    ApplyLeaveComponent.prototype.sortByDate = function (arr, option) {
        switch (option) {
            case 'To Date: high to low': {
                this.sortInDescending(arr, 'to');
                break;
            }
            case 'To Date: low to high': {
                this.sortInAscending(arr, 'to');
                break;
            }
            case 'From Date: high to low': {
                this.sortInDescending(arr, 'from');
                break;
            }
            case 'From Date: low to high': {
                this.sortInAscending(arr, 'from');
                break;
            }
            default: {
                return;
            }
        }
    };
    ApplyLeaveComponent.prototype.filterValueBy = function (filterBy, value) {
        console.log('Button CLicked!!', value);
        var arrayForFilter = [];
        this.leavesArray.forEach(function (leave) {
            console.log(leave);
            //return (leave[filterBy.toLowerCase()]===value);
            if (leave[filterBy.toLowerCase()] === value) {
                arrayForFilter.push(leave);
            }
        });
        console.log(arrayForFilter);
        this.leavesArray = arrayForFilter;
    };
    ApplyLeaveComponent.prototype.removeFilter = function () {
        this.showLeaves();
    };
    ApplyLeaveComponent.prototype.fillFilterArray = function (option) {
        var newArray = [];
        var lookupObject = {};
        for (var i in this.leavesArray) {
            lookupObject[this.leavesArray[i][option.toLowerCase()]] = this.leavesArray[i];
        }
        for (i in lookupObject) {
            this.filterArray.push(lookupObject[i]);
        }
        console.log('New Array:', newArray);
    };
    ApplyLeaveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-apply-leave',
            template: __webpack_require__("../../../../../src/app/apply-leave/apply-leave.component.html"),
            styles: [__webpack_require__("../../../../../src/app/apply-leave/apply-leave.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_leaves_service__["a" /* LeavesService */], __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"]])
    ], ApplyLeaveComponent);
    return ApplyLeaveComponent;
}());



/***/ }),

/***/ "../../../../../src/app/approve-leave/approve-leave.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/approve-leave/approve-leave.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n  <div class='col-12 col-md-12'>\n    <div *ngIf='!showForm'>\n      To approve leaves, click on any leave you want to approve and approve leaves.\n    </div>\n    <br/>\n    <form class='form-inline' *ngIf='showForm'>\n\n      <label>Name:</label>\n      {{leaveToApprove.name}}\n      <label>Team:</label>\n      {{leaveToApprove.team}}\n      <label>Role:</label>\n      {{leaveToApprove.role}}\n      <label>From:</label>\n      {{leaveToApprove.from}}\n      <label>To:</label>\n      {{leaveToApprove.to}}\n      <label>From:</label>\n      {{leaveToApprove.from}}\n      <label>Status:</label>\n      <select [(ngModel)]='leaveStatus' name='status'>\n        <option>Approve</option>\n        <option>Decline</option>\n      </select>\n      <label>Comments:</label>\n      <input type='textbox' [(ngModel)]='leaveComments' name='comments'>\n      <button type='button' class='btn btn-success' (click)=approveLeaves(leaveToApprove._id)>Submit</button>\n      <button type='button' class='btn btn-danger'>Cancel</button>\n      <br/>\n    </form>\n    <table class='table table-striped' id='leaveTable'>\n\n      <tr>\n        <th>SNo.</th>\n        <th>Name</th>\n        <th>Team</th>\n        <th>Role</th>\n        <th>From</th>\n        <th>To</th>\n        <th>Status</th>\n        <th>Comments</th>\n      </tr>\n      <tr *ngFor='let leave of leavesApproveArray;let i=index' (click)='enableApproveLeave(leave,i)'>\n        <td>{{i+1}}</td>\n        <td>{{leave.name}}</td>\n        <td>{{leave.team}}</td>\n        <td>{{leave.role}}</td>\n        <td>{{leave.from}}</td>\n        <td>{{leave.to}}</td>\n        <td>{{leave.status}}</td>\n        <td>{{leave.comments}}</td>\n        <td hidden>{{leave._id}}</td>\n      </tr>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/approve-leave/approve-leave.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApproveLeaveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_leaves_service__ = __webpack_require__("../../../../../src/app/services/leaves.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApproveLeaveComponent = /** @class */ (function () {
    function ApproveLeaveComponent(leaveService) {
        this.leaveService = leaveService;
        this.leavesApproveArray = [];
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    ApproveLeaveComponent.prototype.ngOnInit = function () {
        this.showApprovalLeaves();
    };
    ApproveLeaveComponent.prototype.showApprovalLeaves = function () {
        var _this = this;
        var tempArr = [];
        this.leaveService.showLeavesToApprove(this.user.team).subscribe(function (data) {
            //console.log(typeof data);
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    var element = data[key];
                    console.log('Data Element:', element);
                    //console.log(name);
                    if (element.username !== _this.user.username && element.team === _this.user.team) {
                        console.log('Valid');
                        _this.leavesApproveArray.push(element);
                    }
                }
            }
        });
    };
    ApproveLeaveComponent.prototype.enableApproveLeave = function (leave, i) {
        this.showForm = 1;
        if (leave) {
            //console.log('Enable Leave Clicked!!',i+1);
            // document.getElementById('leaveTable').deleteRow(i);
            this.leaveToApprove = leave;
            this.rowId = i;
            console.log(this.leaveToApprove);
        }
    };
    ApproveLeaveComponent.prototype.approveLeaves = function (id) {
        //console.log(this.leaveStatusApproved)
        var _this = this;
        var details = {
            id: id,
            status: this.leaveStatus + 'd',
            comment: this.leaveComments
        };
        this.leaveService.approveLeaves(details).subscribe(function (data) {
            _this.leavesApproveArray.splice(_this.rowId, 1);
        });
        this.showForm = 0;
    };
    ApproveLeaveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-approve-leave',
            template: __webpack_require__("../../../../../src/app/approve-leave/approve-leave.component.html"),
            styles: [__webpack_require__("../../../../../src/app/approve-leave/approve-leave.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_leaves_service__["a" /* LeavesService */]])
    ], ApproveLeaveComponent);
    return ApproveLeaveComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class='container-fluid'>\n    <div class='navbar-header'>\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class='navbar-brand' [routerLink]=\"['/']\">Leave Management System</a>\n\n    </div>\n    <div class='collapse navbar-collapse' id='myNavbar'>\n      <ul class='nav navbar-nav'>\n        <li *ngIf='auth.isLoggedIn()' [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a [routerLink]=\"['/']\">Home</a>\n        </li>\n        <li *ngIf='auth.isLoggedIn()' [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a [routerLink]=\"['/apply-leave']\">Apply Leave</a>\n        </li>\n        <li *ngIf='auth.isLoggedIn() && (auth.isAdmin===1)' [routerLinkActive]=\"['active'] \" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a [routerLink]=\"['/approve-leave']\">Approve Leave</a>\n        </li>\n      </ul>\n      <ul class='nav navbar-nav navbar-right'>\n        <li *ngIf='!auth.isLoggedIn()' [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a [routerLink]=\"['/register']\">Register</a>\n        </li>\n        <li *ngIf='!auth.isLoggedIn()' [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a [routerLink]=\"['/login']\">Login</a>\n        </li>\n        <li *ngIf='auth.isLoggedIn()' [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" (click)='logOut()'>\n          <a href='#'>Logout</a>\n        </li>\n\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth) {
        this.auth = auth;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logOut = function () {
        this.auth.logOut();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n  <div class='col-12 col-md-12'>\n    <div class='jumbotron text-center'>\n      <h3 class='page-header'>Leave Managment System</h3>\n      <p>Leave Management System can be used to align your leaves with the rest of your team.</p>\n      <p>Just register yourself with details about your team, role etc., and you're good to go.</p>\n      <form class='form-group'>\n        <button type='button' class='btn btn-default' [routerLink]=\"['/register']\">Register</button>\n        <button type='button' class='btn btn-default' [routerLink]=\"['/login']\">Login</button>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class='page-header'>Login</h3>\n<div class='form-group'>\n  <label>User Name:</label>\n  <input type='email' class='form-control' placeholder=\"Email Id\" [(ngModel)]='username' name='username'>\n</div>\n<div class='form-group'>\n    <label>Password:</label>\n    <input type='password' class='form-control' [(ngModel)]='password' name='password'>\n</div>\n<div class='form-group' *ngIf='isAdmin===1'>\n  <label>Option:</label>\n  <select>\n    <option>Apply-Leave</option>\n    <option>Approve-Leave</option>\n  </select>\n</div>\n<div class='form-group'>\n      <button type='button' class='btn btn-success' (click)='login()'>Login</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
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
    function LoginComponent(auth, validate, flash, router) {
        this.auth = auth;
        this.validate = validate;
        this.flash = flash;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        console.log('User:', user);
        if (!this.validate.validateEmail(user.username)) {
            this.flash.show('Invalid email!!', { cssClass: "alert-danger", timeout: 3000 });
            return;
        }
        this.auth.authenticateUser(user).subscribe(function (data) {
            console.log('Data:', data);
            if (data.success) {
                _this.auth.storeDetails(data.user, data.token);
                _this.auth.setAdmin(data.user.isAdmin);
                _this.flash.show('Successfully Logged in', { cssClass: 'alert-success', timeout: 300 });
                _this.router.navigate(['/apply-leave']);
            }
            else {
                _this.flash.show('Username and Password do not match', { cssClass: 'alert-danger', timeout: 300 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class='page-header'>Register</h3>\n<form>\n  <div class='form-group'>\n  <label>Name:</label>\n  <input type='text' class='form-control' [(ngModel)]=\"name\" name=\"name\">\n  </div>\n  <div class='form-group'>\n  <label>User Name:</label>\n  <input type='email' class='form-control' placeholder='Mail Id' [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class='form-group'>\n  <label>Password:</label>\n  <input type='password' class='form-control' [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <div class='form-group'>\n  <label>Role:</label>\n  <select [(ngModel)]=\"role\" name=\"role\">\n    <option>Dev</option>\n    <option>Test</option>\n    <option>Manager</option>\n  </select>\n</div>\n  <div class='form-group'>\n  <label>Team:</label>\n  <select  [(ngModel)]=\"team\" name=\"team\">\n    <option>Team 1</option>\n    <option>Team 2</option>\n    <option>Team 3</option>\n  </select>\n</div>\n<div class='form-group'>\n  <button type='button' class='btn btn-success' (click)='registerUser()'>Register</button>\n</div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module_flash_messages_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validate, flash, auth, router) {
        this.validate = validate;
        this.flash = flash;
        this.auth = auth;
        this.router = router;
        this.usersArr = [];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getUsers().subscribe(function (res) { return _this.usersArr = res; });
    };
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            password: this.password,
            role: this.role,
            team: this.team
        };
        //let usersArr = [];
        var isUser;
        console.log('New User:', user);
        if (!this.validate.checkEmpty(user)) {
            this.flash.show('One or more fields are Empty!!', { cssClass: "alert-danger", timeout: 3000 });
            return;
        }
        if (!this.validate.validateEmail(user.username)) {
            this.flash.show('Invalid email!!', { cssClass: "alert-danger", timeout: 3000 });
            return;
        }
        console.log("Users Array:", this.usersArr);
        this.usersArr.forEach(function (element) {
            console.log("Users Array Element:", element);
            if (element.username === _this.username) {
                isUser = true;
                return;
            }
            else
                isUser = false;
        });
        console.log("VAlue of isUser:", isUser);
        if (isUser) {
            this.flash.show("Username already exists,use another username", { cssClass: "alert-danger", timeout: 3000 });
            return;
        }
        // this.auth.checkUser(user);
        this.auth.registerUser(user).subscribe(function (data) {
            console.log("Data Posted:", data);
            if (data) {
                _this.flash.show('User Registered successfully!!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flash.show('User Registration Failed!!', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.auth.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.getUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('user/register', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.checkUser = function (user) {
        console.log("Inside checkUser");
        this.getUsers().subscribe(function (data) {
            console.log("DAta:", data);
        });
    };
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('user/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('user/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeDetails = function (user, token) {
        localStorage.setItem('token_id', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
        console.log('Value of User:', user);
    };
    AuthService.prototype.isLoggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('token_id');
    };
    AuthService.prototype.setAdmin = function (admin) {
        this.isAdmin = admin;
    };
    AuthService.prototype.getAdmin = function () {
        return this.isAdmin;
    };
    AuthService.prototype.logOut = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/leaves.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeavesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { RequestOptions } from '@angular/http/src/base_request_options';
var LeavesService = /** @class */ (function () {
    function LeavesService(http) {
        this.http = http;
    }
    LeavesService.prototype.applyLeave = function (leave) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('user/apply-leave', leave, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LeavesService.prototype.showLeaves = function () {
        console.log('Inside Show Leaves');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('user/apply-leave')
            .map(function (res) { return res.json(); });
    };
    LeavesService.prototype.showLeavesToApprove = function (team) {
        console.log('Inside Show Leaves');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.get('user/approve-leave', options)
            .map(function (res) { return res.json(); });
    };
    LeavesService.prototype.approveLeaves = function (details) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.put('user/approve-leave', details, options)
            .map(function (res) { return res.json(); });
    };
    LeavesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], LeavesService);
    return LeavesService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages_module_flash_messages_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidateService = /** @class */ (function () {
    function ValidateService(flash) {
        this.flash = flash;
    }
    ValidateService.prototype.checkEmpty = function (user) {
        if (user.name === undefined || user.username === undefined || user.password === undefined || user.role === undefined || user.team === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"]])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map