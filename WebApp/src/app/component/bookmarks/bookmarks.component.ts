import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { fromEvent } from "rxjs";
import {
  map,
  filter,
  debounceTime,
  distinctUntilChanged
} from "rxjs/operators";
import { Title } from "@angular/platform-browser";
@Component({
  selector: "app-bookmarks",
  templateUrl: "./bookmarks.component.html",
  styleUrls: ["./bookmarks.component.scss"]
})
export class BookmarksComponent implements OnInit {
  @ViewChild("search") search: ElementRef;

  bookmarkTableHeader = ["NAME", "DESCRIPTION", "URL/LINK"];
  bookmarkTableDisplayData = [];
  bookmarkTableData = [
    {
      name: "OMT",
      description:
        "Acc internal tool used by PGM and Projects for managing resource background checks, on/off boarding.",
      url: "https://omt.accenture.com"
    },
    {
      name: "FieldGlass",
      description:
        "Used by Bank for managing work orders, resource management, costing, time recording, billing, invoicing, etc from GBS Partners.",
      url: "https://www.fieldglass.net"
    }
  ];
  constructor(private title:Title) {}

  ngOnInit() {
    this.title.setTitle("KH-PGM: Bookmarks");
    this.bookmarkTableDisplayData = this.bookmarkTableData;
    fromEvent(this.search.nativeElement, "keyup")
      .pipe(
        // get value
        map((event: any) => {
          return event.target.value;
        }),
        // Time in milliseconds between key events
        debounceTime(1000),
        // If previous query is diffent from current
        distinctUntilChanged()
        // subscription for response
      )
      .subscribe((text: string) => {
        text = text.replace(/\s*$/, "");
        if (text == "") {
          this.bookmarkTableDisplayData = this.bookmarkTableData;
        } else {
          this.bookmarkTableDisplayData = this.bookmarkTableData.filter(dat => {
            return (
              dat["name"].indexOf(text) != -1 ||
              dat["description"].indexOf(text) != -1
            );
          });
        }
      });
  }
}
