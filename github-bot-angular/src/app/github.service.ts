import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private _url: string = 'https://api.github.com/users/{userName}';

  constructor(private http: HttpClient) { 

  }
  
  getPersonalInfo(){
    return this.http.get(this._url);
  }
}
