import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';


@Component({
    selector: 'my-map',
    templateUrl:'app/map.component.html',
})


export class MapComponent implements OnInit {
    
    constructor( private router: Router) {      
    };
   
    ngOnInit() {
       
    }
    gotoDetail() {
       
    }
    
}
