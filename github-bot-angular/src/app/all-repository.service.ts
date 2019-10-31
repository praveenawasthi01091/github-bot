import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

//  92b3711c4e2efa6d1f14fe6448091879c023c73b

@Injectable({
  providedIn: 'root'
})
export class AllRepositoryService {
  private _url: string = 'https://api.github.com/users/{userName}/repos';

  constructor(private http: HttpClient) { }

  getAllRepo() {
    return this.http.get(this._url);
    // return this.http.post(this._url, {body: {//jsonobject}});
  }
}
 
