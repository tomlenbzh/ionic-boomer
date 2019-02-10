import { Events } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  score: number;
  players: number;

  constructor(private events: Events) {
    events.subscribe('updateScoreFooter', (score: number) => this.updateScore(score));
    events.subscribe('updatePlayer', (players: number) => this.updatePlayer(players));
  }

  updateScore(score) {
    this.score = score;
  }

  updatePlayer(players) {
    this.players = players;
  }
}
