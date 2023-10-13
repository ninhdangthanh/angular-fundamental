import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  eventProperty = new EventEmitter<string>();
  greetEvent = new EventEmitter<string>();

  name: string = "Ninh";

  constructor() {}

  greetUser() {
    this.greetEvent.emit(`Hello, ${this.name}!`);
  }

  changeName(name: string) {
    this.name = name
  }
}
