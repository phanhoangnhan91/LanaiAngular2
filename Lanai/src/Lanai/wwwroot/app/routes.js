"use strict";
var router_deprecated_1 = require('@angular/router-deprecated');
var heroes_component_1 = require('./heroes.component');
var list_component_1 = require('./list.component');
var hero_detail_component_1 = require('./hero-detail.component');
exports.Routes = {
    heroes: new router_deprecated_1.Route({ path: '/heroes', name: 'Heroes', component: heroes_component_1.HeroesComponent }),
    dashboard: new router_deprecated_1.Route({ path: '/', name: 'List', component: list_component_1.ListComponent }),
    heroDetail: new router_deprecated_1.Route({ path: '/detail/:id', name: 'HeroDetail', component: hero_detail_component_1.HeroDetailComponent })
};
exports.APP_ROUTES = Object.keys(exports.Routes).map(function (r) { return exports.Routes[r]; });
//# sourceMappingURL=routes.js.map