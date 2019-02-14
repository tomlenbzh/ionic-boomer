import { Component, OnInit } from '@angular/core';

import { RankingService } from '../../Service/ranking.service';
import { NetworkService } from '../../Service/network.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.page.html',
  styleUrls: ['./scores.page.scss'],
})
export class ScoresPage implements OnInit {

  top_ranking: any;

  constructor(private rankingService: RankingService, private networkService: NetworkService) {
    this.networkService.checkNetworkQuality();
  }

  ionViewWillEnter() {
    this.rankingService.getRanking()
      .subscribe(
        response => {
          this.top_ranking = response.data;
        }
      );
  }

  ngOnInit() {
  }

}
