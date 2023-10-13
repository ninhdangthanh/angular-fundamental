import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { MyService } from '../parent/my-service.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit {

  @Input() childMessage: any;
  @Output() messageEvent = new EventEmitter<string>();

  @ViewChild('myInput') myInput!: ElementRef;

  onChange() {
    console.log("myInput", this.myInput.nativeElement.value);
  }

  fullname = "ninhdang"

  constructor(
    private myService: MyService
  ) {}

  ngOnInit(): void {
    this.myService.eventProperty.subscribe((message) => {
      console.log("myService subscribe" + message );
    });
    this.myService.greetEvent.subscribe((message) => {
      console.log("" + message );
    });

    console.log("myInput", this.myInput);
  }

  sendMessage() {
    this.messageEvent.emit("Hello from child")
    // this.myService.greetUser("Ninh")
  }
}
