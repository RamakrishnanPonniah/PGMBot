import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../authentication.service';
import { Router } from '@angular/router';
import { Title } from "@angular/platform-browser";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  logPopup = false;
  log = {};
  constructor(private auth: AuthenticationService, private router: Router, private title: Title) {
    title.setTitle("KH-PGM: Login");
  }

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/entry');
    }, (err) => {
      this.log = { title: "Error", message: err.error.message };
      this.logPopup = true;
      setTimeout(function () {
        this.logPopup = false;
      }.bind(this), 2000)
    });
  }
}
