import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS, RequestOptions, BaseRequestOptions, Headers } from '@angular/http';
import { LocationStrategy,
    HashLocationStrategy } from '@angular/common';
import {provide, Component } from '@angular/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, ROUTER_BINDINGS } from '@angular/router-deprecated';
import { Routes, APP_ROUTES } from './routes';

@Component({
    selector: 'my-app',
    templateUrl: 'app/main.html',
    directives: [ROUTER_DIRECTIVES],
    
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
    constructor(private router: Router) {
    }
    viewButtons = ['List', 'Map'];
    isActive(instruction: any[]): boolean {
        return this.router.isRouteActive(this.router.generate(instruction));
    }
}
class AppBaseRequestOptions extends BaseRequestOptions {
    headers: Headers = new Headers({
        'Content-Type': 'application/json'
    })
}
bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    provide(RequestOptions, { useClass: AppBaseRequestOptions }),
]);