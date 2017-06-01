import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import * as Rx from 'rxjs';

@Injectable()
export class SocketService {
  private host: string = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;
  private socket: SocketIOClient.Socket;

  //Get items observable
  items(): Rx.Observable<any> {
      return Rx.Observable.create(observer => {
          this.socket.on('item', (item: any) => observer.next(item));
      });
  }

  //Request initial list when connected
  list(): void {
      this.socket.emit('list');
  }

  //create signal
  create(params: any) {
      this.socket.emit('create', params);
  }

  //Remove signal
  remove(params: any) {
      this.socket.emit('remove', params);
  }

  constructor(private name: string) {
      //let socketUrl = this.host + '/' + this.name;
      let socketUrl = `localhost:20011/${this.name}`;
      console.log("SOCKET_URL: ", socketUrl);

      //todo: add error handler for connection
      this.socket = io.connect(socketUrl);
      console.log(this.socket);
  }
}
