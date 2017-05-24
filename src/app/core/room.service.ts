import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class RoomService {

  constructor(private userService: UserService) { }

}
