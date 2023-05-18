import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  fix: boolean = false;
  hide: boolean = false;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    document.addEventListener('scroll', () => {
      window.pageYOffset >= 65 ? (this.fix = true) : (this.fix = false);
    });
    let location = window.location.pathname;
    // console.log(location, 'current-url');
    if (location === '/') {
      this.hide = true;
    } else {
      this.hide = false;
    }
  }

  logoutHandler() {
    localStorage.clear();
    window.location.assign('/');
  }
}
