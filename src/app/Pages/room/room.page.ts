import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../Service/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {

  currentRoom: any;
  bombX: undefined;
  bombY: undefined;

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.currentRoom = this.roomService.current_room;
  }

  getCoordinates(event) {
    // This output's the X coord of the click
    console.log(event.clientX);
    this.bombX = event.clientX;

    // This output's the Y coord of the click
    console.log(event.clientY);
    this.bombY = event.clientY;

    const bomb = document.getElementById('bombImage');
    bomb.style.position = 'absolute';
    bomb.style.left = this.bombX + 'px';
    bomb.style.top = this.bombY + 'px';
  }

}
