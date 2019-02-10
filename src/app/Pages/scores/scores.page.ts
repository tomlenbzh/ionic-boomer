import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.page.html',
  styleUrls: ['./scores.page.scss'],
})
export class ScoresPage implements OnInit {

  top_ranking = [
    {
      rank: 1,
      score: 300,
      image: 'https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?cs=srgb&dl=beach-blur-boardwalk-132037.jpg&fm=jpg',
      pseudo: 'User 1'
    },
    {
      rank: 2,
      score: 250,
      image: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg',
      pseudo: 'User 2'
    },
    {
      rank: 3,
      score: 200,
      image: 'https://sample-videos.com/img/Sample-jpg-image-500kb.jpg',
      pseudo: 'User 3'
    },
    {
      rank: 4,
      score: 150,
      image: 'https://as.ftcdn.net/r/v1/pics/ea2e0032c156b2d3b52fa9a05fe30dedcb0c47e3/landing/images_photos.jpg',
      pseudo: 'User 4'
    },
    {
      rank: 5,
      score: 100,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7etsEI43EixClc78yKysduRzPxHN2iX-tbEVz0BuCl6NaBZ-b',
      pseudo: 'User 5'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
