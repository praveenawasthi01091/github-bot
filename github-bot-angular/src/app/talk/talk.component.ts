import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.less']
})
export class TalkComponent implements OnInit {

  public speech;
  constructor(private _ser: ChatService, private router: Router) {
  }


  ngOnInit() {
    this._ser.currentSpeech.subscribe(
      speech => {
        this.speech = speech;
      }
       
    )
  }
}
