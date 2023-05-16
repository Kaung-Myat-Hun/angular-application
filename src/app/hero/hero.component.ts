import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'image-slider',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  // ************** slider function start ****************
  heroData: any = [];
  data: any = [];
  @Input() start: number = 0;
  @Input() limit: number = 8;
  @Input() nReverse: boolean = true;
  @Input() urlString: string = '';
  ngOnInit() {
    this.service.GetData(this.urlString).subscribe(
      (res) => {
        // console.log(res);
        this.data = res;
        // console.log(this.data.slice(0, 8), 'this is api data');
        if (this.nReverse) {
          this.heroData = this.data.reverse().slice(this.start, this.limit);
        } else {
          this.heroData = this.data.slice(this.start, this.limit);
        }
      },
      (err) => {
        console.log(err);
      }
    );
    // console.log(this.data);
    setInterval(() => {
      this.next();
    }, 4000);
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

  //**********************  slider function end *****************************

  constructor(private service: AppService) {}
}
