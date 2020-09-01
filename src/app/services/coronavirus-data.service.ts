import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable'

@Injectable({
  providedIn: 'root'
})
export class CoronavirusDataService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
  	"Content-Type": "application/json"
  })

  getSummary() {
  	const url = 'https://covid19.patria.org.ve/api/v1/summary'
    return this.http.get(url)
  }
}
