import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VamanComponent } from "src/app/component/vaman/vaman.component";
import { BookmarksComponent } from "src/app/component/bookmarks/bookmarks.component";
import { EntryComponent } from "src/app/component/entry/entry.component";
import { HomeComponent } from "src/app/component/home/home.component";
import { RemindersComponent } from "src/app/component/reminders/reminders.component";
import { AnnouncementComponent } from "src/app/component/announcement/announcement.component";
import { LoginComponent } from 'src/app/component/login/login.component';
import { AuthGuardService } from 'src/app/auth-guard.service';
import { RegisterComponent } from 'src/app/component/register/register.component';
import { AdminComponent } from 'src/app/component/admin/admin.component';

// 

const routes: Routes = [
  { component: LoginComponent, path: "login" },
  { component: AdminComponent, path: 'admin', canActivate: [AuthGuardService] },
  { component: RegisterComponent, path: "register" },
  { component: VamanComponent, path: "vaman", canActivate: [AuthGuardService] },
  { component: BookmarksComponent, path: "bookmarks", canActivate: [AuthGuardService] },
  { component: EntryComponent, path: "entry", canActivate: [AuthGuardService] },
  { component: HomeComponent, path: "home", canActivate: [AuthGuardService] },
  { component: RemindersComponent, path: "reminders", canActivate: [AuthGuardService] },
  { component: AnnouncementComponent, path: "announcement", canActivate: [AuthGuardService] },
  { path: "", redirectTo: "/login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
