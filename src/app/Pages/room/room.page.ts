import { Events } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage {

  currentRoom: any;
  bombX: number;
  bombY: number;

  constructor(private router: Router, private events: Events) { }

  ionViewWillEnter() {
    if (JSON.parse(localStorage.getItem('room'))) {
      this.currentRoom = JSON.parse(localStorage.getItem('room'));
    } else {
      this.router.navigateByUrl('home');
    }
  }

  ionViewDidLeave() {
    this.bombX = undefined;
    this.bombY = undefined;
  }

  getCoordinates(event) {
    // This output's the X coord of the click
    this.bombX = event.clientX;
    // This output's the Y coord of the click
    this.bombY = event.clientY;

    const bomb = document.getElementById('bombImage');
    bomb.style.position = 'absolute';
    bomb.style.left = (this.bombX - 25) + 'px';
    bomb.style.top = (this.bombY - 135) + 'px';

    this.events.publish('updateScore', (this.currentRoom.difficulty.multiplier * 5));
  }

}
