import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]+$')]],
      gender: [''],
      country: ['', Validators.required],
      city: ['', Validators.required],
      age: ['', []],
    });
  }

  // Helper function to check if a form field is invalid and has been touched or dirty
  isFieldInvalid(field: string): boolean {
    const control: AbstractControl | null = this.registrationForm.get(field);
    return control!.invalid && (control!.dirty || control!.touched) || false;
  }

  // Helper function to check if age is required based on the selected country
  isAgeRequired(): boolean {
    const countryControl: AbstractControl | null = this.registrationForm.get('country');
    return ['US', 'Canada', 'India'].includes(countryControl!.value);
  }

  // Function to handle form submission
  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form submitted:', this.registrationForm.value);
    }
  }
}