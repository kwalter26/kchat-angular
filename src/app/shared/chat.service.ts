import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs/Rx";
import { SocketService } from "./socket.service";

const CHAT_URL = 'ws://localhost:5000';

export interface Message {
  author: string,
  message: string
}

@Injectable()
export class ChatService {

  public messages: Subject<Message>;

  constructor(wsService: SocketService) {
    this.messages = <Subject<Message>>wsService
      .connect(CHAT_URL)
      .map((response: MessageEvent): Message => {
        let data = JSON.parse(response.data);
        return {
          author: data.author,
          message: data.message
        }
      })
  }

}
