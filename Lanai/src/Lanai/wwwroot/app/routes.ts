import { Route, Router } from '@angular/router-deprecated';
import { MapComponent } from './map.component';
import { ListComponent } from './list.component';
import { HeroDetailComponent } from './hero-detail.component';

export var Routes = {
    map: new Route({ path: '/map', name: 'Map', component: MapComponent }),
    list: new Route({ path: '/', name: 'List', component: ListComponent }),
    detail: new Route({ path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent })
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);