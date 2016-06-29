import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service'
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'list',
    templateUrl: './app/list.component.html'
})

export class ListComponent implements OnInit {
    getNumber = function (num) {
        return (num >= 0) ? new Array(num) : [];
    }
    constructor(private heroService: HeroService, private router: Router) { }
    ngOnInit() {        
    }   
}