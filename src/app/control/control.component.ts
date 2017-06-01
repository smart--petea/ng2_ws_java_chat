import { Component } from '@angular/core';
import { RoomService } from '../core/room.service';

@Component({
  selector: 'control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {
    room: string = '';
    newRoom: string = '';

    constructor(public roomService: RoomService) { }

    join(): void {
        this.roomService.join(this.room);
        this.room = '';
    }

    create(): void {
        this.roomService.create(this.newRoom);
        this.newRoom = '';
    }

    remove(): void {
        this.roomService.remove(this.room);
        this.room = '';
    }

    eventHandler(event: KeyboardEvent): void {
        if(event.key === 'Enter') {
            this.create();
        }
    }
}
