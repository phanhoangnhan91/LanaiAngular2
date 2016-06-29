"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var routes_1 = require('./routes');
var hero_service_1 = require('./hero.service');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.viewButtons = ['List', 'Map'];
    }
    AppComponent.prototype.isActive = function (instruction) {
        return this.router.isRouteActive(this.router.generate(instruction));
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/main.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                hero_service_1.HeroService
            ]
        }),
        router_deprecated_1.RouteConfig(routes_1.APP_ROUTES), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var AppBaseRequestOptions = (function (_super) {
    __extends(AppBaseRequestOptions, _super);
    function AppBaseRequestOptions() {
        _super.apply(this, arguments);
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
    }
    return AppBaseRequestOptions;
}(http_1.BaseRequestOptions));
platform_browser_dynamic_1.bootstrap(AppComponent, [http_1.HTTP_PROVIDERS, router_deprecated_1.ROUTER_PROVIDERS,
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }),
    core_1.provide(http_1.RequestOptions, { useClass: AppBaseRequestOptions }),
]);
//# sourceMappingURL=main.js.map