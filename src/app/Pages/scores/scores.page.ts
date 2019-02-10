import { Component, OnInit } from '@angular/core';
import { RankingService } from '../../Service/ranking.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.page.html',
  styleUrls: ['./scores.page.scss'],
})
export class ScoresPage implements OnInit {

  top_ranking: any;

  constructor(private rankingService: RankingService) { }

  ionViewWillEnter() {
    this.rankingService.getRanking()
      .subscribe(
        response => {
          this.top_ranking = response;
        }, error => {

        }
      );
  }

  ngOnInit() {
  }

}
