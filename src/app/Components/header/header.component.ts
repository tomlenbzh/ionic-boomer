import { Component, Input } from '@angular/core';
import { Events } from '@ionic/angular';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  user = JSON.parse(localStorage.getItem('user'));

  constructor(public events: Events) {
    events.subscribe('updateScore', (score: number) => this.updateScore(score));
    events.subscribe('updateUser', (user: User) => this.updateUser(user));
  }

  updateUser(user) {
    this.user = user;
  }

  updateScore(score) {
    this.user.score = score;
  }
}
