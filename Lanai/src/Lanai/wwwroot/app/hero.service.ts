﻿import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero } from './hero';
@Injectable()
export class HeroService {
    constructor(private http: Http) { }
    getHeroes(): Promise<Hero[]> {               
        return this.http.get('/api/values')
            .toPromise()
            .then(response =>  response.json().data)
                .catch(this.handleError);
        
    }
    getHero(id: number) {
        return this.getHeroes()
            .then(heroes => heroes.filter(hero => hero.id === id)[0]);
    }
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}