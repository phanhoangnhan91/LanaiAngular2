import { Route, Router } from '@angular/router-deprecated';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

export var Routes = {
    heroes: new Route({ path: '/heroes', name: 'Heroes', component: HeroesComponent }),
    dashboard: new Route({ path: '/', name: 'Dashboard', component: DashboardComponent }),
    heroDetail: new Route({ path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent })
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);