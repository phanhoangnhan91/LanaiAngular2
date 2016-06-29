"use strict";
var router_deprecated_1 = require('@angular/router-deprecated');
var map_component_1 = require('./map.component');
var list_component_1 = require('./list.component');
var hero_detail_component_1 = require('./hero-detail.component');
exports.Routes = {
    map: new router_deprecated_1.Route({ path: '/map', name: 'Map', component: map_component_1.MapComponent }),
    list: new router_deprecated_1.Route({ path: '/', name: 'List', component: list_component_1.ListComponent }),
    detail: new router_deprecated_1.Route({ path: '/detail/:id', name: 'HeroDetail', component: hero_detail_component_1.HeroDetailComponent })
};
exports.APP_ROUTES = Object.keys(exports.Routes).map(function (r) { return exports.Routes[r]; });
//# sourceMappingURL=routes.js.map