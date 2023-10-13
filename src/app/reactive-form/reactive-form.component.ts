import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styles: [`@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');`],
})
export class ReactiveFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) {}

  // form driven templete
  profileForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required, // Required validator
      Validators.minLength(3), // Minimum length validator
    ]),
    email: new FormControl('',
    [
      Validators.required, // Required validator
      Validators.email, // Minimum length validator
    ]),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  onSubmit(form: any) {
    console.log("submit: ", form);
  }

  // form builder service
  profileFormBuilder = this.fb.group({
    name: ['', [
      Validators.required, // Required validator
      Validators.minLength(3), // Minimum length validator
    ]],
    email: ['', [
      Validators.required, // Required validator
      Validators.email, // Minimum length validator
    ]],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ]),
    country: ['', Validators.required],
    villages: [[], Validators.required],
  });

  // Tạo một mảng các lựa chọn cho listbox
  countries = ['USA', 'Canada', 'UK', 'Australia'];
  villages = ["PQ", "PA", "PM", "PV", "PH", "PN"]

  get aliases() {
    return this.profileFormBuilder.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmitFormBuilder(form: any) {
    console.log("submit form builder: ", form.value);

  }

  formGroupHandleSetPatch: FormGroup = this.fb.group({
    name: '123123',
    email: 'qqqqqq',
  });

  // Use setValue to set values for all form controls
  newValues = {
    name: 'John Doe',
    // email: 'john@example.com',
  };

  ngOnInit(): void {
    // this.formGroupHandleSetPatch.setValue(this.newValues)
    this.formGroupHandleSetPatch.patchValue(this.newValues)
    console.log("formGroupHandleSetPatch ", this.formGroupHandleSetPatch.value);
  }

}
