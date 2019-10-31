import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-main',
  templateUrl: './my-main.component.html',
  styleUrls: ['./my-main.component.less']
})
export class MyMainComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  public str: string;
  public text: string;
   userData()
   {
     this.str = this.text.toLowerCase()
    if(this.str=="create")
    {
      this.router.navigateByUrl('/create-repo');
    }
    else if(this.str=="delete")
    {
      this.router.navigateByUrl('/delete-repo');
    }
    else if(this.str=="all repo")
    {
      this.router.navigateByUrl('/all-repo');
    }
    else if(this.str=="my info")
    {
      this.router.navigateByUrl('/my-info');
    }
    else{
      window.alert("Please give appropriate commands");
    }
    
   }
}



