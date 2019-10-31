import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

// import {ApiAiClient} from 'api-ai-javascript';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient'
import { ReturnStatement } from '@angular/compiler';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  readonly token = environment.dialogFlow.GitBot;
  readonly client = new ApiAiClient({ accessToken: this.token });
  public speech;
  //
  speechSource = new BehaviorSubject('');
  currentSpeech = this.speechSource.asObservable();
  //


  talk(text: string) {
    this.client.textRequest(text)
      .then(data => {
        this.speech = data.result.fulfillment.speech;
        console.log(this.speech);
        this.speechSource.next(this.speech);
      });
  }

  constructor() { }
}
