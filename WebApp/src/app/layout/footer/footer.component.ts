import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";

import { of } from "rxjs";
import { map, mapTo, filter, switchMap, tap } from "rxjs/operators";
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  feedbackPopup = false;
  navigationEnd;
  isNavAllowed: boolean = false;
  isLogOut = true;
  routeData = {
    home: { link: "/home", name: "Home" },
    announcement: { link: "/announcement", name: "Announcements" },
    reminders: { link: "/reminders", name: "Reminders" },
    bookmarks: { link: "bookmarks", name: "Bookmarks" },
    vaman: { link: "vaman", name: "VAMAN" }
  };
  routeAllLinks = {
    vaman: ["home", "announcement", "bookmarks", "reminders"],
    bookmarks: ["home", "announcement", "vaman", "reminders"],
    announcement: ["home", "vaman", "bookmarks", "reminders"],
    reminders: ["home", "announcement", "bookmarks", "vaman"]
  };

  routeOptions;

  constructor(private route: ActivatedRoute, private router: Router, private as: AuthenticationService) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let component: string = event.url;
        component = component.substring(1, component.length);
        this.routeOptions = this.routeAllLinks[component];
        if (component == 'login' || component == 'register') {
          this.isLogOut = false;
        }
        else this.isLogOut = true;
        if (this.routeOptions) {
          this.isNavAllowed = true;
        } else {
          this.isNavAllowed = false;
        }
      }
    });
  }
  navigateToUrl(link) {
    this.router.navigateByUrl("/" + this.routeData[link].link);
  }
  toggle(isFlag) {
    this.feedbackPopup = isFlag;
  }

  logout() {
    this.isLogOut = false;
    this.as.logout();
  }
}
