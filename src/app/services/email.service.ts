import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url = "https://formsubmit.co/ajax/ca8b6eb0666acdd58c61d5c82802ec10"

  constructor(private http: HttpClient) { }

  sendEmail(data: Object){
    return this.http.post(this.url, data)
  }

}
