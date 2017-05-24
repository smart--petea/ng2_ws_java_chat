import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import * as Rx from 'rxjs';

@Injectable()
export class SocketService {
  private host: string = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;
  private socket: SocketIOClient.Socket;

  constructor(private name: string) {
      let socketUrl = this.host + '/' + this.name;

      //todo: add error handler for connection
      this.socket = io.connect(socketUrl);
      console.log(this.socket);
  }
}
