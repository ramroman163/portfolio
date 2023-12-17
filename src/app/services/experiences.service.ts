import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExperienceModel } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {
  constructor(private http: HttpClient) { }

  getAllExperiences(url : string) : Observable<any>{
    return this.http.get<Array<ExperienceModel>>(url)
  }
}
