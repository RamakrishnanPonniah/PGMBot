import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";

@Component({
  selector: "vaman-input",
  templateUrl: "./vaman-input.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./vaman-input.component.scss"]
})
export class VamanInputComponent implements OnInit {
  @Input() public buttonText = "↩︎";
  @Input() public focus = new EventEmitter();
  @Input() public inputText = "";
  @Output() public send = new EventEmitter();
  @Output() public dismiss = new EventEmitter();
  @ViewChild("message") message: ElementRef;


  ngOnInit() {
    this.focus.subscribe(() => this.focusMessage());
  }

  public focusMessage() {
    this.message.nativeElement.focus();
  }

  public getMessage() {
    return this.message.nativeElement.value;
  }

  public clearMessage() {
    this.message.nativeElement.value = "";
  }

  onSubmit() {
    const message = this.getMessage();
    if (message.trim() === "") {
      return;
    }
    this.send.emit({ message });
    this.clearMessage();
    this.focusMessage();
  }
}
