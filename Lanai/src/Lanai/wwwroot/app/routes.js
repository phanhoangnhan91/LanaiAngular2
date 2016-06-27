"use strict";
var router_deprecated_1 = require('@angular/router-deprecated');
var heroes_component_1 = require('./heroes.component');
var dashboard_component_1 = require('./dashboard.component');
var hero_detail_component_1 = require('./hero-detail.component');
exports.Routes = {
    heroes: new router_deprecated_1.Route({ path: '/heroes', name: 'Heroes', component: heroes_component_1.HeroesComponent }),
    dashboard: new router_deprecated_1.Route({ path: '/dashboard', name: 'Dashboard', component: dashboard_component_1.DashboardComponent }),
    heroDetail: new router_deprecated_1.Route({ path: '/detail/:id', name: 'HeroDetail', component: hero_detail_component_1.HeroDetailComponent })
};
exports.APP_ROUTES = Object.keys(exports.Routes).map(function (r) { return exports.Routes[r]; });
//# sourceMappingURL=routes.js.map