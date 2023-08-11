import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z]+$')]],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      age: ['']
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.registrationForm.get(field);
    return control!.invalid && (control!.dirty || control!.touched);
  }

  isAgeRequired(): boolean {
    const countryControl = this.registrationForm.get('country');
    return ['US', 'CA', 'IN'].includes(countryControl!.value);
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form submitted:', this.registrationForm.value);
    }
  }
}
