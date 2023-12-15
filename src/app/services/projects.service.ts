import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { projectModel } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private http: HttpClient) { }

  getAllProjects(url : string) : Observable<any>{
    return this.http.get<Array<projectModel>>(url)
  }
}
