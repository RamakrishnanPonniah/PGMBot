import { Directive, Input, ElementRef, OnInit, Renderer2 } from "@angular/core";
import * as marked from "marked";
@Directive({
  selector: "[appVamanMarkedDown]"
})
export class VamanMarkedDownDirective implements OnInit {
  @Input("appVamanMarkedDown") markDownText: string;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const markText = this.markDownText;
    if (markText && markText.length > 0) {
      const markdownHtml = marked(markText);
      this.renderer.setProperty(
        this.elementRef.nativeElement,
        "innerHTML",
        markdownHtml
      );
    }
  }
}
