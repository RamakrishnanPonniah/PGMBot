import { Component } from '@angular/core';
import { HTTPStatus } from './apiinterceptor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vaman';
  showLoader = false;
  constructor(private httpStatus: HTTPStatus) {
    this.httpStatus.getHttpStatus().subscribe((status: boolean) => { this.showLoader = status; })
  }
}
