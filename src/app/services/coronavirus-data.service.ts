import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable'

@Injectable({
  providedIn: 'root'
})


export class CoronavirusDataService {

  url:string = 'https://api.covid19api.com/summary'

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
  	"Content-Type": "application/json"
  })

  getSummary() {
    return this.http.get(this.url)
  }
}
