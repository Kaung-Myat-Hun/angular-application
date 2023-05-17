import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide: boolean = true;
  animate: boolean = true;
  showPass: boolean = false;

  email: string = '';
  password: string = '';
  confirmPass: string = '';
  validateEmail: boolean = false;
  passwordSame: boolean = false;
  passwordNotSame: boolean = false;
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
    this.resetHandler();
  }

  resetHandler() {
    this.email = '';
    this.password = '';
    this.confirmPass = '';
    this.passwordNotSame = false;
    this.passwordSame = false;
    this.validateEmail = false;
  }

  emailHandler(e: any) {
    this.email = e.target.value;
  }

  passwordHandler(e: any) {
    this.password = e.target.value;
    let validate =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (this.email.match(validate)) {
      this.validateEmail = true;
    } else {
      this.validateEmail = false;
    }
  }
  conPasswordHandler(e: any) {
    this.confirmPass = e.target.value;
    if (this.confirmPass !== '') {
      this.passwordValidate();
    } else {
      return;
    }
  }
  passwordValidate() {
    if (this.password !== this.confirmPass) {
      this.passwordSame = false;
      this.passwordNotSame = true;
    } else {
      this.passwordSame = true;
      this.passwordNotSame = false;
    }
  }
}
