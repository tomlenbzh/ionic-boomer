import { FirebaseService } from './../../Service/firebase.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rank-card',
  templateUrl: './rank-card.component.html',
  styleUrls: ['./rank-card.component.scss']
})
export class RankCardComponent implements OnInit {

  @Input() ranking;

  emptyUserImage = 'https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?cs=srgb&dl=beach-blur-boardwalk-132037.jpg&fm=jpg';

  constructor(
    private fireService: FirebaseService
  ) { }

  ngOnInit() {
    this.getProfileImage(this.ranking.pseudo);
  }

  getProfileImage(pseudo) {
    this.fireService.getImageProfil(pseudo).subscribe(
      res => {
        this.emptyUserImage = res;
      },
      () => {
        this.emptyUserImage =
          'https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?cs=srgb&dl=beach-blur-boardwalk-132037.jpg&fm=jpg';
      }
    );
  }
}
