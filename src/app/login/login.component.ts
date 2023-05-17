import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide: boolean = true;
  animate: boolean = true;

  changeForm1() {
    this.hide = true;
    this.animate = false;
    setTimeout(() => {
      this.hide = false;
    }, 500);
    // console.log(this.hide, 'click login');
  }
  changeForm2() {
    this.hide = false;
    this.animate = true;
    setTimeout(() => {
      this.hide = true;
    }, 500);

    // console.log(this.hide, 'click register');
  }
}
