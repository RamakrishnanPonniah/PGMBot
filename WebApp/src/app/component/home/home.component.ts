import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  tabs = [
    {
      icon: "bullhorn",
      title: "Announcement",
      description: "From Bank & Accenture",
      button: "VIEW",
      link: "/announcement"
    },
    {
      icon: "calendar",
      title: "Reminders",
      description: "Artifacts / Updates Due",
      button: "VIEW",
      link: "/reminders"
    },
    {
      icon: "comment",
      title: "VAMAN",
      description: "24/7 Virtual Agent Support",
      button: "LAUNCH",
      link: "/vaman"
    },
    {
      icon: "link",
      title: "Bookmarks",
      description: "Links To Key Sites",
      button: "VIEW",
      link: "/bookmarks"
    }
  ];
  constructor(private router: Router, private title: Title) { }

  ngOnInit() {
    this.title.setTitle("KH-PGM: Launch");
  }

  navigateToUrl(url) {
    this.router.navigateByUrl(url);
  }
}
