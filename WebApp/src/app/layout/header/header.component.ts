import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnDestroy {
  openMenu = false;
  navigationEnd;
  isNavAllowed: boolean = false;
  routeData = {
    home: { link: "/home", name: "Home" },
    announcement: { link: "/announcement", name: "Announcement" },
    reminders: { link: "/reminders", name: "Reminders" },
    bookmarks: { link: "bookmarks", name: "Bookmarks" },
    vaman: { link: "vaman", name: "Vaman" }
  };
  routeAllLinks = {
    vaman: ["home", "announcement", "bookmarks", "reminders"],
    bookmarks: ["home", "announcement", "vaman", "reminders"],
    announcement: ["home", "vaman", "bookmarks", "reminders"],
    reminders: ["home", "announcement", "bookmarks", "vaman"]
  };

  routeOptions;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let component: string = event.url;
        component = component.substring(1, component.length);
        this.routeOptions = this.routeAllLinks[component];
        if (this.routeOptions) {
          this.isNavAllowed = true;
        } else {
          this.isNavAllowed = false;
        }
      }
    });
  }
  navigateToUrl(link) {
    this.toggle();
    this.router.navigateByUrl("/" + this.routeData[link].link);
  }
  toggle() {
    this.openMenu = !this.openMenu;
  }
  navToEntry() {
    this.router.navigateByUrl("/entry");
  }
  ngOnDestroy() { }
}
