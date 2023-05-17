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
  userName: string = '';
  lPassword: string = '';
  rUserName: string = '';
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
  userNameHandler(e: any) {
    this.userName = e.target.value;
  }
  lPasswordHandler(e: any) {
    this.lPassword = e.target.value;
  }
  rUserNameHandler(e: any) {
    this.rUserName = e.target.value;
  }

  // form submitting functions
  loginFunction(e: any) {
    e.preventDefault();
    if (this.userName !== '' && this.lPassword !== '') {
      if (this.userName === 'admin' && this.lPassword === 'admin') {
        localStorage.setItem('token', 'user');
        window.location.assign('/home');
      } else {
        alert('Wrong user name and password');
        window.location.reload();
      }
    } else {
      alert('Please Enter All Data!');
    }
  }

  register(e: any) {
    e.preventDefault();
    if (
      this.email !== '' &&
      this.password !== '' &&
      this.confirmPass !== '' &&
      this.rUserName !== ''
    ) {
      this.changeForm2();
      this.resetHandler();
      alert('register success');
    } else {
      alert('Please Enter All Data!');
    }
  }

  // rest input value function
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

  // check email validate
  passwordHandler(e: any) {
    this.password = e.target.value;
    let validate =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //email regular expression
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
  // password validate
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
