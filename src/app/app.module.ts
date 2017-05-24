import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserService } from './core/user.service';
import { RoomService } from './core/room.service';
import { NicknameComponent } from './nickname/nickname.component';
import { ControlComponent } from './control/control.component';

@NgModule({
  declarations: [
    AppComponent,
    NicknameComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
