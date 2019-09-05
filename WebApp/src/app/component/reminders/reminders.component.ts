import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
@Component({
  selector: "app-reminders",
  templateUrl: "./reminders.component.html",
  styleUrls: ["./reminders.component.scss"]
})
export class RemindersComponent implements OnInit {
  yellowCards = [
    {
      date: "08/08/2019 10:30 AM",
      type: "Schedule Item",
      description:
        "This is your Schedule Item. Provide details about the event or activity, where it’s located and any other relevant information for your visitors. Add photos to make it shine."
    },
    {
      date: "08/08/2019 10:30 AM",
      type: "Schedule Item",
      description:
        "This is your Schedule Item. Provide details about the event or activity, where it’s located and any other relevant information for your visitors. Add photos to make it shine."
    },
    {
      date: "08/08/2019 10:30 AM",
      type: "Schedule Item",
      description:
        "This is your Schedule Item. Provide details about the event or activity, where it’s located and any other relevant information for your visitors. Add photos to make it shine."
    }
  ];
  constructor(private title:Title) {}

  ngOnInit() {
    this.title.setTitle("KH-PGM: Reminders");
  }
}
