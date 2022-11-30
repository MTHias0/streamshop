import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() public image: any;
  @Input() public title: any;
  @Input() public genre: any;
  constructor() { }

  ngOnInit(): void {
  }

}
