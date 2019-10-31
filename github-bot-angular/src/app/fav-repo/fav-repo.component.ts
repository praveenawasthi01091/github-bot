import { Component, OnInit } from '@angular/core';
import { MongoService } from '../mongo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fav-repo',
  templateUrl: './fav-repo.component.html',
  styleUrls: ['./fav-repo.component.less']
})
export class FavRepoComponent implements OnInit {

  constructor(private _ser:MongoService, private router:Router) { }
  public repo=[];
  ngOnInit() {
    this._ser.getRepo()
    .subscribe(data => this.repo = data);
  }
  del(a)
  {
    this._ser.delRepo(a).subscribe( data=> {
      console.log(data);
      window.alert("successfully deleted");
    })

document.getElementById(a).style.display="none";
  }
}
