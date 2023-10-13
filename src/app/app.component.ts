import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-reactive-form></app-reactive-form>
  `
})
export class AppComponent implements OnInit {

  firstExample = 'bob';

  items = [
    "ninh",
    "ha",
    "khuong"
  ]

  ngOnInit(): void {

  }

}
