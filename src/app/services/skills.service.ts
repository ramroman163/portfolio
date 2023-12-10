import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { skillModel } from '../models/skill.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }

  getAllSkills(url : string) : Observable<any>{
    return this.http.get<Array<skillModel>>(url)
  }
}
