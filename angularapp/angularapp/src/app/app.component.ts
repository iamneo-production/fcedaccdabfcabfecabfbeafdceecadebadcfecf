import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="registrationForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="inputFirstname">First Name</label>
        <input
          type="text"
          id="inputFirstname"
          formControlName="firstName"
          required
          minlength="3"
          maxlength="50"
          pattern="^[a-zA-Z ]+$"
        />
        <div id="errorFirstName" *ngIf="isFieldInvalid('firstName')">
          Invalid First Name
        </div>
      </div>

      <div>
        <label for="gender">Gender</label>
        <input type="checkbox" id="gender" formControlName="gender" required />
        <div id="errorGender" *ngIf="isFieldInvalid('gender')">Gender is required</div>
      </div>

      <div>
        <label for="country">Country of Origin</label>
        <select id="country" formControlName="country" required>
          <option value=""></option>
          <option value="US">United States</option>
          <option value="Canada">Canada</option>
          <option value="India">India</option>
          <!-- Add more countries as needed -->
        </select>
        <div id="errorCountry" *ngIf="isFieldInvalid('country')">Country is required</div>
      </div>

      <div>
        <label for="city">City of Origin</label>
        <input type="text" id="city" formControlName="city" required />
        <div id="errorCity" *ngIf="isFieldInvalid('city')">City is required</div>
      </div>

      <div>
        <label for="inputAge">Age</label>
        <input
          type="number"
          id="inputAge"
          formControlName="age"
          [required]="isAgeRequired()"
        />
        <div id="errorAge" *ngIf="isFieldInvalid('age')">
          Age is required for selected countries (US, Canada, India)
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  `,
})
export class AppComponent {
  registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]+$')]],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      age: ['', []],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // Process the form data here
      console.log('Form submitted:', this.registrationForm.value);
    }
  }

  isFieldInvalid(field: string): boolean {
    const control = this.registrationForm.get(field);
    return control!.invalid && (control!.dirty || control!.touched);
  }

  isAgeRequired(): boolean {
    const countryControl = this.registrationForm.get('country');
    return ['US', 'Canada', 'India'].includes(countryControl?.value);
  }
}