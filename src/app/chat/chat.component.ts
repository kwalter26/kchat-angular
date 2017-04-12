import { Component, OnInit } from '@angular/core';
import { ChatService } from '../shared';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messageList = [];

  constructor(private chatService: ChatService) {
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

  ngOnInit() { 
     this.chatService.messages.subscribe(msg => {
      this.messageList.push(msg);
    });
  }

}
