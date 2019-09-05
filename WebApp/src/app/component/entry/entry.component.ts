import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
@Component({
  selector: "app-entry",
  templateUrl: "./entry.component.html",
  styleUrls: ["./entry.component.scss"]
})
export class EntryComponent {
  constructor(private router: Router, private title:Title) {

  }
  ngOnInit(){    
    this.title.setTitle("KH-PGM: Welcome");
  }

  navigateToHome() {
    this.router.navigateByUrl("/home");
  }
}
