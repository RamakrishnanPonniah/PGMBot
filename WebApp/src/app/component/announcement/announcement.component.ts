import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
@Component({
  selector: "app-announcement",
  templateUrl: "./announcement.component.html",
  styleUrls: ["./announcement.component.scss"]
})
export class AnnouncementComponent implements OnInit {
  slides: number[] = [1, 2, 3, 4, 5, 6];

  announcementCarouselFirst = {
    previousSlide: -1,
    currentSlide: 0,
    nextSlide: 1
  };
  announcementCarouselSecond = {
    previousSlide: -1,
    currentSlide: 0,
    nextSlide: 1
  };

  constructor(private title:Title) {}

  ngOnInit() {
    this.title.setTitle("KH-PGM: Announcements");
  }

  moveRight(carousel) {
    let lastSlide = carousel.nextSlide;

    carousel.previousSlide = carousel.currentSlide;
    carousel.currentSlide = carousel.nextSlide;
    carousel.nextSlide =
      lastSlide + 1 == this.slides.length ? -1 : lastSlide + 1;
  }
  moveLeft(carousel) {
    let firstSlide = carousel.previousSlide;
    carousel.nextSlide = carousel.currentSlide;
    carousel.currentSlide = carousel.previousSlide;
    carousel.previousSlide = firstSlide == 0 ? -1 : firstSlide - 1;
  }
  changeSlide(i, carousel) {
    carousel.currentSlide = i;
    carousel.nextSlide = i + 1 == this.slides.length ? -1 : i + 1;
    carousel.previousSlide = i == 0 ? -1 : i - 1;
  }
}
