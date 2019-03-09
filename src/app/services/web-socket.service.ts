import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Event } from '../models/event';
import * as socketIo from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})

export class WebSocketService {

  private socket;
  private SERVER_URL = 'http://192.168.0.12:8080/test';

  public initSocket(): void {
      this.socket = socketIo(this.SERVER_URL);
      console.log(this.socket);
  }
 
  sendMessage(msg: string){
      this.socket.emit('my event', msg);
  }
  
  getNewQrCode() {
    return Observable.create((observer) => {
      this.socket.on('newQrCode', (message) => {
          observer.next(message);
      });
    });
  }

  getNewUser() {
    return Observable.create((observer) => {
      this.socket.on('newUser', (message) => {
          observer.next(message);
      });
    });
  }

  onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
        this.socket.on(event, () => observer.next());
    });
  }
}
