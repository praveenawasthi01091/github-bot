import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateRepositoryService {

  private _url: string = 'https://api.github.com/user/repos?access_token={{access token}}';

  constructor(private http: HttpClient) {

  }

  createRepo(repoName: string, description: string) {
    return this.http.post(this._url, 
      {
        "name": repoName,
        "description": description,
        "homepage": "https://github.com",
        "private": false,
        "has_issues": true,
        "has_projects": true,
        "has_wiki": true
      }
    ).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    errorMessage='repo name already exist';
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
 
}
