import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rank-card',
  templateUrl: './rank-card.component.html',
  styleUrls: ['./rank-card.component.scss']
})
export class RankCardComponent implements OnInit {

  @Input() ranking;

  constructor() { }

  ngOnInit() {
  }

}
