import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit {
  public text;
  public speech;
  constructor(private _ser: ChatService, private router: Router) {
  }

  ngOnInit() {
    this._ser.currentSpeech.subscribe(
      speech => {
        this.speech = speech;
        if (this.speech == "createComponent called") {
          this.router.navigateByUrl('/create-repo');
        }
       else if (this.speech == "delete component called") {
          this.router.navigateByUrl('/delete-repo');
        }
       else if (this.speech == "getRepos component called") {
          this.router.navigateByUrl('/all-repo');
        }
       else if (this.speech == "myInfo component called") {
          this.router.navigateByUrl('/my-info');
        }
        else if (this.speech == "favRepo component called") {
          this.router.navigateByUrl('/fav-repo');
        }
        else
        {
          this.router.navigateByUrl('/my-chat');
        }
      }
    )
  }
    userData() {
     this._ser.talk(this.text);
  }

}
