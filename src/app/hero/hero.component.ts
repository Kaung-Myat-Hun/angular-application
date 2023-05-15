import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  heroData = [
    {
      id: 1,
      title: 'page 1',
      img: 'testing url 1',
    },
    {
      id: 2,
      title: 'page 2',
      img: 'testing url 2',
    },
    {
      id: 3,
      title: 'page 3',
      img: 'testing url 3',
    },
    {
      id: 4,
      title: 'page 4',
      img: 'testing url 4',
    },
  ];
  pos = 0;
  next() {
    if (this.pos > this.heroData.length - 2) {
      this.pos = 0;
    } else {
      this.pos++;
    }
  }
  prev() {
    this.pos -= 1;
    if (this.pos < 0) {
      this.pos = this.heroData.length - 1;
    }
  }
  ngOnInit() {}
}
