import { Component, OnInit } from '@angular/core';
import {POI} from './poi';
import {POIService} from './pOI.service'
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'my-list',
    templateUrl: './app/list.component.html',
    providers: [POIService]
})

export class ListComponent implements OnInit {
    //getNumber = function (num) {
    //    return (num >= 0) ? new Array(num) : [];
    //}
    private pOIs: POI[]=[];
    constructor(private pOIService: POIService, private router: Router) { }
    ngOnInit() {
        this.pOIService.getPOIs().then(pOIs => this.pOIs = pOIs);
    }   
}