import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  heroData: any = [];
  data: any = [];
  ngOnInit() {
    this.service.GetData('https://picsum.photos/v2/list').subscribe(
      (res) => {
        console.log(res);
        this.data = res;
        console.log(this.data.slice(0, 5), 'this is api data');
        this.heroData = this.data.reverse().slice(0, 5);
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(this.data);
    setInterval(() => {
      this.next();
    }, 3000);
  }
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

  constructor(private service: AppService) {}
}
