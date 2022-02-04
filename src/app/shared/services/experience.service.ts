import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

    constructor(private http:HttpClient) { }

    getExperiences(): Observable<any>{
        return this.http.get('./assets/data/experiences.json');
    }
  
}
