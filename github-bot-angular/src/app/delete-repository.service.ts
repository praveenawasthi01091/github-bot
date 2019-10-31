import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeleteRepositoryService {
 
  private _url: string = 'https://api.github.com/repos/{userName}/';
  private _url2: string ='?access_token={access token}';

  constructor(private http: HttpClient) {

  }

  deleteRepo(repoName: string) {
    
    return this.http.delete(this._url+repoName+this._url2).pipe(
      retry(1),
      catchError(this.handleError)  
    );
    
  }
  handleError(error) {
    let errorMessage = '';
    errorMessage='repo name does not exist';
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
     
  }

