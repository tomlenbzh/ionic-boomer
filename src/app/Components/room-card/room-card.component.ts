import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RoomService } from '../../Service/room.service';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss']
})
export class RoomCardComponent implements OnInit {

  @Input() room: any;

  constructor(private router: Router, private roomService: RoomService) { }

  ngOnInit() {
  }

  navigateToRoom() {
    this.roomService.current_room = this.room;
    this.router.navigateByUrl('room');
  }

}
