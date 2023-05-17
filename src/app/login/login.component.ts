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

  // form change slide animation function 1 / 2
  changeForm1() {
    this.hide = true;
    this.animate = false;
    setTimeout(() => {
      this.hide = false;
    }, 500);
  }
  changeForm2() {
    this.hide = false;
    this.animate = true;
    setTimeout(() => {
      this.hide = true;
    }, 500);
  }

  // show password function
  showPassword() {
    this.showPass = !this.showPass;
  }

  // form submitting functions
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
