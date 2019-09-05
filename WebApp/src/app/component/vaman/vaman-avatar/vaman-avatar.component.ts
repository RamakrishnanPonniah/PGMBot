import { Component, Input } from "@angular/core";

@Component({
  selector: "vaman-avatar",
  templateUrl: "./vaman-avatar.component.html",
  styleUrls: ["./vaman-avatar.component.scss"]
})
export class VamanAvatarComponent {
  @Input() image: string;
}
