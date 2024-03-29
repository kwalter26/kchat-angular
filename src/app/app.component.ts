import { Component } from '@angular/core';
import { ChatService, SocketService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private chatService: ChatService) {
    chatService.messages.subscribe(msg => {
      console.log(`Response from websocket: ${JSON.stringify(msg)}`);
    });
  }

  private message = {
    author: 'tutorialedge',
    message: 'this is a test message'
  }

  sendMsg() {
    console.log('new message from client to websocket: ', this.message);
    this.chatService.messages.next(this.message);
    this.message.message = '';
  }

}
