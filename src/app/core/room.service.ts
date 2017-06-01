import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { IRoom } from '../models/index';
import { SocketService } from './socket.service';
import * as Rx from 'rxjs';

@Injectable()
export class RoomService {
  rooms: Rx.ReplaySubject<any> = new Rx.ReplaySubject(1);
  private list: IRoom[] = [];
  private socketService: SocketService;

  constructor(private userService: UserService) {
      this.socketService = new SocketService('room');

      //Subscribe to room list updates
      this.socketService.items().subscribe(
          rooms => {
              this.list = rooms;
              this.rooms.next(this.list);
          },
          error => console.log(error)
      );

      //Get initial list
      this.socketService.list();
  }

  join(name: string): void {
      const matches = this.list.filter(room => room.name === name);
      const alreadyJoined = this.userService.rooms.filter(room => room.name === name);
      if(matches[0] && !alreadyJoined[0]) {
          this.userService.rooms.push(matches[0]);
      }
  }

  create(name: string) {
      this.socketService.create(name);
  }

  //leave room
  leave(name: string) {
      this.userService.rooms = this.userService.rooms.filter(room => room.name != name);
  }

  //remove room
  remove(name: string) {
      //Leave room
      this.leave(name);

      //Send signal to remove the room
      this.socketService.remove(name);
  }
}
