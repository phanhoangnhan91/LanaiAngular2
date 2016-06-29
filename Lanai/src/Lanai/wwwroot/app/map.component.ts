import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { Router } from '@angular/router-deprecated';


@Component({
    selector: 'my-map',
    templateUrl:'app/map.component.html',
    directives: [HeroDetailComponent],
})


export class MapComponent implements OnInit {
    title = 'Tour of Heroes';
    selectedHero: Hero;
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    };
    heroes: Hero[]; 
    constructor( private router: Router) {      
    };
   
    ngOnInit() {
       
    }
    gotoDetail() {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
    
}
