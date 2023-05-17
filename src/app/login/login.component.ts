import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide: boolean = true;
  animate: boolean = true;
  showPass: boolean = false;
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

  showPassword() {
    this.showPass = !this.showPass;
  }
  loginFunction(e: any) {
    e.preventDefault();
    window.location.assign('/home');
  }
  register(e: any) {
    alert('register success');
    e.preventDefault();
    this.changeForm2();
  }
}
