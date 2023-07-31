import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
userregistrationform: new FormGroup({
  fname : new FormControl("",[Validators.required, Validators.maxLength(5)]),
});

}
