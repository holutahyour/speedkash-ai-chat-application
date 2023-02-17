import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Observable, of } from 'rxjs';
import { io } from 'socket.io-client'
import { HttpClient } from '@angular/common/http';



interface IBrainShop {
  socket: any;
  sendMessage: (msg: string) => Observable<string[]>
}

class BrainShop {
  private socket: any;
  private key: string = 'P0SUJx6e8C1XyUw4';
  private bid: string = '172641';
  private ROOT_URL = 'http://api.brainshop.ai/get'

  constructor(private http: HttpClient) {
    // this.socket = io('https://api.brainshop.ai')
  }

  sendMessageToApi(msg: string) {
    return this.http.get(`${this.ROOT_URL}?bid=${this.bid}&key=${this.key}&uid=2w344r&msg=${msg}`)
  }

  sendMessage(msg: string): Observable<string[]> {
    return new Observable(observer => {
      // this.socket.emit('message', msg)
      // this.socket.on('message', (data: any) => {
      //   observer.next(data.cnt)
      // })

      this.sendMessageToApi(msg)
        .subscribe(res => {
          console.log(res);
          // observer.next(res.data.cnt)
        })

    })
  }
}

@Component({
  selector: 'app-ai-chat-bot',
  templateUrl: './ai-chat-bot.component.html',
  styleUrls: ['./ai-chat-bot.component.css']
})
export class AiChatBotComponent implements OnInit {
  messages$: Observable<string[]> = of([]);
  message: string = '';
  brainShop: BrainShop;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.brainShop = new BrainShop(this.http);
    this.messages$ = this.brainShop.sendMessage('hello!');
  }

  sendMessage(): void {
    if (this.message) {
      this.messages$ = this.brainShop.sendMessage(this.message);
      this.message = ''
    }
  }
}
