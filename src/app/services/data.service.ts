import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  url = '../../assets/information.json'

  getAllData() : Observable<any>{
    return this.http.get<Array<any>>(this.url)
  }
}
