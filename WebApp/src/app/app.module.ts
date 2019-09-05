import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFontAwesomeModule } from "angular-font-awesome";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { VamanComponent } from "./component/vaman/vaman.component";
import { VamanInputComponent } from "./component/vaman/vaman-input/vaman-input.component";
import { VamanAvatarComponent } from "./component/vaman/vaman-avatar/vaman-avatar.component";
import { EntryComponent } from "./component/entry/entry.component";
import { HomeComponent } from "./component/home/home.component";
import { BookmarksComponent } from "./component/bookmarks/bookmarks.component";
import { RemindersComponent } from "./component/reminders/reminders.component";
import { AnnouncementComponent } from "./component/announcement/announcement.component";
import { LoginComponent } from 'src/app/component/login/login.component';

import { RegisterComponent } from 'src/app/component/register/register.component';

import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { VamanMarkedDownDirective } from "src/app/component/vaman/vaman-mark-down.directive";
import { AdminComponent } from './component/admin/admin.component';
import { LoaderComponent } from './loader/loader.component';
import { ApiinterceptorService, HTTPStatus } from './apiinterceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VamanComponent,
    VamanInputComponent,
    VamanAvatarComponent,
    EntryComponent,
    HomeComponent,
    BookmarksComponent,
    RemindersComponent,
    AnnouncementComponent,
    LoginComponent,
    VamanMarkedDownDirective,
    RegisterComponent,
    AdminComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    HTTPStatus,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiinterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
