import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero } from './hero';
@Injectable()
export class POIService {
    constructor(private http: Http) { }   
    getPOIs(): Promise<Hero[]> {    
        let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        let options = new RequestOptions({ headers: headers });           
        return this.http.get('https://kc.kobotoolbox.org/api/v1/forms?id_string=lanai2')
            .toPromise()
            .then(response =>  response.json().data)
                .catch(this.handleError);
        
    }   
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}