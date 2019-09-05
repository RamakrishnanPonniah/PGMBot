import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../authentication.service';
import { Router } from '@angular/router';
import { Title } from "@angular/platform-browser";

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: '',
    type: 3
  };

  logPopup = false;
  log = {};

  constructor(private auth: AuthenticationService, private router: Router, private title: Title) {
    title.setTitle("KH-PGM: Register");
  }

  register() {
    this.auth.register(this.credentials).subscribe((message) => {
      this.log = { title: "Note", message: message.message };
      this.logPopup = true;
      setTimeout(function () {
        this.logPopup = false;
      }.bind(this), 2000)
    }, (err) => {
      this.log = { title: "Error", message: err.error.message };
      this.logPopup = true;
      setTimeout(function () {
        this.logPopup = false;
      }.bind(this), 2000)
    });
  }
}
