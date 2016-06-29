import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { POI } from './poi';
@Injectable()
export class POIService {
    constructor(private http: Http) { }   
    getPOIs(): Promise<POI[]> {    
        //let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        //let options = new RequestOptions({ headers: headers });           
        return this.http.get('/api/POIs')
            .toPromise()
            .then(response =>  response.json().data)
                .catch(this.handleError);
        
    }   
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}