import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class MongoService {

  private _url:string="http://localhost:8081/api/v1/repo";
  constructor(private http: HttpClient) { }

  getRepo() : Observable<any>
  {
    return this.http.get<any>(this._url);

  }

 saveRepo(id : Number, repoName:string, createdAt: string)
  {
     console.log("helllo");
     return this.http.post(this._url,
      {
      "id":id,
      "repoName":repoName,
      "createdAt":createdAt
    }
      )
  }

  delRepo(id: Number)
  {
    console.log("delete called");
    return this.http.delete(this._url+'/'+id);
  }
 

}
