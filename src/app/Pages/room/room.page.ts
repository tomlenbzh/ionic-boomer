import { Events } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ng-socket-io';
import { Vibration } from '@ionic-native/vibration/ngx';

import { NetworkService } from '../../Service/network.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage {

  currentRoom: any;
  bombX: number;
  bombY: number;
  currentScore: number;
  constructor(
    private router: Router,
    private vibration: Vibration,
    private events: Events,
    private socket: Socket,
    private networkService: NetworkService
  ) {
    this.networkService.checkNetworkQuality();
  }

  ionViewWillEnter() {
    if (JSON.parse(localStorage.getItem('room'))) {
      this.socket.connect();
      this.currentRoom = JSON.parse(localStorage.getItem('room'));
      this.currentScore = JSON.parse(localStorage.getItem('user')).score;
      this.events.publish('updateScoreFooter', this.currentScore);

      this.socket.emit('joinRoom', {
        roomId: this.currentRoom.id,
        userPseudo: JSON.parse(localStorage.getItem('user')).pseudo,
        userId: JSON.parse(localStorage.getItem('user')).id
      });

      this.socket.on('destroy', this.destroy);
      this.socket.on('score', this.updateScore);
      this.socket.on('players', this.updatePlayers);

    } else {
      this.router.navigateByUrl('home');
    }
  }

  destroy = () => {
    this.vibration.vibrate(1000);
    this.router.navigateByUrl('home');
  }

  updateScore = score => {
    this.events.publish('updateScore', score);
    this.events.publish('updateScoreFooter', score);
    this.currentScore = score;
  }

  updatePlayers = players => {
    this.events.publish('updatePlayer', players);
  }

  ionViewDidLeave() {
    this.socket.emit('leaveRoom', { roomId: this.currentRoom.id });
    this.bombX = undefined;
    this.bombY = undefined;
  }

  getCoordinates(event) {
    this.socket.emit('playerClick', {});

    this.bombX = event.clientX;
    this.bombY = event.clientY;
    const bomb = document.getElementById('bombImage');

    bomb.style.position = 'absolute';
    bomb.style.left = (this.bombX - 25) + 'px';
    bomb.style.top = (this.bombY - 135) + 'px';
  }

}
