import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild
} from "@angular/core";
import { Subject } from "rxjs";
import { fadeIn, fadeInOut } from "./animations";
import { VamanService } from "./vaman.service";
import { Title } from "@angular/platform-browser";
@Component({
  selector: "app-vaman",
  templateUrl: "./vaman.component.html",
  styleUrls: ["./vaman.component.scss"],
  animations: [fadeInOut, fadeIn]
})
export class VamanComponent implements OnInit {
  openModalFlag = false;
  subTopics = [];
  showTopic = false;
  selectedTopic = "";
  inputText = "";
  topics = [
    "Background Check",
    "Business Continuity Planning",
    "External Email Access",
    "Fieldglass",
    "Internet Access",
    "Onboarding",
    "Software Installation",
    "Trainings"
  ];
  topicsMessages = {
    Onboarding: [
      "What are the pre-requisites to get onboarded in Bank of America account? ",
      "Who do I need to meet to sign the security policy agreement? ",
      "Who do I need to contact for project secured bay seat allocation?",
      "Who do I need to contact to get BOA secured bay access?",
      "Who do I need to contact to get Desktop configuration?",
      "Who do I need to contact to get BOA domain ID creation?",
      "What is the difference between Accenture domain ID and BOA domain ID?",
      "Who do I need to reach to unlock my BOA domain ID and Password reset?"
    ],
    "Software Installation": [
      "What is the process to install software’s on BOA desktops? "
    ],
    "Fieldglass": [
      "How are resources onboarded in FG? ",
      "How to update Bank manager, cost center, mail code update details in FG?",
      "How to Roll over a Resource in FG?",
      "What is the process for FG Location change?",
      "How to update Bill rate for resources in FG?",
      "How to Offboard a resource in FG?"
    ],
    "Internet Access": [
      "Who all can request for Internet access? ",
      "How to request for Internet access? ",
      "Is there a template or format to fill in business justification and resource details for requesting access?",
      "Can access be provided for generic link like google.com?",
      "Is approval needed for Rally tool?",
      "Who do I need to contact if access is not granted even after ARM ticket is raised?",
      "Can I enable internet access without Valid LOB Approval?"
    ],
    "External Email Access": [
      "Who can request for access to send emails from BOA email ID to other email domains (external email)?",
      "How to request for external email access?",
      "Can access be provided only to receive emails from external domain?",
      "Is there a template or format to fill in business justification and resource details for requesting access?",
      "Can I enable External email access without Valid LOB Approval?"
    ],
    Trainings: [
      "How to access Mylearning portal in Bank network?",
      "What are the trainings new joiners need to complete?",
      "What is the SLA for completing the Trainings?",
      "What are the implications if new joiners failed to complete the training in 5 business days?",
      "What is the remediation if new joiners failed to complete the training in 5 business days?",
      "What is the pass percentage of any trainings?",
      "Who do I need to reach out if in case of issue with bank learning portal?",
      "What is Standard ID?",
      "How to reset standard ID password?",
      "How to enroll in SSPM?",
      "How to create email Id for new hire?",
      "How to sync password with all bank system?",
      "How to pull Standard ID and personal number?",
      "What are the trainings developer needs to complete?",
      "What is the frequency of completion of secured code practice training?",
      "Will the secured code practice training be added in the mylearning portal?",
      "How to remove irrelevant trainings assigned to any resource?",
      "What if any bank training with specific due date is delayed?"
    ],
    "Background Check": [
      "How to initiate the back-ground check?",
      "What are all the checks will be done as part of background check?",
      "What is the SLA’s for each check?",
      "What is the document required for Identity check?",
      "What is the document required for Education Check?",
      "How many years of address details should be added in court check form?",
      "Which document is mandatory to initiate employment check?",
      "When to take Education Exception?",
      "When to take Employment Exception?",
      "What are the documents necessary to take employment exception?",
      "How long does it take for verification for education/employment exception cases?",
      "What if the college/Company is not responding for long time?"
    ],
    "Business Continuity Planning": [
      "What is BCP?",
      "What is BRP & BIA?",
      "What is RTO?",
      "Where do I get the BRP & BIA documents?",
      "What are the exercises carried out with respect to BCP?",
      "What is the frequency of the BCP exercises?",
      "What are the types of Business Recovery Strategies?"
    ],
    "Information Security": [
      "Where should I report if any security incident is observed?",
      "What if I receive any intimation from GIS (Global Information Services) or LOB regarding any action from you that has generated a security alert to GIS/LOB?",
      "Where to report any security breaches?",
      "How do I get any exception approved by GRVM for LOB related business cases?",
      "How do I get the security policy awareness?"
    ]
  };
  openSideBar = false;
  bottom: ElementRef;
  public theme: "blue" | "grey" | "red" = "blue";
  public botName: string = "VAMAN";
  public botAvatar: string = `../../assets/images/bot.jpg`;
  public userAvatar: string = `../../assets/images/user.png`;
  // public url: string = "http://localhost:5000";https://5d0e23cd.ap.ngrok.io
  public url: string = "https://69f336fc.ap.ngrok.io/";
  public startingMessage: string = "Hi, how can we help you?";
  public opened: boolean = true;

  public _visible = true;

  private vamanService: VamanService;

  constructor(vamanService: VamanService, private title: Title) {
    this.vamanService = vamanService;
    this.vamanService.connect(this.url);
  }

  public get visible() {
    return this._visible;
  }

  @Input() public set visible(visible) {
    this._visible = visible;
    if (this._visible) {
      setTimeout(() => {
        this.scrollToBottom();
        this.focusMessage();
      }, 0);
    }
  }

  public focus = new Subject();

  public operator;

  public client;

  public messages = [];

  public addMessage(from, text, type: "received" | "sent", quick_replies) {
    this.messages.unshift({
      from,
      text,
      type,
      date: new Date().getTime(),
      quick_replies
    });
    this.scrollToBottom();
  }

  public scrollToBottom() {
    if (this.bottom !== undefined) {
      this.bottom.nativeElement.scrollIntoView();
    }
  }

  public focusMessage() {
    this.focus.next(true);
  }

  ngOnInit() {
    this.title.setTitle("KH-PGM: Vaman");
    this.client = {
      name: "Guest User",
      status: "online",
      avatar: this.userAvatar
    };

    this.operator = {
      name: this.botName,
      status: "online",
      avatar: this.botAvatar
    };
    if (this.opened) {
      setTimeout(() => (this.visible = true), 1000);
    }
    setTimeout(() => {
      this.addMessage(this.operator, this.startingMessage, "received", []);
    }, 1500);
    this.vamanService.getMessages().subscribe(message => {
      setTimeout(() => {
        this.addMessage(
          this.operator,
          message.text,
          "received",
          message.quick_replies
        );
      }, 1000);
    });
  }

  public toggleChat() {
    this.visible = !this.visible;
  }

  public sendMessage({ message, quick_reply }) {
    if (message.trim() === "") {
      return;
    }
    this.addMessage(this.client, message, "sent", []);
    this.vamanService.sendMessage(quick_reply || message);
  }

  @HostListener("document:keypress", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === "/") {
      this.focusMessage();
    }
    if (event.key === "?" && !this._visible) {
      this.toggleChat();
    }
  }

  openModal(topic) {
    this.openSideBar = false;
    this.openModalFlag = true;
    this.subTopics = this.topicsMessages[topic];
  }

  showSubTopics(topic) {
    this.selectedTopic = topic;
    this.showTopic = true;
    this.subTopics = this.topicsMessages[topic];
  }

  setInputText(inputData) {
    this.inputText = inputData;
    this.openModalFlag = false;
  }

  closeSubTopic() {
    this.showTopic = false;
    this.subTopics = [];
    this.selectedTopic = "";
  }
}
