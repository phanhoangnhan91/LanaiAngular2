import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS, RequestOptions, BaseRequestOptions, Headers } from '@angular/http';
import { LocationStrategy,
    HashLocationStrategy } from '@angular/common';
import {provide, Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, ROUTER_BINDINGS } from '@angular/router-deprecated';
import { Routes, APP_ROUTES } from './routes';
import { HeroService }     from './hero.service';

@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
<a [routerLink]="['Dashboard']">Dashboard</a>
  <a [routerLink]="['Heroes']">Heroes</a>
  <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService
    ]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
    title = 'Tour of Heroes';
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