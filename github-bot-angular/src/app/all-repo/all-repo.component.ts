import { Component, OnInit } from '@angular/core';
import { AllRepositoryService } from '../all-repository.service'
import { MongoService } from '../mongo.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-all-repo',
  templateUrl: './all-repo.component.html',
  styleUrls: ['./all-repo.component.less']
})
export class AllRepoComponent implements OnInit {
  public val=0;
  public repos=[];
  public repoFav=[];
  public repo=[];
  constructor(private _aService: AllRepositoryService,private _mongoService: MongoService) { }

  ngOnInit() {
    this._aService.getAllRepo().
  subscribe((data: any) => {
    this.repos = data;
    for(let i=0;i<this.repos.length;i++)
    {
       this.repo[i]={"id":this.repos[i].id,
                      "repoName": this.repos[i].name,
                      "createdAt": this.repos[i].created_at }
    }
    console.log(this.repo)
  })

  var delayInMilliseconds = 1000; //1 second
// delay(3000);
// console.log("after  1 sec");
// this.changeColor();

 }


changeColor()
{
  this._mongoService.getRepo()
  .subscribe(data => {
    this.repoFav = data
    console.log(this.repoFav)
    
    for(let a of data)
    {
     document.getElementById(a.id).className = "btn btn-danger";
     document.getElementById(a.repoName).className = "glyphicon glyphicon-remove";
    }
 
  })
  window.alert("Favourite and Non Favourite added")
}
/* toggle  values */
star(a,b,c)
{
 
     if(document.getElementById(a).className == "btn btn-warning")
     {
       console.log(a+" "+b+" "+" "+c);
      window.alert("Successfully added");
      this._mongoService.saveRepo(a,b,c)
        .subscribe(
          (val) => {
            console.log(val);
        }
        );

     document.getElementById(a).className = "btn btn-danger";
     document.getElementById(b).className = "glyphicon glyphicon-remove";
     }
     else if(document.getElementById(a).className == "btn btn-danger"){

      window.alert("Successfully removed");
      /* method remove called*/ 
      this._mongoService.delRepo(a).subscribe( data=> {
       
      })

      document.getElementById(a).className = "btn btn-warning";
      document.getElementById(b).className = "glyphicon glyphicon-star";
     }
}

}
