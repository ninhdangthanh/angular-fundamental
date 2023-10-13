import { Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { MyService } from './my-service.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  providers: [MyService],
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) child : any;

  constructor(
    private myService : MyService
  ) {}

  ngOnInit(): void {

  }

  receiveMessage(message: string) {
    console.log("mss" + message);
  }

  sendMyService() {
    this.myService.greetUser();
  }

  changeName() {
    this.myService.changeName("Thanh Ninh")
  }
}
