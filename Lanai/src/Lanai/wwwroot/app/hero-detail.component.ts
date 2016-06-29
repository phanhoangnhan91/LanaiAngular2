﻿import { Component, Input, OnInit } from '@angular/core';
import {Hero} from './hero';
import { RouteParams } from '@angular/router-deprecated';
@Component({
    selector: 'my-hero-detail',
    template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>
<button (click)="goBack()">Back</button>
`,
    
})
export class HeroDetailComponent implements OnInit {    
    @Input()
    hero: Hero;
    constructor(
        private routeParams: RouteParams) {
    };
    ngOnInit() {
        let id = +this.routeParams.get('id');       
    }
    goBack() {
        window.history.back();
    }

}
