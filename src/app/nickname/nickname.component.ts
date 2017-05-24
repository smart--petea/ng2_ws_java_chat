import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '../core/user.service';

@Component({
  selector: 'nickname',
  templateUrl: './nickname.component.html',
  styleUrls: ['./nickname.component.css']
})
export class NicknameComponent implements AfterViewInit {
    @ViewChild('focus')
    private focus: ElementRef;

    nickname: string;

    constructor(public userService: UserService) { }

    ngAfterViewInit(): void {
        this.focus.nativeElement.focus();
    }

    save(): void {
        this.userService.nickname = this.nickname;
    }

    eventHandler(event: KeyboardEvent): void {
        if(event.key === 'Enter') {
            this.save();
        }
    }
}
