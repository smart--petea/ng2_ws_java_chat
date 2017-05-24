import { Component } from '@angular/core';
import { RoomService } from '../core/room.service';

@Component({
  selector: 'control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {
  constructor(public roomService: RoomService) { }
}
