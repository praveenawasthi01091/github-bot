import { Component, OnInit } from '@angular/core';
import { DeleteRepositoryService } from '../delete-repository.service';

@Component({
  selector: 'app-delete-repo',
  templateUrl: './delete-repo.component.html',
  styleUrls: ['./delete-repo.component.less']
})
export class DeleteRepoComponent implements OnInit {

  constructor(private _aService: DeleteRepositoryService)
   { }
  public repoName;

  ngOnInit() {
    }

   deleteRepo(){
     try{
    this._aService.deleteRepo(this.repoName).
    subscribe( data=> {
      console.log(data);
      window.alert("successfully deleted");
    })
   }
    catch(error)
    {
      let errorMessage='repo name already exist';
      window.alert(errorMessage);
    } 
   }
  
}
