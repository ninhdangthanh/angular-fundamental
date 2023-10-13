import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-templete-driven-form',
  templateUrl: './templete-driven-form.component.html',
})
export class TempleteDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formData = {
    name: '',
    email: ''
  };

  onSubmit() {
    // Handle form submission here
    console.log('Form submitted:', this.formData);
  }

}
