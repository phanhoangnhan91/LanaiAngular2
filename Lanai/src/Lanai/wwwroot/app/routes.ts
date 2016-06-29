import { Route, Router } from '@angular/router-deprecated';
import { MapComponent } from './map.component';
import { ListComponent } from './list.component';

export var Routes = {
    map: new Route({ path: '/map', name: 'Map', component: MapComponent }),
    list: new Route({ path: '/', name: 'List', component: ListComponent }),
   // detail: new Route({ path: '/detail/:id', name: 'Detail', component: DetailComponent })
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);