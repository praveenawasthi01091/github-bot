import { Component, OnInit } from '@angular/core';
import { CreateRepositoryService } from '../create-repository.service';

@Component({
  selector: 'app-create-repo',
  templateUrl: './create-repo.component.html',
  styleUrls: ['./create-repo.component.less']
})
export class CreateRepoComponent implements OnInit {

  constructor(private _aService: CreateRepositoryService)
   { }
  public repoName="";
  public repoDesc="";

  ngOnInit() {
   }

   createRepo(){
     try{
    this._aService.createRepo(this.repoName,this.repoDesc).
    subscribe( data=> {
      console.log("data");
      window.alert("Successfully created");
    })
  }
  catch(Error)
  {

  }
   }

}


