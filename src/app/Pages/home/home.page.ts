import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { RoomService } from 'src/app/Service/room.service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  rooms;
  user: User;

  constructor(
    private authServ: AuthenticationService,
    private roomServ: RoomService
  ) { }

  ionViewWillEnter() {
    this.authServ.getProfile(JSON.parse(localStorage.getItem('user')).pseudo)
      .subscribe(
        response => {
          this.user = response.data;
        }, error => {

        }
      );

    this.roomServ.getRooms()
      .subscribe(
        response => {
          this.rooms = response.data;
        }, error => {

        }
      );
  }

}
