import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-templete-driven-form',
  templateUrl: './templete-driven-form.component.html',
  styleUrls: ['./templete-driven-form.component.css'],
})
export class TempleteDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formData = {
    name: '',
    email: '',
    power: '',
  };

  address = {street: "", city: ""}

  powers = ['', 'Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  onSubmit(myForm: NgForm) {
    // Handle form submission here
    console.log('Form submitted:', this.formData, " ++ Form Value: ", myForm.value);

    console.log("street: ", myForm.value.address.street, ",,, city: ", myForm.value.address.city);
    console.log("DATA FROM COMPONENT: street: ", this.address.street, ",,, city: ", this.address.city);
  }

}
