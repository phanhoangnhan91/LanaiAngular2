import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {POIService} from './pOI.service'
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'my-list',
    templateUrl: './app/list.component.html',
    providers: [POIService]
})

export class ListComponent implements OnInit {
    getNumber = function (num) {
        return (num >= 0) ? new Array(num) : [];
    }
    private pOIs;
    constructor(private pOIService: POIService, private router: Router) { }
    ngOnInit() {
       // this.pOIs=this.pOIService.getPOIs();
    }   
}