import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-templete-driven-form></app-templete-driven-form>
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
